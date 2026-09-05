export const siteUrl = "https://dhananjayvj.github.io/sunpower";

export const contact = {
  phoneDisplay: "+91 95604 73434",
  phoneHref: "tel:+919560473434",
  whatsappHref: "https://wa.me/919560473434",
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

export const stats = [
  { value: "3-5 kW", label: "Typical home rooftop systems" },
  { value: "1 MW", label: "Commercial and industrial project capacity" },
  { value: "Delhi NCR", label: "Primary service region" },
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
      "Sun Power is a Delhi NCR solar dealership and EPC or MMS contracting firm delivering rooftop and ground-mounted projects for homes, businesses, and industrial facilities.",
  },
  {
    title: "Product credential",
    detail:
      "Sun Power holds Loom Solar dealer certificate no. 23873/DL/08/2026, valid till August 31, 2028.",
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

export type ProductCard = {
  name: string;
  badge: string;
  imageSrc: string;
  imageAlt: string;
  chips: string[];
  ctaLabel: string;
};

const equipmentPlaceholder = (title: string, tone: "green" | "yellow" | "blue" | "slate") => {
  const palettes = {
    green: ["#ecfdf5", "#d1fae5", "#166534"],
    yellow: ["#fffbeb", "#fef3c7", "#854d0e"],
    blue: ["#eff6ff", "#dbeafe", "#1e3a8a"],
    slate: ["#f8fafc", "#e2e8f0", "#334155"],
  } as const;
  const [start, end, ink] = palettes[tone];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="${title}"><defs><linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="${start}"/><stop offset="1" stop-color="${end}"/></linearGradient></defs><rect width="800" height="600" rx="42" fill="url(#bg)"/><rect x="158" y="120" width="484" height="292" rx="28" fill="white" fill-opacity=".72" stroke="${ink}" stroke-opacity=".16" stroke-width="4"/><path d="M190 180h420M190 240h420M190 300h420M190 360h420M260 140v252M400 140v252M540 140v252" stroke="${ink}" stroke-opacity=".18" stroke-width="4"/><circle cx="620" cy="118" r="42" fill="#ffd60a" fill-opacity=".88"/><text x="400" y="488" fill="${ink}" font-family="Manrope, Arial, sans-serif" font-size="34" font-weight="700" text-anchor="middle">${title}</text></svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
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
        imageSrc: equipmentPlaceholder("Loom Solar Shark 550", "green"),
        imageAlt: "Loom Solar Shark 550 Mono PERC solar panel card.",
        chips: ["550 Wp", "Mono PERC", "10Y product", "25Y performance"],
        ctaLabel: "Request Datasheet",
      },
      {
        name: "Tata Power Solar Rooftop Modules",
        badge: "Tata Power Solar • Rooftop",
        imageSrc: equipmentPlaceholder("Tata Rooftop Modules", "yellow"),
        imageAlt: "Tata Power Solar rooftop module card.",
        chips: ["540-550 Wp", "Mono PERC", "25Y module coverage", "Home & C&I"],
        ctaLabel: "Request Datasheet",
      },
      {
        name: "Adani Shine TOPCon Modules",
        badge: "Adani Solar • Shine Series",
        imageSrc: equipmentPlaceholder("Adani Shine TOPCon", "blue"),
        imageAlt: "Adani Shine TOPCon solar module card.",
        chips: ["565-590 Wp", "TOPCon", "Utility-grade build", "Datasheet on request"],
        ctaLabel: "Request Datasheet",
      },
      {
        name: "Waaree 540 Mono PERC DCR",
        badge: "Waaree • Mono PERC",
        imageSrc: equipmentPlaceholder("Waaree 540 DCR", "blue"),
        imageAlt: "Waaree 540 Mono PERC DCR solar module card.",
        chips: ["540 Wp", "Mono PERC DCR", "12Y product", "27Y output"],
        ctaLabel: "Request Datasheet",
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
        ctaLabel: "Request Datasheet",
      },
      {
        name: "CAML 5.12 kWh Wall-Mount Battery",
        badge: "Loom Solar • Lithium Battery",
        imageSrc: "/images/100Ah_51.2_V_WM_Front_Image_500x.webp",
        imageAlt: "Loom Solar CAML 5.12 kWh 51.2V Wall-Mount Battery",
        chips: ["51.2V / 100Ah", "6000+ cycles", "5Y warranty", "Rack / wall"],
        ctaLabel: "Request Datasheet",
      },
      {
        name: "CAML 10.24 kWh Battery",
        badge: "Loom Solar • C&I Storage",
        imageSrc: equipmentPlaceholder("CAML 10.24 kWh Storage", "slate"),
        imageAlt: "CAML 10.24 kWh commercial battery storage card.",
        chips: ["51.2V / 200Ah", "LiFePO4", "5Y warranty", "High backup"],
        ctaLabel: "Request Datasheet",
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
        imageSrc: equipmentPlaceholder("Fusion 5 kW Hybrid", "slate"),
        imageAlt: "Fusion 5 kW hybrid solar inverter card.",
        chips: ["5 kW", "48V hybrid", "5Y warranty", "Home / small office"],
        ctaLabel: "Request Datasheet",
      },
      {
        name: "Fusion 10 kW On-Grid",
        badge: "Loom Solar • On-Grid",
        imageSrc: equipmentPlaceholder("Fusion 10 kW On-Grid", "slate"),
        imageAlt: "Fusion 10 kW on-grid solar inverter card.",
        chips: ["10 kW", "3 phase", "10Y warranty", "Commercial rooftops"],
        ctaLabel: "Request Datasheet",
      },
      {
        name: "Fusion 20 kW On-Grid",
        badge: "Loom Solar • On-Grid",
        imageSrc: equipmentPlaceholder("Fusion 20 kW On-Grid", "slate"),
        imageAlt: "Fusion 20 kW commercial on-grid solar inverter card.",
        chips: ["20 kW", "On-grid", "10Y warranty", "C&I usage"],
        ctaLabel: "Request Datasheet",
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
      "Understand how panels, inverters, the grid, and net metering work together in a rooftop solar system.",
  },
  {
    title: "On-grid vs off-grid vs hybrid",
    description:
      "Compare the right setup for bill savings, battery backup, or a balanced system.",
  },
  {
    title: "DCR vs non-DCR panels",
    description:
      "Learn the difference between DCR and non-DCR modules for subsidy-linked and non-subsidy projects.",
  },
  {
    title: "PM Surya Ghar process",
    description:
      "Get a simple view of eligibility, documentation, approval flow, and installation support.",
  },
];

export const faqs = [
  {
    question: "How much does rooftop solar cost in Delhi NCR?",
    answer:
      "Cost depends on system size, roof type, electrical work, and whether you want batteries. The calculator gives a planning range, then a site survey turns it into a final quotation.",
  },
  {
    question: "Can Sun Power help with PM Surya Ghar subsidy applications?",
    answer:
      "Yes. Sun Power assists homeowners with eligibility checks, documentation, and the process required for PM Surya Ghar subsidy claims.",
  },
  {
    question: "What system is right for me: on-grid, off-grid, or hybrid?",
    answer:
      "On-grid is usually the most economical for bill reduction, off-grid is for backup-first use cases, and hybrid fits buyers who want both savings and resilience.",
  },
  {
    question: "Do you only work on small residential systems?",
    answer:
      "No. Sun Power handles both residential systems and larger commercial or industrial projects up to 1 MW.",
  },
  {
    question: "Do you handle mounting structure and EPC work too?",
    answer:
      "Yes. Sun Power also supports EPC execution and MMS contracting for larger project requirements.",
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
