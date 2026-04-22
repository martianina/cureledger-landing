import type { MetadataRoute } from "next";
import { blogPosts } from "~~/data/blog-posts";
import { collections } from "~~/data/collections";
import { disorders } from "~~/data/disorders";
import { products } from "~~/data/products";
import { siteUrl } from "~~/lib/site";

const guthriePaths = ["/", "/about", "/blog", "/privacy", "/whitepaper"];

const zebraListPaths = [
  "/zebra-reports",
  "/zebra-reports/about",
  "/zebra-reports/how-we-rate",
  "/zebra-reports/products",
  "/zebra-reports/disorders",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    ...guthriePaths.map((path, i) => ({
      url: path === "/" ? siteUrl : `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: i === 0 ? 1 : 0.85,
    })),
    ...zebraListPaths.map(path => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.65,
    })),
    ...blogPosts.map(p => ({
      url: `${siteUrl}/blog/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...collections.map(c => ({
      url: `${siteUrl}/zebra-reports/collections/${c.handle}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...products.map(p => ({
      url: `${siteUrl}/zebra-reports/products/${p.handle}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...disorders.map(d => ({
      url: `${siteUrl}/zebra-reports/disorders/${d.handle}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
  return entries;
}
