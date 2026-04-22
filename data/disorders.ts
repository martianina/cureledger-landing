export interface Disorder {
  handle: string;
  name: string;
  abbreviation?: string;
  category:
    | "eds"
    | "amino-acid"
    | "organic-acid"
    | "fatty-acid-oxidation"
    | "endocrine"
    | "hemoglobin"
    | "other-newborn"
    | "lysosomal-storage";
  categoryLabel: string;
  description: string;
  prevalence?: string;
  inheritance?: string;
  screenedAtBirth: boolean;
  rusp: boolean;
}

export const disorders: Disorder[] = [
  {
    handle: "hypermobile-eds",
    name: "Hypermobile Ehlers-Danlos Syndrome",
    abbreviation: "hEDS",
    category: "eds",
    categoryLabel: "Ehlers-Danlos Syndrome",
    description:
      "Hypermobile EDS is the most common form of Ehlers-Danlos syndrome and is characterized by joint hypermobility, skin that may be soft or velvety, and chronic musculoskeletal pain in many patients. Diagnosis is clinical and relies on standardized criteria rather than a single genetic test. Management focuses on physical therapy, activity modification, and addressing associated symptoms such as dysautonomia and pain.",
    prevalence: "1 in 5,000-20,000",
    inheritance: "Autosomal dominant",
    screenedAtBirth: false,
    rusp: false,
  },
  {
    handle: "classical-eds",
    name: "Classical Ehlers-Danlos Syndrome",
    abbreviation: "cEDS",
    category: "eds",
    categoryLabel: "Ehlers-Danlos Syndrome",
    description:
      "Classical EDS features marked skin hyperextensibility, widened atrophic scars, and joint hypermobility. It is often associated with pathogenic variants in COL5A1 or COL5A2 affecting type V collagen. Wound healing complications and tissue fragility warrant careful surgical and trauma precautions.",
    prevalence: "1 in 20,000-40,000",
    inheritance: "Autosomal dominant (often COL5A1/COL5A2)",
    screenedAtBirth: false,
    rusp: false,
  },
  {
    handle: "vascular-eds",
    name: "Vascular Ehlers-Danlos Syndrome",
    abbreviation: "vEDS",
    category: "eds",
    categoryLabel: "Ehlers-Danlos Syndrome",
    description:
      "Vascular EDS is caused by pathogenic variants in COL3A1 and carries the highest risk of arterial, uterine, and hollow-organ rupture among EDS types. The clinical picture may include thin skin, easy bruising, and a characteristic facial appearance, but severity varies. Patients benefit from specialized multidisciplinary care and avoidance of invasive procedures when alternatives exist.",
    prevalence: "1 in 50,000-200,000",
    inheritance: "Autosomal dominant (COL3A1)",
    screenedAtBirth: false,
    rusp: false,
  },
  {
    handle: "kyphoscoliotic-eds",
    name: "Kyphoscoliotic Ehlers-Danlos Syndrome",
    abbreviation: "kEDS",
    category: "eds",
    categoryLabel: "Ehlers-Danlos Syndrome",
    description:
      "Kyphoscoliotic EDS combines congenital or early-onset kyphoscoliosis with generalized joint laxity and often diminished muscle tone. It follows an autosomal recessive inheritance pattern and is very rare compared with hypermobile EDS. Orthopedic, rehabilitation, and genetic evaluation guide long-term care.",
    prevalence: "Very rare",
    inheritance: "Autosomal recessive",
    screenedAtBirth: false,
    rusp: false,
  },
  {
    handle: "arthrochalasia-eds",
    name: "Arthrochalasia Ehlers-Danlos Syndrome",
    abbreviation: "aEDS",
    category: "eds",
    categoryLabel: "Ehlers-Danlos Syndrome",
    description:
      "Arthrochalasia EDS is distinguished by severe generalized joint hypermobility and congenital hip dislocation. It is autosomal dominant and rare, with collagen processing defects underlying connective tissue fragility. Early orthopedic and developmental support is often important.",
    prevalence: "Very rare",
    inheritance: "Autosomal dominant",
    screenedAtBirth: false,
    rusp: false,
  },
  {
    handle: "dermatosparaxis-eds",
    name: "Dermatosparaxis Ehlers-Danlos Syndrome",
    abbreviation: "dEDS",
    category: "eds",
    categoryLabel: "Ehlers-Danlos Syndrome",
    description:
      "Dermatosparaxis EDS is an extremely rare autosomal recessive disorder with marked skin fragility, bruising, and redundant, soft skin. Wound care and infection prevention are central to management. Genetic confirmation helps family counseling and care planning.",
    prevalence: "Extremely rare",
    inheritance: "Autosomal recessive",
    screenedAtBirth: false,
    rusp: false,
  },
  {
    handle: "phenylketonuria",
    name: "Phenylketonuria",
    abbreviation: "PKU",
    category: "amino-acid",
    categoryLabel: "Amino Acid Disorders",
    description:
      "PKU is an inborn error of phenylalanine metabolism that leads to toxic accumulation if untreated, causing intellectual disability and neurological harm. Newborn screening identifies affected infants so a low-phenylalanine diet and, in some cases, adjunct therapies can begin promptly. Lifelong metabolic monitoring remains important for optimal outcomes.",
    prevalence: "1 in 10,000-15,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "maple-syrup-urine-disease",
    name: "Maple Syrup Urine Disease",
    abbreviation: "MSUD",
    category: "amino-acid",
    categoryLabel: "Amino Acid Disorders",
    description:
      "MSUD impairs breakdown of the branched-chain amino acids leucine, isoleucine, and valine, producing characteristic maple-syrup-odor urine and risking metabolic crises with encephalopathy. Early dietary restriction of branched-chain amino acids and urgent management of intercurrent illness are lifesaving. Newborn screening enables treatment before irreversible injury occurs.",
    prevalence: "1 in 185,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "homocystinuria",
    name: "Homocystinuria",
    abbreviation: "HCY",
    category: "amino-acid",
    categoryLabel: "Amino Acid Disorders",
    description:
      "Classic homocystinuria most often results from cystathionine beta-synthase deficiency and elevates homocysteine and methionine, predisposing to thromboembolism, ectopia lentis, and developmental issues. Treatment may include dietary methionine restriction, betaine, and vitamin B6 responsiveness in some genotypes. Newborn screening allows initiation of therapy in the first weeks of life.",
    prevalence: "1 in 200,000-300,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "citrullinemia-type-i",
    name: "Citrullinemia Type I",
    abbreviation: "CIT-I",
    category: "amino-acid",
    categoryLabel: "Amino Acid Disorders",
    description:
      "Citrullinemia type I is a urea cycle disorder caused by argininosuccinate synthetase deficiency, leading to hyperammonemia that can present catastrophically in infancy or later in life. Acute hyperammonemia is a medical emergency requiring specialized metabolic treatment. Screening facilitates presymptomatic diet and medication strategies to reduce ammonia load.",
    prevalence: "1 in 57,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "argininosuccinic-aciduria",
    name: "Argininosuccinic Aciduria",
    abbreviation: "ASA",
    category: "amino-acid",
    categoryLabel: "Amino Acid Disorders",
    description:
      "Argininosuccinic aciduria results from argininosuccinate lyase deficiency and disrupts the urea cycle, causing ammonia accumulation and chronic complications including hepatic involvement and trichorrhexis nodosa in some patients. Prompt recognition and protein intake management, medications, and emergency protocols for illness are essential. Newborn screening supports early diagnosis before severe neonatal presentation.",
    prevalence: "1 in 70,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "tyrosinemia-type-i",
    name: "Tyrosinemia Type I",
    abbreviation: "TYR-I",
    category: "amino-acid",
    categoryLabel: "Amino Acid Disorders",
    description:
      "Tyrosinemia type I is caused by fumarylacetoacetate hydrolase deficiency and can lead to liver failure, renal Fanconi syndrome, and neurologic crises if untreated. Nitisinone combined with dietary tyrosine and phenylalanine restriction has transformed prognosis when started early. Newborn screening identifies infants for treatment before hepatocellular damage advances.",
    prevalence: "1 in 100,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "propionic-acidemia",
    name: "Propionic Acidemia",
    abbreviation: "PA",
    category: "organic-acid",
    categoryLabel: "Organic Acid Disorders",
    description:
      "Propionic acidemia blocks metabolism of certain amino acids and odd-chain fatty acids, causing organic acid accumulation and life-threatening acidosis. Episodes may be triggered by catabolic stress such as infection or fasting. Early dietary protein management, carnitine, and emergency protocols reduce morbidity and mortality.",
    prevalence: "1 in 100,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "methylmalonic-acidemia",
    name: "Methylmalonic Acidemia",
    abbreviation: "MMA",
    category: "organic-acid",
    categoryLabel: "Organic Acid Disorders",
    description:
      "Methylmalonic acidemia encompasses defects in methylmalonyl-CoA mutase or cofactor metabolism, leading to methylmalonic acid buildup and recurrent metabolic decompensation. Presentation ranges from neonatal encephalopathy to later-onset episodes under physiological stress. Newborn screening permits early diet, medication, and in some cases transplant evaluation.",
    prevalence: "1 in 50,000-100,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "isovaleric-acidemia",
    name: "Isovaleric Acidemia",
    abbreviation: "IVA",
    category: "organic-acid",
    categoryLabel: "Organic Acid Disorders",
    description:
      "Isovaleric acidemia impairs leucine catabolism, producing isovaleric acid that can cause severe acidosis and a characteristic “sweaty feet” odor during crises. Glycine and carnitine are mainstays of chronic therapy alongside protein restriction. Screening identifies asymptomatic newborns before their first metabolic emergency.",
    prevalence: "1 in 250,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "glutaric-acidemia-type-i",
    name: "Glutaric Acidemia Type I",
    abbreviation: "GA-I",
    category: "organic-acid",
    categoryLabel: "Organic Acid Disorders",
    description:
      "GA-I is caused by glutaryl-CoA dehydrogenase deficiency and predisposes to striatal injury and dystonic movement disorders, especially during febrile illness in infancy. Lysine and tryptophan restriction and emergency care during illness aim to prevent neurologic damage. Newborn screening supports presymptomatic intervention.",
    prevalence: "1 in 100,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "3-mcc-deficiency",
    name: "3-Methylcrotonyl-CoA Carboxylase Deficiency",
    abbreviation: "3-MCC",
    category: "organic-acid",
    categoryLabel: "Organic Acid Disorders",
    description:
      "3-MCC deficiency is a disorder of leucine metabolism that may be asymptomatic in many screen-positive infants but can cause hypoglycemia, vomiting, or developmental concerns in others. Management typically involves cautious protein intake and avoidance of catabolic stress, guided by biochemical monitoring. Universal screening identifies cases that might otherwise present only after illness.",
    prevalence: "1 in 36,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "beta-ketothiolase-deficiency",
    name: "Beta-Ketothiolase Deficiency",
    abbreviation: "BKT",
    category: "organic-acid",
    categoryLabel: "Organic Acid Disorders",
    description:
      "Beta-ketothiolase (mitochondrial acetoacetyl-CoA thiolase) deficiency disrupts isoleucine and ketone body metabolism, leading to ketoacidosis during fasting or illness. Treatment emphasizes avoidance of prolonged fasting, illness plans, and sometimes dietary adjustment. It is very rare but included on the RUSP for early detection.",
    prevalence: "Very rare",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "medium-chain-acyl-coa-dehydrogenase-deficiency",
    name: "Medium-Chain Acyl-CoA Dehydrogenase Deficiency",
    abbreviation: "MCADD",
    category: "fatty-acid-oxidation",
    categoryLabel: "Fatty Acid Oxidation Disorders",
    description:
      "MCADD is the most common fatty acid oxidation disorder and impairs breakdown of medium-chain fats during fasting, risking hypoketotic hypoglycemia, seizures, and sudden death in undiagnosed infants. Avoidance of prolonged fasting and emergency glucose protocols during illness are cornerstones of care. Newborn screening has markedly reduced mortality.",
    prevalence: "1 in 17,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "very-long-chain-acyl-coa-dehydrogenase-deficiency",
    name: "Very Long-Chain Acyl-CoA Dehydrogenase Deficiency",
    abbreviation: "VLCADD",
    category: "fatty-acid-oxidation",
    categoryLabel: "Fatty Acid Oxidation Disorders",
    description:
      "VLCADD impairs mitochondrial beta-oxidation of long-chain fatty acids and can present with hypoglycemia, cardiomyopathy, or hepatic dysfunction in infancy. Long-term management includes structured feeding, medium-chain triglyceride strategies, and illness emergency plans. Screening identifies patients before metabolic or cardiac decompensation.",
    prevalence: "1 in 40,000-120,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "long-chain-3-hydroxyacyl-coa-dehydrogenase-deficiency",
    name: "Long-Chain 3-Hydroxyacyl-CoA Dehydrogenase Deficiency",
    abbreviation: "LCHADD",
    category: "fatty-acid-oxidation",
    categoryLabel: "Fatty Acid Oxidation Disorders",
    description:
      "LCHADD is part of the mitochondrial trifunctional protein pathway and causes hypoketotic hypoglycemia, peripheral neuropathy, and retinopathy in some patients. Dietary fat modification, avoidance of fasting, and specialized follow-up are required. Early detection through screening improves outcomes before irreversible complications.",
    prevalence: "1 in 250,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "trifunctional-protein-deficiency",
    name: "Trifunctional Protein Deficiency",
    abbreviation: "TFP",
    category: "fatty-acid-oxidation",
    categoryLabel: "Fatty Acid Oxidation Disorders",
    description:
      "TFP deficiency affects long-chain fatty acid oxidation with clinical overlap including hypoglycemia, cardiomyopathy, and neuromuscular manifestations in severe cases. Management parallels other long-chain FAO disorders with fasting avoidance and tailored nutrition. It is very rare but screened because of preventable morbidity and mortality.",
    prevalence: "Very rare",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "carnitine-palmitoyltransferase-i-deficiency",
    name: "Carnitine Palmitoyltransferase I Deficiency",
    abbreviation: "CPT-I",
    category: "fatty-acid-oxidation",
    categoryLabel: "Fatty Acid Oxidation Disorders",
    description:
      "CPT-I deficiency limits transport of long-chain fatty acids into mitochondria for oxidation, predisposing to hypoketotic hypoglycemia under fasting stress. The hepatic form is the classic presentation described in screening contexts. Very rare cases benefit from metabolic clinic guidance and illness protocols.",
    prevalence: "Very rare",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "carnitine-palmitoyltransferase-ii-deficiency",
    name: "Carnitine Palmitoyltransferase II Deficiency",
    abbreviation: "CPT-II",
    category: "fatty-acid-oxidation",
    categoryLabel: "Fatty Acid Oxidation Disorders",
    description:
      "CPT-II deficiency has infantile, childhood, and adult forms with muscle pain, rhabdomyolysis, or severe neonatal disease depending on variant severity. Avoidance of prolonged exercise, fasting, and cold stress reduces episodes in milder phenotypes. Newborn screening targets severe presentations for early intervention.",
    prevalence: "1 in 750,000-1,000,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "congenital-hypothyroidism",
    name: "Congenital Hypothyroidism",
    abbreviation: "CH",
    category: "endocrine",
    categoryLabel: "Endocrine Disorders",
    description:
      "Congenital hypothyroidism is thyroid hormone deficiency present at birth, most often from thyroid dysgenesis or dyshormonogenesis. Untreated, it causes irreversible intellectual disability and poor growth. Levothyroxine replacement started in the first weeks of life, guided by confirmatory testing, supports normal neurodevelopment.",
    prevalence: "1 in 2,000-4,000",
    inheritance: "Variable (often sporadic or multifactorial)",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "congenital-adrenal-hyperplasia",
    name: "Congenital Adrenal Hyperplasia",
    abbreviation: "CAH",
    category: "endocrine",
    categoryLabel: "Endocrine Disorders",
    description:
      "Classic CAH due to 21-hydroxylase deficiency impairs cortisol synthesis, leading to adrenal insufficiency and, in salt-wasting forms, life-threatening electrolyte crisis. Excess androgen production can cause virilization of females. Newborn screening with confirmatory testing enables glucocorticoid and mineralocorticoid therapy before shock or ambiguous genitalia complications dominate.",
    prevalence: "1 in 15,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "sickle-cell-disease",
    name: "Sickle Cell Disease",
    abbreviation: "SCD",
    category: "hemoglobin",
    categoryLabel: "Hemoglobinopathies",
    description:
      "Sickle cell disease is caused by homozygous or compound heterozygous hemoglobin S-related genotypes that polymerize under deoxygenation, producing hemolysis, vaso-occlusion, and organ damage. Comprehensive care includes penicillin prophylaxis, immunizations, transcranial screening, and hydroxyurea when indicated. Newborn screening identifies infants for family education and specialty follow-up before sepsis or stroke risk peaks.",
    prevalence: "Approximately 1 in 365 in African American births (population-dependent)",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "s-beta-thalassemia",
    name: "Sickle Beta-Thalassemia",
    abbreviation: "Sβ-thal",
    category: "hemoglobin",
    categoryLabel: "Hemoglobinopathies",
    description:
      "Sickle beta-thalassemia combines sickle hemoglobin with beta-thalassemia mutations, producing variable severity between sickle trait and sickle cell anemia depending on beta-globin output. Clinical management resembles other sickling disorders with attention to pain crises, infection prevention, and transfusion indications. Screening programs detect hemoglobin patterns at birth for timely referral.",
    prevalence: "Varies by ethnicity and region",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "cystic-fibrosis",
    name: "Cystic Fibrosis",
    abbreviation: "CF",
    category: "other-newborn",
    categoryLabel: "Other Newborn Screening",
    description:
      "Cystic fibrosis is caused by CFTR dysfunction leading to thick secretions, chronic pulmonary disease, pancreatic insufficiency, and elevated sweat chloride. Newborn screening uses immunoreactive trypsinogen with DNA reflex or sweat chloride confirmation. Early diagnosis enables nutritional support, airway therapies, and modulator drugs that improve survival and quality of life.",
    prevalence: "Approximately 1 in 3,500 in populations of European ancestry (varies globally)",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "galactosemia",
    name: "Galactosemia",
    category: "other-newborn",
    categoryLabel: "Other Newborn Screening",
    description:
      "Classic galactosemia results from galactose-1-phosphate uridyltransferase deficiency, causing liver failure, cataracts, and sepsis with E. coli if galactose exposure continues. Lifelong dietary galactose restriction begins immediately after diagnosis. Newborn screening prevents symptomatic presentation in many infants.",
    prevalence: "1 in 30,000-60,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "biotinidase-deficiency",
    name: "Biotinidase Deficiency",
    category: "other-newborn",
    categoryLabel: "Other Newborn Screening",
    description:
      "Biotinidase deficiency impairs recycling of biotin, leading to dermatologic, neurologic, immunologic, and auditory problems if untreated. Oral biotin supplementation is highly effective when started early. Screening identifies partial and profound deficiencies so treatment begins before irreversible hearing or vision loss.",
    prevalence: "1 in 60,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "severe-combined-immunodeficiency",
    name: "Severe Combined Immunodeficiency",
    abbreviation: "SCID",
    category: "other-newborn",
    categoryLabel: "Other Newborn Screening",
    description:
      "SCID encompasses genetic defects that abolish T-cell function, leaving infants vulnerable to severe opportunistic infections in early infancy. Hematopoietic cell transplantation or gene therapy can be curative when performed before overwhelming infection. T-cell receptor excision circle (TREC)-based newborn screening enables presymptomatic diagnosis and urgent immunology referral.",
    prevalence: "Approximately 1 in 58,000",
    inheritance: "Variable (X-linked or autosomal recessive depending on gene)",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "pompe-disease",
    name: "Pompe Disease",
    category: "other-newborn",
    categoryLabel: "Other Newborn Screening",
    description:
      "Pompe disease is glycogen storage disease type II caused by acid alpha-glucosidase deficiency, with infantile-onset disease featuring cardiomyopathy and hypotension rapidly progressing without treatment. Enzyme replacement therapy and newer modalities improve outcomes when initiated early. Newborn screening identifies patients before irreversible muscle damage.",
    prevalence: "Approximately 1 in 40,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "spinal-muscular-atrophy",
    name: "Spinal Muscular Atrophy",
    abbreviation: "SMA",
    category: "other-newborn",
    categoryLabel: "Other Newborn Screening",
    description:
      "SMA is a motor neuron disease caused by SMN1 deletion or mutation, leading to progressive weakness and respiratory compromise in untreated severe types. Disease-modifying therapies including gene replacement have transformed prognosis when delivered presymptomatically. Newborn screening supports treatment before motor neuron loss advances.",
    prevalence: "Approximately 1 in 11,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "x-linked-adrenoleukodystrophy",
    name: "X-Linked Adrenoleukodystrophy",
    abbreviation: "X-ALD",
    category: "other-newborn",
    categoryLabel: "Other Newborn Screening",
    description:
      "X-ALD is caused by ABCD1 mutations disrupting very long-chain fatty acid metabolism, with risk of adrenal insufficiency and cerebral demyelination in childhood or adrenomyeloneuropathy in adulthood. Family screening, adrenal monitoring, and transplant eligibility assessment rely on early diagnosis. Newborn screening identifies male infants for longitudinal multidisciplinary care.",
    prevalence: "Approximately 1 in 17,000 male births",
    inheritance: "X-linked",
    screenedAtBirth: true,
    rusp: true,
  },
  {
    handle: "mucopolysaccharidosis-type-i",
    name: "Mucopolysaccharidosis Type I",
    abbreviation: "MPS I",
    category: "other-newborn",
    categoryLabel: "Other Newborn Screening",
    description:
      "MPS I spans Hurler, Hurler-Scheie, and Scheie phenotypes of alpha-L-iduronidase deficiency, causing skeletal dysplasia, organomegaly, corneal clouding, and neurocognitive decline in severe forms. Hematopoietic transplant and enzyme replacement are options depending on phenotype and timing. Newborn screening aims to treat before irreversible disease manifestations.",
    prevalence: "Approximately 1 in 100,000",
    inheritance: "Autosomal recessive",
    screenedAtBirth: true,
    rusp: true,
  },
];

export function getDisorderByHandle(handle: string): Disorder | undefined {
  return disorders.find(d => d.handle === handle);
}

export function getDisordersByCategory(category: string): Disorder[] {
  return disorders.filter(d => d.category === category);
}

export function getCategories(): string[] {
  const seen = new Set<string>();
  const labels: string[] = [];
  for (const d of disorders) {
    if (!seen.has(d.categoryLabel)) {
      seen.add(d.categoryLabel);
      labels.push(d.categoryLabel);
    }
  }
  return labels;
}
