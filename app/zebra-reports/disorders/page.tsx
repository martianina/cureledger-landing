import { disorders, getCategories } from "~~/data/disorders";
import { DisorderCard } from "~~/components/zebra-reports/DisorderCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rare Disease Directory",
  description:
    "Comprehensive directory of Ehlers-Danlos Syndrome subtypes and newborn screening disorders. Part of the Cureledger rare disease data initiative.",
};

export default function DisordersPage() {
  const categories = getCategories();

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Rare Disease Directory</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-3xl">
          Covering {disorders.length} conditions across EDS subtypes and newborn screening disorders. Each condition
          connects to the Cureledger rare disease data corpus, building the foundation for better advocacy, research,
          and patient outcomes.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="rounded-lg border border-violet-200 bg-violet-50 px-4 py-2 dark:bg-violet-900/20 dark:border-violet-800">
          <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">
            {disorders.filter(d => d.category === "eds").length} EDS Subtypes
          </span>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-2 dark:bg-green-900/20 dark:border-green-800">
          <span className="text-sm font-semibold text-green-700 dark:text-green-300">
            {disorders.filter(d => d.screenedAtBirth).length} Newborn Screening Disorders
          </span>
        </div>
        <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 dark:bg-blue-900/20 dark:border-blue-800">
          <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
            {disorders.filter(d => d.rusp).length} on RUSP
          </span>
        </div>
      </div>

      {categories.map(categoryLabel => {
        const categoryDisorders = disorders.filter(d => d.categoryLabel === categoryLabel);
        return (
          <section key={categoryLabel}>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {categoryLabel}
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
                ({categoryDisorders.length})
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryDisorders.map(disorder => (
                <DisorderCard key={disorder.handle} disorder={disorder} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
