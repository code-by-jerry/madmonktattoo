# Mad Monk Tattoo — Official Landing Page

A bespoke, dark-themed, high-conversion landing page for **Mad Monk Tattoo**, a custom tattoo studio and artist in Bengaluru, India.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**. Fully optimized for mobile clients coming from Instagram.

---

## 🖤 Aesthetic & Brand Tokens

The design is engineered around a dark, monastic ink aesthetic:
- **Near-Black Background**: `#0A0A0A` (`dark`)
- **Off-White Linework / Text**: `#EDE8DF` (`ink.paper`)
- **Accent Blood Red**: `#B3122D` (`blood`)
- **Typography**: Display Serif (`Cinzel` via Google Fonts) for headlines + Clean Sans (`Inter`) for body copy
- **Noise / Grain Overlay**: Subtle analog parchment texture

Theme colors are defined in `tailwind.config.ts` under `theme.extend.colors`.

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg
│   └── placeholders/              # 19 custom dark SVGs with linework & glyphs
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── booking/
│   │   │       └── route.ts       # Booking validation, logging & webhook stub
│   │   ├── globals.css            # Dark theme base, noise overlay & scrollbars
│   │   ├── icon.svg               # Browser tab favicon
│   │   ├── layout.tsx             # Root layout, Google Fonts, JSON-LD Schema & SEO
│   │   └── page.tsx               # One-page assembly in exact section order
│   ├── components/
│   │   ├── Artist.tsx             # Portrait, bio, quote & 3 stats
│   │   ├── BookingForm.tsx        # React Hook Form + Zod, 3 image uploads & honeypot
│   │   ├── FAQ.tsx                # Animated 6-question accordion
│   │   ├── Footer.tsx             # Links, contact, Google Maps embed & copyright
│   │   ├── Gallery.tsx            # 9-piece masonry portfolio + full lightbox
│   │   ├── Hero.tsx               # Fullscreen hero, badge, CTAs & trust row
│   │   ├── Navbar.tsx             # Sticky nav, mobile drawer & WhatsApp/Call CTA
│   │   ├── PlaceholderImage.tsx   # Reusable Next.js Image wrapper with fallback
│   │   ├── Pricing.tsx            # 3 tiers (Small, Half-day, Full-day) + deposit notice
│   │   ├── Process.tsx            # 4-stage horizontal/vertical studio ritual
│   │   ├── Styles.tsx             # 8 tattoo disciplines grid with hover accents
│   │   ├── Testimonials.tsx       # 3-review interactive carousel
│   │   └── WhatsAppFloat.tsx      # Persistent bottom-right WhatsApp quick action
│   └── data/
│       ├── images.ts              # 🌟 Single file to swap all images
│       └── site.ts                # 🌟 Single file to update all studio text & links
├── scripts/
│   └── generate-placeholders.mjs  # SVG placeholder generator
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Open in your browser
http://localhost:3000
```

To build for production:
```bash
npm run build
npm run start
```

---

## 📝 1. How to Edit Studio Content & Details

**All text, contact details, links, prices, and FAQs live in a single file**:
👉 [`/src/data/site.ts`](file:///src/data/site.ts)

Open `src/data/site.ts` to customize:
- **Studio Name & Tagline**: `siteConfig.brand`
- **Phone Number & WhatsApp**: `siteConfig.contact.phone`, `siteConfig.contact.whatsapp`
- **Instagram Handle & URL**: `siteConfig.contact.instagram`
- **Studio Address & Timings**: `siteConfig.contact.address`, `siteConfig.contact.studioTimings`
- **Google Maps Embed Link**: `siteConfig.contact.googleMapsEmbedUrl`
- **Pricing & Session Rates**: `siteConfig.pricing`
- **Tattoo Styles List**: `siteConfig.styles`
- **Artist Bio & Stats**: `siteConfig.artist`
- **FAQ Questions & Answers**: `siteConfig.faqs`

---

## 🖼️ 2. How to Swap In Real Photos

**Every image path in the entire application is mapped in**:
👉 [`/src/data/images.ts`](file:///src/data/images.ts)

To use your real photos:
1. Drop your photo files (JPEG, PNG, or WebP) into `/public/uploads/` (or directly into `/public/`).
2. Open `src/data/images.ts` and change the `src` paths:
```typescript
export const images = {
  hero: {
    src: "/uploads/my-hero-tattoo.jpg", // Replace placeholder
    alt: "Vikram tattooing custom sleeve in Bangalore",
    width: 1920,
    height: 1080,
  },
  artist: {
    src: "/uploads/vikram-portrait.jpg", // Replace placeholder
    ...
  },
  gallery: [
    {
      id: "tattoo-01",
      src: "/uploads/mandala-sleeve.jpg",
      title: "Sacred Mandala Sleeve",
      style: "Geometric",
      ...
    },
    ...
  ]
};
```
No component code needs to be modified.

---

## 📩 3. Booking Form & Notifications Setup

The booking request form (`BookingForm.tsx`) includes:
- **Full Name, Phone/WhatsApp, Concept, Placement, Size, Style, Preferred Date**
- **Up to 3 Reference Image uploads** (Max 5MB each, client preview thumbnails)
- **Honeypot protection** against bots (`website` hidden field)
- **Validation** via `react-hook-form` and `zod`

Submissions post to `/api/booking/route.ts`. Currently, this endpoint validates the schema and logs the complete payload to the server console.

To hook up email, Google Sheets, or WhatsApp notifications, open:
👉 [`/src/app/api/booking/route.ts`](file:///src/app/api/booking/route.ts)

You'll find clearly marked `// TODO:` sections to plug in:
- **Resend / SendGrid**: Send email to `ink@madmonktattoo.com`
- **Google Sheets API**: Append inquiry rows to a spreadsheet
- **WhatsApp Cloud API**: Send instant ping to your phone

---

## 🌐 4. Environment Variables

Create a `.env.local` file in the project root if you want to configure external endpoints:

```env
# Optional external notification services
RESEND_API_KEY=re_your_api_key_here
ADMIN_EMAIL=ink@madmonktattoo.com
NEXT_PUBLIC_SITE_URL=https://madmonktattoo.com
```

---

## 🚀 5. Deploying to Vercel

This project is built 100% standard Next.js 15 (App Router) without custom servers or client-side Node dependencies, making it zero-config deployable on Vercel:

1. Push your repository to **GitHub** / **GitLab** / **Bitbucket**.
2. Sign in to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Framework Preset will auto-detect as **Next.js**.
5. Click **"Deploy"**.
6. (Optional) Add your custom domain under **Project Settings > Domains**.
