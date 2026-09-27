import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Loan Samadhan - Expert Loan Consultancy Udaipur",
    short_name: "Loan Samadhan",
    description: "लोन नहीं तो कोई फीस नहीं - Expert Loan Advisory in Udaipur, Rajasthan",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0B1F4D",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
