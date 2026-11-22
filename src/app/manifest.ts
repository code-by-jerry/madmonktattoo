import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mad Monk Tattoo Studio",
    short_name: "Mad Monk",
    description:
      "Mad Monk Tattoo: custom, realistic and portrait tattoos in Coimbatore & Tirupur. Hygienic studio, free design consultation. Book your session.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#b3122d",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
