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
  { value: "3-5 kW", label: "Typical residential rooftop range" },
  { value: "1 MW", label: "Large-scale execution capacity" },
  { value: "31 Aug 2028", label: "Loom dealer certificate validity" },
];

export const trustSignals = [
  "Authorized Loom Solar dealer for Delhi",
  "Solar panels, batteries, inverters, EPC and MMS under one brand",
  "Residential, commercial, industrial, rooftop and ground-mounted scope",
  "Delhi NCR site visits with PM Surya Ghar subsidy guidance",
];

export const leadPoints = [
  "Qualified quote requests and site visits, not e-commerce checkouts",
  "Mobile-first CTAs for WhatsApp, callback, and bill-sharing",
  "Planning support for subsidy-linked homes and commercial buyers",
];

export const aboutHighlights = [
  {
    title: "Business profile",
    detail:
      "Sun Power operates as a solar dealership and EPC/MMS contracting firm for rooftop and ground-mounted systems across Delhi NCR.",
  },
  {
    title: "Dealer credential",
    detail:
      "Authorized dealer of Loom Solar in Delhi. Certificate no. 23873/DL/08/2026. The supplied certificate is valid until August 31, 2028.",
  },
  {
    title: "Project range",
    detail:
      "The brief covers residential 3-5 kW systems through large commercial and industrial projects reaching 1 MW scale.",
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
    title: "Residential Solar",
    description:
      "On-grid and hybrid rooftop systems for homes, villas, builder floors, and societies that want bill reduction plus a clean subsidy path.",
    bullets: [
      "Bill-based system sizing",
      "Roof suitability and shadow checks",
      "PM Surya Ghar documentation support",
    ],
    imageSrc: "/images/residential-rooftop.jpg",
    imageAlt: "Residential rooftop solar array installed on a house terrace.",
  },
  {
    title: "Commercial & Industrial Solar",
    description:
      "Energy-cost-focused systems for offices, schools, warehouses, institutions, and factories that need clearer payback planning.",
    bullets: [
      "Load analysis and tariff review",
      "Rooftop and ground-mounted planning",
      "Execution support from quotation to commissioning",
    ],
    imageSrc: "/images/commercial-rooftop.jpg",
    imageAlt: "Commercial rooftop covered with solar panels for daytime energy use.",
  },
  {
    title: "MMS Contracting",
    description:
      "Mounting structure design and execution support for rooftop and ground-mounted projects where structural confidence matters as much as generation.",
    bullets: [
      "Site-specific structure layouts",
      "Execution coordination for EPC jobs",
      "Installation support for larger project scopes",
    ],
    imageSrc: "/images/install-team.webp",
    imageAlt: "Installation team working on a rooftop solar mounting structure.",
  },
  {
    title: "Batteries & Inverters",
    description:
      "System pairing for on-grid, off-grid, and hybrid requirements so buyers can choose between maximum savings and stronger backup readiness.",
    bullets: [
      "On-grid inverter options",
      "Off-grid backup planning",
      "Hybrid system recommendations",
    ],
    imageSrc: "/images/inspection-team.jpg",
    imageAlt: "Solar team inspecting system details on site before commissioning.",
  },
  {
    title: "Subsidy Assistance",
    description:
      "Straightforward PM Surya Ghar guidance so homeowners know eligibility, paperwork, application steps, and the handoff points after installation.",
    bullets: [
      "Eligibility walkthrough",
      "Document checklist",
      "Submission-ready support",
    ],
    imageSrc: "/images/residential-rooftop.jpg",
    imageAlt: "Residential rooftop installation used for subsidy and quote planning.",
  },
];

