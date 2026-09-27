import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.loansamadhan.in";
  const currentDate = new Date();

  const routes = [
    "",
    "/about",
    "/services",
    "/services/home-loan",
    "/services/business-loan",
    "/services/personal-loan",
    "/services/car-loan",
    "/services/loan-against-property",
    "/emi-calculator",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.8,
  }));
}
