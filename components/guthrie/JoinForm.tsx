"use client";

import Link from "next/link";
import { MAILERLITE_FORM_ID } from "~~/lib/mailerlite";

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
 * Renders a MailerLite `ml-embedded` form. The universal script in `app/layout.tsx` discovers
 * these automatically — do not call `ml("forms", ...)`; that is not a valid MailerLite API.
 * See `lib/mailerlite.ts` for account and form id.
 */
export function JoinForm({ reassurance, prominent = false }: JoinFormProps) {
  return (
    <div className={`mx-auto w-full ${prominent ? "max-w-lg" : "max-w-md"}`}>
      <div
        className="ml-embedded w-full min-h-12 text-left [&_iframe]:max-w-full"
        data-form={MAILERLITE_FORM_ID}
      />
      <p className="mt-4 text-center text-xs leading-relaxed text-base-content/80">
        {reassurance != null && Boolean(reassurance) ? <>{reassurance} </> : null}
        <Link href="/privacy" className="link link-primary link-hover">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
