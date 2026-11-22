/**
 * Image Registry for Mad Monk Tattoo
 *
 * To swap any placeholder with a real photograph:
 * 1. Place your photo (JPEG/PNG/WebP) in the `/public` folder (e.g. `/public/uploads/tattoo-1.jpg`).
 * 2. Update the corresponding `src` path below.
 * That's it! All components read directly from this registry.
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
    alt: "Mad Monk Tattoo Studio Logo",
    width: 200,
    height: 200,
  },
  hero: {
    src: "/images/hero.webp",
    alt: "Mad Monk Tattoo Studio - Custom Tattoo Art & Sanctuary",
    width: 2752,
    height: 1536,
  },
  artist: {
    src: "/placeholders/artist-portrait.svg",
    alt: "Vikram 'Monk' Dev - Lead tattoo artist in his studio",
    title: "Vikram 'Monk' Dev",
    width: 800,
    height: 1000,
  },
  gallery: [
    {
      id: "tattoo-01",
      src: "/images/works/work-1.webp",
      alt: "Mad Monk Custom Tattoo Portfolio Piece 01",
      title: "Sacred Geometry Stipple",
      style: "Geometric & Dotwork",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-02",
      src: "/images/works/work-2.webp",
      alt: "Mad Monk Custom Tattoo Portfolio Piece 02",
      title: "Dark Neo-Traditional Sigil",
      style: "Blackwork",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-03",
      src: "/images/works/work-3.webp",
      alt: "Mad Monk Custom Tattoo Portfolio Piece 03",
      title: "Anatomical Flow Linework",
      style: "Linework",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-04",
      src: "/images/works/work-4.webp",
      alt: "Mad Monk Custom Tattoo Portfolio Piece 04",
      title: "Sacred Vedic Iconography",
      style: "Religious / Spiritual",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-05",
      src: "/images/works/work-5.webp",
      alt: "Mad Monk Custom Tattoo Portfolio Piece 05",
      title: "Cinematic Black & Grey Realism",
      style: "Realism",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-06",
      src: "/images/works/work-6.webp",
      alt: "Mad Monk Custom Tattoo Portfolio Piece 06",
      title: "Fine Needle Script & Flora",
      style: "Fine Line",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-07",
      src: "/images/works/work-7.webp",
      alt: "Mad Monk Custom Tattoo Portfolio Piece 07",
      title: "Mythic Composition Transformation",
      style: "Cover-up",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-08",
      src: "/images/works/work-8.webp",
      alt: "Mad Monk Custom Tattoo Portfolio Piece 08",
      title: "Heavy Kuro Ornamental Armor",
      style: "Blackwork",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-09",
      src: "/images/works/work-9.webp",
      alt: "Mad Monk Custom Tattoo Portfolio Piece 09",
      title: "Minimalist Celestial Sigil",
      style: "Small & Minimal",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-10",
      src: "/images/works/work-10.webp",
      alt: "Mad Monk Custom Tattoo Portfolio Piece 10",
      title: "Intricate Mandala Sentry",
      style: "Geometric",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
    {
      id: "tattoo-11",
      src: "/images/works/work-11.webp",
      alt: "Mad Monk Custom Tattoo Portfolio Piece 11",
      title: "Monastic Silhouette & Stippling",
      style: "Linework & Shading",
      aspect: "portrait",
      width: 1200,
      height: 1600,
    },
  ] as TattooImage[],

  styles: {
    blackwork: {
      src: "/images/styles/blackwork.webp",
      alt: "Blackwork tattoo style by Mad Monk Tattoo",
      width: 800,
      height: 1000,
    },
    linework: {
      src: "/images/styles/linework.webp",
      alt: "Linework tattoo style by Mad Monk Tattoo",
      width: 800,
      height: 1000,
    },
    "fine-line": {
      src: "/images/styles/fine-line.webp",
      alt: "Fine line delicate tattoo style by Mad Monk Tattoo",
      width: 800,
      height: 1000,
    },
    geometric: {
      src: "/images/styles/geometric.webp",
      alt: "Geometric mandala tattoo style by Mad Monk Tattoo",
      width: 800,
      height: 1000,
    },
    realism: {
      src: "/images/styles/realism.webp",
      alt: "Realism black and grey tattoo style by Mad Monk Tattoo",
      width: 800,
      height: 1000,
    },
    "cover-ups": {
      src: "/images/styles/cover-ups.webp",
      alt: "Cover-up tattoo transformation by Mad Monk Tattoo",
      width: 800,
      height: 1000,
    },
    "religious-spiritual": {
      src: "/images/styles/religious-spiritual.webp",
      alt: "Religious and spiritual sacred iconography by Mad Monk Tattoo",
      width: 800,
      height: 1000,
    },
    "small-minimal": {
      src: "/images/styles/small-minimal.webp",
      alt: "Small and minimal micro-tattoo by Mad Monk Tattoo",
      width: 800,
      height: 1000,
    },
  } as Record<string, { src: string; alt: string; width: number; height: number }>,
};
