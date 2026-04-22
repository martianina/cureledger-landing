import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Zebra Reports | The Consumer Reports of EDS",
    template: "%s | Zebra Reports",
  },
  description:
    "Expert product reviews for Ehlers-Danlos Syndrome and rare disease communities. Rated by and for patients who live it every day.",
};

const navLinks = [
  { href: "/zebra-reports", label: "Home" },
  { href: "/zebra-reports/products", label: "Products" },
  { href: "/zebra-reports/disorders", label: "Rare Diseases" },
  { href: "/zebra-reports/how-we-rate", label: "How We Rate" },
  { href: "/zebra-reports/about", label: "About" },
  { href: "/", label: "Cureledger" },
];

export default function ZebraReportsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/zebra-reports" className="flex items-center gap-2">
              <span className="text-2xl">🦓</span>
              <div>
                <span className="text-lg font-bold text-gray-900 dark:text-gray-100">Zebra Reports</span>
                <span className="hidden sm:inline text-xs text-gray-500 dark:text-gray-400 ml-2">
                  by Cureledger
                </span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">{children}</main>

      <footer className="border-t border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🦓</span>
                <span className="font-bold text-gray-900 dark:text-gray-100">Zebra Reports</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The Consumer Reports of Ehlers-Danlos Syndrome and rare disease. Community-driven product reviews you
                can trust.
              </p>
              <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">A Cureledger project</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 text-sm">Navigate</h4>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 text-sm">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/zebra-reports/about"
                    className="text-sm text-gray-500 hover:text-purple-600 dark:text-gray-400"
                  >
                    Affiliate Disclosure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/zebra-reports/about"
                    className="text-sm text-gray-500 hover:text-purple-600 dark:text-gray-400"
                  >
                    Medical Disclaimer
                  </Link>
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
                Zebra Reports provides product reviews for educational purposes only. Not medical advice. Always consult
                your healthcare team.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
