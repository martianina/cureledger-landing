import Link from "next/link";
import { ExpandableBlock } from "~~/components/guthrie/ExpandableBlock";
import { JoinForm } from "~~/components/guthrie/JoinForm";

function PillarCheckIcon() {
  return (
    <span className="inline-flex shrink-0 text-primary" aria-hidden>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

export default function GuthrieLanding() {
  return (
    <div className="text-base-content" id="top">

      {/* Hero: content defines height. Background is absolute + min-h = section height, so
          there is no extra “fake” min-height under the last line (that was the navy void). */}
      <section className="relative overflow-hidden bg-base-100">
        <div
          className="pointer-events-none absolute inset-0 z-0 min-h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/assets/network.png)" }}
        />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24 md:py-28">
          <div className="mx-auto flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-[1.15]">
              <span className="block">Rare disease has been waiting on AI.</span>
              <span className="block mt-2 md:mt-3">AI has been waiting on us.</span>
            </h1>
            <p className="mt-20 max-w-xl text-xs sm:text-sm font-mono font-bold text-secondary uppercase tracking-[0.28em] sm:mt-24 md:mt-32">
              Cureledger. End rare disease.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-base-300 bg-base-100">
        <div className="mx-auto max-w-3xl px-4 py-10 text-center sm:px-6 sm:py-12 md:py-14">
          <h2 className="text-lg font-bold leading-snug text-base-content sm:text-xl md:text-2xl md:leading-snug">
            Cureledger is the life data trust for rare disorders.
          </h2>
        </div>
      </section>

      <aside
        className="border-b border-secondary/30 bg-[color-mix(in_srgb,var(--color-primary)_86%,#000_14%)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
        aria-label="Featured blog post"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-4 sm:py-5">
          <p className="mb-4 max-w-3xl text-balance text-left text-base font-medium leading-relaxed text-primary-content sm:mb-5 sm:text-lg md:text-xl">
            Cureledger urges the FDA to address data sovereignty, custody, and privacy frameworks
            adequate for rare populations.
          </p>
          <Link
            href="/blog/fda-comment-plausible-mechanism-framework"
            className="group flex flex-col items-stretch gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[color-mix(in_srgb,var(--color-primary)_86%,#000_14%)] sm:flex-row sm:items-center sm:justify-between sm:gap-4"
          >
            <span className="min-w-0 text-left text-sm font-semibold leading-snug text-primary-content/95 sm:text-base sm:leading-relaxed">
              Read our comment to the FDA on the Plausible Mechanism Framework for individualized
              therapies.
            </span>
            <span className="inline-flex h-9 shrink-0 items-center justify-center gap-0.5 self-start rounded-full bg-secondary px-3.5 text-xs font-bold text-secondary-content shadow-md ring-1 ring-white/20 transition sm:h-10 sm:self-auto sm:px-4 sm:text-sm group-hover:brightness-110 group-active:brightness-95">
              Read
              <span aria-hidden className="text-base leading-none">
                →
              </span>
            </span>
          </Link>
        </div>
      </aside>

      {/* ── SECTION 1 — Big pharma math ──────────────────────────── */}
      <section className="border-b border-base-300">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14 md:py-20">

          {/* Overline */}
          <p className="text-xs font-mono font-semibold tracking-[0.22em] uppercase text-primary mb-4">
            The moment
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-base-content leading-tight max-w-2xl">
            <span className="block">
              Rare diseases were always left behind by big pharma math.
            </span>
            <span className="mt-2 block">That changes now.</span>
          </h2>

          {/* Pull quote */}
          <blockquote className="mt-8 border-l-[3px] border-primary pl-5 md:pl-7">
            <p className="text-base md:text-lg text-base-content/80 leading-relaxed italic">
              "For the first time in forty years, the limiting factor in rare disease drug
              development is the quality of the data we make available."
            </p>
          </blockquote>

          <div className="mt-8">
            <ExpandableBlock label="More">
              <p>
                Drug development has always left rare disease behind. The science was never the
                barrier. The populations were too small for conventional pharmaceutical
                economics to reach, and the research labor was too expensive to spend on
                conditions that would never return it.
              </p>
              <p>
                That has changed. AI can now do in an afternoon the hypothesis-testing work that
                used to take a hundred scientists a decade. The FDA has opened a regulatory
                path, the Plausible Mechanism Framework, for therapies designed for small
                populations and grounded in real patient data in place of the randomized trials
                our populations cannot support.
              </p>
              <p>
                For the first time in forty years, the limiting factor in rare disease drug
                development is the quality of the data we make available. That data belongs to
                us. The decision to make it available on fair terms belongs to us too.
              </p>
              <div className="pt-2">
                <Link
                  href="/blog/fda-comment-plausible-mechanism-framework"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  FDA comment on the Plausible Mechanism Framework &rarr;
                </Link>
              </div>
            </ExpandableBlock>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — Your data ────────────────────────────────── */}
      <section className="bg-base-200/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14 md:py-20">

          <p className="text-xs font-mono font-semibold tracking-[0.22em] uppercase text-primary mb-4">
            Cureledger Life Data Trust
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-base-content leading-tight max-w-xl">
            Your data. Held for you.<br className="hidden sm:block" /> Working for you.
          </h2>

          {/* Three-pillar strip */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px bg-base-300 rounded-xl overflow-hidden border border-base-300 text-sm">
            <div className="bg-base-100 px-5 py-5">
              <div className="flex items-center gap-3">
                <PillarCheckIcon />
                <p className="font-semibold uppercase tracking-wide text-base-content">Protected</p>
              </div>
            </div>
            <div className="bg-base-100 px-5 py-5">
              <div className="flex items-center gap-3">
                <PillarCheckIcon />
                <p className="font-semibold uppercase tracking-wide text-base-content">Working</p>
              </div>
            </div>
            <div className="bg-base-100 px-5 py-5">
              <div className="flex items-center gap-3">
                <PillarCheckIcon />
                <p className="font-semibold uppercase tracking-wide text-base-content">Yours</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <ExpandableBlock label="More">
              <p>
                Cureledger is a legal trust. You contribute your health data to the trust. A
                trustee holds it under terms you set and a fiduciary duty you can enforce.
                Qualified researchers access it on those terms. You share in the revenue your data
                produces.
              </p>
              <p>
                When something the researchers find matters to you, whether a new therapy that
                fits your profile or a trial you qualify for, you find out. You choose in
                advance what you want to be told about and what you do not.
              </p>
              <p>
                The data is de-identified before it ever leaves the trust. You hold the key to
                any re-identification. If a sponsor shuts down or an AI lab changes direction,
                your data stays in the trust and remains available for the next program that can
                use it, on your standing terms. No bankruptcy auction, no consent surprise, no
                second sale.
              </p>
              <p>This is how the rare disease data economy should have worked from the beginning.</p>
            </ExpandableBlock>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — Community ────────────────────────────────── */}
      <section className="border-y border-base-300">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14 md:py-20">

          <p className="text-xs font-mono font-semibold tracking-[0.22em] uppercase text-primary mb-4">
            Changing the world
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-base-content leading-tight max-w-2xl">
            Because rare disease communities<br className="hidden sm:block" /> have always had to do it ourselves.
          </h2>

          <ol className="mt-8 space-y-4">
            {(["Testing", "Treatment", "Legislation", "Technology"] as const).map(label => (
              <li key={label} className="flex items-center gap-4">
                <span className="mt-0.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-primary" aria-hidden />
                <span className="text-sm font-semibold text-base-content md:text-base">{label}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <ExpandableBlock label="More">
              <p>
                Every major advance in rare disease has come from families, advocates, and
                independent researchers doing work the market refused to fund. Newborn screening
                was built by a microbiologist working with grieving mothers. Most approved rare
                disease therapies exist because a patient foundation raised the money, recruited
                the scientists, and wrote the check. The Orphan Drug Act passed because rare
                disease families lobbied it into law.
              </p>
              <p>
                We are used to building what we need. Cureledger is the next thing we build, and
                this one compounds with every participant. Each family who contributes makes the
                system more valuable for the next family, the next program, and the next
                therapy. The value we create today becomes the evidence base that gets the next
                drug approved.
              </p>
              <p>
                The rare disease community is the most motivated cohort in medicine. We are also
                the best qualified to build the infrastructure that finally serves us, because
                we are the only ones who will stay with it for the long run.
              </p>
            </ExpandableBlock>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — Founder's letter ─────────────────────────── */}
      <section className="bg-base-200/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14 md:py-20">

          <p className="text-xs font-mono font-semibold tracking-[0.22em] uppercase text-primary mb-4">
            From the founder
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-base-content leading-tight max-w-2xl">
            Built by and for the rare disease community
          </h2>

          {/* Founder card teaser */}
          <div className="mt-8 rounded-xl border border-base-300 bg-base-100 p-6 md:p-8">
            <div className="flex items-start gap-5">
              {/* Avatar placeholder */}
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg select-none">
                NK
              </div>
              <div>
                <p className="font-semibold text-base-content">Nina Kilbride</p>
                <p className="text-sm text-base-content/60 mt-0.5">
                  Founder &amp; CEO, technology lawyer, software engineer, PKU parent
                </p>
              </div>
            </div>
            <p className="mt-5 text-base md:text-lg text-base-content/80 leading-relaxed italic border-l-[3px] border-primary pl-5">
              "I started Cureledger because my family needed it and nobody else was going to build it."
            </p>
          </div>

          <div className="mt-6">
            <ExpandableBlock label="More">
              <div className="border-l-4 border-primary pl-6 md:pl-8 space-y-5">
                <p>I started Cureledger because my family needed it and nobody else was going to build it.</p>
                <p>
                  I am a technology lawyer and a software engineer. My son has PKU. I spent a
                  decade watching the drug development system work around rare disease instead of
                  for it, and another decade building the infrastructure that makes working for it
                  possible. I hold the patents. I have assembled a team of technologists,
                  fiduciaries, and rare disease advocates who are in this for the same reason I
                  am.
                </p>
                <p>
                  Cureledger is going to work because the people building it know, from their own
                  lives, what is at stake if it does not.
                </p>
                <p className="pt-2 text-base italic text-base-content/90">Nina Kilbride, Founder</p>
              </div>
            </ExpandableBlock>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — Join (MailerLite) ────────────────────────── */}
      <section className="border-t border-base-300 bg-primary/5" id="join">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-24">
          <div className="mx-auto max-w-xl">
            <JoinForm prominent reassurance={null} />
          </div>
        </div>
      </section>

    </div>
  );
}
