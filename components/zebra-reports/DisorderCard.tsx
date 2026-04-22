import Link from "next/link";
import type { Disorder } from "~~/data/disorders";

interface DisorderCardProps {
  disorder: Disorder;
}

const categoryColors: Record<string, string> = {
  eds: "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  "amino-acid": "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "organic-acid": "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  "fatty-acid-oxidation": "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  endocrine: "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
  hemoglobin: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  "other-newborn": "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  "lysosomal-storage": "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
};

export function DisorderCard({ disorder }: DisorderCardProps) {
  const colorClass = categoryColors[disorder.category] ?? "bg-gray-50 text-gray-700";

  return (
    <Link
      href={`/zebra-reports/disorders/${disorder.handle}`}
      className="group block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-purple-300 dark:bg-gray-900 dark:border-gray-700 dark:hover:border-purple-600"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-700 dark:group-hover:text-purple-400">
            {disorder.name}
          </h3>
          {disorder.abbreviation && (
            <span className="text-sm font-mono text-gray-500 dark:text-gray-400">{disorder.abbreviation}</span>
          )}
        </div>
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          {disorder.screenedAtBirth && (
            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
              Newborn Screen
            </span>
          )}
          {disorder.rusp && (
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              RUSP
            </span>
          )}
        </div>
      </div>
      <span className={`mt-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}>
        {disorder.categoryLabel}
      </span>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{disorder.description}</p>
      {disorder.prevalence && (
        <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">Prevalence: {disorder.prevalence}</p>
      )}
    </Link>
  );
}
