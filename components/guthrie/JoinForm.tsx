"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MAILERLITE_ACCOUNT_ID, MAILERLITE_FORM_ID } from "~~/lib/mailerlite";

interface JoinFormProps {
  /**
   * Legacy prop — MailerLite form embed controls the submit action.
   * @deprecated
   */
  submitLabel?: string;
  reassurance?: string | null;
  prominent?: boolean;
}

/**
 * Renders a MailerLite `ml-embedded` form. The universal script in `app/layout.tsx` must load
 * `universal.js` once. That script often runs before the embed `div` exists, or the div is present
 * on the server and React’s hydration can strip the iframe MailerLite injects. We only mount
 * the embed on the client and re-call `ml("account", …)` so the library rescans the DOM.
 */
function nudgeMailerLite() {
  const w = window as unknown as { ml?: (command: string, value?: string) => void };
  w.ml?.("account", String(MAILERLITE_ACCOUNT_ID));
}

export function JoinForm({ reassurance, prominent = false }: JoinFormProps) {
  const [embedReady, setEmbedReady] = useState(false);

  useEffect(() => {
    setEmbedReady(true);
  }, []);

  useEffect(() => {
    if (!embedReady) return;

    function rescan() {
      nudgeMailerLite();
    }

    rescan();
    const raf = requestAnimationFrame(rescan);
    const t0 = setTimeout(rescan, 0);
    const t1 = setTimeout(rescan, 150);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t0);
      clearTimeout(t1);
    };
  }, [embedReady]);

  return (
    <div className={`mx-auto w-full ${prominent ? "max-w-lg" : "max-w-md"}`}>
      {embedReady ? (
        <div
          className="ml-embedded w-full min-h-12 text-left [&_iframe]:max-w-full"
          data-form={MAILERLITE_FORM_ID}
        />
      ) : (
        <div
          className="h-12 w-full rounded-md bg-base-200/30"
          aria-hidden
        />
      )}
      <p className="mt-4 text-center text-xs leading-relaxed text-base-content/80">
        {reassurance != null && Boolean(reassurance) ? <>{reassurance} </> : null}
        <Link href="/privacy" className="link link-primary link-hover">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
