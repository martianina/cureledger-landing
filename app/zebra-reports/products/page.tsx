import { products } from "~~/data/products";
import { collections } from "~~/data/collections";
import { ProductCard } from "~~/components/zebra-reports/ProductCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Product Reviews",
  description: "Every product reviewed by Zebra Reports, rated by and for the EDS community.",
};

export default function ProductsPage() {
  const productTypes = [...new Set(products.map(p => p.type))].sort();

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">All Product Reviews</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {products.length} products reviewed for the EDS and rare disease community. Every review uses our{" "}
          <Link href="/zebra-reports/how-we-rate" className="text-purple-700 underline dark:text-purple-400">
            Zebra Rating system
          </Link>
          .
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {collections
          .filter(c => c.handle !== "all")
          .map(c => (
            <Link
              key={c.handle}
              href={`/zebra-reports/collections/${c.handle}`}
              className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-purple-300 hover:text-purple-700 transition-colors dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:text-purple-400"
            >
              {c.title}
            </Link>
          ))}
      </div>

      {productTypes.map(type => {
        const typeProducts = products.filter(p => p.type === type);
        return (
          <section key={type}>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {type}{" "}
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">({typeProducts.length})</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {typeProducts.map(product => (
                <ProductCard key={product.handle} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
