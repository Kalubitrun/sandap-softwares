import type { MetadataRoute } from "next";
import { projects, solutions } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/about", "/contact"].map((route) => ({
    url: `${siteConfig.domain}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const solutionRoutes = solutions.map((solution) => ({
    url: `${siteConfig.domain}/solutions/${solution.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.domain}/work/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...solutionRoutes, ...projectRoutes];
}
