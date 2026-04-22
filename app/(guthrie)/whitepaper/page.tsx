import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whitepaper",
  description:
    "Cureledger: The Data Layer for Rare Disease Drug Development — executive summary and full PDF (April 2026).",
};

const PDF_PATH = "/cureledger-whitepaper-2026.pdf";

const FDA_PMF_URL =
  "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/considerations-use-plausible-mechanism-framework-develop-individualized-therapies-target-specific";

export default function WhitepaperPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-24 sm:px-6 md:pb-24 md:pt-28">
      <h1 className="text-3xl font-bold tracking-tight text-base-content md:text-4xl">
        Cureledger: The Data Layer for Rare Disease Drug Development
      </h1>
      <p className="mt-2 text-sm text-base-content/70">April 2026</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={PDF_PATH}
          download="Cureledger-Whitepaper-2026.pdf"
          className="btn btn-primary"
        >
          Download PDF
        </a>
        <a
          href={PDF_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-primary"
        >
          View PDF
        </a>
      </div>

      <h2 className="mt-14 text-xl font-bold text-base-content md:text-2xl">Executive summary</h2>

      <div className="mt-6 space-y-5 text-base leading-relaxed text-base-content md:text-lg">
        <p>
          Rare disease has been the structural exception in drug development for four decades.
          Conventional pharmaceutical economics require each program to recover its cost against
          an addressable market large enough to justify the labor it consumes, and rare disease
          patient populations are by definition too small to clear that threshold. Approximately
          300 million people live with one of more than 10,000 rare diseases worldwide, a
          population comparable in size to the United States. Fewer than one in ten of those
          conditions has an approved therapy. The unmet need is the largest in medicine, and
          the rare disease community has pursued cures for decades against economics that have
          not allowed the field to deliver them.
        </p>
        <p>
          Those economics have changed. Agentic artificial intelligence has collapsed the
          per-hypothesis cost of drug discovery toward zero, and the Food and Drug Administration
          has opened a regulatory pathway for individualized therapies that do not fit the
          conventional randomized controlled trial model. The{" "}
          <a
            href={FDA_PMF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary font-medium"
          >
            Plausible Mechanism Framework draft guidance
          </a>{" "}
          issued February 23, 2026 accepts mechanism-anchored evidence as substantial evidence of
          effectiveness for genetic conditions with known biological cause, on the condition that
          high-quality natural history data support the mechanism. Taken together these two shifts
          make rare disease addressable in a way it has not been for forty years.
        </p>
        <p>
          One constraint remains. Agentic research and the Plausible Mechanism Framework both
          require a data layer that is longitudinal, consented, reusable across programs, and
          provably compliant. The existing deidentified health data economy, dominated by
          aggregators including IQVIA, Datavant, Truveta, Komodo Health, and Tempus AI, does not
          supply such a layer for rare disease. The commercial aggregators serve common diseases
          where scale is achievable through back-end tokenization of records that patients never
          consented to monetize. Rare disease requires the opposite posture: direct, consented,
          patient-level longitudinal relationships that survive the exit of any individual sponsor
          and that compound in value as successive programs reuse the same evidence base. The
          consent failures exposed by the 23andMe bankruptcy and by the Lacks family&apos;s
          settlement with Thermo Fisher have made the inadequacy of the existing model visible to
          regulators, state attorneys general, and the public in ways that will not reverse.
        </p>
        <p>
          Cureledger is the data layer the new regime requires. Patients contribute their health
          data into a Life Data Trust, a legal trust whose trustee administers the data under
          terms the patient sets and under a fiduciary duty the patient can enforce. The data is
          de-identified by default and subject to a conditional re-identification path that the
          patient controls and the trustee operates, used only to inform the patient of developments
          relevant to them. Revenue from authorized reuse flows back to contributors pro rata.
          Smart contracts and cryptographic proofs render the trustee&apos;s operations verifiable
          to contributors, regulators, and data purchasers without requiring any party to trust
          Cureledger itself. The architecture is purpose-built for rare disease and generalizes
          without modification to the broader drug development data economy, a market whose
          commercial ceiling is materially larger than the rare disease vertical alone.
        </p>
        <p>
          Cureledger&apos;s thesis is that operational agentic AI, the Plausible Mechanism
          Framework, and a fiduciary-grade data layer are the three components of the next regime
          of drug development. Two are arriving under their own momentum. The third requires
          purpose-built infrastructure, and that infrastructure is what Cureledger delivers. Rare
          disease is the first proof. The larger market follows.
        </p>
        <p>
          This document is organized in five parts. Part I establishes why the present moment is
          the moment for the data layer to exist. Part II describes how the existing data layer
          fails rare disease and why incremental repair falls short of what the new regime
          requires. Part III describes the Cureledger architecture. Part IV addresses the market and
          the commercial strategy. Part V addresses the competitive moat.
        </p>
      </div>
    </div>
  );
}
