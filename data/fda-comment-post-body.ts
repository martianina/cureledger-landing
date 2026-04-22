export const fdaCommentPostBody = `
<div class="fda-comment-meta rounded-xl border border-base-300 bg-base-200/50 p-4 md:p-6 mb-8 text-sm leading-relaxed space-y-3 not-prose text-base-content/90">
  <p class="mb-0"><strong>Date:</strong> April 22, 2026</p>
  <div>
    <p class="m-0">Division of Dockets Management (HFA-305)</p>
    <p class="m-0">Food and Drug Administration</p>
    <p class="m-0">5630 Fishers Lane, Rm. 1061</p>
    <p class="m-0">Rockville, MD 20852</p>
  </div>
  <p class="mb-0">
    <strong>Re: Docket No. FDA-2026-D-1256</strong>
    &ldquo;Considerations for the Use of the Plausible Mechanism Framework to Develop Individualized Therapies
    That Target Specific Genetic Conditions With Known Biological Cause; Draft Guidance for Industry;
    Availability&rdquo;
  </p>
  <p class="m-0">
    <a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/considerations-use-plausible-mechanism-framework-develop-individualized-therapies-target-specific" target="_blank" rel="noopener noreferrer" class="link link-primary break-all">
      https://www.fda.gov/regulatory-information/search-fda-guidance-documents/considerations-use-plausible-mechanism-framework-develop-individualized-therapies-target-specific
    </a>
  </p>
</div>

<p><strong>Dear Sir or Madam:</strong></p>
<p>
  Cureledger, Inc. (Cureledger) appreciates the opportunity to submit the following comments to the U.S.
  Food and Drug Administration (FDA or Agency) in response to the draft guidance
  &ldquo;Considerations for the Use of the Plausible Mechanism Framework to Develop Individualized
  Therapies That Target Specific Genetic Conditions With Known Biological Cause&rdquo; (the draft
  guidance). Cureledger is a life data trust dedicated to advancing the development of safe and
  effective therapies for people living with rare diseases.
</p>

<h2>I. GENERAL COMMENTS</h2>
<p>
  Cureledger commends the Agency on the issuance of the draft guidance and believes the Plausible
  Mechanism Framework (PMF) has significant potential to accelerate the development of therapies for
  rare diseases. By accepting mechanism-anchored evidence as substantial evidence of effectiveness, the
  draft guidance addresses a long-standing barrier in rare disease drug development: the difficulty of
  generating traditional randomized controlled trial evidence in small, heterogeneous, and widely
  dispersed patient populations. Cureledger believes this framework, if implemented with appropriate
  supporting infrastructure, can meaningfully expand the number of rare conditions for which viable
  development pathways exist.
</p>
<p>
  Cureledger notes that the draft guidance&rsquo;s methodology depends substantially on the availability
  of high-quality natural history data. The guidance contemplates data leveraging across product
  variants, master protocols, and cross-program interoperability (lines 312&ndash;330, 492&ndash;497), and
  recommends the early initiation of observational protocols (lines 429&ndash;437). Cureledger supports
  these provisions and believes they reflect an appropriate recognition that longitudinal, shareable data
  is central to the framework&rsquo;s scientific logic.
</p>
<p>
  Cureledger believes that the natural history data on which the framework relies must satisfy three
  conditions simultaneously: structural validity under recognized interchange standards such as FHIR and
  CDISC; regulatory compliance with 21 CFR Part 11, HIPAA, and applicable cGMP requirements; and
  persistent legal contractual viability. The specific comments that follow address each of these
  conditions, together with the related question of data custody when a sponsor exits a program, and
  offer recommendations for the Agency&rsquo;s consideration.
</p>

<h2>II. SPECIFIC COMMENTS</h2>

<h3>1. Need for Consolidated Data Standards Guidance for Natural History Studies</h3>
<p>
  Cureledger notes that the current regulatory landscape for natural history data is distributed
  across multiple provisional guidance documents, CFR titles, and industry specifications, including
  FHIR, CDISC, SNOMED CT, and LOINC. Cureledger further notes that the March 2019 draft guidance
  <em>Rare Diseases: Natural History Studies for Drug Development</em> remains the Agency&rsquo;s
  primary reference on natural history data standards and continues to be designated &ldquo;not for
  implementation;&rdquo; and that the natural history section of the December 2023 final guidance
  <em>Rare Diseases: Considerations for the Development of Drugs and Biological Products</em> was
  removed during finalization.
</p>
<p>
  Cureledger believes the absence of a consolidated pathway for compliance concentrates capacity among
  well-resourced sponsors and academic institutions and creates barriers for the patient organizations,
  family foundations, and independent researchers who have historically driven rare disease science.
  Cureledger believes the final guidance would benefit from addressing the standards applicable to such
  data because the PMF explicitly contemplates the use of natural history data generated from diverse
  sources.
</p>
<p>
  Cureledger recommends that the final guidance either consolidate existing Agency positions on
  natural history data standards or reference a forthcoming companion guidance that does so, and that
  the Agency prioritize finalization of the March 2019 draft guidance on natural history studies.
</p>

<h3>2. Privacy Framework for Small Populations</h3>
<p>
  Cureledger notes that the draft guidance contemplates populations of fewer than 200 patients but
  does not address the privacy framework applicable to such populations beyond standard IRB review and
  the informed consent requirements of 21 CFR 50.20. Cureledger is concerned that HIPAA Safe Harbor
  de-identification, as currently defined, may not provide meaningful protection for patients in
  populations of this size. Published research indicates that re-identification risk in small cohorts
  can be substantial (see Rocher, Hendrickx, &amp; de Montjoye, &ldquo;Estimating the success of
  re-identifications in incomplete datasets using generative models,&rdquo; <em>Nature Communications</em>
  10:3069 (2019)).
</p>
<p>
  Cureledger further notes that the Department of Justice final rule implementing Executive Order 14117
  on bulk sensitive data (28 CFR Part 202, effective April 8, 2025) reflects a federal determination
  that genomic data cannot be meaningfully de-identified and that bulk access by countries of concern
  presents a national security risk. Cureledger believes this determination is relevant to the
  privacy framework applicable to data generated under the PMF and should be reflected in the final
  guidance.
</p>
<p>
  Cureledger recommends that the final guidance address privacy protections appropriate to rare disease
  populations, and that the Agency consider incorporating recognition of privacy-preserving technical
  approaches, including cryptographic commitments, pseudonymous linkage, and conditional reidentification
  mechanisms, as acceptable components of a data infrastructure for patient-contributed evidence.
</p>

<h3>3. Data Lifecycle, Reuse, and Custody</h3>
<p>
  Cureledger notes that the draft guidance&rsquo;s provisions on data leveraging (lines
  312&ndash;330, 492&ndash;497) presume that natural history data generated in one context will remain
  available, verifiable, and usable in subsequent contexts. Cureledger supports this principle and
  believes data reuse is central to the framework&rsquo;s capacity to make rare disease development
  feasible at scale. Natural history data generated for one program may serve as external control data
  for the next, and the value of such data to future programs depends on its persistence and
  verifiability over time.
</p>
<p>
  Cureledger is concerned that the draft guidance assigns custody of data to the sponsor by default
  and does not address the circumstances under which a sponsor exits a rare disease program. Under
  ICH-GCP, sponsor retention obligations are enforceable only so long as the sponsor exists. No federal
  requirement currently specifies the disposition of natural history data when a sponsor becomes
  insolvent, is acquired, or discontinues a program. Cureledger believes that in the rare disease
  context, sponsor discontinuation is a predictable rather than exceptional event, and that the current
  custody model therefore creates a risk that the longitudinal evidence base the framework depends on
  will not survive the sponsors who generate it. Cureledger further notes that current consent
  frameworks, including the broad consent provisions adopted in the 2017 revisions to the Common
  Rule, address only the initial authorization of data use and do not address the downstream conditions
  necessary for continuous, data-driven rare disease development.
</p>
<p>
  Cureledger recommends that the final guidance address the conditions under which natural history data
  generated under the framework remains reliably persistent, verifiable, and validatable for use by
  future programs. Cureledger believes patients and families are the most consistently motivated
  stakeholders in rare disease outcomes. Cureledger further recommends that the Agency consider data
  custody models in which participation of the individual data contributor is encouraged, and
  operational custody rests with a fiduciary capable of delivering data to qualified researchers on
  demand.
</p>

<h2>III. CONCLUSION</h2>
<p>
  Cureledger appreciates the opportunity to submit these comments and supports the Agency&rsquo;s
  commitment to advancing drug development for rare diseases. Cureledger believes the PMF represents an
  important step forward and that the final guidance will be strengthened by addressing the data
  standards, privacy, and data lifecycle considerations outlined above. Cureledger looks forward to
  working with the Agency and other stakeholders to advance these objectives.
</p>
<p><strong>Respectfully submitted,</strong></p>
<p>
  Cureledger, Inc.<br />
  Nina Kilbride, CEO/Founder
</p>
`;
