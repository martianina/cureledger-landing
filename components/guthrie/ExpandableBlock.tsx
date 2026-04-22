function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChevronCircle() {
  return (
    <span
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary ring-1 ring-inset ring-secondary/30"
      aria-hidden
    >
      <ChevronIcon className="h-4 w-4 transition-transform duration-200 group-open:rotate-90" />
    </span>
  );
}

interface ExpandableBlockProps {
  children: React.ReactNode;
  label?: string;
}

export function ExpandableBlock({ children, label = "More" }: ExpandableBlockProps) {
  return (
    <details className="group mt-3">
      <summary className="flex cursor-pointer list-none items-center gap-3 text-sm font-semibold text-primary hover:underline [&::-webkit-details-marker]:hidden">
        <ChevronCircle />
        {label}
      </summary>
      <div className="mt-3 space-y-4 border-t border-base-300 pt-3 text-base leading-relaxed text-base-content md:text-lg">
        {children}
      </div>
    </details>
  );
}
