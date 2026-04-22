import Link from "next/link";
import type { Product } from "~~/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/zebra-reports/products/${product.handle}`}
      className="group flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-purple-300 dark:bg-gray-900 dark:border-gray-700 dark:hover:border-purple-600"
    >
      <div className="relative aspect-[4/3] bg-white flex items-center justify-center p-3 border-b border-gray-100 dark:border-gray-800">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-700 dark:group-hover:text-purple-400 line-clamp-1">
              {product.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{product.vendor}</p>
          </div>
          <span className="text-sm font-bold text-gray-900 dark:text-gray-100 flex-shrink-0 whitespace-nowrap">
            {product.priceRange}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2 flex-1">
          {product.seoDescription}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
            {product.type}
          </span>
          <span className="text-xs font-medium text-purple-600 dark:text-purple-400 group-hover:underline">
            Read review &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
