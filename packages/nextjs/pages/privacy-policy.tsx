// pages/privacy-policy.tsx
"use client";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-lg mb-6">Effective Date: 9/07/2024</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">GENERAL</h2>
        <p className="mb-4">
          Rymedi, Inc. (“Rymedi” “we,” “us” and “our”) respects your privacy. This Privacy Policy describes how we
          collect, use, disclose, and store information you provide to us through Rymedi’s software service offering
          (“Rymedi Platform”) and any content or services made available from or through Rymedi, including any
          subdomains thereof (each, a “Site”).
        </p>
        <p className="mb-4">
          This Privacy Policy describes:
          <ul className="list-disc pl-6">
            <li>Information that we collect when you interact with the Site</li>
            <li>How we use and process the information that we collect</li>
            <li>How we may share information with third parties</li>
            <li>The security of your information</li>
          </ul>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. User Consent and Incorporation</h2>
        <p className="mb-4">
          PLEASE REVIEW THIS PRIVACY POLICY CAREFULLY. When you submit information to or through the Site, you consent
          to the collection and processing of your information as described in this Privacy Policy. By using the Site,
          you accept the terms of this Privacy Policy, our Terms of Use, and consent to our collection, use, disclosure,
          and retention of your information as described in this Privacy Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Effective Date and Changes to Privacy Policy</h2>
        <p className="mb-4">
          The Effective Date of this Privacy Policy is set forth at the top of this webpage. We may change this Privacy
          Policy from time to time in our discretion. Changes will be posted to this webpage so users are always aware
          of the information we collect and how we use it.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Information We Collect</h2>
        <h3 className="text-xl font-semibold mb-2">A. Information You Provide To Us</h3>
        <p className="mb-4">
          We collect personal information that you provide to us when you use the Site. Information may include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Contact Data: first and last name, postal address, email</li>
          <li>Unique Account Code</li>
          <li>Other Personal Data: age, gender, test results</li>
          <li>Content you send us</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">B. Information We Collect Automatically</h3>
        <p className="mb-4">
          We may also automatically collect information using cookies and other data collection tools.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. How Information Is Used</h2>
        <p className="mb-4">We may use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Providing and improving the Site</li>
          <li>Sending offers</li>
          <li>Customer service</li>
          <li>Security</li>
          <li>Research</li>
          <li>Communication</li>
          <li>Enforcing our Terms of Service</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Sharing of Information</h2>
        <p className="mb-4">
          We may share information with third-party service providers, for legal purposes, with partners and customers,
          and during corporate changes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Security of Your Information</h2>
        <p className="mb-4">
          We use reasonable security measures designed to prevent unauthorized intrusion to the Site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Links to Other Sites</h2>
        <p className="mb-4">
          The Site may contain links to third-party websites and services (“Third Party Site”) with which we have no
          affiliation.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Children</h2>
        <p className="mb-4">
          We do not knowingly collect or maintain personal information from anyone under the age of thirteen.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Do Not Track</h2>
        <p className="mb-4">The Site does not support Do Not Track at this time.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Contact Information</h2>
        <p className="mb-4">If you have any questions regarding this Privacy Policy, please contact us at:</p>
        <p className="mb-4">
          Email:{" "}
          <a href="mailto:info@rymedi.com" className="underline text-blue-500">
            info@rymedi.com
          </a>
        </p>
        <p className="mb-4">Address: Rymedi, Inc, 655 S Main St, Greenville, SC, 29601, Attn: Privacy Policy</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
