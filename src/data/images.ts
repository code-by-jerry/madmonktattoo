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
      src: "/placeholders/gallery-01.svg",
      alt: "Sacred Geometry Mandala Full Sleeve Tattoo",
      title: "Sacred Mandala Sleeve",
      style: "Geometric & Dotwork",
      aspect: "tall",
      width: 700,
      height: 950,
    },
    {
      id: "tattoo-02",
      src: "/placeholders/gallery-02.svg",
      alt: "Dark Neo-Traditional Raven Blackwork Forearm",
      title: "The Raven Sigil",
      style: "Blackwork",
      aspect: "portrait",
      width: 700,
      height: 850,
    },
    {
      id: "tattoo-03",
      src: "/placeholders/gallery-03.svg",
      alt: "Fine Line Botanical Spine Inscription",
      title: "Vertebral Flora",
      style: "Fine Line",
      aspect: "tall",
      width: 700,
      height: 1000,
    },
    {
      id: "tattoo-04",
      src: "/placeholders/gallery-04.svg",
      alt: "Tibetan Sacred Yantra Back Piece",
      title: "Vedic Yantra",
      style: "Religious / Spiritual",
      aspect: "square",
      width: 800,
      height: 800,
    },
    {
      id: "tattoo-05",
      src: "/placeholders/gallery-05.svg",
      alt: "Monastic Silhouette & Lotus Linework",
      title: "Quietude & Lotus",
      style: "Linework",
      aspect: "portrait",
      width: 700,
      height: 900,
    },
    {
      id: "tattoo-06",
      src: "/placeholders/gallery-06.svg",
      alt: "Mythic Dragon Cover-up on Shoulder Blade",
      title: "Serpent Transformation",
      style: "Cover-up",
      aspect: "portrait",
      width: 700,
      height: 850,
    },
    {
      id: "tattoo-07",
      src: "/placeholders/gallery-07.svg",
      alt: "Micro Realism Panther Gaze",
      title: "Panther Gaze",
      style: "Realism",
      aspect: "square",
      width: 800,
      height: 800,
    },
    {
      id: "tattoo-08",
      src: "/placeholders/gallery-08.svg",
      alt: "Minimalist Alchemy Sigil on Wrist",
      title: "Solar Sigil",
      style: "Small & Minimal",
      aspect: "square",
      width: 800,
      height: 800,
    },
    {
      id: "tattoo-09",
      src: "/placeholders/gallery-09.svg",
      alt: "Heavy Solid Black Ornamental Leg Band",
      title: "Nordic Kuro Band",
      style: "Blackwork",
      aspect: "tall",
      width: 700,
      height: 950,
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
