export const siteUrl = "https://dhananjayvj.github.io/sunpower";

export const contact = {
  phoneDisplay: "+91 95604 73434",
  phoneHref: "tel:+919560473434",
  whatsappHref: "https://wa.me/919560473434",
  address:
    "Office No. 3, B-47/A, Lane No. 6, Joshi Colony, I.P. Extension, Delhi - 110092",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Office+No.+3,+B-47%2FA,+Lane+No.+6,+Joshi+Colony,+I.P.+Extension,+Delhi+-+110092",
  mapsEmbedHref:
    "https://www.google.com/maps?q=Office+No.+3,+B-47%2FA,+Lane+No.+6,+Joshi+Colony,+I.P.+Extension,+Delhi+-+110092&z=15&output=embed",
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
  "Authorized Loom Solar Dealer",
  "Rooftop and ground-mounted solar solutions",
  "PM Surya Ghar subsidy assistance for homeowners",
  "Site surveys, EPC execution, and MMS contracting across Delhi NCR",
];

export const aboutHighlights = [
  {
    title: "Who we are",
    detail:
      "Sun Power is a Delhi NCR solar dealership and EPC or MMS contracting firm delivering rooftop and ground-mounted projects for homes, businesses, and industrial facilities.",
  },
  {
    title: "Loom Solar credential",
    detail:
      "Authorized dealer of Loom Solar in Delhi. Certificate no. 23873/DL/08/2026. Valid till August 31, 2028.",
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
    imageSrc: "/images/residential-rooftop.jpg",
    imageAlt: "Residential rooftop solar array installed on a house terrace.",
  },
  {
    title: "Commercial & Industrial Solar",
    description: "Engineered for facilities that need stronger savings, predictable output, and project discipline.",
    bullets: [
      "Load and tariff assessment",
      "Rooftop and ground-mounted planning",
      "Turnkey installation",
    ],
    imageSrc: "/images/commercial-rooftop.jpg",
    imageAlt: "Commercial rooftop covered with solar panels for daytime energy use.",
  },
  {
    title: "MMS (Mounting Structure) Contracting",
    description: "Structure solutions built for stability, clean execution, and large-project coordination.",
    bullets: [
      "Site-specific layouts",
      "Fabrication and erection support",
      "EPC coordination",
    ],
    imageSrc: "/images/install-team.webp",
    imageAlt: "Installation team working on a rooftop solar mounting structure.",
  },
  {
    title: "Batteries & Inverters",
    description: "Smart power electronics and storage options for savings-first or backup-ready systems.",
    bullets: [
      "On-grid and hybrid options",
      "Backup planning",
      "Brand-matched recommendations",
    ],
    imageSrc: "/images/inspection-team.jpg",
    imageAlt: "Solar team inspecting system details on site before commissioning.",
  },
  {
    title: "PM Surya Ghar Subsidy Assistance",
    description: "Clear guidance for homeowners applying for subsidy-linked rooftop solar.",
    bullets: [
      "Eligibility checks",
      "Document checklist",
      "Application support",
    ],
    imageSrc: "/images/residential-rooftop.jpg",
    imageAlt: "Residential rooftop installation used for subsidy and quote planning.",
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
        imageSrc:
          "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Solar panels installed in sunlight.",
        chips: ["550 Wp", "Mono PERC", "10Y product", "25Y performance"],
        ctaLabel: "Request Datasheet",
      },
      {
        name: "Tata Power Solar Rooftop Modules",
        badge: "Tata Power Solar • Rooftop",
        imageSrc:
          "https://images.unsplash.com/photo-1508873696983-2df570464756?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Commercial rooftop solar installation.",
        chips: ["540-550 Wp", "Mono PERC", "25Y module coverage", "Home & C&I"],
        ctaLabel: "Request Datasheet",
      },
      {
        name: "Adani Shine TOPCon Modules",
        badge: "Adani Solar • Shine Series",
        imageSrc:
          "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Rows of solar modules viewed close up.",
        chips: ["565-590 Wp", "TOPCon", "Utility-grade build", "Datasheet on request"],
        ctaLabel: "Request Datasheet",
      },
      {
        name: "Waaree 540 Mono PERC DCR",
        badge: "Waaree • Mono PERC",
        imageSrc:
          "https://images.unsplash.com/photo-1508873696983-2df570464756?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Large rooftop array installed on a commercial building.",
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
        name: "CAML 2.56 kWh Wall-Mount",
        badge: "Loom Solar • Lithium Battery",
        imageSrc:
          "https://placehold.co/800x600/f8fafc/334155?text=CAML+2.56+kWh+Battery",
        imageAlt: "Placeholder illustration for a wall-mount lithium battery.",
        chips: ["25.6V / 100Ah", "LiFePO4", "3Y warranty", "Wall mount"],
        ctaLabel: "Request Datasheet",
      },
      {
        name: "CAML 5.12 kWh Battery",
        badge: "Loom Solar • Lithium Battery",
        imageSrc:
          "https://placehold.co/800x600/f8fafc/334155?text=CAML+5.12+kWh+Battery",
        imageAlt: "Placeholder illustration for a 5.12 kWh lithium battery.",
        chips: ["51.2V / 100Ah", "6000+ cycles", "5Y warranty", "Rack / wall"],
        ctaLabel: "Request Datasheet",
      },
      {
        name: "CAML 10.24 kWh Battery",
        badge: "Loom Solar • C&I Storage",
        imageSrc:
          "https://placehold.co/800x600/f8fafc/334155?text=CAML+10.24+kWh+Storage",
        imageAlt: "Placeholder illustration for a commercial battery storage unit.",
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
        imageSrc:
          "https://placehold.co/800x600/f8fafc/334155?text=Fusion+5+kW+Hybrid+Inverter",
        imageAlt: "Placeholder illustration for a hybrid solar inverter.",
        chips: ["5 kW", "48V hybrid", "5Y warranty", "Home / small office"],
        ctaLabel: "Request Datasheet",
      },
      {
        name: "Fusion 10 kW On-Grid",
        badge: "Loom Solar • On-Grid",
        imageSrc:
          "https://placehold.co/800x600/f8fafc/334155?text=Fusion+10+kW+On-Grid",
        imageAlt: "Placeholder illustration for an on-grid inverter.",
        chips: ["10 kW", "3 phase", "10Y warranty", "Commercial rooftops"],
        ctaLabel: "Request Datasheet",
      },
      {
        name: "Fusion 20 kW On-Grid",
        badge: "Loom Solar • On-Grid",
        imageSrc:
          "https://placehold.co/800x600/f8fafc/334155?text=Fusion+20+kW+On-Grid",
        imageAlt: "Placeholder illustration for a larger commercial inverter.",
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
    imageSrc: "/images/residential-rooftop.jpg",
    imageAlt: "Residential rooftop solar installation on a multi-level home.",
  },
  {
    title: "Noida and Ghaziabad commercial roofs",
    size: "10-100 kW",
    location: "Offices, schools, and commercial facilities across NCR",
    detail:
      "Commercial installations focused on daytime load coverage, operating savings, and scalable execution.",
    imageSrc: "/images/commercial-rooftop.jpg",
    imageAlt: "Large commercial rooftop with neatly aligned solar modules.",
  },
  {
    title: "Industrial and large-format sites",
    size: "100 kW to 1 MW",
    location: "Delhi NCR industrial and open-area installation scopes",
    detail:
      "Larger projects supported with structure planning, phased execution, and coordination for demanding sites.",
    imageSrc: "/images/install-team.webp",
    imageAlt: "Solar installation crew working across an industrial rooftop array.",
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
