import { fdaCommentPostBody } from "~~/data/fda-comment-post-body";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  body: string;
  /** When true, shown as the featured post on /blog */
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "fda-comment-plausible-mechanism-framework",
    title: "Our FDA Comment: Plausible Mechanism Framework Draft Guidance",
    description:
      "Cureledger’s April 22, 2026 comment to Docket FDA-2026-D-1256: natural history data standards, privacy for small populations, and data lifecycle, reuse, and custody under the PMF.",
    category: "Regulatory",
    featured: true,
    body: fdaCommentPostBody,
  },
  {
    slug: "our-founder",
    title: "Our Founder",
    description:
      "Nina Kilbride on building Cureledger since 2015: financial-grade rare disease data marketplaces, AI that can finally use longitudinal patient data, and privacy as core design.",
    category: "Company",
    body: `<p>Cureledger was started by <strong>Nina Kilbride</strong>, a rare disease mom who is also an experienced attorney and Series 65-qualified legal software engineer. Nina practiced law in Raleigh-Durham and saw firsthand how the existing system of drug development works. When she had a child with PKU, it became clear how that system left behind people with rare but potentially treatable disorders, while creating incentives to keep profitable common disorders like obesity common.</p>

<p>Nina taught herself to code and has been building since 2015 with a specific vision: <strong>financial-grade data marketplaces for rare disease</strong> that enable an army of AI agents to do what existing drug development systems cannot. Spend the time to analyze the data. Generate and test hypotheses across rare disease data sets. The missing link is the data source and sovereignty. HIPAA controls a portion of the data relevant for modern research. The remainder sits in an unregulated wild west of value extraction.</p>

<p>It is hard work to have a rare disease. It is an extra job to build an ultra-rare dataset with longitudinal value. Patients and families deserve to see the upside. Cureledger is the system that enables that, with <strong>privacy protection as its core design principle</strong>.</p>

<p>It is what Nina wishes her family had, and what she is building for every rare disease family.</p>`,
  },
  {
    slug: "the-data-that-saves",
    title: "The Data That Saves: How Robert Guthrie Built the Infrastructure for a Cure",
    description:
      "In 1960, a microbiologist solved two problems at once: detecting PKU and collecting the specimen from every newborn, everywhere, without requiring infrastructure most families would never access. We named our platform after him.",
    category: "History",
    body: `<p>In 1934, a mother in Oslo named Borgny Egeland brought her two children to see Asbjorn Folling. Liv was six and could say only a few words. She walked with a spastic gait. Dag was four and could not eat or drink on his own. Both had been healthy at birth. Both had regressed. What Borgny wanted to know was simple: Dag's urine smelled strange. Why?</p>

<p>Folling was a biochemist, not a pediatrician. He ran the standard tests and got nothing. Then he added ferric chloride to a urine sample and it turned deep green. That reaction was not in any textbook. He spent weeks isolating the compound responsible and identified it as phenylpyruvic acid, a byproduct of phenylalanine metabolism that should not accumulate in the body. His colleagues in the medical ward called it "the idiot acid."</p>

<p>Folling did not stop with two patients. He collected urine from 430 residents of Norwegian institutions for the intellectually disabled and found the same reaction in eight more. Within five months of Borgny's first visit he had described a new inborn error of metabolism, identified its inheritance pattern as autosomal recessive, and published his findings. The disease would eventually be called phenylketonuria. PKU.</p>

<p>None of this helped the Egeland children. Dag died at six. Liv never learned to speak and lived in an institution until her death at fifty-one. Borgny's observation (a mother noticing something wrong with her child's urine) produced one of the landmark discoveries in metabolic medicine and did nothing for the family that made it possible.</p>

<hr />

<p>Seventeen years passed. In 1951, at Birmingham Children's Hospital in England, a two-year-old girl named Sheila Jones arrived with diagnosed PKU. Her mother, Mary Jones, asked the doctors a question that no one had a good answer for: are you going to treat my child?</p>

<p>Three researchers took the question seriously. Horst Bickel, Evelyn Hickmans, and John Gerrard set out to build a phenylalanine-free diet. Their method was crude. They poured milk protein through a glass column of charcoal to strip out the phenylalanine. The resulting formula was, by all accounts, unpleasant. Sheila was the first child in the world to receive it.</p>

<p>Her condition improved. Her development progressed. The treatment worked, but only because it started early enough. PKU causes damage by accumulation. Excess phenylalanine is neurotoxic. Once the brain damage occurs it is irreversible. Bickel had proven the treatment. The remaining problem was timing: how do you find the children before the damage begins?</p>

<hr />

<p>Robert Guthrie was not looking for PKU. He was a microbiologist at Roswell Park Cancer Institute in Buffalo, New York, studying bacterial growth inhibition as part of cancer research. His son John had been born in 1947 with an intellectual disability from a cause unrelated to PKU. That experience drew Guthrie into the National Association for Retarded Children, where he spent years alongside families living with conditions no one could name and no one was funding.</p>

<p>In 1957, a colleague at Roswell Park mentioned PKU to him: a metabolic disorder with a known biochemical signature and a proven dietary treatment, but no practical way to detect it in newborns before the damage set in. The following year, Guthrie's fifteen-month-old niece was diagnosed with PKU. Too late. The damage was done.</p>

<p>Guthrie had spent years studying how chemicals inhibit bacterial growth. He knew that <em>Bacillus subtilis</em> requires phenylalanine to grow, and that you could suppress that growth with an antagonist. He built a test: an agar plate coated with the inhibitor, seeded with bacteria. Place a disc of blood-soaked filter paper on the plate. If the blood carries excess phenylalanine, it overwhelms the inhibitor and the bacteria grow in a visible ring. Normal blood, no ring. A diagnosis you can read with your eyes.</p>

<p>The test was elegant. What made it transformative was the second innovation: the dried blood spot. A drop of blood from a newborn's heel, absorbed onto filter paper, dried at room temperature, and mailed in a standard envelope. No refrigeration. No special handling. No trained phlebotomist. No hospital laboratory. A nurse, a heel prick, a card, and a stamp.</p>

<p>In 1960, Guthrie launched a pilot across 29 states. Four hundred thousand newborns screened. Thirty-nine PKU cases identified. Thirty-nine children whose lives were changed by a piece of paper and a bacterial culture.</p>

<hr />

<p>The medical establishment did not applaud. It organized against him.</p>

<p>The American Medical Association voted in 1964 to formally oppose compulsory PKU testing. The resolution called it socialized medicine and an infringement on the private practice of medicine. State medical societies uniformly opposed screening mandates. Prominent clinicians challenged the test's accuracy. The Atlantic Monthly published a piece in 1963 arguing that Guthrie should be prosecuted for misdiagnosing infants. As late as 1967, with most states already passing screening laws, nationally recognized physicians were denouncing mandatory screening at a conference sponsored by the March of Dimes.</p>

<p>Guthrie did not win the argument through professional channels. He won it through families.</p>

<p>The parent advocacy networks he had built through the Association for Retarded Children became the political force that moved state legislatures. Massachusetts mandated newborn PKU screening in 1963. By 1965, thirty-two states had enacted screening laws, twenty-seven of them compulsory. By the mid-1970s, screening was routine across the industrialized world.</p>

<p>The institutions that controlled medicine tried to stop universal screening. The families whose children needed it pushed it through, state by state, year by year. The professionals supplied the science. The parents supplied the political will. <strong>That combination is not historical trivia. It is the operating model for rare disease progress.</strong></p>

<hr />

<p>Today, every baby born in the United States is screened. Nearly four million newborns a year. The Recommended Uniform Screening Panel has expanded from PKU alone to 29 core conditions and 26 secondary conditions. Over 12,000 infants are identified annually who would otherwise face severe disability or death. PKU has been virtually eliminated as a cause of intellectual disability in this country.</p>

<p>The 29 conditions on today's screening panel represent the rare diseases that got lucky. Identified at birth, given dietary intervention or enzyme replacement or early treatment, their outcomes transformed by the infrastructure Guthrie built from a bacterial culture and a piece of filter paper.</p>

<p>But there are over 7,000 known rare disorders affecting more than 30 million Americans. Fewer than 5% have an FDA-approved treatment. For the vast majority there was no screening miracle. There is diagnosis that takes an average of five years. There is treatment that does not exist. There is funding that depends on whether a parent can build a foundation from a kitchen table. There is hope that runs on stubbornness.</p>

<hr />

<p>The full arc of the PKU story took 29 years, from Borgny Egeland's observation about urine to a national public health system. A mother noticed something. A biochemist characterized it. A clinician proved the treatment. A microbiologist built the detection infrastructure. And families, against organized professional opposition, made it law.</p>

<p>Every step depended on data reaching the right person at the right time. Borgny's observation reaching Folling. Folling's published findings reaching Bickel. Bickel's treatment results reaching Guthrie. Guthrie's screening data reaching state legislatures. At no point did an institution build the pipeline. Individuals did, motivated by proximity to the disease and equipped with methods borrowed from adjacent fields.</p>

<p>Guthrie solved two problems at once: whether the condition could be detected, and whether a specimen could be collected from every newborn, everywhere, without requiring infrastructure that most families would never access. The institutions that controlled medicine said it was unnecessary, inaccurate, and an overreach. Guthrie made it so simple that the objections stopped mattering.</p>

<p>That is the challenge the Plausible Mechanism Framework now faces at the genomic scale. The science exists to develop individualized therapies for rare genetic diseases. The FDA has formalized a data-first methodology that accepts natural history as the evidentiary comparator. What does not yet exist is the equivalent of the Guthrie card: a standardized, portable, patient-controlled data package that lets the people closest to the disease contribute evidence that is structurally valid, regulatory compliant, and usable across research programs without institutional intermediation.</p>

<p><strong>We are building that infrastructure. We named it after Guthrie.</strong></p>`,
  },
  {
    slug: "what-best-case-looks-like-in-rare-disease",
    title: "What \"Best Case\" Looks Like in Rare Disease",
    description:
      "PKU has newborn screening, a known treatment, and decades of research. The care is still rudimentary. This is what the lucky ones get.",
    category: "Patient Experience",
    body: `<p>If you have phenylketonuria (PKU), a metabolic disorder known since the 1960s, your adult treatment hasn't meaningfully changed since then. You likely still see a <strong>pediatrician</strong> because no adult-facing specialty exists. Your medical food (a free amino acid formula so unpalatable most people cannot tolerate it) must be <strong>picked up at the county health department</strong> because it can't be delivered like other medicine. And despite decades of newborn screening, there is still no <strong>daily at-home monitoring</strong> analogous to a diabetic glucose monitor.</p>
<p>Most people with PKU never receive a <strong>genetic panel</strong> as part of diagnosis or treatment. Occasional therapies emerge, but without daily lifestyle data, their acuity is stunted. This is what "rudimentary" looks like in rare disease, and PKU is one of the <em>better-characterized</em> conditions.</p>
<h3>Why treatments stay rudimentary</h3>
<ul>
<li><strong>No aggregated data</strong>: Each patient's daily experience vanishes. There's no shared corpus to find patterns across thousands of people.</li>
<li><strong>No market incentive</strong>: Individual rare diseases are too small for pharma ROI models. The data stays fragmented, and the market never forms.</li>
<li><strong>No patient ownership</strong>: When data is collected, it belongs to the institution. If that institution falters, as 23andMe did in bankruptcy, patient data goes with it.</li>
<li><strong>No portability</strong>: Even willing patients can't easily move data between researchers, institutions, or countries.</li>
</ul>`,
  },
  {
    slug: "from-n-of-1-to-engine-of-cures",
    title: "From N-of-1 to Engine of Cures",
    description:
      "PKU made newborn screening because of a technical accident. For the other 7,000 diseases, we need infrastructure, not luck.",
    category: "Science & Data",
    body: `<p>People with PKU are, in a real sense, the lucky ones. PKU made it onto the newborn screening panel because a microbiologist named Robert Guthrie happened to invent a cheap bacterial assay in 1963. That is not strategy. That is a <strong>technical accident of history</strong>.</p>
<p>The vast majority of the 7,000+ known rare diseases have no screening test, no established natural history, and often no specialist who has seen more than a handful of cases in a career.</p>
<p>For those diseases, the path to treatment has always been the same: wait for a researcher to care, wait for a grant cycle to align, wait for enough patients to be gathered in one institution to power a study. Most people don't live long enough to see the end of that pipeline.</p>
<p><strong>N-of-1 changes the math. Not as anecdote. As infrastructure.</strong></p>
<h3>How N-of-1 Scales</h3>
<table>
<thead><tr><th>Patients</th><th>What it is</th></tr></thead>
<tbody>
<tr><td>1</td><td>Anecdote</td></tr>
<tr><td>10</td><td>Case series</td></tr>
<tr><td>50</td><td>Signal</td></tr>
<tr><td>200</td><td>Natural history</td></tr>
<tr><td>1,000</td><td>Population model</td></tr>
<tr><td>10,000+</td><td>Engine of cures</td></tr>
</tbody>
</table>
<p>The difference between "my kid does better on this formula" and actionable clinical evidence is structure, granularity, and portability.</p>`,
  },
  {
    slug: "small-datasets-are-not-small-when-dense",
    title: "Small Datasets Are Not Small When They Are Dense",
    description:
      "A single patient logging daily produces more data than most clinical trials. The problem is not rarity; it is instrumentation.",
    category: "Science & Data",
    body: `<p>Traditional biostatistics needs large sample sizes because the methods are blunt. A Phase 3 trial collects a few dozen data points per patient over months. You need thousands of patients to compensate for sparse data with volume.</p>
<p><strong>Flip that model.</strong> A single patient generating daily structured data (biomarkers, dietary logs, symptom scores, quality-of-life instruments, medication timing) produces more data points in a year than most clinical trials collect from their entire cohort. Now do that across 50 patients with the same disorder, using the same schema.</p>
<ul>
<li>Traditional Phase 3 trial: ~50 data points / patient / year</li>
<li>Patient daily logging: ~2,000+ data points / patient / year</li>
</ul>
<p>Modern causal inference, foundation models trained on biomedical literature, and longitudinal ML methods can extract signal from these datasets that traditional statistics never could. A disease with 200 known patients worldwide is not hopeless. It is <strong>under-instrumented</strong>.</p>
<p>When every patient's daily data uses the same instruments and schema, each individual dataset becomes a node in a network. Patterns that no single clinician could see across geographies, genotypes, and years emerge from the aggregate.</p>`,
  },
  {
    slug: "you-are-not-a-subject",
    title: "You Are Not a Subject",
    description:
      "Today your daily lived experience goes unrecorded. Cureledger makes you contributor, owner, and beneficiary simultaneously.",
    category: "Data Sovereignty",
    body: `<p>Today, if you have an ultra-rare disease, your options are: enroll in a trial you may never qualify for, donate samples to a biobank you will never hear from again, or wait. In all three cases, your daily lived experience, the richest dataset about your disease, goes unrecorded and unused.</p>
<p>Cureledger inverts this. Every day you log symptoms, track what you eat, review the products that help you function, you are building the natural history study that your disease never had.</p>
<ul>
<li><strong>Contributor</strong>: Your daily data builds the corpus your disease never had.</li>
<li><strong>Owner</strong>: Your data stays yours. It travels with you. You can withdraw it at any time.</li>
<li><strong>Beneficiary</strong>: When a researcher or AI model surfaces a pattern relevant to your genotype, you are the first to know.</li>
</ul>
<p>You are not a subject. You are not a data point someone else profits from.</p>`,
  },
  {
    slug: "the-fda-is-ready-the-infrastructure-is-not",
    title: "The FDA Is Ready. The Infrastructure Is Not.",
    description:
      "The regulatory architecture for N-of-1 therapeutics exists. What's missing is the patient-side data to feed it.",
    category: "Regulatory",
    body: `<p>The FDA's <strong>Plausible Mechanism Framework</strong> says it plainly: if you can demonstrate a well-characterized mechanism and sufficient natural history data, you do not need a traditional randomized controlled trial with thousands of patients.</p>
<p>The <strong>21st Century Cures Act</strong> formalized Real-World Evidence as a valid basis for regulatory submissions. The <strong>ISTAND pilot</strong> established pathways for novel biomarkers. Draft guidance on individualized therapeutics explicitly requires daily natural history data at a granularity that clinical encounters cannot produce.</p>
<p>The regulatory architecture for N-of-1 is being built right now. What is missing is the <strong>patient-side data infrastructure</strong> to feed it. Disorders and their mechanisms <strong>constellate</strong>: an array of genetic variations that only reveal their patterns in data, not in any single doctor's office.</p>
<h3>Regulatory foundations already in place</h3>
<ul>
<li><strong>Plausible Mechanism Framework</strong>: N-of-1 pathway for individualized therapies</li>
<li><strong>21st Century Cures Act</strong>: Real-World Evidence for regulatory submissions</li>
<li><strong>ISTAND Pilot</strong>: Novel biomarker qualification pathways</li>
<li><strong>Draft guidance on individualized therapeutics</strong>: Requires daily natural history data</li>
</ul>
<h3>What patient data enables</h3>
<ul>
<li>Natural history studies at population scale</li>
<li>Biomarker discovery across disorder clusters</li>
<li>Genotype-phenotype correlations for undercharacterized variants</li>
<li>Quality-of-life baselines the FDA can reference</li>
</ul>`,
  },
  {
    slug: "cures-not-management",
    title: "Cures, Not Management",
    description:
      "Drug development rewards chronic conditions. Rare disease got left behind. But when the data is structured, a cure is an engineering problem.",
    category: "Vision",
    body: `<p>Drug development rewards chronic conditions at scale: therapies patients take indefinitely. That model has produced remarkable medicine for large populations. It has also produced a vocabulary: <em>management, intervention, treatment.</em> Words that describe ongoing relationships, not endpoints.</p>
<p>For conditions affecting a few hundred or a few thousand people, that model was never going to arrive. But many of these conditions have known genetic mechanisms, identifiable molecular targets, and patients generating real-world data every day. What they lack is not scientific possibility. It is infrastructure, incentive, and the willingness to name the goal plainly.</p>
<blockquote><p>When the mechanism is known and the data is structured, a cure is not a fantasy. It is an engineering problem. Engineering problems get solved when the right people have access to the right data.</p></blockquote>`,
  },
  {
    slug: "we-are-not-23andme",
    title: "We Are Not 23andMe",
    description:
      "When 23andMe went bankrupt, patient data went with it. Cureledger is built so that can never happen.",
    category: "Data Sovereignty",
    body: `<p>When 23andMe filed for bankruptcy, the genetic data of millions of people became a corporate asset on the auction block. That is the inevitable outcome when patient data is owned by a startup.</p>
<p>Cureledger is architecturally different:</p>
<ul>
<li><strong>You own your data</strong>: Not a startup, not a hospital, not a bankrupt company. You. Cureledger Inc. is custodian and trustee. You may withdraw your data at any time, for any reason.</li>
<li><strong>Privacy by design</strong>: Encryption at rest and in transit. Conditional reidentification protocols ensure you alone may be contacted when your data contributes to a relevant breakthrough.</li>
<li><strong>Health data portability</strong>: Built for interoperability from day one. HIPAA and GDPR compliance are architectural requirements, not afterthoughts. Your data travels with you.</li>
</ul>`,
  },
  {
    slug: "the-regulatory-landscape",
    title: "The Regulatory Landscape Is Finally Ready",
    description:
      "Frameworks for small-population trials, patient-generated evidence, and AI-driven pattern recognition now exist. The infrastructure to feed them does not.",
    category: "Regulatory",
    body: `<p>For decades, the regulatory path to drug approval assumed large populations. Randomized controlled trials with thousands of patients. Phase 1, 2, and 3, each requiring more data, more patients, more time. For diseases affecting a few hundred or a few thousand people, that pipeline was never going to arrive.</p>
<p>That is changing, not because regulators suddenly care more, but because the science and the policy have matured in parallel.</p>
<h3>What exists now</h3>
<ul>
<li><strong>Plausible Mechanism Framework (Feb 2026)</strong>: If you can demonstrate the disease-causing molecular abnormality and show your therapy targets the root cause, combined with well-characterized natural history data, you can pursue approval with a single study. One hundred mutations of the same gene no longer need one hundred trials.</li>
<li><strong>Rare Disease Evidence Pathway (RDEP)</strong>: For ultra-rare conditions affecting fewer than 1,000 US patients with known genetic defects and no existing therapies, the FDA now accepts a single pivotal trial plus confirmatory evidence.</li>
<li><strong>Innovative Trial Designs for Small Populations</strong>: Single-arm trials where patients serve as their own controls. Bayesian designs. Adaptive enrichment. Disease progression modeling. The toolkit for small populations has expanded dramatically.</li>
<li><strong>Real-World Evidence</strong>: The 21st Century Cures Act formalized patient-generated real-world data as a valid basis for regulatory submissions. The ISTAND pilot created pathways for novel biomarkers.</li>
</ul>
<h3>What is still missing</h3>
<p>Every one of these frameworks relies on something that barely exists: <strong>structured, longitudinal patient data at clinical granularity</strong>. The Plausible Mechanism Framework requires "well-characterized natural history data" but provides no standard for how to collect, version, or share it across programs. Guidance documents "encourage" data sharing but specify no privacy-preserving infrastructure.</p>
<p>The regulatory door is open. The question is whether the patient-side infrastructure exists to walk through it. That is the gap Cureledger is built to close. We did not wait for regulators to ask; we have been building toward this moment for over a decade.</p>
<h3>Key context</h3>
<ul>
<li>The FDA default is now <strong>one trial, not two</strong> for all drugs (Feb 2026)</li>
<li>Master protocols allow one application to cover multiple mutations of the same gene</li>
<li>Natural history data can serve as the missing comparison group</li>
<li>The federal advisory committee for newborn screening (ACHDNC) was terminated in April 2025, leaving a gap in oversight that patient-driven data infrastructure can help fill</li>
</ul>`,
  },
  {
    slug: "henrietta-lacks-at-scale",
    title: "Henrietta Lacks at Scale",
    description:
      "AI drug discovery is about to make patient data the most valuable raw material in medicine. Without ownership infrastructure, that is extraction, not innovation.",
    category: "Data Sovereignty",
    body: `<p>In 1951, cells were taken from Henrietta Lacks without her knowledge or consent. Those cells, HeLa cells, became one of the most important tools in medical research. They contributed to the polio vaccine, cancer treatments, gene mapping, and countless other breakthroughs. The medical industry built billions of dollars of value on her biological material. Her family didn't know for decades. They never saw a cent.</p>
<p>That story is usually told as a historical injustice. It should be understood as a <strong>structural template</strong>, one that is about to repeat at a scale Henrietta Lacks's family could not have imagined.</p>
<h3>The new raw material</h3>
<p>AI-driven drug discovery changes what is valuable. It is no longer just tissue samples or genetic sequences. It is <strong>daily health data</strong>: symptom logs, dietary patterns, medication responses, biomarker trends, quality-of-life scores. Dense, longitudinal, structured patient data is becoming the primary input for therapeutic AI models. Every entry a patient makes is potential signal for a breakthrough worth billions.</p>
<p>The economics are straightforward: the more patient data these models consume, the more valuable their outputs become. The question is who captures that value.</p>
<h3>The 23andMe precedent</h3>
<p>When 23andMe filed for bankruptcy, the genetic data of 15 million people became a corporate asset on an auction block. That is not a hypothetical worst case. That is what happened. The terms of service allowed it. The regulatory framework did not prevent it. Fifteen million people's genetic information, the most intimate data a person can generate, was treated as inventory in a liquidation proceeding.</p>
<p>Now imagine that at the scale AI drug discovery demands. Not 15 million genetic snapshots, but continuous daily health data from millions of patients, each generating thousands of data points per year. Without infrastructure that puts patients in control of their own data, every health app, every wearable, every patient portal becomes a collection pipeline for AI models that patients will never benefit from and can never withdraw from.</p>
<h3>Extraction is not innovation</h3>
<p>There is a version of AI drug discovery that works like this: companies collect patient data through apps and platforms, train models on that data, discover therapeutic targets, and license those discoveries for billions, while the patients whose data made it possible are never informed, never compensated, and have no mechanism to withdraw.</p>
<p>That is not innovation. That is extraction. And the people it extracts from are the ones who are already sick.</p>
<h3>The alternative</h3>
<p>Patient data sovereignty is not a privacy feature. It is the structural prerequisite for AI drug discovery that does not repeat Henrietta Lacks's story 30 million times over.</p>
<p>What that requires:</p>
<ul>
<li><strong>Ownership by default</strong>: Patient data belongs to the patient. Not to the platform, not to the custodian, not to the company that happens to be solvent today. The patient.</li>
<li><strong>Withdrawal without penalty</strong>: At any time, for any reason, no questions asked. If a company goes bankrupt, the data does not go with it.</li>
<li><strong>Benefit sharing by architecture</strong>: When patient data contributes to a discovery, the patient knows. Not because someone chose to tell them, but because the system is built to require it.</li>
<li><strong>Privacy that survives corporate failure</strong>: Encryption, data trusts, and legal structures that protect patient data even when the organization holding it ceases to exist.</li>
</ul>
<p>This is what Cureledger is built to do. Not because data sovereignty is a nice feature to have. Because without it, the AI revolution in medicine becomes the largest patient data extraction event in history, and the cost falls on the people who can least afford it.</p>`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getBlogCategories(): string[] {
  const seen = new Set<string>();
  const cats: string[] = [];
  for (const p of blogPosts) {
    if (!seen.has(p.category)) {
      seen.add(p.category);
      cats.push(p.category);
    }
  }
  return cats;
}
