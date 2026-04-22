import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts, getBlogCategories } from "~~/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on rare disease data infrastructure, N-of-1 research, patient data sovereignty, and FDA regulatory pathways.",
};

const categoryColors: Record<string, string> = {
  Company: "bg-slate-50 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300",
  "Patient Experience": "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
  "Science & Data": "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "Data Sovereignty": "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  Regulatory: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  Vision: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
};

export default function BlogIndex() {
  const categories = getBlogCategories();
  const featured = blogPosts.find(p => p.featured);
  const rest = blogPosts.filter(p => !p.featured);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-24 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Blog</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
        The case for patient-controlled rare disease data across science, policy, and the lived experience.
      </p>

      <div className="flex flex-wrap gap-2 mt-8 mb-12">
        {categories.map(cat => (
          <span
            key={cat}
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${categoryColors[cat] ?? "bg-gray-100 text-gray-700"}`}
          >
            {cat}
          </span>
        ))}
      </div>

      {featured && (
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-primary mb-3">Featured</p>
          <Link
            href={`/blog/${featured.slug}`}
            className="group block rounded-2xl border-2 border-primary bg-base-200/80 p-8 md:p-10 shadow-lg transition-all hover:border-primary/80 hover:shadow-xl"
          >
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium mb-4 ${categoryColors[featured.category] ?? "bg-gray-100 text-gray-700"}`}
            >
              {featured.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
              {featured.title}
            </h2>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {featured.description}
            </p>
            <span className="mt-5 inline-block text-sm font-semibold text-primary group-hover:underline">
              Read the full comment &rarr;
            </span>
          </Link>
        </div>
      )}

      <div className="grid gap-6">
        {rest.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 dark:bg-gray-900 dark:border-gray-700 dark:hover:border-primary/60"
          >
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium mb-3 ${categoryColors[post.category] ?? "bg-gray-100 text-gray-700"}`}
            >
              {post.category}
            </span>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-primary">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {post.description}
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-primary group-hover:underline">
              Read &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
