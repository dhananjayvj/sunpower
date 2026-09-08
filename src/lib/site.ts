export const siteUrl = "https://sunpowerind.com";

export const contact = {
  phoneDisplay: "+91 95604 73434",
  phoneHref: "tel:+919560473434",
  whatsappHref: "https://wa.me/919560473434",
  email: "vansh@sunpowerind.com",
  emailHref: "mailto:vansh@sunpowerind.com",
  instagramHref: "https://www.instagram.com/sunpowerind?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  address:
    "Office No. 3, B-47/A, Lane No. 6, Joshi Colony, I.P. Extension, Delhi - 110092",
  mapsHref: "https://maps.app.goo.gl/MgfvQ3EPFBjs8dBX7?g_st=aw",
  mapsEmbedHref:
    "https://www.google.com/maps?q=Sun%20Power%2C%20Office%20No.%203%2C%20B-47%2FA%2C%20Lane%20No.%206%2C%20Joshi%20Colony%2C%20I.P.%20Extension%2C%20Delhi%20-%20110092&z=17&output=embed",
  gstin: "07BQKPV2646A1ZS",
};

export const navigation = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#catalog", label: "Catalog" },
  { href: "#projects", label: "Projects" },
  { href: "#resources", label: "Resources" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

export const trustSignals = [
  "Verified product guidance for residential and commercial buyers",
  "Rooftop and ground-mounted solar project execution",
  "Subsidy guidance for eligible homeowners",
  "Site surveys, EPC delivery, and MMS contracting across Delhi NCR",
];

export const aboutHighlights = [
  {
    title: "Who we are",
    detail:
      "SUNPOWER is a Delhi NCR solar dealership and EPC or MMS contracting firm delivering rooftop and ground-mounted projects for homes, businesses, and industrial facilities.",
  },
  {
    title: "Product credential",
    detail:
      "SUNPOWER holds Loom Solar dealer certificate no. 23873/DL/08/2026, valid till August 31, 2028.",
  },
  {
    title: "What we handle",
    detail:
      "Project scope ranges from compact 3-5 kW residential systems to large-format commercial and industrial installations up to 1 MW.",
  },
];

export const serviceAreas = [
  "Delhi",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Gurugram",
  "Faridabad",
];

export const services = [
  {
    slug: "residential-rooftop-solar",
    title: "Residential Rooftop Solar",
    description: "Designed for homes that want lower electricity bills and dependable long-term generation.",
    bullets: [
      "Custom system sizing",
      "Roof suitability checks",
      "PM Surya Ghar support",
    ],
    imageSrc: "/images/optimized/service-residential.jpg",
    imageAlt: "Residential rooftop solar panel installation in Delhi NCR",
  },
  {
    slug: "commercial-industrial-solar",
    title: "Commercial & Industrial Solar",
    description: "Engineered for facilities that need stronger savings, predictable output, and project discipline.",
    bullets: [
      "Load and tariff assessment",
      "Rooftop and ground-mounted planning",
      "Turnkey installation",
    ],
    imageSrc: "/images/optimized/service-commercial.jpg",
    imageAlt: "Commercial and industrial solar EPC installation for a large facility in Delhi NCR",
  },
  {
    slug: "mms-mounting-structure-contracting",
    title: "MMS (Mounting Structure) Contracting",
    description: "Structure solutions built for stability, clean execution, and large-project coordination.",
    bullets: [
      "Site-specific layouts",
      "Fabrication and erection support",
      "EPC coordination",
    ],
    imageSrc: "/images/optimized/service-mms.jpg",
    imageAlt: "Solar mounting structure contracting work for a rooftop installation in Delhi NCR",
  },
  {
    slug: "batteries-inverters",
    title: "Batteries & Inverters",
    description: "Smart power electronics and storage options for savings-first or backup-ready systems.",
    bullets: [
      "On-grid and hybrid options",
      "Backup planning",
      "Brand-matched recommendations",
    ],
    imageSrc: "/images/optimized/service-battery-inverter.jpg",
    imageAlt: "Solar battery and inverter setup for residential and commercial energy systems",
  },
  {
    slug: "pm-surya-ghar-subsidy-assistance",
    title: "PM Surya Ghar Subsidy Assistance",
    description: "Clear guidance for homeowners applying for subsidy-linked rooftop solar.",
    bullets: [
      "Eligibility checks",
      "Document checklist",
      "Application support",
    ],
    imageSrc: "/images/optimized/service-subsidy.jpg",
    imageAlt: "PM Surya Ghar rooftop solar consultation for subsidy assistance in Delhi NCR",
  },
];

export type ServicePageContent = {
  intro: string;
  audience: string;
  scope: string[];
  process: Array<{ title: string; detail: string }>;
  questions: Array<{ question: string; answer: string }>;
};

export const servicePageContent: Record<string, ServicePageContent> = {
  "residential-rooftop-solar": {
    intro:
      "Plan a right-sized rooftop system for your home with clear guidance from roof review through installation and commissioning.",
    audience: "For homeowners comparing rooftop capacity, equipment, subsidy support, and the next practical step.",
    scope: [
      "Roof and electricity-use review",
      "System sizing for available space and consumption",
      "Panel, inverter, and mounting recommendations",
      "Installation coordination and net-metering guidance",
    ],
    process: [
      { title: "Understand the site", detail: "We review the roof, monthly bill, orientation, and access before recommending a system size." },
      { title: "Build the proposal", detail: "You receive a practical equipment and installation scope aligned to the property." },
      { title: "Install and hand over", detail: "Our team coordinates installation, commissioning, and the next documentation steps." },
    ],
    questions: [
      { question: "Can you help with PM Surya Ghar documentation?", answer: "Yes. We explain the relevant document checklist and support the subsidy-linked application workflow." },
      { question: "Do you install systems on all residential roofs?", answer: "The final recommendation depends on roof condition, usable area, shading, access, and the property's electrical setup." },
    ],
  },
  "commercial-industrial-solar": {
    intro:
      "Reduce daytime grid dependence with a solar EPC plan built around facility load, roof conditions, execution access, and project coordination.",
    audience: "For offices, factories, institutions, warehouses, and facility teams evaluating rooftop or ground-mounted solar.",
    scope: [
      "Load and tariff assessment",
      "Rooftop and ground-mounted feasibility planning",
      "Equipment and mounting structure coordination",
      "Turnkey EPC installation and commissioning support",
    ],
    process: [
      { title: "Assess the facility", detail: "We review consumption patterns, available surfaces, access constraints, and the expected project scope." },
      { title: "Engineer the system", detail: "The proposal connects the generation plan with equipment selection, structure design, and site execution requirements." },
      { title: "Coordinate delivery", detail: "Installation teams, project milestones, and commissioning activities are organized around the facility's operating needs." },
    ],
    questions: [
      { question: "Do you handle projects above 100 kW?", answer: "Yes. Sun Power works across commercial and industrial scopes, including large-format projects up to 1 MW." },
      { question: "Can an existing industrial roof be assessed?", answer: "Yes. A site review helps establish usable area, structural considerations, access, and the appropriate mounting approach." },
    ],
  },
  "mms-mounting-structure-contracting": {
    intro:
      "Get site-specific mounting structure support for rooftop and larger solar installations where stability, alignment, and coordination matter.",
    audience: "For EPC teams, facility owners, contractors, and project managers who need dependable MMS fabrication or erection support.",
    scope: [
      "Site-specific structure layouts",
      "Fabrication and erection coordination",
      "Rooftop and ground-mounted applications",
      "Interface management with solar EPC work",
    ],
    process: [
      { title: "Review the site", detail: "We study the roof or ground condition, module arrangement, access, and project constraints." },
      { title: "Coordinate the structure", detail: "The mounting approach is aligned with module dimensions, loading considerations, and installation sequencing." },
      { title: "Support execution", detail: "Fabrication, delivery, erection, and coordination are planned to keep the solar installation moving." },
    ],
    questions: [
      { question: "Can MMS work be scoped separately from EPC?", answer: "Yes. Mounting structure contracting can be discussed as a focused work package or as part of a wider solar project." },
      { question: "Is the same structure used on every site?", answer: "No. Layout and execution depend on the surface, module arrangement, loading requirements, and access conditions." },
    ],
  },
  "batteries-inverters": {
    intro:
      "Choose the power electronics and storage approach that fits your priorities, whether that is grid savings, backup resilience, or a hybrid setup.",
    audience: "For homeowners and facility teams comparing on-grid, off-grid, hybrid, inverter, and lithium battery configurations.",
    scope: [
      "On-grid and hybrid system planning",
      "Battery capacity and backup requirement review",
      "Inverter and panel compatibility checks",
      "Installation and commissioning coordination",
    ],
    process: [
      { title: "Clarify the priority", detail: "We start with your load profile, backup expectation, outage pattern, and available solar capacity." },
      { title: "Match the equipment", detail: "Recommendations are based on system type, compatibility, operating conditions, and the intended use." },
      { title: "Integrate and test", detail: "The inverter and storage system are integrated with the solar installation and checked during handover." },
    ],
    questions: [
      { question: "Do I need a battery for an on-grid system?", answer: "Not always. Batteries are primarily considered when backup during outages or stored-energy use is important." },
      { question: "Can a battery be added later?", answer: "It depends on the inverter architecture, system compatibility, available space, and the future load requirement." },
    ],
  },
  "pm-surya-ghar-subsidy-assistance": {
    intro:
      "Understand the PM Surya Ghar process with practical support for eligibility, documents, application steps, and rooftop installation coordination.",
    audience: "For eligible homeowners who want to understand the subsidy-linked rooftop solar journey before they proceed.",
    scope: [
      "Eligibility and requirement review",
      "Document checklist guidance",
      "Application workflow support",
      "Rooftop system planning alongside the subsidy process",
    ],
    process: [
      { title: "Check the requirement", detail: "We discuss the property, electricity connection, roof, and system requirement to identify the relevant next steps." },
      { title: "Prepare the documents", detail: "You receive a clear checklist so the application and installation coordination can move in the right sequence." },
      { title: "Coordinate the project", detail: "Sun Power supports the rooftop system planning and explains the documentation milestones as the project progresses." },
    ],
    questions: [
      { question: "Does every household receive the same subsidy?", answer: "Subsidy eligibility and amount depend on the applicable government rules and the qualifying installation details." },
      { question: "Can you explain the process before I book a site survey?", answer: "Yes. We can first discuss the broad eligibility and documentation requirements, then plan the site review." },
    ],
  },
};

export type ProductCard = {
  name: string;
  badge: string;
  imageSrc: string;
  imageAlt: string;
  chips: string[];
};

export const productCatalogSections: Array<{
  title: string;
  description: string;
  cards: ProductCard[];
}> = [
  {
    title: "Solar Panels",
    description: "Selected panel lines for home rooftops, commercial sheds, and larger energy projects.",
    cards: [
      {
        name: "Shark 550 Mono PERC",
        badge: "Loom Solar • Shark Series",
        imageSrc: "/images/Shark 550 Mono PERC.webp",
        imageAlt: "Loom Solar Shark 550 Mono PERC solar panel card.",
        chips: ["550 Wp", "Mono PERC", "10Y product", "25Y performance"],
      },
      {
        name: "Tata Power Solar Rooftop Modules",
        badge: "Tata Power Solar • Rooftop",
        imageSrc: "/images/tata-power-solar-540w-glass-glass-mono-perc-bifacial-144-half-cells-efficiency-21-29-tp540hg10b.png",
        imageAlt: "Tata Power Solar rooftop module card.",
        chips: ["540-550 Wp", "Mono PERC", "25Y module coverage", "Home & C&I"],
      },
      {
        name: "Adani Shine TOPCon Modules",
        badge: "Adani Solar • Shine Series",
        imageSrc: "/images/Adani-Solar_Panel_DCR_565wp_TOPCon.webp",
        imageAlt: "Adani Shine TOPCon solar module card.",
        chips: ["565-590 Wp", "TOPCon", "Utility-grade build", "Datasheet on request"],
      },
      {
        name: "Waaree 540 Mono PERC DCR",
        badge: "Waaree • Mono PERC",
        imageSrc: "/images/waaree 540 Mono PERC.png",
        imageAlt: "Waaree 540 Mono PERC DCR solar module card.",
        chips: ["540 Wp", "Mono PERC DCR", "12Y product", "27Y output"],
      },
    ],
  },
  {
    title: "Batteries",
    description: "Storage options for hybrid systems, outage backup, and better daytime power use.",
    cards: [
      {
        name: "CAML 12.8 V 100 Ah, 1.28 kWh LiFePO4 Battery",
        badge: "Loom Solar • Lithium Battery",
        imageSrc: "/images/Caml_10012_Features_Image_1000x.webp",
        imageAlt: "Loom Solar CAML 12.8V 100Ah LiFePO4 Lithium Battery",
        chips: ["12.8V / 100Ah", "1.28 kWh", "LiFePO4", "3Y warranty"],
      },
      {
        name: "CAML 5.12 kWh Wall-Mount Battery",
        badge: "Loom Solar • Lithium Battery",
        imageSrc: "/images/100Ah_51.2_V_WM_Front_Image_500x.webp",
        imageAlt: "Loom Solar CAML 5.12 kWh 51.2V Wall-Mount Battery",
        chips: ["51.2V / 100Ah", "6000+ cycles", "5Y warranty", "Rack / wall"],
      },
      {
        name: "CAML 10.24 kWh Battery",
        badge: "Loom Solar • C&I Storage",
        imageSrc: "/images/CAML 10.24 kWh Battery .jpg",
        imageAlt: "CAML 10.24 kWh commercial battery storage card.",
        chips: ["51.2V / 200Ah", "LiFePO4", "5Y warranty", "High backup"],
      },
    ],
  },
  {
    title: "Inverters",
    description: "On-grid and hybrid inverter options for homes, shops, and commercial rooftops.",
    cards: [
      {
        name: "Fusion 5 kW Hybrid Inverter",
        badge: "Loom Solar • Hybrid",
        imageSrc: "/images/Fusion_5_Kw_Hybrid_Inverter_1000x.webp",
        imageAlt: "Fusion 5 kW hybrid solar inverter card.",
        chips: ["5 kW", "48V hybrid", "5Y warranty", "Home / small office"],
      },
      {
        name: "Fusion 10 kW On-Grid",
        badge: "Loom Solar • On-Grid",
        imageSrc: "/images/Fusion_10_kW_3phase_0n-Grid_Inverter_model_1000x.webp",
        imageAlt: "Fusion 10 kW on-grid solar inverter card.",
        chips: ["10 kW", "3 phase", "10Y warranty", "Commercial rooftops"],
      },
      {
        name: "Fusion 20 kW On-Grid",
        badge: "Loom Solar • On-Grid",
        imageSrc: "/images/Fusion_20_kW_3phase_0n-Grid_Inverter_model_1000x.webp",
        imageAlt: "Fusion 20 kW commercial on-grid solar inverter card.",
        chips: ["20 kW", "On-grid", "10Y warranty", "C&I usage"],
      },
    ],
  },
];

export const projectProfiles = [
  {
    title: "East Delhi residential rooftops",
    size: "3-5 kW",
    location: "I.P. Extension and nearby Delhi neighborhoods",
    detail:
      "Compact rooftop systems planned for bill reduction, net-metering readiness, and smooth subsidy support.",
    imageSrc: "/images/optimized/project-residential.jpg",
    imageAlt: "3 to 5 kW residential rooftop solar installation in Delhi NCR",
  },
  {
    title: "Noida and Ghaziabad commercial roofs",
    size: "10-100 kW",
    location: "Offices, schools, and commercial facilities across NCR",
    detail:
      "Commercial installations focused on daytime load coverage, operating savings, and scalable execution.",
    imageSrc: "/images/optimized/project-commercial.jpg",
    imageAlt: "10 to 100 kW commercial and industrial rooftop solar installation in Noida",
  },
  {
    title: "Industrial and large-format sites",
    size: "100 kW to 1 MW",
    location: "Delhi NCR industrial and open-area installation scopes",
    detail:
      "Larger projects supported with structure planning, phased execution, and coordination for demanding sites.",
    imageSrc: "/images/optimized/project-industrial.jpg",
    imageAlt: "Large-scale 100 kW to 1 MW industrial solar installation and EPC inspection",
  },
];

export const processSteps = [
  "Share your latest electricity bill, roof size, or load requirement.",
  "Receive a preliminary system recommendation and budget range.",
  "Book a site survey to confirm layout, electrical scope, and structure needs.",
  "Move ahead with final proposal, installation planning, and support documentation.",
];

export const resourceCards = [
  {
    title: "How solar works",
    description:
      "See how panels, inverters, household loads, the grid, and net metering work together.",
    detail:
      "Solar panels produce DC electricity, the inverter converts it to usable AC power, and the home consumes generation before drawing from the grid. Net metering records exported surplus so the bill reflects the net energy used.",
  },
  {
    title: "On-grid vs off-grid vs hybrid",
    description:
      "Compare savings-first, backup-first, and hybrid systems before selecting equipment.",
    detail:
      "On-grid systems prioritize savings and work with the utility grid, while off-grid systems rely on batteries for independent backup. Hybrid systems combine grid savings with stored power for outage resilience.",
  },
  {
    title: "DCR vs non-DCR panels",
    description:
      "Understand when DCR modules matter for subsidy-linked residential installations.",
    detail:
      "DCR modules use domestically manufactured cells and are generally required for subsidy-linked residential projects. Non-DCR modules can suit projects where subsidy eligibility is not part of the brief.",
  },
  {
    title: "PM Surya Ghar process",
    description:
      "Follow the key stages from eligibility review through documentation and subsidy claim.",
    detail:
      "The process typically covers eligibility review, documents, vendor selection, installation, inspection, and subsidy claim steps. SUNPOWER helps homeowners prepare the required information and coordinate the installation workflow.",
  },
];

export const faqs = [
  {
    question: "How much does rooftop solar cost in Delhi NCR?",
    answer:
      "Cost depends on system size, roof type, electrical work, and whether you want batteries. The calculator gives a planning range, then a site survey turns it into a final quotation.",
  },
  {
    question: "Can SUNPOWER help with PM Surya Ghar subsidy applications?",
    answer:
      "Yes. SUNPOWER assists homeowners with eligibility checks, documentation, and the process required for PM Surya Ghar subsidy claims.",
  },
  {
    question: "What system is right for me: on-grid, off-grid, or hybrid?",
    answer:
      "On-grid is usually the most economical for bill reduction, off-grid is for backup-first use cases, and hybrid fits buyers who want both savings and resilience.",
  },
  {
    question: "Do you only work on small residential systems?",
    answer:
      "No. SUNPOWER handles both residential systems and larger commercial or industrial projects up to 1 MW.",
  },
  {
    question: "Do you handle mounting structure and EPC work too?",
    answer:
      "Yes. SUNPOWER also supports EPC execution and MMS contracting for larger project requirements.",
  },
];

export type CalculatorResult = {
  systemSizeKw: number;
  roofAreaSqFt: number;
  costMinLakhs: number;
  costMaxLakhs: number;
  annualSavingsLakhs: number;
  paybackYears: number;
};

export function estimateSolar(input: { monthlyBill?: number; roofAreaSqFt?: number }): CalculatorResult {
  const roofAreaSqFt = Math.max(input.roofAreaSqFt ?? 0, 0);
  const monthlyBill = Math.max(input.monthlyBill ?? 0, 0);

  const sizeFromBill = monthlyBill > 0 ? monthlyBill / 1000 : 0;
  const sizeFromRoof = roofAreaSqFt > 0 ? roofAreaSqFt / 100 : 0;
  const systemSizeKw = Math.max(2, Number((sizeFromBill || sizeFromRoof || 3).toFixed(1)));
  const usableRoofAreaSqFt = Math.round(systemSizeKw * 100);
  const costMinLakhs = Number(((systemSizeKw * 55000) / 100000).toFixed(2));
  const costMaxLakhs = Number(((systemSizeKw * 70000) / 100000).toFixed(2));
  const annualSavingsLakhs = Number(((systemSizeKw * 1350 * 8.5 * 0.78) / 100000).toFixed(2));
  const paybackYears = Number(
    (((costMinLakhs + costMaxLakhs) / 2) / Math.max(annualSavingsLakhs, 0.25)).toFixed(1),
  );

  return {
    systemSizeKw,
    roofAreaSqFt: usableRoofAreaSqFt,
    costMinLakhs,
    costMaxLakhs,
    annualSavingsLakhs,
    paybackYears,
  };
}
