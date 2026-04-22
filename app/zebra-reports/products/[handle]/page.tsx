import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { products, getProductByHandle } from "~~/data/products";

interface PageProps {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  return products.map(p => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.seoTitle,
    description: product.seoDescription,
  };
}

function isAmazonLink(url: string) {
  return url.includes("amazon.com");
}

export default async function ProductPage({ params }: PageProps) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) notFound();

  const amazon = isAmazonLink(product.affiliateUrl);
  const ctaLabel = amazon ? "Check Price on Amazon" : `Buy from ${product.vendor}`;

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link href="/zebra-reports" className="hover:text-purple-600">Home</Link>
        <span>/</span>
        <Link href="/zebra-reports/products" className="hover:text-purple-600">Products</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-gray-200 truncate">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <aside className="lg:order-2 lg:col-span-1">
          <div className="lg:sticky lg:top-24 space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white overflow-hidden dark:bg-gray-900 dark:border-gray-700">
              <div className="relative aspect-square bg-white flex items-center justify-center p-4">
                <img src={product.imageUrl} alt={product.title} className="max-h-full max-w-full object-contain" loading="eager" />
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:bg-gray-900 dark:border-gray-700 space-y-3">
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{product.priceRange}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{product.vendor}</p>
              </div>

              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block w-full rounded-lg bg-purple-700 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-600 transition-colors"
              >
                {ctaLabel} &rarr;
              </a>

              <dl className="space-y-2 text-sm pt-2 border-t border-gray-100 dark:border-gray-800">
                <div className="flex justify-between">
                  <dt className="text-gray-500 dark:text-gray-400">Category</dt>
                  <dd className="font-medium text-gray-900 dark:text-gray-200">{product.type}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500 dark:text-gray-400">Brand</dt>
                  <dd className="font-medium text-gray-900 dark:text-gray-200">{product.vendor}</dd>
                </div>
              </dl>

              <p className="text-[10px] text-gray-400 dark:text-gray-600 pt-1">
                {amazon ? "As an Amazon Associate we earn from qualifying purchases." : "We may earn a commission."}{" "}
                <Link href="/zebra-reports/about" className="underline">Disclosure</Link>
              </p>
            </div>
          </div>
        </aside>

        <article className="lg:col-span-2 lg:order-1">
          <header className="space-y-3 mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                {product.type}
              </span>
              {product.disorderTags?.map(tag => (
                <span key={tag} className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">{product.title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">{product.seoDescription}</p>
          </header>

          <div className="lg:hidden mb-8 space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white overflow-hidden dark:bg-gray-900 dark:border-gray-700">
              <div className="relative aspect-[4/3] bg-white flex items-center justify-center p-4">
                <img src={product.imageUrl} alt={product.title} className="max-h-full max-w-full object-contain" loading="eager" />
              </div>
            </div>
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center justify-between rounded-lg border border-purple-200 bg-purple-50 p-4 dark:bg-purple-900/20 dark:border-purple-800"
            >
              <div>
                <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{product.priceRange}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">at {amazon ? "Amazon" : product.vendor}</span>
              </div>
              <span className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-semibold text-white">Buy &rarr;</span>
            </a>
          </div>

          <div
            className="prose prose-gray dark:prose-invert max-w-none prose-h4:text-purple-700 dark:prose-h4:text-purple-400 prose-li:marker:text-purple-500"
            dangerouslySetInnerHTML={{ __html: product.body }}
          />

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              {product.tags.map(tag => (
                <span key={tag} className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
