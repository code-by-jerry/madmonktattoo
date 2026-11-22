import { NextResponse } from "next/server";
import { z } from "zod";

// Zod validation schema matching the booking form payload
const bookingSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone/WhatsApp number must have at least 10 digits")
    .regex(/^[+0-9\s\-()]+$/, "Please enter a valid phone number"),
  placement: z.string().min(1, "Please select a body placement"),
  preferredStudio: z.string().optional(),
  preferredDate: z.string().optional(),
  tattooIdea: z.string().optional(),
  size: z.string().optional(),
  style: z.string().optional(),
  sessionType: z.string().optional(),
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
  website: z.string().max(0, "Bot detected").optional(),
});

const noIndexHeaders = {
  "X-Robots-Tag": "noindex, nofollow",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Honeypot verification: if filled, quietly reject bot submission
    if (body.website && body.website.length > 0) {
      return NextResponse.json(
        { error: "Invalid submission detected." },
        { status: 400, headers: noIndexHeaders }
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
        { status: 422, headers: noIndexHeaders }
      );
    }

    const bookingData = validationResult.data;

    const ideaText =
      bookingData.tattooIdea && bookingData.tattooIdea.trim()
        ? bookingData.tattooIdea.trim()
        : "To be discussed during consultation";
    const dateText = bookingData.preferredDate || "Flexible / Next Available";
    const studioText =
      bookingData.preferredStudio || "Malumichampatti, Coimbatore Studio";

    const customWhatsAppMsg = [
      "🔥 *NEW TATTOO ENQUIRY // MAD MONK STUDIO*",
      "",
      "Hi Midnight, I would like to book a custom tattoo consultation. Here are my details:",
      "",
      `👤 *Name:* ${bookingData.fullName}`,
      `📱 *Phone / WhatsApp:* ${bookingData.phone}`,
      `📍 *Placement:* ${bookingData.placement}`,
      `🏛️ *Studio:* ${studioText}`,
      `🗓️ *Preferred Date:* ${dateText}`,
      "",
      "💡 *Tattoo Idea & Symbolism:*",
      `"${ideaText}"`,
      "",
      "Please let me know your available slots and personalized quote. Thank you!",
    ].join("\n");

    const customWhatsAppUrl = `https://wa.me/919080937352?text=${encodeURIComponent(
      customWhatsAppMsg
    )}`;

    return NextResponse.json(
      {
        success: true,
        message:
          "Booking request received successfully! Midnight will review your concept and connect on WhatsApp.",
        clientName: bookingData.fullName,
        whatsappUrl: customWhatsAppUrl,
      },
      { status: 200, headers: noIndexHeaders }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error processing booking." },
      { status: 500, headers: noIndexHeaders }
    );
  }
}
