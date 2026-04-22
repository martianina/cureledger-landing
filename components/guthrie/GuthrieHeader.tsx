import Image from "next/image";
import Link from "next/link";

const navLinks = [{ href: "/blog", label: "Blog" }];

export function GuthrieHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Cureledger" width={32} height={32} className="rounded-full" />
            <span className="text-lg font-bold text-base-content tracking-tight">Cureledger</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-base-content hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#join"
              className="text-sm font-semibold text-primary-content bg-primary hover:bg-primary/80 px-4 py-2 rounded-full transition-colors"
            >
              Join
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
