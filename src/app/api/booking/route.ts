import { NextResponse } from "next/server";
import { z } from "zod";

// Zod validation schema matching the booking form payload
const bookingSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone/WhatsApp number must have at least 10 digits")
    .regex(/^[+0-9\s\-()]+$/, "Please enter a valid phone number"),
  tattooIdea: z
    .string()
    .min(10, "Please describe your tattoo idea in at least 10 characters"),
  placement: z.string().min(1, "Please select a body placement"),
  size: z.string().min(1, "Please select an approximate size"),
  style: z.string().min(1, "Please select a preferred tattoo style"),
  preferredDate: z.string().optional(),
  // Reference images encoded as base64 or file metadata strings
  referenceImages: z
    .array(
      z.object({
        name: z.string(),
        size: z.number(),
        type: z.string(),
        dataUrl: z.string().optional(),
      })
    )
    .max(3, "Maximum 3 reference images allowed")
    .optional(),
  // Honeypot field for spam protection: must be empty
  website: z.string().max(0, "Bot detected").optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Honeypot verification: if filled, quietly reject bot submission
    if (body.website && body.website.length > 0) {
      console.warn("[Spam Blocked] Honeypot field triggered:", body.website);
      return NextResponse.json(
        { error: "Invalid submission detected." },
        { status: 400 }
      );
    }

    // 2. Validate input schema with Zod
    const validationResult = bookingSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const bookingData = validationResult.data;

    // 3. Log booking request in server console
    console.log("=========================================");
    console.log("📩 NEW INCOMING TATTOO BOOKING REQUEST");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Client Name:", bookingData.fullName);
    console.log("Phone / WhatsApp:", bookingData.phone);
    console.log("Placement:", bookingData.placement);
    console.log("Size:", bookingData.size);
    console.log("Style:", bookingData.style);
    console.log("Preferred Date:", bookingData.preferredDate || "Flexible");
    console.log("Tattoo Concept / Idea:\n", bookingData.tattooIdea);
    console.log(
      "Reference Images Attached:",
      bookingData.referenceImages?.length || 0
    );
    console.log("=========================================");

    // =========================================================================
    // TODO: Wire up your external notification channels here:
    // -------------------------------------------------------------------------
    // 1. Email Notification:
    //    Use Resend, SendGrid, or Nodemailer to send an email alert to Vikram
    //    Example:
    //    await resend.emails.send({
    //      from: 'Mad Monk Studio <bookings@madmonktattoo.com>',
    //      to: 'ink@madmonktattoo.com',
    //      subject: `New Booking Request from ${bookingData.fullName}`,
    //      text: `...details...`
    //    });
    //
    // 2. Google Sheets sync:
    //    Append row to studio appointment sheet via googleapis or Zapier webhook
    //
    // 3. WhatsApp Business Webhook:
    //    Send automated confirmation or WhatsApp alert to studio phone
    // =========================================================================

    return NextResponse.json(
      {
        success: true,
        message:
          "Booking request received successfully! Vikram will review your concept and reach out via WhatsApp.",
        clientName: bookingData.fullName,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Booking API Error]:", error);
    return NextResponse.json(
      { error: "Internal server error processing booking." },
      { status: 500 }
    );
  }
}