export const catalogGroups = [
  {
    title: "Solar panels",
    description:
      "Solar panel recommendations for homes, shops, offices, and industrial roofs, including DCR and non-DCR guidance when subsidy or sourcing requirements matter.",
  },
  {
    title: "Inverters",
    description:
      "On-grid, off-grid, and hybrid inverter guidance matched to daytime usage, outage frequency, and backup expectations.",
  },
  {
    title: "Batteries",
    description:
      "Battery options for homes and businesses that want resilience during outages or stronger self-consumption from hybrid systems.",
  },
  {
    title: "Rooftop installation",
    description:
      "Site survey, structure planning, installation, and commissioning support for homes, societies, offices, schools, and factory rooftops.",
  },
  {
    title: "Ground-mounted installation",
    description:
      "Ground-mounted solar execution for open-area projects where layout, structure, and long-term maintenance access need to be planned carefully.",
  },
  {
    title: "EPC & MMS contracting",
    description:
      "Execution support for mounting structures and broader project delivery where procurement, structure work, and installation need one accountable partner.",
  },
  {
    title: "Multi-brand sourcing",
    description:
      "The client catalog explicitly positions Sun Power for multi-brand sourcing, which supports practical product recommendations instead of single-SKU selling.",
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
    description:
      "High-output Loom panel options for residential rooftops, commercial roofs, and larger ground-mounted projects.",
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
        name: "Shark 600 N-Type TOPCon",
        badge: "Loom Solar • Shark Series",
        imageSrc:
          "https://images.unsplash.com/photo-1508873696983-2df570464756?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Commercial rooftop solar installation.",
        chips: ["600 Wp", "N-Type TOPCon", "10Y manufacturing", "30Y performance"],
        ctaLabel: "Request Datasheet",
      },
      {
        name: "Shark 625 Dual-Glass Bifacial",
        badge: "Loom Solar • Utility Grade",
        imageSrc:
          "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Rows of solar modules viewed close up.",
        chips: ["625 Wp", "TOPCon bifacial", "15Y product", "30Y performance"],
        ctaLabel: "Request Datasheet",
      },
    ],
  },
  {
    title: "Batteries",
    description:
      "LiFePO4 storage choices for backup-heavy homes, hybrid systems, and commercial continuity planning.",
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
    description:
      "On-grid and hybrid inverter options covering homes, shops, three-phase commercial loads, and larger rooftops.",
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
      "Fit for homeowners comparing subsidy eligibility, roof space, and monthly bill reduction before booking a site survey.",
    imageSrc: "/images/residential-rooftop.jpg",
    imageAlt: "Residential rooftop solar installation on a multi-level home.",
  },
  {
    title: "Noida and Ghaziabad commercial roofs",
    size: "10-100 kW",
    location: "Offices, schools, and commercial facilities across NCR",
    detail:
      "Positioned for teams that care about daytime load coverage, tariff pressure, and cleaner operating cost planning.",
    imageSrc: "/images/commercial-rooftop.jpg",
    imageAlt: "Large commercial rooftop with neatly aligned solar modules.",
  },
  {
    title: "Industrial and large-format sites",
    size: "100 kW to 1 MW",
    location: "Delhi NCR industrial and open-area installation scopes",
    detail:
      "Designed for buyers who need confidence on structure work, phasing, commercial coordination, and execution bandwidth.",
    imageSrc: "/images/install-team.webp",
    imageAlt: "Solar installation crew working across an industrial rooftop array.",
  },
];

export const processSteps = [
  "Share your latest electricity bill, roof size, or load requirement.",
  "Sun Power recommends a planning-level system size, category, and cost band.",
  "The team books a site survey and confirms technical fit, structure needs, and execution scope.",
  "Final quotation, installation planning, and subsidy support move forward from one point of contact.",
];

export const resourceCards = [
  {
    title: "How solar works",
    description:
      "A plain-English walkthrough of panels, inverter, grid, net metering, and where your daytime energy actually goes.",
  },
  {
    title: "On-grid vs off-grid vs hybrid",
    description:
      "Use this to decide whether lowest cost, battery backup, or a balance of both should drive the system design.",
  },
  {
    title: "DCR vs non-DCR panels",
    description:
      "A practical explainer on procurement choice, subsidy linkage, and why the cheaper panel is not always the correct recommendation.",
  },
  {
    title: "PM Surya Ghar process",
    description:
      "What documents are needed, how the workflow moves, and where Sun Power can reduce confusion for residential buyers.",
  },
];

export const proofPoints = [
  "Authorized dealer of Loom Solar, certificate no. 23873/DL/08/2026",
  "GSTIN listed in the supplied catalog cover: 07BQKPV2646A1ZS",
  "Catalog cover confirms solar panels, batteries, inverters, rooftop and ground-mounted installation, and EPC & MMS contracting",
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
      "Yes. Subsidy support is part of the supplied requirement brief, especially for homeowners who need clarity on eligibility, documents, and next steps.",
  },
  {
    question: "What system is right for me: on-grid, off-grid, or hybrid?",
    answer:
      "On-grid is usually the most economical for bill reduction, off-grid is for backup-first use cases, and hybrid fits buyers who want both savings and resilience.",
  },
  {
    question: "Do you only work on small residential systems?",
    answer:
      "No. The brief explicitly covers projects from small 3-5 kW homes up to large commercial and industrial scopes around 1 MW.",
  },
  {
    question: "Do you handle mounting structure and EPC work too?",
    answer:
      "Yes. Sun Power is positioned not only as a dealer but also as an EPC and MMS contracting partner for larger execution scopes.",
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
