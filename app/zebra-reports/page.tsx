import Link from "next/link";
import { products } from "~~/data/products";
import { disorders } from "~~/data/disorders";
import { collections } from "~~/data/collections";
import { ProductCard } from "~~/components/zebra-reports/ProductCard";

const featuredHandles = [
  "lmnt-electrolyte-drink-mix",
  "serola-si-belt",
  "silver-ring-splint-swan-neck",
  "supacore-coretech-leggings",
  "hoka-bondi",
  "roga-vagus-nerve-stimulator",
];

export default function ZebraReportsHome() {
  const featuredProducts = products.filter(p => featuredHandles.includes(p.handle));
  const edsCount = disorders.filter(d => d.category === "eds").length;
  const newbornCount = disorders.filter(d => d.screenedAtBirth).length;
  const activeCollections = collections.filter(c => c.handle !== "all");

  return (
    <div className="space-y-16">
      <section className="text-center py-12">
        <div className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 mb-6">
          🦓 Community-driven rare disease product reviews
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
          Zebra Reports
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The Consumer Reports of Ehlers-Danlos Syndrome. Expert product reviews rated by and for patients who live it
          every day.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/zebra-reports/products"
            className="rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 transition-colors"
          >
            Browse All Products
          </Link>
          <Link
            href="/zebra-reports/disorders"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Rare Disease Directory
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Products Reviewed", value: products.length, icon: "📦" },
          { label: "Product Categories", value: activeCollections.length, icon: "📂" },
          { label: "EDS Types Covered", value: edsCount, icon: "🦓" },
          { label: "Newborn Screen Disorders", value: newbornCount, icon: "👶" },
        ].map(stat => (
          <div
            key={stat.label}
            className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:bg-gray-900 dark:border-gray-700"
          >
            <span className="text-2xl">{stat.icon}</span>
            <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Featured Reviews</h2>
          <Link
            href="/zebra-reports/products"
            className="text-sm font-medium text-purple-700 hover:text-purple-600 dark:text-purple-400"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProducts.map(product => (
            <ProductCard key={product.handle} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {activeCollections.map(collection => (
            <Link
              key={collection.handle}
              href={`/zebra-reports/collections/${collection.handle}`}
              className="rounded-lg border border-gray-200 bg-white p-4 hover:border-purple-300 hover:shadow-sm transition-all dark:bg-gray-900 dark:border-gray-700 dark:hover:border-purple-600"
            >
              <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm">{collection.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{collection.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-100 dark:border-purple-800 p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Beyond Products: Rare Disease Advocacy</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Zebra Reports is more than product reviews. We&apos;re building a comprehensive rare disease resource covering
          EDS subtypes and newborn screening disorders, giving voice to conditions that need it most.
        </p>
        <Link
          href="/zebra-reports/disorders"
          className="mt-6 inline-flex items-center rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-600 transition-colors"
        >
          Explore Rare Disease Directory
        </Link>
      </section>
    </div>
  );
}
