import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Cureledger, Inc. collects, uses, and protects personal information for visitors and subscribers in the United States, European Economic Area, United Kingdom, and California.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-24 pb-20 md:pt-28 md:pb-28 text-base-content">
      <p className="text-sm font-mono text-primary uppercase tracking-wider mb-4">Legal</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-base-content mb-10">
        Last updated: April 17, 2026 &middot;{" "}
        <a href="mailto:privacy@cureledger.com" className="link link-primary">
          privacy@cureledger.com
        </a>
      </p>

      <div className="space-y-10 text-base leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold">1. Who we are</h2>
          <p>
            Cureledger, Inc. (&quot;Cureledger,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) operates this website and related services. We are a Delaware
            corporation based in Raleigh, North Carolina, United States. This Privacy Policy
            describes how we handle personal information when you visit our site, join our
            mailing list, use our chat features, or otherwise interact with us online.
          </p>
          <p>
            For data protection purposes in the European Economic Area (&quot;EEA&quot;)
            and United Kingdom (&quot;UK&quot;), Cureledger, Inc. is the controller of your
            personal information described here, unless we tell you otherwise in a specific
            notice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">2. Information we collect</h2>
          <p>We may collect the following categories of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Contact and account data:</strong> for example, your email address if
              you sign up for updates, join a waitlist, or contact us.
            </li>
            <li>
              <strong>Technical and usage data:</strong> IP address, browser type, device
              identifiers, general location derived from IP, pages viewed, and timestamps.
              We use this to operate, secure, and improve the site.
            </li>
            <li>
              <strong>Communications:</strong> messages you send us, including through
              forms, email, or any chat or support channel we offer.
            </li>
            <li>
              <strong>Information you choose to provide:</strong> any other personal
              information you voluntarily submit.
            </li>
          </ul>
          <p>
            We do not intentionally collect sensitive health information through this
            marketing site. If you are invited to separate research or product programs,
            those programs will provide their own notices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">3. How we use information</h2>
          <p>We use personal information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our website and services;</li>
            <li>Respond to your requests and communicate with you;</li>
            <li>Send marketing or informational messages when you have opted in or where law allows;</li>
            <li>Detect, prevent, and address fraud, abuse, and security issues;</li>
            <li>Comply with law and enforce our terms; and</li>
            <li>Analyze use of our site in aggregate or de-identified form.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">4. Legal bases (EEA, UK, Switzerland)</h2>
          <p>Where the GDPR or UK GDPR applies, we rely on one or more of the following:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Consent</strong> where we ask for it, for example for certain cookies
              or marketing emails you can withdraw at any time;
            </li>
            <li>
              <strong>Contract</strong> where processing is necessary to respond at your
              request before entering a contract or to perform our agreement with you;
            </li>
            <li>
              <strong>Legitimate interests</strong> where we have a legitimate interest that
              is not overridden by your rights, for example site security, analytics, and
              product improvement, balanced against your expectations; and
            </li>
            <li>
              <strong>Legal obligation</strong> where we must process data to comply with law.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">5. Sharing and subprocessors</h2>
          <p>
            We share personal information with vendors who help us run our business, such
            as hosting, analytics, email delivery, and customer support tools. They may
            process data only on our instructions and subject to appropriate contractual
            commitments where required.
          </p>
          <p>
            We may also disclose information if we believe in good faith that disclosure is
            required by law, to protect rights and safety, or in connection with a merger,
            acquisition, or asset sale, subject to appropriate safeguards.
          </p>
          <p>We do not sell your personal information for money as that term is defined under the CCPA.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">6. International transfers</h2>
          <p>
            We are located in the United States. If you access our site from the EEA, UK,
            or Switzerland, your information may be transferred to the United States and
            other countries that may not be deemed to provide an adequate level of data
            protection. Where required, we use appropriate safeguards such as the EU
            Commission-approved Standard Contractual Clauses or the UK International Data
            Transfer Addendum, together with supplementary measures where appropriate.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">7. Retention</h2>
          <p>
            We keep personal information only as long as needed for the purposes described
            here, unless a longer period is required or permitted by law. Criteria for
            retention include whether you have an ongoing relationship with us, whether we
            must keep records to resolve disputes, and applicable legal requirements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">8. Your privacy rights</h2>
          <h3 className="text-lg font-semibold mt-4">EEA, UK, Switzerland</h3>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access, correct, or delete your personal information;</li>
            <li>Restrict or object to certain processing;</li>
            <li>Data portability where applicable;</li>
            <li>Withdraw consent where processing is based on consent; and</li>
            <li>Lodge a complaint with a supervisory authority.</li>
          </ul>
          <p>
            To exercise these rights, contact{" "}
            <a href="mailto:privacy@cureledger.com" className="link link-primary">
              privacy@cureledger.com
            </a>
            . We may need to verify your request.
          </p>

          <h3 className="text-lg font-semibold mt-6">California residents (CPRA)</h3>
          <p>
            If you are a California resident, the California Consumer Privacy Act as amended
            by the California Privacy Rights Act (&quot;CPRA&quot;) may grant you additional
            rights, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to know what personal information we collect, use, and disclose;</li>
            <li>The right to delete personal information we hold, subject to exceptions;</li>
            <li>The right to correct inaccurate personal information;</li>
            <li>
              The right to opt out of the sale or sharing of personal information for
              cross-context behavioral advertising, where applicable (we do not sell personal
              information for monetary consideration);
            </li>
            <li>
              The right to limit use of sensitive personal information where that category
              applies; and
            </li>
            <li>The right not to receive discriminatory treatment for exercising these rights.</li>
          </ul>
          <p>
            California residents may designate an authorized agent to make a request on their
            behalf. We will verify agent authority as required by law.
          </p>
          <p>
            Shine the Light: California Civil Code Section 1798.83 permits California users to
            request certain information regarding disclosure of personal information to third
            parties for their direct marketing purposes. We do not disclose personal
            information to third parties for their direct marketing purposes as described in
            that statute.
          </p>

          <h3 className="text-lg font-semibold mt-6">Other U.S. states</h3>
          <p>
            Residents of Colorado, Connecticut, Virginia, Utah, and other states with
            comprehensive privacy laws may have similar rights to access, delete, correct,
            and opt out of certain processing. Contact us at{" "}
            <a href="mailto:privacy@cureledger.com" className="link link-primary">
              privacy@cureledger.com
            </a>{" "}
            to make a request. We will respond in line with applicable law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">9. Children</h2>
          <p>
            Our site is not directed to children under 16, and we do not knowingly collect
            personal information from children. If you believe we have collected information
            from a child, please contact us and we will take appropriate steps to delete it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">10. Cookies and similar technologies</h2>
          <p>
            We and our vendors may use cookies, local storage, pixels, and similar
            technologies for essential operation, preferences, analytics, and where permitted,
            marketing. You can control cookies through your browser settings. Where required
            by law, we will obtain consent before using non-essential cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">11. Security</h2>
          <p>
            We use administrative, technical, and organizational measures designed to
            protect personal information. No method of transmission over the Internet is
            completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">12. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post the updated
            version on this page and revise the &quot;Last updated&quot; date. If changes are
            material, we will provide additional notice as required by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">13. Contact</h2>
          <p>
            Questions about this Privacy Policy or our privacy practices may be sent to{" "}
            <a href="mailto:privacy@cureledger.com" className="link link-primary">
              privacy@cureledger.com
            </a>{" "}
            or by mail to:
          </p>
          <p className="pl-4 border-l-2 border-primary/40">
            Cureledger, Inc.
            <br />
            Attn: Privacy
            <br />
            Raleigh, NC
            <br />
            United States
          </p>
        </section>
      </div>

      <p className="mt-14 text-sm">
        <Link href="/" className="link link-primary">
          &larr; Back to home
        </Link>
      </p>
    </div>
  );
}
