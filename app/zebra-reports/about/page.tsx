import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Zebra Reports",
  description:
    "Zebra Reports is the Consumer Reports of EDS: expert product reviews rated by and for the Ehlers-Danlos Syndrome community. A Cureledger project.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">About Zebra Reports</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">The Consumer Reports of EDS</p>
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2>Why &ldquo;Zebra&rdquo;?</h2>
        <p>
          In medicine, the saying goes: &ldquo;When you hear hoofbeats, think horses, not zebras.&rdquo; But for the
          millions living with Ehlers-Danlos Syndrome, the diagnosis <em>is</em> the zebra. The EDS community has
          reclaimed the zebra as its symbol, representing the rare, the misunderstood, and the medically complex.
        </p>
        <p>
          Zebra Reports exists because rare disease patients deserve the same quality of product guidance that mainstream
          consumers take for granted. No one should have to spend months trial-and-erroring knee braces, compression
          garments, or electrolyte mixes when the community already knows what works.
        </p>

        <h2>Our Mission</h2>
        <p>
          We rate products on what matters to EDS patients: comfort on fragile skin, effectiveness for hypermobile
          joints, durability under daily use, and real value for people already drowning in medical costs. Every review
          uses our transparent{" "}
          <Link href="/zebra-reports/how-we-rate">Zebra Rating system</Link>, weighted for the specific needs of
          connective tissue disorders.
        </p>

        <h2>Part of Cureledger</h2>
        <p>
          Zebra Reports is a project of <strong>Cureledger Inc.</strong>, a rare disease data and advocacy platform. Beyond
          product reviews, we are building privacy-preserving rare disease data infrastructure, supporting newborn
          screening advocacy, and developing tools that give patients ownership of their health data.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          Zebra Reports is reader-supported. When you buy through links on our site, we may earn an affiliate commission
          at no extra cost to you. This <strong>never</strong> influences our reviews or ratings. Our Zebra Rating system
          is independently maintained, and we review products with no affiliate program alongside those with affiliate
          partnerships.
        </p>
        <p>
          We currently participate in the Amazon Associates program (tag: zebrareports-20). As we grow, we may add
          direct brand partnerships, always disclosed, never influencing editorial scores.
        </p>

        <h2>Medical Disclaimer</h2>
        <p>
          Zebra Reports provides product reviews and information for educational purposes only. We are not medical
          professionals. Always consult your healthcare team before using any product for EDS management. Our reviews
          reflect community experience and editorial opinion, not medical advice.
        </p>
      </section>
    </div>
  );
}
