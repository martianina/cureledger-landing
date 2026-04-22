import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { disorders, getDisorderByHandle } from "~~/data/disorders";

interface PageProps {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  return disorders.map(d => ({ handle: d.handle }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle } = await params;
  const disorder = getDisorderByHandle(handle);
  if (!disorder) return { title: "Disorder Not Found" };
  return {
    title: `${disorder.name} | Rare Disease Directory`,
    description: disorder.description,
  };
}

export default async function DisorderPage({ params }: PageProps) {
  const { handle } = await params;
  const disorder = getDisorderByHandle(handle);
  if (!disorder) notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/zebra-reports" className="hover:text-purple-600">Home</Link>
        <span>/</span>
        <Link href="/zebra-reports/disorders" className="hover:text-purple-600">Rare Diseases</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-gray-200">{disorder.name}</span>
      </nav>

      <article>
        <header className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
              {disorder.categoryLabel}
            </span>
            {disorder.screenedAtBirth && (
              <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                Newborn Screening
              </span>
            )}
            {disorder.rusp && (
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                RUSP
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">{disorder.name}</h1>
          {disorder.abbreviation && (
            <p className="text-lg font-mono text-gray-500 dark:text-gray-400">{disorder.abbreviation}</p>
          )}
        </header>

        <div className="mt-8 prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">{disorder.description}</p>
        </div>

        <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {disorder.prevalence && (
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Prevalence</dt>
              <dd className="mt-1 text-gray-900 dark:text-gray-100 font-semibold">{disorder.prevalence}</dd>
            </div>
          )}
          {disorder.inheritance && (
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Inheritance</dt>
              <dd className="mt-1 text-gray-900 dark:text-gray-100 font-semibold">{disorder.inheritance}</dd>
            </div>
          )}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Screened at Birth</dt>
            <dd className="mt-1 text-gray-900 dark:text-gray-100 font-semibold">
              {disorder.screenedAtBirth ? "Yes" : "No"}
            </dd>
          </div>
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">On RUSP</dt>
            <dd className="mt-1 text-gray-900 dark:text-gray-100 font-semibold">
              {disorder.rusp ? "Yes (Recommended Uniform Screening Panel)" : "No"}
            </dd>
          </div>
        </dl>

        <div className="mt-8 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 p-6">
          <h3 className="font-semibold text-purple-900 dark:text-purple-200">About This Data</h3>
          <p className="mt-2 text-sm text-purple-700 dark:text-purple-300">
            This disorder is part of the Cureledger rare disease data corpus. We are building privacy-preserving
            natural history datasets and advocacy tools for rare disease communities. Data is maintained by clinical
            advisors and the patient community.
          </p>
        </div>
      </article>
    </div>
  );
}
