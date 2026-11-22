/**
 * Image Registry for Mad Monk Tattoo Studio
 * Coimbatore & Tirupur, Tamil Nadu
 */

export interface TattooImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  style: string;
  aspect: "square" | "portrait" | "tall";
  width: number;
  height: number;
}

export const images = {
  logo: {
    light: "/images/logo-light.png",
    dark: "/images/logo-dark.jpg",
    alt: "Mad Monk Tattoo Studio Logo in Coimbatore & Tirupur",
    width: 200,
    height: 200,
  },
  hero: {
    desktop: "/images/hero-desktop.webp",
    mobile: "/images/hero-mobile.webp",
    src: "/images/hero-desktop.webp",
    alt: "Mad Monk Tattoo Studio - Realistic portrait and custom tattoo sanctuary in Coimbatore & Tirupur",
    width: 2752,
    height: 1536,
  },
  artist: {
    src: "/images/artist.webp",
    alt: "Joo, lead custom tattoo artist at Mad Monk Tattoo Studio in Coimbatore",
    title: "Lead Resident Artist",
    width: 1200,
    height: 1600,
  },
  gallery: [
    {
      id: "tattoo-01",
      src: "/images/works/work-1.webp",
      alt: "Sacred geometry mandala tattoo in Coimbatore by Mad Monk Tattoo",
      title: "Sacred Geometry Stipple",
      style: "Geometric & Dotwork",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-02",
      src: "/images/works/work-2.webp",
      alt: "Dark neo-traditional blackwork tattoo serving Tirupur by Mad Monk Tattoo",
      title: "Dark Neo-Traditional Sigil",
      style: "Blackwork",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-03",
      src: "/images/works/work-3.webp",
      alt: "Anatomical flow linework permanent tattoo in Coimbatore by Mad Monk Tattoo",
      title: "Anatomical Flow Linework",
      style: "Linework",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-04",
      src: "/images/works/work-4.webp",
      alt: "Realistic portrait tattoo by Mad Monk Tattoo, Coimbatore",
      title: "Sacred Vedic Iconography",
      style: "Portrait & Spiritual",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-05",
      src: "/images/works/work-6.webp",
      alt: "Fine line delicate floral tattoo serving Tirupur by Mad Monk Tattoo",
      title: "Fine Needle Script & Flora",
      style: "Fine Line",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-06",
      src: "/images/works/work-7.webp",
      alt: "Custom cover-up tattoo transformation in Coimbatore by Mad Monk Tattoo",
      title: "Mythic Composition Transformation",
      style: "Cover-up",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-07",
      src: "/images/works/work-8.webp",
      alt: "Heavy kuro blackwork ornamental sleeve tattoo serving Tirupur by Mad Monk Tattoo",
      title: "Heavy Kuro Ornamental Armor",
      style: "Blackwork",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-08",
      src: "/images/works/work-9.webp",
      alt: "Minimalist micro sigil tattoo in Coimbatore by Mad Monk Tattoo",
      title: "Minimalist Celestial Sigil",
      style: "Minimal",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-09",
      src: "/images/works/work-10.webp",
      alt: "Geometric mandala dotwork tattoo in Coimbatore by Mad Monk Tattoo",
      title: "Intricate Mandala Sentry",
      style: "Geometric",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-10",
      src: "/images/works/work-11.webp",
      alt: "Monastic realism silhouette and stippling tattoo serving Tirupur by Mad Monk Tattoo",
      title: "Monastic Silhouette & Stippling",
      style: "Realistic Shading",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
  ] as TattooImage[],

  styles: {
    portrait: {
      src: "/images/works/work-4.webp",
      alt: "Portrait tattoo by Mad Monk Tattoo, Coimbatore",
      width: 800,
      height: 1000,
    },
    realistic: {
      src: "/images/styles/realism.webp",
      alt: "Realistic tattoo by Mad Monk Tattoo, Coimbatore & Tirupur",
      width: 800,
      height: 1000,
    },
    blackwork: {
      src: "/images/styles/blackwork.webp",
      alt: "Blackwork tattoo style by Mad Monk Tattoo, Coimbatore",
      width: 800,
      height: 1000,
    },
    "fine-line": {
      src: "/images/styles/fine-line.webp",
      alt: "Fine line delicate tattoo style by Mad Monk Tattoo, Tirupur",
      width: 800,
      height: 1000,
    },
    custom: {
      src: "/images/styles/linework.webp",
      alt: "Custom tailored tattoo design by Mad Monk Tattoo, Coimbatore",
      width: 800,
      height: 1000,
    },
    "cover-up": {
      src: "/images/styles/cover-ups.webp",
      alt: "Cover-up tattoo transformation by Mad Monk Tattoo, Coimbatore",
      width: 800,
      height: 1000,
    },
    minimal: {
      src: "/images/styles/small-minimal.webp",
      alt: "Minimalist micro-tattoo by Mad Monk Tattoo, Tirupur",
      width: 800,
      height: 1000,
    },
    // Backwards-compatible aliases
    realism: {
      src: "/images/styles/realism.webp",
      alt: "Realistic tattoo by Mad Monk Tattoo, Coimbatore",
      width: 800,
      height: 1000,
    },
    "cover-ups": {
      src: "/images/styles/cover-ups.webp",
      alt: "Cover-up tattoo transformation by Mad Monk Tattoo, Coimbatore",
      width: 800,
      height: 1000,
    },
    "small-minimal": {
      src: "/images/styles/small-minimal.webp",
      alt: "Minimalist micro-tattoo by Mad Monk Tattoo, Coimbatore",
      width: 800,
      height: 1000,
    },
  } as Record<string, { src: string; alt: string; width: number; height: number }>,
};
