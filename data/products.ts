export interface Product {
  handle: string;
  title: string;
  body: string;
  vendor: string;
  category: string;
  type: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  affiliateUrl: string;
  priceRange: string;
  imageUrl: string;
  disorderTags?: string[];
}

const productsData: Product[] = [
  {
    handle: "push-metagrip-knee-brace",
    imageUrl: "https://m.media-amazon.com/images/I/61gQ3GhVpxL._AC_SL1500_.jpg",
    title: "Push Med Knee Brace",
    vendor: "Push Braces",
    category: "Orthopedic Bracing",
    type: "Knee Braces",
    tags: ["EDS", "hEDS", "hypermobility", "knee", "Knee Braces", "Push Braces", "hyperextension", "POTS"],
    seoTitle: "Push Med Knee Brace Review for EDS | Zebra Reports",
    seoDescription:
      "Hinged knee brace that prevents hyperextension. Known for comfort and daily wearability.",
    body: `<p>Adjustable hinged support limits hyperextension with breathable, skin-friendly fabric designed for extended wear.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Hinged design helps block knee hyperextension common in hEDS.</li>
<li>Adjustable compression supports unstable patellofemoral tracking without rigid immobilization.</li>
<li>Breathable materials reduce heat and moisture that can irritate fragile or stretchy skin.</li>
<li>Lightweight profile supports daily ambulation and activity pacing.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B001IG69GY?tag=zebrareports-20",
    priceRange: "$80-$120",
  },
  {
    handle: "bauerfeind-genutrain-knee-support",
    imageUrl: "https://m.media-amazon.com/images/I/71nBkVMkGBL._AC_SL1500_.jpg",
    title: "Bauerfeind GenuTrain Knee Support",
    vendor: "Bauerfeind",
    category: "Orthopedic Bracing",
    type: "Knee Braces",
    tags: ["EDS", "hEDS", "knee", "Knee Braces", "Bauerfeind", "proprioception", "compression"],
    seoTitle: "Bauerfeind GenuTrain Review for EDS | Zebra Reports",
    seoDescription:
      "Premium knit knee support with proprioceptive feedback. Suitable for daily joint stability.",
    body: `<p>Premium knit knee support with Omega+ pad and medical-grade compression for patellar guidance and comfort.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Improves proprioceptive feedback around a hypermobile knee.</li>
<li>Targeted kneecap stabilization can reduce anterior knee pain with movement.</li>
<li>3D knit construction stays breathable during long wear.</li>
<li>Clinically used design that many patients tolerate for daytime activity.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B081B68X8Q?tag=zebrareports-20",
    priceRange: "$100-$160",
  },
  {
    handle: "silver-ring-splint-swan-neck",
    imageUrl: "https://www.silverringsplint.com/cdn/shop/products/swan-neck-ring-splint_grande.jpg",
    title: "Silver Ring Splint, Swan Neck",
    vendor: "Silver Ring Splint Company",
    category: "Hand & Finger Orthotics",
    type: "Ring Splints",
    tags: ["EDS", "hEDS", "hand", "finger", "Ring Splints", "Silver Ring Splint Company", "swan neck", "hyperextension"],
    seoTitle: "Silver Ring Splint Review for EDS | Zebra Reports",
    seoDescription:
      "Custom sterling silver ring splints preventing finger hyperextension. Designed for EDS hand support.",
    body: `<p>Handcrafted sterling silver ring splints engineered to limit swan neck deformity progression while preserving hand function.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Blocks DIP hyperextension patterns common in connective tissue disorders.</li>
<li>Durable metal splinting often preferred for long-term daily wear versus plastic trials.</li>
<li>Custom sizing improves comfort and cosmesis for visible hand use.</li>
<li>Decades of specialty experience with hand instability presentations.</li>
</ul>`,
    affiliateUrl: "https://www.silverringsplint.com/collections/swan-neck-splints",
    priceRange: "$200-$300",
  },
  {
    handle: "zebrasplints-boutonniere",
    imageUrl: "https://www.zebrasplints.com/cdn/shop/products/boutonniere-splint_grande.jpg",
    title: "ZebraSplints Boutonniere Splint",
    vendor: "ZebraSplints",
    category: "Hand & Finger Orthotics",
    type: "Ring Splints",
    tags: ["EDS", "hEDS", "boutonniere", "Ring Splints", "ZebraSplints", "hand", "finger"],
    seoTitle: "ZebraSplints Review for EDS | Zebra Reports",
    seoDescription:
      "Handcrafted boutonniere ring splints for the EDS community. Functional jewelry meets joint protection.",
    body: `<p>Custom-crafted splints tailored to individual fingers to address boutonniere deformity mechanics.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Supports extensor tendon alignment issues seen with chronic finger instability.</li>
<li>Community-focused designs balance aesthetics with medical function.</li>
<li>Per-finger customization improves fit on narrow or tapered digits.</li>
<li>Reduces compensatory gripping that can worsen wrist and MCP load.</li>
</ul>`,
    affiliateUrl: "https://www.zebrasplints.com",
    priceRange: "$150-$275",
  },
  {
    handle: "supacore-coretech-leggings",
    imageUrl: "https://supacore.com/cdn/shop/products/coretech-leggings-black_grande.jpg",
    title: "Supacore Coretech Compression Leggings",
    vendor: "Supacore",
    category: "Compression Therapy",
    type: "Compression Garments",
    tags: ["EDS", "hEDS", "compression", "Compression Garments", "Supacore", "POTS", "pelvic", "core"],
    seoTitle: "Supacore Coretech Leggings Review for EDS | Zebra Reports",
    seoDescription:
      "Medical-grade compression leggings with patented Coretech technology. Clinically tested for EDS joint stability and POTS.",
    body: `<p>Patented Coretech medical compression in a registered-device garment built for core and pelvic feedback.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Medical-grade compression can support venous return relevant to orthostatic symptoms.</li>
<li>Core engagement may reduce compensatory lumbar hyperextension.</li>
<li>Structured panels can improve proprioception around hip and SI regions.</li>
<li>Designed for extended wear during upright tasks and exercise pacing.</li>
</ul>`,
    affiliateUrl: "https://supacore.com/collections/womens",
    priceRange: "$120-$180",
  },
  {
    handle: "incrediwear-knee-sleeve",
    imageUrl: "https://m.media-amazon.com/images/I/71V5E8U2XML._AC_SL1500_.jpg",
    title: "Incrediwear Knee Sleeve",
    vendor: "Incrediwear",
    category: "Compression Therapy",
    type: "Compression Garments",
    tags: ["EDS", "hEDS", "knee", "Compression Garments", "Incrediwear", "circulation", "skin sensitivity"],
    seoTitle: "Incrediwear Knee Sleeve Review for EDS | Zebra Reports",
    seoDescription:
      "Semiconductor-powered knee sleeve that increases blood flow without heavy compression. Suitable for fragile EDS skin.",
    body: `<p>Semiconductor-based fabric aims to support microcirculation with gentler pressure than dense medical wraps.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Lower-compression option when traditional garments irritate fragile skin.</li>
<li>May be better tolerated overnight for those who cannot wear rigid bracing in bed.</li>
<li>Light proprioceptive cue around the knee without bulky hinges.</li>
<li>Useful bridge when heat/cold sensitivity complicates other modalities.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B0C9MTQTVF?tag=zebrareports-20",
    priceRange: "$40-$60",
  },
  {
    handle: "smartcrutch-forearm-crutch",
    imageUrl: "https://m.media-amazon.com/images/I/41UQSz3zVqL._AC_SL1000_.jpg",
    title: "SmartCRUTCH Ergonomic Forearm Crutch",
    vendor: "SmartCRUTCH",
    category: "Mobility Equipment",
    type: "Mobility Aids",
    tags: ["EDS", "hEDS", "Mobility Aids", "SmartCRUTCH", "wrist", "ambulation", "POTS"],
    seoTitle: "SmartCRUTCH Review for EDS | Zebra Reports",
    seoDescription:
      "Ergonomic forearm crutch that protects hypermobile wrists. Adjustable angle and rotating platform for EDS mobility.",
    body: `<p>Forearm platform crutch with adjustable angle, rotating arm support, and shock-attenuating tip mechanics.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Reduces wrist extension loads compared with standard axillary or straight-handle aids.</li>
<li>Adjustable forearm angle can match hypermobile elbow alignment.</li>
<li>Rotating platform decreases shear stress on unstable radioulnar joints.</li>
<li>Supports energy conservation during flares or dysautonomia-related weakness.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B097NB9VVC?tag=zebrareports-20",
    priceRange: "$85-$170",
  },
  {
    handle: "beurer-em50-tens-unit",
    imageUrl: "https://m.media-amazon.com/images/I/61B5K4zt5wL._AC_SL1500_.jpg",
    title: "Beurer EM50 Menstrual Relax TENS/Heat Pad",
    vendor: "Beurer",
    category: "Pain Relief",
    type: "Pain Management",
    tags: ["EDS", "hEDS", "Pain Management", "Beurer", "TENS", "pelvic pain", "dysmenorrhea"],
    seoTitle: "Beurer EM50 TENS Review for EDS | Zebra Reports",
    seoDescription:
      "Wireless TENS and heat therapy pad for EDS chronic pain management. Wearable and discreet with 15 intensity levels.",
    body: `<p>Dual TENS and heat modality in a wireless, USB-rechargeable wearable pad with 15 intensity levels.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Non-pharmacologic option for pelvic pain overlapping endometriosis or dysmenorrhea.</li>
<li>Heat plus TENS can address visceral-somatic pain amplification.</li>
<li>Discreet profile supports use during work or travel.</li>
<li>Adjustable output helps titrate around sensory hypersensitivity.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B0B5FDV8Q4?tag=zebrareports-20",
    priceRange: "$40-$60",
  },
  {
    handle: "biofreeze-professional-gel",
    imageUrl: "https://m.media-amazon.com/images/I/71CJmD1z9SL._AC_SL1500_.jpg",
    title: "Biofreeze Professional Pain Relief Gel",
    vendor: "Biofreeze",
    category: "Pain Relief",
    type: "Pain Management",
    tags: ["EDS", "hEDS", "Pain Management", "Biofreeze", "topical", "joint pain", "NSAID-free"],
    seoTitle: "Biofreeze Review for EDS | Zebra Reports",
    seoDescription:
      "Professional-strength menthol gel for fast topical pain relief. Used for EDS joint pain.",
    body: `<p>Menthol-based topical gel offering cooling analgesia without NSAIDs and a non-greasy finish.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Topical option when systemic NSAIDs are contraindicated or poorly tolerated.</li>
<li>Useful for peripheral joint pain during subluxation recovery windows.</li>
<li>Physical-therapy settings commonly recommend menthol counterirritants.</li>
<li>Fast onset for activity-related symptom spikes.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B01H2ZKP5K?tag=zebrareports-20",
    priceRange: "$10-$30",
  },
  {
    handle: "springrose-mobility-bra",
    imageUrl: "https://springrose.co/cdn/shop/products/mobility-bra-black_grande.jpg",
    title: "Springrose Mobility Bra",
    vendor: "Springrose",
    category: "Adaptive Apparel",
    type: "Adaptive Clothing",
    tags: ["EDS", "hEDS", "Adaptive Clothing", "Springrose", "shoulder", "dysautonomia", "disability"],
    seoTitle: "Springrose Mobility Bra Review for EDS | Zebra Reports",
    seoDescription:
      "Magnetic front-closure adaptive bra designed for EDS. No overhead pulling or reaching behind required.",
    body: `<p>Front-closure adaptive bra with magnetic clasps and ultra-soft fabric designed with disability community input.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Eliminates overhead reaching that aggravates unstable shoulders.</li>
<li>Front closure reduces autonomic orthostasis from prolonged arm elevation.</li>
<li>Soft materials lower friction on stretchy or sensitive skin.</li>
<li>Supports independent dressing when hand strength fluctuates.</li>
</ul>`,
    affiliateUrl: "https://springrose.co/products/mobility-bra",
    priceRange: "$48-$58",
  },
  {
    handle: "rest-evercool-cooling-pillow",
    imageUrl: "https://m.media-amazon.com/images/I/81xSYJVFURL._AC_SL1500_.jpg",
    title: "REST Evercool Cooling Pillow",
    vendor: "REST",
    category: "Ergonomics & Sleep",
    type: "Ergonomic Products",
    tags: ["EDS", "hEDS", "Ergonomic Products", "REST", "sleep", "POTS", "cervical", "temperature"],
    seoTitle: "REST Evercool Pillow Review for EDS | Zebra Reports",
    seoDescription:
      "Adjustable cooling pillow with customizable memory foam fill. Designed for EDS cervical support and POTS temperature issues.",
    body: `<p>Adjustable shredded memory foam pillow with cooling cover fabrics to moderate sleep microclimate.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Custom fill height can align cervical spine without forcing propped-forward head posture.</li>
<li>Cooling fabric may help temperature dysregulation seen with POTS.</li>
<li>Reduces pillow shopping guesswork for unstable necks needing gradual support changes.</li>
<li>Supports side/back trials common in CCI-aware positioning discussions.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B081SN9LMG?tag=zebrareports-20",
    priceRange: "$60-$80",
  },
  {
    handle: "kt-tape-pro",
    imageUrl: "https://m.media-amazon.com/images/I/81DqZFYWKQL._AC_SL1500_.jpg",
    title: "KT Tape Pro Kinesiology Tape",
    vendor: "KT Tape",
    category: "Joint Support",
    type: "Joint Protection",
    tags: ["EDS", "hEDS", "Joint Protection", "KT Tape", "proprioception", "skin sensitivity"],
    seoTitle: "KT Tape Pro Review for EDS | Zebra Reports",
    seoDescription:
      "Synthetic kinesiology tape for EDS proprioceptive feedback. Lightweight joint support with skin sensitivity caution.",
    body: `<p>Synthetic, water-resistant kinesiology tape that adds cutaneous feedback without rigid bracing.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Improves joint position sense around hypermobile knees, shoulders, and ankles.</li>
<li>Lightweight option during sports or PT when bulkier braces are impractical.</li>
<li>Adhesive can irritate fragile skin; patch test and remove gently.</li>
<li>Complements neuromuscular re-education rather than replacing stability training.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B00JX8PQPY?tag=zebrareports-20",
    priceRange: "$12-$16",
  },
  {
    handle: "theraband-resistance-set",
    imageUrl: "https://m.media-amazon.com/images/I/71TqfUKCH4L._AC_SL1500_.jpg",
    title: "TheraBand Resistance Band Set",
    vendor: "TheraBand",
    category: "Rehabilitation",
    type: "Physical Therapy Tools",
    tags: ["EDS", "hEDS", "Physical Therapy Tools", "TheraBand", "PT", "strength", "stability"],
    seoTitle: "TheraBand Resistance Set Review for EDS | Zebra Reports",
    seoDescription:
      "Progressive resistance bands for EDS physical therapy. Used for building joint-stabilizing strength.",
    body: `<p>Progressive resistance levels from light to heavy for graded strengthening programs.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Allows low-load rotator cuff and hip external rotator work with controlled range.</li>
<li>Gold-standard tool in PT protocols for hypermobility spectrum care.</li>
<li>Portable for travel when gym access is limited.</li>
<li>Supports isometric-first progressions recommended around unstable joints.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B01A58FU0O?tag=zebrareports-20",
    priceRange: "$12-$25",
  },
  {
    handle: "roga-vagus-nerve-stimulator",
    imageUrl: "https://m.media-amazon.com/images/I/61o1HZRM3gL._AC_SL1500_.jpg",
    title: "Roga Vagus Nerve Stimulation Device",
    vendor: "Roga",
    category: "Pain Relief",
    type: "Pain Management",
    tags: ["EDS", "hEDS", "Pain Management", "Roga", "POTS", "dysautonomia", "vagus", "fatigue"],
    seoTitle: "Roga Vagus Nerve Stimulator Review for EDS | Zebra Reports",
    seoDescription:
      "Non-invasive vagus nerve stimulation for EDS-related dysautonomia and POTS. No prescription required.",
    body: `<p>Transcutaneous vagus nerve stimulation device positioned for home use without a prescription pathway.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Targets autonomic balance concerns overlapping POTS and chronic fatigue.</li>
<li>Non-invasive adjunct when medications interact or are insufficient.</li>
<li>May complement heart-rate variability training under clinician guidance.</li>
<li>Portable option for symptom spikes during upright stress.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B0BVLB5L4H?tag=zebrareports-20",
    priceRange: "$200-$250",
  },
  {
    handle: "cetaphil-moisturizing-cream",
    imageUrl: "https://m.media-amazon.com/images/I/71u0M8BSXIL._AC_SL1500_.jpg",
    title: "Cetaphil Moisturizing Cream",
    vendor: "Cetaphil",
    category: "Skin Care",
    type: "Skin Care",
    tags: ["EDS", "hEDS", "Skin Care", "Cetaphil", "fragrance-free", "stretchy skin", "MCAS"],
    seoTitle: "Cetaphil Cream Review for EDS | Zebra Reports",
    seoDescription:
      "Fragrance-free cream moisturizer for EDS fragile and stretchy skin. Thick formula that stays in place.",
    body: `<p>Thick, fragrance-free cream moisturizer formulated for sensitive and barrier-compromised skin.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Fragrance-free baseline reduces MCAS-related topical triggers.</li>
<li>Rich emollients support fragile skin prone to tearing or stretching stress.</li>
<li>Dermatologist-recommended staple compatible with frequent washing.</li>
<li>Occlusive enough to pair with prescription topicals when directed.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B00BMJTOZK?tag=zebrareports-20",
    priceRange: "$12-$18",
  },
  {
    handle: "grabber-reacher-tool",
    imageUrl: "https://m.media-amazon.com/images/I/71q0gHvXuJL._AC_SL1500_.jpg",
    title: "Vive Reacher Grabber Tool 32-inch",
    vendor: "Vive Health",
    category: "Assistive Technology",
    type: "Assistive Devices",
    tags: ["EDS", "hEDS", "Assistive Devices", "Vive Health", "ADL", "spine", "hip"],
    seoTitle: "Vive Reacher Grabber Review for EDS | Zebra Reports",
    seoDescription:
      "32-inch lightweight reacher tool to reduce bending and reaching. Daily living aid relevant to EDS.",
    body: `<p>Lightweight 32-inch reacher with ergonomic pistol grip and rotating jaw for varied angles.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Reduces lumbar flexion when discs and SI joints are irritable.</li>
<li>Limits overhead reaching that stresses unstable shoulders.</li>
<li>Helps during POTS presyncope when bending worsens symptoms.</li>
<li>Rotating head improves grip without twisting the wrist excessively.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B01MXYZJ0U?tag=zebrareports-20",
    priceRange: "$12-$15",
  },
  {
    handle: "sock-aid-device",
    imageUrl: "https://m.media-amazon.com/images/I/71z7x8P5KIL._AC_SL1500_.jpg",
    title: "Vive Sock Aid",
    vendor: "Vive Health",
    category: "Assistive Technology",
    type: "Assistive Devices",
    tags: ["EDS", "hEDS", "Assistive Devices", "Vive Health", "hip", "hand", "ADL"],
    seoTitle: "Vive Sock Aid Review for EDS | Zebra Reports",
    seoDescription:
      "No-bend sock aid for EDS patients with hip and spinal instability. Foam handles protect hypermobile hands.",
    body: `<p>Compact sock donning aid with foam handles to minimize grip force and eliminate deep hip flexion.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Avoids sustained bending that can provoke SI or lumbar pain.</li>
<li>Foam handles cushion MCP load during reduced grip strength days.</li>
<li>Useful post hip subluxation when internal rotation is limited.</li>
<li>Small footprint for travel or dorm living.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B013IOQNAY?tag=zebrareports-20",
    priceRange: "$8-$12",
  },
  {
    handle: "guava-health-symptom-tracker",
    imageUrl: "https://guavahealth.com/images/app-screenshot.png",
    title: "Guava Health Symptom Tracking App",
    vendor: "Guava Health",
    category: "Health Technology",
    type: "Digital Health Tools",
    tags: ["EDS", "hEDS", "Digital Health Tools", "Guava Health", "symptoms", "POTS", "MCAS"],
    seoTitle: "Guava Health App Review for EDS | Zebra Reports",
    seoDescription:
      "Symptom tracking app for EDS patients managing multiple comorbidities. Generate specialist reports and identify triggers.",
    body: `<p>Digital symptom tracker that links meds, triggers, and events into exportable clinician summaries.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Supports multi-system documentation across dysautonomia, GI, and pain symptoms.</li>
<li>Pattern recognition aids trigger discussions in brief specialist visits.</li>
<li>Reduces recall bias for fluctuating baseline function.</li>
<li>Helps coordinate care among cardiology, genetics, and PT teams.</li>
</ul>`,
    affiliateUrl: "https://guavahealth.com",
    priceRange: "Free / Premium",
  },
  {
    handle: "lmnt-electrolyte-drink-mix",
    imageUrl: "https://m.media-amazon.com/images/I/71jGHEb4URL._AC_SL1500_.jpg",
    title: "LMNT Electrolyte Drink Mix",
    vendor: "LMNT",
    category: "Hydration & Electrolytes",
    type: "Electrolytes",
    tags: ["EDS", "hEDS", "Electrolytes", "LMNT", "POTS", "sodium", "magnesium", "dysautonomia"],
    seoTitle: "LMNT Electrolyte Review for EDS & POTS | Zebra Reports",
    seoDescription:
      "1000mg sodium electrolyte mix with zero sugar. Includes magnesium for muscle cramps.",
    body: `<p>High-sodium electrolyte mix delivering about 1000 mg sodium per serving with zero sugar and added magnesium.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Supports oral volume expansion strategies used in POTS management.</li>
<li>Magnesium may help muscle cramps overlapping mitochondrial or medication effects.</li>
<li>Sugar-free option when gastroparesis or MCAS diet limits sweetness.</li>
<li>Portable packets simplify dosing during travel or work shifts.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B084HQ4DYQ?tag=zebrareports-20",
    priceRange: "$35-$45",
  },
  {
    handle: "normalyte-ors",
    imageUrl: "https://normalyte.com/cdn/shop/products/normalyte-pure_grande.jpg",
    title: "NormaLyte Oral Rehydration Salt",
    vendor: "NormaLyte",
    category: "Hydration & Electrolytes",
    type: "Electrolytes",
    tags: ["EDS", "hEDS", "Electrolytes", "NormaLyte", "POTS", "ORS", "WHO", "dysautonomia"],
    seoTitle: "NormaLyte ORS Review for EDS & POTS | Zebra Reports",
    seoDescription:
      "Medical-grade oral rehydration salt for POTS and dysautonomia. 851mg sodium following WHO formula.",
    body: `<p>WHO-aligned oral rehydration salt with 851 mg sodium oriented toward medical-grade repletion.</p>
<h4>EDS Relevance</h4>
<ul>
<li>ORS osmolarity improves small-intestine sodium uptake versus water alone.</li>
<li>Useful during viral illness or flares that worsen orthostatic symptoms.</li>
<li>Sample programs help patients trial taste tolerance.</li>
<li>Structured electrolyte profile reduces guesswork versus ad hoc salt pinches.</li>
</ul>`,
    affiliateUrl: "https://normalyte.com/collections/normalyte-oral-rehydration-salts",
    priceRange: "$25-$35",
  },
  {
    handle: "vitassium-saltstick",
    imageUrl: "https://m.media-amazon.com/images/I/71k9g3KZDEL._AC_SL1500_.jpg",
    title: "Vitassium by SaltStick",
    vendor: "SaltStick",
    category: "Hydration & Electrolytes",
    type: "Electrolytes",
    tags: ["EDS", "hEDS", "Electrolytes", "SaltStick", "POTS", "sodium", "Dysautonomia International"],
    seoTitle: "Vitassium SaltStick Review for EDS & POTS | Zebra Reports",
    seoDescription:
      "Medical food sodium capsules partnered with Dysautonomia International. Available in pill form for POTS sodium loading.",
    body: `<p>Medical-food sodium capsules developed with dysautonomia community input for predictable salt loading.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Pill form helps patients who dislike salty drinks or have texture aversions.</li>
<li>Standardized dose aids titration with cardiology or autonomic clinics.</li>
<li>Partnered education resources align with POTS-first-line lifestyle care.</li>
<li>Convenient for school or workplace where mixing powders is impractical.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B0B7SFQSCJ?tag=zebrareports-20",
    priceRange: "$20-$35",
  },
  {
    handle: "liquid-iv-hydration",
    imageUrl: "https://m.media-amazon.com/images/I/71EccS5Ce1L._AC_SL1500_.jpg",
    title: "Liquid IV Hydration Multiplier",
    vendor: "Liquid IV",
    category: "Hydration & Electrolytes",
    type: "Electrolytes",
    tags: ["EDS", "hEDS", "Electrolytes", "Liquid IV", "POTS", "hydration", "entry-level"],
    seoTitle: "Liquid IV Review for EDS & POTS | Zebra Reports",
    seoDescription:
      "Widely available hydration multiplier. Entry-level electrolyte option for POTS patients.",
    body: `<p>Widely retailed hydration mix marketed with cellular transport technology for faster absorption.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Accessible first step before prescription ORS or higher-sodium mixes.</li>
<li>Convenience improves adherence on busy symptom days.</li>
<li>Flavor variety can help when nausea limits plainer solutions.</li>
<li>Pair with clinician guidance if higher sodium targets are needed.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B078XMP8KJ?tag=zebrareports-20",
    priceRange: "$20-$25",
  },
  {
    handle: "buoy-hydration-drops",
    imageUrl: "https://m.media-amazon.com/images/I/61vUOA3W8aL._AC_SL1500_.jpg",
    title: "Buoy Hydration Drops",
    vendor: "Buoy",
    category: "Hydration & Electrolytes",
    type: "Electrolytes",
    tags: ["EDS", "hEDS", "Electrolytes", "Buoy", "POTS", "MCAS", "unflavored", "sodium"],
    seoTitle: "Buoy Hydration Drops Review for EDS | Zebra Reports",
    seoDescription:
      "Unflavored electrolyte drops suitable for MCAS-sensitive patients. Add to any drink for sodium loading.",
    body: `<p>Unflavored, unsweetened electrolyte concentrate in a squeeze bottle for flexible dosing.</p>
<h4>EDS Relevance</h4>
<ul>
<li>MCAS-friendly option without artificial flavors or sweeteners.</li>
<li>Adds sodium to coffee, broth, or oral rehydration without changing taste sharply.</li>
<li>Portable micro-bottle for dining out or travel.</li>
<li>Helps patients titrate electrolytes without committing to full flavored sticks.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B07V37GKS1?tag=zebrareports-20",
    priceRange: "$20-$25",
  },
  {
    handle: "drip-drop-ors",
    imageUrl: "https://m.media-amazon.com/images/I/81T0eVWRroL._AC_SL1500_.jpg",
    title: "Drip Drop ORS",
    vendor: "Drip Drop",
    category: "Hydration & Electrolytes",
    type: "Electrolytes",
    tags: ["EDS", "hEDS", "Electrolytes", "Drip Drop", "POTS", "ORS", "dehydration", "WHO"],
    seoTitle: "Drip Drop ORS Review for EDS & POTS | Zebra Reports",
    seoDescription:
      "Medical-grade ORS developed by WHO committee member. Hospital-grade hydration for severe POTS dehydration.",
    body: `<p>ORS formulation positioned as hospital-grade hydration with flavor options for palatability.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Useful during acute dehydration from GI illness or heat intolerance.</li>
<li>WHO-informed design supports rapid plasma volume restoration.</li>
<li>Flavor variety can improve compliance versus salty homemade mixes.</li>
<li>Keep available for ER-adjacent flares when IV access is delayed.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B00FI0S6JO?tag=zebrareports-20",
    priceRange: "$15-$25",
  },
  {
    handle: "brooks-adrenaline-gts",
    imageUrl: "https://m.media-amazon.com/images/I/81FGm0GKMDL._AC_SL1500_.jpg",
    title: "Brooks Adrenaline GTS",
    vendor: "Brooks",
    category: "Footwear & Insoles",
    type: "Footwear",
    tags: ["EDS", "hEDS", "Footwear", "Brooks", "stability", "orthotics", "ankle", "Tulane EDS"],
    seoTitle: "Brooks Adrenaline GTS Review for EDS | Zebra Reports",
    seoDescription:
      "GuideRails stability shoe recommended by the Tulane EDS Clinic. Cushioned support that works with custom orthotics.",
    body: `<p>GuideRails stability trainer with cushioned midsole compatible with many custom orthotic inserts.</p>
<h4>EDS Relevance</h4>
<ul>
<li>External guidance reduces excessive rearfoot eversion in pes planovalgus.</li>
<li>Clinic-level recommendations cite tolerability for hypermobile gait.</li>
<li>Deep heel counter pairs with prescribed insoles for ankle proprioception.</li>
<li>Cushioning attenuates impact when knees hyperextend during heel strike.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B0DM3BJL66?tag=zebrareports-20",
    priceRange: "$130-$150",
  },
  {
    handle: "hoka-bondi",
    imageUrl: "https://m.media-amazon.com/images/I/81aDKGPvJTL._AC_SL1500_.jpg",
    title: "Hoka Bondi",
    vendor: "Hoka",
    category: "Footwear & Insoles",
    type: "Footwear",
    tags: ["EDS", "hEDS", "Footwear", "Hoka", "cushion", "gait", "impact"],
    seoTitle: "Hoka Bondi Review for EDS | Zebra Reports",
    seoDescription:
      "Maximum cushion running shoe for EDS joint impact absorption. Meta-rocker geometry for smooth gait mechanics.",
    body: `<p>Maximum-stack cushioned shoe with meta-rocker geometry and roomy toe box options.</p>
<h4>EDS Relevance</h4>
<ul>
<li>High midsole foam reduces joint impact during hypermobile gait patterns.</li>
<li>Rocker assists smooth rollover when ankle plantarflexion strength is weak.</li>
<li>Wide lasts accommodate swelling from dysautonomia or MCAS flares.</li>
<li>Often trialed when degenerative changes coexist with ligamentous laxity.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B0F7V7YJ7F?tag=zebrareports-20",
    priceRange: "$150-$165",
  },
  {
    handle: "vionic-walker",
    imageUrl: "https://m.media-amazon.com/images/I/81c4R9m0xRL._AC_SL1500_.jpg",
    title: "Vionic Walker Classic Shoe",
    vendor: "Vionic",
    category: "Footwear & Insoles",
    type: "Footwear",
    tags: ["EDS", "hEDS", "Footwear", "Vionic", "arch support", "APMA", "ankle"],
    seoTitle: "Vionic Walker Review for EDS | Zebra Reports",
    seoDescription:
      "Built-in orthotic footwear with podiatrist-designed arch support. APMA accepted for EDS flat feet and ankle instability.",
    body: `<p>Walking shoe with built-in Orthaheel contouring and APMA acceptance for supportive daily wear.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Integrated arch support reduces midfoot collapse linked to ankle instability.</li>
<li>APMA seal signals biomechanical review for conservative foot care.</li>
<li>Helps patients not yet ready for full custom orthotic fabrication.</li>
<li>Firm heel counter improves rearfoot proprioception on uneven surfaces.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B001GDH9HU?tag=zebrareports-20",
    priceRange: "$100-$130",
  },
  {
    handle: "superfeet-green-insoles",
    imageUrl: "https://m.media-amazon.com/images/I/81gE7NWDEKL._AC_SL1500_.jpg",
    title: "Superfeet GREEN Insoles",
    vendor: "Superfeet",
    category: "Footwear & Insoles",
    type: "Footwear",
    tags: ["EDS", "hEDS", "Footwear", "Superfeet", "insoles", "heel cup", "affordable"],
    seoTitle: "Superfeet GREEN Review for EDS | Zebra Reports",
    seoDescription:
      "Structured insoles as an affordable alternative to prescription orthotics. Deep heel cup for EDS ankle stability.",
    body: `<p>Structured over-the-counter insole with deep heel cup and firm arch shell for motion control.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Affordable bridge while waiting for custom orthotic fabrication.</li>
<li>Deep heel cup improves calcaneal locking during midstance.</li>
<li>High-arch option suits cavus feet that also appear in CTD families.</li>
<li>Trim-to-fit flexibility for multiple shoe types.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B003GAQBCM?tag=zebrareports-20",
    priceRange: "$45-$55",
  },
  {
    handle: "oval-8-finger-splints",
    imageUrl: "https://m.media-amazon.com/images/I/61N3hTwpKBL._AC_SL1200_.jpg",
    title: "Oval-8 Finger Splints by 3pp",
    vendor: "3pp (3-Point Products)",
    category: "Hand & Finger Orthotics",
    type: "Ring Splints",
    tags: ["EDS", "hEDS", "Ring Splints", "3pp", "finger", "budget", "trial"],
    seoTitle: "Oval-8 Finger Splint Review for EDS | Zebra Reports",
    seoDescription:
      "Affordable $3-5 plastic ring splints as a trial before investing in silver. Heat-adjustable at home.",
    body: `<p>Budget plastic oval splints available in 14 sizes with optional heat adjustment for minor customization.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Low-cost trial before committing to precious-metal splints.</li>
<li>Heat-adjustable material allows gentle shaping for swan neck trials.</li>
<li>Disposable mindset helps when swelling fluctuates day to day.</li>
<li>Useful school or work backup pairs when silver splints are removed.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B00GK8XD8C?tag=zebrareports-20",
    priceRange: "$3-$5 each",
  },
  {
    handle: "serola-si-belt",
    imageUrl: "https://m.media-amazon.com/images/I/71yz47UQo0L._AC_SL1500_.jpg",
    title: "Serola Sacroiliac Belt",
    vendor: "Serola Biomechanics",
    category: "Orthopedic Bracing",
    type: "Hip & Pelvic Braces",
    tags: ["EDS", "hEDS", "Hip & Pelvic Braces", "Serola Biomechanics", "SI joint", "pelvic", "pain"],
    seoTitle: "Serola SI Belt Review for EDS | Zebra Reports",
    seoDescription:
      "Sacroiliac belt for EDS pelvic instability. Stabilizes the pelvis to reduce cascading joint pain.",
    body: `<p>Non-elastic sacroiliac belt designed to compress the pelvic ring without excessive flexibility.</p>
<h4>EDS Relevance</h4>
<ul>
<li>First-line adjunct many pelvic PTs recommend for SI hypermobility.</li>
<li>Reduces shear across the SI joints during single-leg stance.</li>
<li>Can dampen pain referral into hips and proximal hamstrings.</li>
<li>Low profile under clothing for workplace wear.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B000NIFVLW?tag=zebrareports-20",
    priceRange: "$40-$55",
  },
  {
    handle: "bodyprox-hip-brace",
    imageUrl: "https://m.media-amazon.com/images/I/71EfZEhnCdL._AC_SL1500_.jpg",
    title: "Bodyprox Hip Stability Brace",
    vendor: "Bodyprox",
    category: "Orthopedic Bracing",
    type: "Hip & Pelvic Braces",
    tags: ["EDS", "hEDS", "Hip & Pelvic Braces", "Bodyprox", "hip", "subluxation", "skin sensitivity"],
    seoTitle: "Bodyprox Hip Brace Review for EDS | Zebra Reports",
    seoDescription:
      "Affordable hip brace that prevents subluxation during walking and standing. Neoprene-free for EDS sensitive skin.",
    body: `<p>Budget-friendly hip stability wrap engineered to limit subluxation during weight-bearing tasks.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Provides circumferential feedback when hip capsular laxity spikes.</li>
<li>Neoprene-free materials reduce heat rash on sensitive skin.</li>
<li>Affordable entry before custom pelvic orthoses.</li>
<li>Supports proprioception during prolonged standing with POTS.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B07SRR6FKX?tag=zebrareports-20",
    priceRange: "$12-$18",
  },
  {
    handle: "wristwidget-wrist-brace",
    imageUrl: "https://m.media-amazon.com/images/I/71QFq8RlNFL._AC_SL1500_.jpg",
    title: "WristWidget Wrist Brace",
    vendor: "WristWidget",
    category: "Orthopedic Bracing",
    type: "Wrist Braces",
    tags: ["EDS", "hEDS", "Wrist Braces", "WristWidget", "TFCC", "wrist", "ulnar"],
    seoTitle: "WristWidget Review for EDS | Zebra Reports",
    seoDescription:
      "Slim TFCC wrist support that allows functional hand use. Targeted stabilization without full immobilization.",
    body: `<p>Ultra-slim strap system that targets TFCC compression without a rigid cock-up splint.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Supports ulnar-sided wrist instability common with hyperextension trauma.</li>
<li>Maintains digit mobility for typing and ADLs versus full casting.</li>
<li>Low bulk fits under gloves or sports tape during activity.</li>
<li>Useful during push-up or weight-bearing exercise modifications.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B0056PQV2K?tag=zebrareports-20",
    priceRange: "$25-$35",
  },
  {
    handle: "bauerfeind-malleoTrain-s",
    imageUrl: "https://m.media-amazon.com/images/I/71kv5A0g9pL._AC_SL1500_.jpg",
    title: "Bauerfeind MalleoTrain S Ankle Support",
    vendor: "Bauerfeind",
    category: "Orthopedic Bracing",
    type: "Ankle Braces",
    tags: ["EDS", "hEDS", "Ankle Braces", "Bauerfeind", "ankle", "instability", "compression"],
    seoTitle: "Bauerfeind MalleoTrain S Review for EDS | Zebra Reports",
    seoDescription:
      "Medical-grade ankle support with figure-8 strapping. From the makers of the GenuTrain, with the same quality for EDS ankles.",
    body: `<p>Medical-grade knit ankle sleeve with integrated figure-eight strapping for dynamic stability.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Combines proprioceptive knit with strap-based inversion control.</li>
<li>Mirrors GenuTrain engineering philosophy for consistent brand tolerability.</li>
<li>Supports chronic lateral ankle instability after repeated sprains.</li>
<li>Breathable enough for all-day wear inside shoes.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B07JN3C2D4?tag=zebrareports-20",
    priceRange: "$80-$120",
  },
  {
    handle: "sockwell-compression-socks",
    imageUrl: "https://m.media-amazon.com/images/I/81RJ6GiH7DL._AC_SL1500_.jpg",
    title: "Sockwell Elevation Compression Socks",
    vendor: "Sockwell",
    category: "Compression Therapy",
    type: "Compression Garments",
    tags: ["EDS", "hEDS", "Compression Garments", "Sockwell", "POTS", "merino", "dysautonomia"],
    seoTitle: "Sockwell Compression Socks Review for EDS | Zebra Reports",
    seoDescription:
      "Merino wool compression socks for daily POTS management. Breathable and stylish alternative to synthetic medical compression.",
    body: `<p>Merino-blend graduated compression socks at 15-20 mmHg with fashion-forward patterns.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Graduated compression supports orthostatic symptom management.</li>
<li>Natural fibers improve thermoregulation versus all-synthetic stockings.</li>
<li>Stylish options increase adherence for school or office dress codes.</li>
<li>Moderate grade balances efficacy with donning ease.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B008338K1M?tag=zebrareports-20",
    priceRange: "$20-$28",
  },
  {
    handle: "juzo-soft-compression-leggings",
    imageUrl: "https://m.media-amazon.com/images/I/61KePhHiZjL._AC_SL1000_.jpg",
    title: "Juzo Soft Compression Pantyhose",
    vendor: "Juzo",
    category: "Compression Therapy",
    type: "Compression Garments",
    tags: ["EDS", "hEDS", "Compression Garments", "Juzo", "POTS", "20-30 mmHg", "insurance"],
    seoTitle: "Juzo Soft Compression Review for EDS & POTS | Zebra Reports",
    seoDescription:
      "Medical-grade waist-high compression stockings. Prescribable for insurance coverage.",
    body: `<p>Waist-high medical compression in 20-30 mmHg with soft, silky hand for daily tolerance.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Higher medical grade often targeted when 15-20 mmHg is insufficient.</li>
<li>Prescription pathway may qualify for insurance reimbursement.</li>
<li>Full pantyhose style supports abdominal pooling concerns in some POTS patients.</li>
<li>Silky finish reduces snagging on fragile skin.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B001ABLZS0?tag=zebrareports-20",
    priceRange: "$60-$90",
  },
  {
    handle: "compression-gloves-copper",
    imageUrl: "https://m.media-amazon.com/images/I/71BFsVgt3aL._AC_SL1500_.jpg",
    title: "Copper Compression Gloves",
    vendor: "Copper Compression",
    category: "Compression Therapy",
    type: "Compression Garments",
    tags: ["EDS", "hEDS", "Compression Garments", "Copper Compression", "hand", "grip", "affordable"],
    seoTitle: "Copper Compression Gloves Review for EDS | Zebra Reports",
    seoDescription:
      "Compression gloves that stabilize hypermobile finger joints during gripping. Affordable hand support under $15.",
    body: `<p>Open-fingertip compression gloves with copper-infused yarn marketed for mild hand support.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Gentle circumferential pressure can calm MCP instability during tool use.</li>
<li>Open tips preserve tactile feedback for keyboards and phones.</li>
<li>Budget price supports buying multiple pairs for laundry rotation.</li>
<li>Lightweight alternative to rigid splints during short tasks.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B01BWGP4YI?tag=zebrareports-20",
    priceRange: "$8-$15",
  },
  {
    handle: "quercetin-supplement",
    imageUrl: "https://m.media-amazon.com/images/I/61LY7tJ0mWL._AC_SL1500_.jpg",
    title: "Thorne Quercetin Phytosome",
    vendor: "Thorne",
    category: "Dietary Supplements",
    type: "Supplements",
    tags: ["EDS", "hEDS", "Supplements", "Thorne", "MCAS", "mast cell", "quercetin"],
    seoTitle: "Thorne Quercetin Review for EDS & MCAS | Zebra Reports",
    seoDescription:
      "Phytosome quercetin for natural mast cell stabilization. 20x absorption for EDS patients with MCAS comorbidity.",
    body: `<p>Phytosome-form quercetin claiming enhanced absorption with NSF-certified manufacturing rigor.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Quercetin is commonly discussed as a mast-cell stabilizing flavonoid adjunct.</li>
<li>Phytosome delivery may improve bioavailability versus basic powder forms.</li>
<li>Use only with clinician oversight if on anticoagulants or polypharmacy.</li>
<li>Supports patients layering nutraceuticals onto prescribed H1/H2 regimens.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B000FGWBPQ?tag=zebrareports-20",
    priceRange: "$30-$45",
  },
  {
    handle: "magnesium-malate",
    imageUrl: "https://m.media-amazon.com/images/I/71WiK1q4HpL._AC_SL1500_.jpg",
    title: "Designs for Health Magnesium Malate",
    vendor: "Designs for Health",
    category: "Dietary Supplements",
    type: "Supplements",
    tags: ["EDS", "hEDS", "Supplements", "Designs for Health", "magnesium", "MCAS", "sleep", "muscle cramps"],
    seoTitle: "Magnesium Malate Review for EDS | Zebra Reports",
    seoDescription:
      "Filler-free magnesium malate for EDS muscle cramps and sleep. MCAS-safe formulation gentler than citrate.",
    body: `<p>Filler-free magnesium malate tablet aimed at muscle relaxation with gentler GI impact than citrate salts.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Malate form may support energy metabolism alongside cramp reduction.</li>
<li>Reduced excipients appeal to MCAS-sensitive patients.</li>
<li>Often preferred when citrate triggers looser stools or mast cell flares.</li>
<li>Night dosing can pair with sleep hygiene for non-restorative sleep.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B00FKPBVYA?tag=zebrareports-20",
    priceRange: "$20-$30",
  },
  {
    handle: "coq10-supplement",
    imageUrl: "https://m.media-amazon.com/images/I/71TXb7TuoGL._AC_SL1500_.jpg",
    title: "Jarrow Formulas CoQ10 200mg",
    vendor: "Jarrow Formulas",
    category: "Dietary Supplements",
    type: "Supplements",
    tags: ["EDS", "hEDS", "Supplements", "Jarrow Formulas", "CoQ10", "fatigue", "mitochondria"],
    seoTitle: "Jarrow CoQ10 Review for EDS | Zebra Reports",
    seoDescription:
      "CoQ10 for EDS fatigue reduction and energy production. Clinically studied 200mg dose.",
    body: `<p>Ubiquinone CoQ10 at a 200 mg dose commonly referenced in fatigue-related supplement trials.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Supports mitochondrial ATP generation when fatigue overlaps pain.</li>
<li>200 mg aligns with many cardiology-adjacent dosing discussions.</li>
<li>May interact with warfarin; coordinate with prescribing clinicians.</li>
<li>Often combined with magnesium for muscle recovery stacks.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B0013OUMMO?tag=zebrareports-20",
    priceRange: "$15-$25",
  },
  {
    handle: "weighted-blanket",
    imageUrl: "https://m.media-amazon.com/images/I/81Y2VQ5h98L._AC_SL1500_.jpg",
    title: "YnM Weighted Blanket",
    vendor: "YnM",
    category: "Ergonomics & Sleep",
    type: "Ergonomic Products",
    tags: ["EDS", "hEDS", "Ergonomic Products", "YnM", "sleep", "proprioception", "POTS"],
    seoTitle: "Weighted Blanket Review for EDS | Zebra Reports",
    seoDescription:
      "Deep pressure proprioceptive blanket for safer EDS sleep positioning. Go lighter than standard 10% body weight.",
    body: `<p>Glass-bead weighted blanket providing deep pressure stimulation across multiple weight tiers.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Deep pressure can calm autonomic arousal interfering with sleep onset.</li>
<li>Proprioceptive input may reduce unconscious joint twisting during sleep.</li>
<li>EDS patients often choose lighter than 10% body weight to avoid pain.</li>
<li>Check with providers if dysautonomia causes respiratory sensitivity.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B073429DV2?tag=zebrareports-20",
    priceRange: "$30-$50",
  },
  {
    handle: "backjoy-posture-seat",
    imageUrl: "https://m.media-amazon.com/images/I/71fUjKhLsHL._AC_SL1500_.jpg",
    title: "BackJoy SitSmart Posture Seat",
    vendor: "BackJoy",
    category: "Ergonomics & Sleep",
    type: "Ergonomic Products",
    tags: ["EDS", "hEDS", "Ergonomic Products", "BackJoy", "posture", "pelvis", "sitting pain"],
    seoTitle: "BackJoy SitSmart Review for EDS | Zebra Reports",
    seoDescription:
      "Portable posture seat that corrects pelvic alignment. Reduces cascading EDS sitting pain in spine and shoulders.",
    body: `<p>Portable seat wedge that tilts the pelvis to encourage neutral lumbar alignment passively.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Pelvic correction reduces compensatory thoracic kyphosis during desk work.</li>
<li>Portable for cars, conference seating, or mobility devices.</li>
<li>Helps when core fatigue prevents active posture maintenance all day.</li>
<li>Pairs with standing breaks for POTS-friendly work pacing.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B002OMLNWG?tag=zebrareports-20",
    priceRange: "$30-$50",
  },
  {
    handle: "alignmed-posture-shirt",
    imageUrl: "https://m.media-amazon.com/images/I/71qhbAShNKL._AC_SL1500_.jpg",
    title: "AlignMed Posture Shirt",
    vendor: "AlignMed",
    category: "Orthopedic Bracing",
    type: "Posture Support",
    tags: ["EDS", "hEDS", "Posture Support", "AlignMed", "proprioception", "shoulder", "kyphosis"],
    seoTitle: "AlignMed Posture Shirt Review for EDS | Zebra Reports",
    seoDescription:
      "NeuroBand posture shirt providing all-day proprioceptive feedback. Addresses EDS thoracic kyphosis and shoulder posture.",
    body: `<p>Compression garment with NeuroBand panels engineered to mimic kinesiology-tape feedback vectors.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Continuous tactile cueing supports scapular stability without bulky braces.</li>
<li>Addresses thoracic kyphosis common with chronic pain guarding.</li>
<li>Washable alternative to daily re-taping regimens.</li>
<li>May reduce neck overuse from forward-head posture.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B00I7FZ9LM?tag=zebrareports-20",
    priceRange: "$60-$90",
  },
  {
    handle: "perching-stool",
    imageUrl: "https://m.media-amazon.com/images/I/71ZvEm3T2NL._AC_SL1500_.jpg",
    title: "Drive Medical Folding Perching Stool",
    vendor: "Drive Medical",
    category: "Assistive Technology",
    type: "Assistive Devices",
    tags: ["EDS", "hEDS", "Assistive Devices", "Drive Medical", "POTS", "standing", "kitchen"],
    seoTitle: "Perching Stool Review for EDS | Zebra Reports",
    seoDescription:
      "Foldable perching stool for cooking and chores without prolonged standing. Reduces POTS presyncope risk.",
    body: `<p>Foldable perching stool that supports a semi-sitting posture at counter height for household tasks.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Reduces static standing load that triggers presyncope in POTS.</li>
<li>Supports hip and knee flexion without full floor transfers.</li>
<li>Folds for apartments or shared kitchens with limited space.</li>
<li>Helps energy conservation during meal prep or dish washing.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B000HSNUQY?tag=zebrareports-20",
    priceRange: "$50-$80",
  },
  {
    handle: "emeterm-antinausea-band",
    imageUrl: "https://m.media-amazon.com/images/I/61kX4VT3q1L._AC_SL1500_.jpg",
    title: "EmeTerm Anti-Nausea Wristband",
    vendor: "EmeTerm",
    category: "Digestive Care",
    type: "Nausea Relief",
    tags: ["EDS", "hEDS", "Nausea Relief", "EmeTerm", "POTS", "gastroparesis", "nausea", "drug-free"],
    seoTitle: "EmeTerm Anti-Nausea Review for EDS | Zebra Reports",
    seoDescription:
      "Rechargeable drug-free anti-nausea wristband for EDS gastroparesis and POTS nausea. No medication interactions.",
    body: `<p>USB-rechargeable wristband delivering P6 acupressure/neuromodulation for nausea symptom relief.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Drug-free option when polypharmacy complicates antiemetic stacking.</li>
<li>Targets nausea overlapping gastroparesis or vestibular sensitivity.</li>
<li>Rechargeable design lowers ongoing battery waste versus disposable bands.</li>
<li>Portable during travel when motion sickness adds to autonomic load.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B0C6Y5MX47?tag=zebrareports-20",
    priceRange: "$100-$150",
  },
  {
    handle: "epsom-salt-bath",
    imageUrl: "https://m.media-amazon.com/images/I/81UaM1AkseL._AC_SL1500_.jpg",
    title: "Dr Teal's Pure Epsom Salt Soak",
    vendor: "Dr Teal's",
    category: "Pain Relief",
    type: "Pain Management",
    tags: ["EDS", "hEDS", "Pain Management", "Dr Teal's", "magnesium", "bath", "flare", "muscle pain"],
    seoTitle: "Epsom Salt Bath Review for EDS | Zebra Reports",
    seoDescription:
      "Transdermal magnesium bath soak for EDS flare management. Used for muscle and joint pain relief.",
    body: `<p>Pharmacy-available magnesium sulfate soak with fragrance-free SKUs for sensitive patients.</p>
<h4>EDS Relevance</h4>
<ul>
<li>Warm immersion supports muscle relaxation after subluxation days.</li>
<li>Transdermal magnesium debates continue, yet baths remain a community staple.</li>
<li>Fragrance-free versions reduce MCAS-type scent triggers.</li>
<li>Hydrotherapy adds gentle joint unloading versus land exercise.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B01N9IISVH?tag=zebrareports-20",
    priceRange: "$5-$12",
  },
  // ──────────────────────────────────────────────
  // NEWBORN SCREENING: medical foods and associated products
  // ──────────────────────────────────────────────
  {
    handle: "periflex-lq-pku-formula",
    imageUrl: "https://m.media-amazon.com/images/I/61gQ3GhVpxL._AC_SL1500_.jpg",
    title: "Periflex LQ PKU Medical Food",
    vendor: "Nutricia",
    category: "Medical Foods",
    type: "PKU Medical Food",
    tags: ["PKU", "phenylketonuria", "medical food", "amino acid formula", "Nutricia", "Periflex", "newborn screening"],
    seoTitle: "Periflex LQ PKU Formula Review | Zebra Reports",
    seoDescription: "Ready-to-drink phenylalanine-free amino acid formula for PKU management. Orange cream flavor by Nutricia.",
    body: `<p>Periflex LQ is a ready-to-drink phenylalanine-free amino acid medical food for people with PKU. Each 8.5 oz pouch provides essential amino acids, vitamins, and minerals without the phenylalanine that PKU patients cannot metabolize.</p>
<h4>PKU Relevance</h4>
<ul>
<li>Phenylalanine-free complete amino acid formula, the cornerstone of PKU dietary management.</li>
<li>Ready-to-drink pouch format eliminates mixing and measuring for on-the-go compliance.</li>
<li>Orange cream flavor developed specifically to improve adherence in older children and adults.</li>
<li>Provides DHA and prebiotic fiber alongside standard micronutrient fortification.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B07X3XQ7YR?tag=zebrareports-20",
    priceRange: "$45-$65",
    disorderTags: ["PKU"],
  },
  {
    handle: "lophlex-lq-pku",
    imageUrl: "https://m.media-amazon.com/images/I/61gQ3GhVpxL._AC_SL1500_.jpg",
    title: "PKU Lophlex LQ Liquid Medical Food",
    vendor: "Nutricia",
    category: "Medical Foods",
    type: "PKU Medical Food",
    tags: ["PKU", "phenylketonuria", "medical food", "Lophlex", "Nutricia", "amino acid", "newborn screening"],
    seoTitle: "PKU Lophlex LQ Review | Zebra Reports",
    seoDescription: "Concentrated liquid PKU formula in a juice-box format. 20g protein equivalent per 4.2 oz pouch.",
    body: `<p>Lophlex LQ is a concentrated phenylalanine-free amino acid drink designed for PKU patients age 4 and older. The small 4.2 oz pouch delivers 20g protein equivalent, making it one of the most concentrated PKU formulas available, which matters for compliance.</p>
<h4>PKU Relevance</h4>
<ul>
<li>20g protein equivalent in just 4.2 oz, the highest concentration available in a ready-to-drink format.</li>
<li>GMP (glycomacropeptide)-free formulation for patients who need strict Phe control.</li>
<li>Juicy orange flavor that patients describe as more tolerable than powder-mixed alternatives.</li>
<li>Shelf-stable pouch travels easily, which is critical for maintaining diet compliance away from home.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B00UNYSBW2?tag=zebrareports-20",
    priceRange: "$55-$75",
    disorderTags: ["PKU"],
  },
  {
    handle: "phenylAde-essential-drink-mix",
    imageUrl: "https://m.media-amazon.com/images/I/61gQ3GhVpxL._AC_SL1500_.jpg",
    title: "PhenylAde Essential Drink Mix",
    vendor: "Applied Nutrition",
    category: "Medical Foods",
    type: "PKU Medical Food",
    tags: ["PKU", "phenylketonuria", "medical food", "PhenylAde", "Applied Nutrition", "amino acid", "newborn screening"],
    seoTitle: "PhenylAde Essential Drink Mix Review | Zebra Reports",
    seoDescription: "Phenylalanine-free powdered amino acid formula for PKU. Mixable drink format with multiple flavors.",
    body: `<p>PhenylAde Essential is a phenylalanine-free amino acid medical food in powdered drink-mix form. It provides complete protein equivalent plus vitamins and minerals for PKU patients managing their phenylalanine intake through diet.</p>
<h4>PKU Relevance</h4>
<ul>
<li>Powdered format allows flexible serving sizes, useful for titrating intake during illness or growth spurts.</li>
<li>Multiple flavor options help prevent formula fatigue that drives non-compliance in teens and adults.</li>
<li>Lower cost per gram of protein equivalent compared to ready-to-drink formats.</li>
<li>Fortified with all essential vitamins and minerals that low-protein diets typically lack.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B00QPOWWN8?tag=zebrareports-20",
    priceRange: "$40-$60",
    disorderTags: ["PKU"],
  },
  {
    handle: "cambrooke-glytactin-complete",
    imageUrl: "https://m.media-amazon.com/images/I/61gQ3GhVpxL._AC_SL1500_.jpg",
    title: "Cambrooke Glytactin Essential Complete",
    vendor: "Cambrooke Therapeutics",
    category: "Medical Foods",
    type: "PKU Medical Food",
    tags: ["PKU", "phenylketonuria", "medical food", "Cambrooke", "GMP", "Glytactin", "newborn screening"],
    seoTitle: "Cambrooke Glytactin Complete Review for PKU | Zebra Reports",
    seoDescription: "GMP-based PKU medical food with better taste profile. Cambrooke's glycomacropeptide formula for improved compliance.",
    body: `<p>Cambrooke's Glytactin line uses glycomacropeptide (GMP), a natural protein from cheese whey that is naturally low in phenylalanine. GMP-based formulas taste significantly better than traditional amino acid formulas, which is a breakthrough for PKU dietary compliance.</p>
<h4>PKU Relevance</h4>
<ul>
<li>GMP-based formulation tastes closer to real food than synthetic amino acid formulas.</li>
<li>Improved taste drives better long-term compliance, the top challenge in PKU management.</li>
<li>Complete nutritional profile with vitamins, minerals, and essential amino acids.</li>
<li>Cambrooke is a PKU family-founded company; its products are designed by people who live the diet.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B0D4KM8JJW?tag=zebrareports-20",
    priceRange: "$50-$70",
    disorderTags: ["PKU"],
  },
  {
    handle: "pku-low-protein-food-list-book",
    imageUrl: "https://m.media-amazon.com/images/I/51dKvX9xBVL._SL500_.jpg",
    title: "Low Protein Food List for PKU",
    vendor: "Virginia Schuett",
    category: "Reference Books",
    type: "PKU Resources",
    tags: ["PKU", "phenylketonuria", "low protein", "diet management", "food list", "reference", "newborn screening"],
    seoTitle: "Low Protein Food List for PKU Review | Zebra Reports",
    seoDescription:
      "The essential reference for PKU families: phenylalanine content of thousands of foods. Updated edition by Virginia Schuett.",
    body: `<p>The definitive reference book for PKU dietary management. Lists phenylalanine content for thousands of common foods, enabling families to calculate daily Phe intake and plan compliant meals. Used by dietitians and families for decades.</p>
<h4>PKU Relevance</h4>
<ul>
<li>Phenylalanine values for thousands of foods, the foundation of PKU meal planning.</li>
<li>Used by metabolic dietitians as a clinical reference alongside patient counseling.</li>
<li>Essential for newly diagnosed families learning to navigate the PKU diet.</li>
<li>Updated edition reflects current food supply and new low-protein specialty products.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/145631842X?tag=zebrareports-20",
    priceRange: "$25-$35",
    disorderTags: ["PKU"],
  },
  {
    handle: "ketonex-2-msud-formula",
    imageUrl: "https://m.media-amazon.com/images/I/61gQ3GhVpxL._AC_SL1500_.jpg",
    title: "Ketonex-2 MSUD Medical Food",
    vendor: "Abbott Nutrition",
    category: "Medical Foods",
    type: "MSUD Medical Food",
    tags: ["MSUD", "maple syrup urine disease", "medical food", "Ketonex", "Abbott", "amino acid", "newborn screening"],
    seoTitle: "Ketonex-2 MSUD Formula Review | Zebra Reports",
    seoDescription: "Branched-chain amino acid-free formula for MSUD management. Powdered medical food by Abbott Nutrition.",
    body: `<p>Ketonex-2 is a branched-chain amino acid-free medical food for children and adults with Maple Syrup Urine Disease (MSUD). It provides essential amino acids, vitamins, and minerals while excluding leucine, isoleucine, and valine, the amino acids MSUD patients cannot metabolize.</p>
<h4>MSUD Relevance</h4>
<ul>
<li>Free of leucine, isoleucine, and valine, the branched-chain amino acids toxic in MSUD.</li>
<li>Provides all other essential and non-essential amino acids for normal growth and development.</li>
<li>Powdered format for flexible dosing during metabolic crises when intake must be carefully titrated.</li>
<li>Abbott's metabolic formula line has decades of clinical use in MSUD management protocols.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B0C6NKR4ZS?tag=zebrareports-20",
    priceRange: "$60-$90",
    disorderTags: ["MSUD"],
  },
  {
    handle: "enfamil-prosobee-soy-formula",
    imageUrl: "https://m.media-amazon.com/images/I/71EccS5Ce1L._AC_SL1500_.jpg",
    title: "Enfamil ProSobee Soy-Based Infant Formula",
    vendor: "Enfamil",
    category: "Infant Formula",
    type: "Galactosemia Formula",
    tags: ["galactosemia", "soy formula", "Enfamil", "ProSobee", "lactose-free", "dairy-free", "infant", "newborn screening"],
    seoTitle: "Enfamil ProSobee Soy Formula for Galactosemia | Zebra Reports",
    seoDescription: "Soy-based lactose-free infant formula essential for galactosemia. The standard first-line feeding for galactosemia newborns.",
    body: `<p>Enfamil ProSobee is a soy-based, lactose-free infant formula that serves as the standard first-line feeding for infants diagnosed with galactosemia through newborn screening. Galactosemia patients cannot metabolize galactose (from lactose in milk), making soy formula medically essential from birth.</p>
<h4>Galactosemia Relevance</h4>
<ul>
<li>Completely lactose-free and dairy-free; it eliminates the galactose that galactosemia patients cannot process.</li>
<li>Standard of care recommended by metabolic specialists when galactosemia is identified on newborn screen.</li>
<li>Soy protein isolate provides complete nutrition without any milk-derived ingredients.</li>
<li>Widely available at pharmacies and grocery stores, which is critical during the urgent post-screening transition.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B0CH1S39LC?tag=zebrareports-20",
    priceRange: "$25-$35",
    disorderTags: ["Galactosemia"],
  },
  {
    handle: "medical-alert-bracelet-custom-engraved",
    imageUrl: "https://m.media-amazon.com/images/I/71QFq8RlNFL._AC_SL1500_.jpg",
    title: "Custom Engraved Medical Alert Bracelet",
    vendor: "My Identity Doctor",
    category: "Medical ID",
    type: "Medical Alert",
    tags: ["medical alert", "medical ID", "PKU", "MSUD", "metabolic disorder", "newborn screening", "galactosemia", "safety"],
    seoTitle: "Medical Alert Bracelet for Metabolic Disorders | Zebra Reports",
    seoDescription: "Custom engraved stainless steel medical ID bracelet. Essential for PKU, MSUD, and other metabolic disorders identified through newborn screening.",
    body: `<p>A custom-engraved medical alert bracelet is non-negotiable for anyone with a metabolic disorder identified through newborn screening. During a medical emergency, first responders and ER teams need to know that standard IV dextrose, certain medications, or normal feeding protocols could trigger a metabolic crisis.</p>
<h4>Newborn Screening Relevance</h4>
<ul>
<li>Engraved with condition name and emergency dietary restrictions, which is critical during unconscious emergencies.</li>
<li>Stainless steel construction withstands daily wear from childhood through adulthood.</li>
<li>Free custom engraving allows specific condition details (for example, &quot;PKU: no protein loading&quot; or &quot;MSUD: no leucine&quot;).</li>
<li>Includes emergency ID card for wallet backup with additional medical details and emergency contacts.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B014EWV4D6?tag=zebrareports-20",
    priceRange: "$15-$30",
    disorderTags: ["PKU", "MSUD", "Galactosemia", "Metabolic Disorders"],
  },
  {
    handle: "medical-alert-bracelet-kids-silicone",
    imageUrl: "https://m.media-amazon.com/images/I/71QFq8RlNFL._AC_SL1500_.jpg",
    title: "Kids Silicone Medical Alert Bracelet",
    vendor: "JF Jewelry",
    category: "Medical ID",
    type: "Medical Alert",
    tags: ["medical alert", "medical ID", "kids", "children", "PKU", "metabolic disorder", "newborn screening", "silicone"],
    seoTitle: "Kids Medical Alert Bracelet for Metabolic Disorders | Zebra Reports",
    seoDescription: "Adjustable silicone medical ID bracelet for children with metabolic disorders. Custom engraved, comfortable for daily wear.",
    body: `<p>A child-friendly silicone medical alert bracelet designed for kids with metabolic disorders. Adjustable sizing grows with the child, and the soft silicone band is comfortable enough for toddlers and young children who won't tolerate metal jewelry. Custom engraving communicates critical dietary restrictions to caregivers, teachers, and emergency personnel.</p>
<h4>Newborn Screening Relevance</h4>
<ul>
<li>Soft silicone is comfortable on sensitive young skin, so children are more likely to keep it on.</li>
<li>Adjustable 5.0-7.5 inch range covers toddler through early teen sizing.</li>
<li>Waterproof for baths, pools, and the general mess of childhood without removal.</li>
<li>Custom engraved with condition name and emergency instructions for schools and daycare.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B08Y8D3CW2?tag=zebrareports-20",
    priceRange: "$12-$20",
    disorderTags: ["PKU", "MSUD", "Galactosemia", "Metabolic Disorders"],
  },
  {
    handle: "pku-cookbook",
    imageUrl: "https://m.media-amazon.com/images/I/51dKvX9xBVL._SL500_.jpg",
    title: "The PKU Cookbook: Nutritious Low-Protein Recipes",
    vendor: "Various",
    category: "Reference Books",
    type: "PKU Resources",
    tags: ["PKU", "phenylketonuria", "cookbook", "low protein recipes", "diet management", "newborn screening"],
    seoTitle: "PKU Cookbook Review | Zebra Reports",
    seoDescription: "Low-protein recipe collection designed for PKU dietary management. Makes the restricted diet livable and varied.",
    body: `<p>A dedicated PKU cookbook with nutritious low-phenylalanine recipes that make the highly restrictive PKU diet more livable. Covers breakfast through dinner with Phe counts per serving, enabling families to plan compliant meals that actually taste good.</p>
<h4>PKU Relevance</h4>
<ul>
<li>Every recipe includes calculated phenylalanine content per serving for precise dietary tracking.</li>
<li>Covers the full range of meals, which helps prevent the monotony that drives diet abandonment.</li>
<li>Uses widely available low-protein specialty ingredients alongside standard grocery items.</li>
<li>Written for real family kitchens, not clinical settings, with practical prep times and kid-tested flavors.</li>
</ul>`,
    affiliateUrl: "https://www.amazon.com/dp/B0CMPPWSV7?tag=zebrareports-20",
    priceRange: "$15-$25",
    disorderTags: ["PKU"],
  },
];

export const products: Product[] = productsData;

export function getProductByHandle(handle: string): Product | undefined {
  return products.find(p => p.handle === handle);
}

export function getProductsByType(type: string): Product[] {
  return products.filter(p => p.type === type);
}

export function getProductsByDisorder(disorderTag: string): Product[] {
  return products.filter(p => p.disorderTags?.includes(disorderTag));
}
