import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts, getBlogPostBySlug } from "~~/data/blog-posts";
import { siteUrl } from "~~/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  const url = `${siteUrl}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

const categoryColors: Record<string, string> = {
  Company: "bg-slate-50 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300",
  History: "bg-stone-50 text-stone-700 dark:bg-stone-900/30 dark:text-stone-300",
  "Patient Experience": "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
  "Science & Data": "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "Data Sovereignty": "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  Regulatory: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  Vision: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 pt-24 pb-16 md:pt-28 md:pb-24">
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-emerald-600">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-emerald-600">Blog</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-gray-200 truncate">{post.title}</span>
      </nav>

      <header className="mb-10">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium mb-4 ${categoryColors[post.category] ?? "bg-gray-100 text-gray-700"}`}
        >
          {post.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {post.description}
        </p>
      </header>

      <div
        className="prose prose-gray dark:prose-invert max-w-none prose-h3:text-emerald-700 dark:prose-h3:text-emerald-400 prose-blockquote:border-emerald-500 prose-li:marker:text-emerald-500 prose-table:text-sm"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/blog"
          className="text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:underline"
        >
          &larr; Back to all posts
        </Link>
      </div>
    </article>
  );
}
