import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { collections, getCollectionByHandle } from "~~/data/collections";
import { products } from "~~/data/products";
import { ProductCard } from "~~/components/zebra-reports/ProductCard";

interface PageProps {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  return collections.map(c => ({ handle: c.handle }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle } = await params;
  const collection = getCollectionByHandle(handle);
  if (!collection) return { title: "Collection Not Found" };
  return {
    title: collection.seoTitle ?? collection.title,
    description: collection.seoDescription ?? collection.description,
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { handle } = await params;
  const collection = getCollectionByHandle(handle);
  if (!collection) notFound();

  const filtered =
    collection.type === "all" ? products : products.filter(p => p.type === collection.type);

  return (
    <div className="space-y-8">
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/zebra-reports" className="hover:text-purple-600">Home</Link>
        <span>/</span>
        <Link href="/zebra-reports/products" className="hover:text-purple-600">Products</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-gray-200">{collection.title}</span>
      </nav>

      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{collection.title}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{collection.description}</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{filtered.length} products reviewed</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(product => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </div>
  );
}
