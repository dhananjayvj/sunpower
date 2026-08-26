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
};

export const navigation = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#resources", label: "Resources" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "3-5 kW", label: "Typical residential systems" },
  { value: "1 MW", label: "Large-scale project capacity" },
  { value: "Delhi NCR", label: "Primary service region" },
];

export const trustSignals = [
  "Authorized Loom Solar dealer",
  "Residential to industrial execution range",
  "PM Surya Ghar subsidy assistance",
  "EPC + MMS contracting under one team",
];

export const services = [
  {
    title: "Residential Solar",
    description:
      "Grid-tied and hybrid rooftop systems for homes, villas, builder floors, and gated communities across Delhi NCR.",
    bullets: ["Bill reduction planning", "Roof suitability check", "Subsidy-ready documentation"],
    imageSrc: "/images/residential-rooftop.jpg",
    imageAlt: "Residential rooftop solar array installed on a house terrace.",
  },
  {
    title: "Commercial & Industrial Solar",
    description:
      "Performance-led systems for offices, schools, warehouses, factories, and institutions focused on lower operating cost.",
    bullets: ["Load analysis", "Project phasing", "Long-term maintenance support"],
    imageSrc: "/images/commercial-rooftop.jpg",
    imageAlt: "Commercial rooftop covered with solar panels for daytime energy use.",
  },
  {
    title: "MMS Contracting",
    description:
      "Mounting structure design and execution support for rooftop and ground-mounted projects where speed and structural confidence matter.",
    bullets: ["Custom structure layouts", "Site-specific engineering", "Execution coordination"],
    imageSrc: "/images/install-team.webp",
    imageAlt: "Installation team working on a rooftop solar mounting structure.",
  },
  {
    title: "Batteries & Inverters",
    description:
      "System pairing for backup reliability, better self-consumption, and cleaner energy management in low-grid-confidence situations.",
    bullets: ["On-grid options", "Off-grid backup", "Hybrid inverter guidance"],
    imageSrc: "/images/inspection-team.jpg",
    imageAlt: "Solar team inspecting system details on site before commissioning.",
  },
  {
    title: "PM Surya Ghar Assistance",
    description:
      "Jargon-free help from eligibility checks through application support so homeowners understand the process before committing.",
    bullets: ["Eligibility walkthrough", "Document checklist", "Claim support"],
    imageSrc: "/images/residential-rooftop.jpg",
    imageAlt: "Residential rooftop installation used for subsidy and quote planning.",
  },
];

export const projectRanges = [
  {
    title: "East Delhi residence",
    size: "3-5 kW",
    detail:
      "Case-study layout for subsidy-led residential buyers: bill review, roof-fit validation, on-grid recommendation, and a clean path to site visit.",
    imageSrc: "/images/residential-rooftop.jpg",
    imageAlt: "Residential rooftop solar installation on a multi-level home.",
  },
  {
    title: "Noida commercial facility",
    size: "10-100 kW",
    detail:
      "Built for decision-makers comparing tariffs and payback. The story centers on daytime demand, structure constraints, and operating-cost reduction.",
    imageSrc: "/images/commercial-rooftop.jpg",
    imageAlt: "Large commercial rooftop with neatly aligned solar modules.",
  },
  {
    title: "NCR industrial site",
    size: "100 kW to 1 MW",
    detail:
      "Large-scope case-study format for industrial buyers who need execution confidence, structure planning, and clearer commercial timelines.",
    imageSrc: "/images/install-team.webp",
    imageAlt: "Solar installation crew working across an industrial rooftop array.",
  },
];

export const resourceCards = [
  {
    title: "How solar works",
    description:
      "From panels to inverters to the utility meter, the system is only complicated until someone explains the flow clearly.",
  },
  {
    title: "On-grid vs off-grid vs hybrid",
    description:
      "Choose based on outage risk, backup expectations, and how much of your daytime generation you can actually use.",
  },
  {
    title: "DCR vs non-DCR panels",
    description:
      "A procurement decision that affects subsidy alignment, sourcing, and total system economics.",
  },
  {
    title: "PM Surya Ghar subsidy process",
    description:
      "Know the documents, sequence, and decision points before you submit anything.",
  },
];

export const reviewReadiness = [
  {
    title: "Google Business reviews",
    detail: "Replace this card with imported or manually approved review excerpts and star ratings.",
  },
  {
    title: "Residential testimonials",
    detail: "Use only client-approved quotes tied to a real location, system size, and installation month.",
  },
  {
    title: "Commercial references",
    detail: "Publish proof with real reviewer names or company consent instead of anonymous praise.",
  },
];

export const faqs = [
  {
    question: "How much does rooftop solar cost in Delhi NCR?",
    answer:
      "It depends on system size, roof condition, electrical scope, and whether you want batteries. The calculator gives a planning range, then a site survey sharpens it.",
  },
  {
    question: "Can I get PM Surya Ghar subsidy support through Sun Power?",
    answer:
      "Yes. The site is positioned around helping homeowners understand eligibility, paperwork, and the steps required before and after installation.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Small residential jobs are faster than commercial or industrial systems, but the real driver is site readiness, approvals, and scope complexity.",
  },
  {
    question: "What is better for me: on-grid, off-grid, or hybrid?",
    answer:
      "On-grid usually works best when savings matter most and outages are manageable. Hybrid becomes more attractive when backup reliability matters too.",
  },
  {
    question: "Do you handle maintenance after commissioning?",
    answer:
      "Yes. The offer includes long-term operating confidence, not just installation, especially for customers who want one accountable team.",
  },
];

export const subsidySteps = [
  "Share your latest electricity bill and property details.",
  "Confirm likely eligibility, roof fit, and target system size.",
  "Receive a proposal with system recommendation and cost band.",
  "Move ahead with installation and the required claim documentation support.",
];

export type CalculatorResult = {
  systemSizeKw: number;
  costMinLakhs: number;
  costMaxLakhs: number;
  annualSavingsLakhs: number;
  paybackYears: number;
};

export function estimateSolar(monthlyBill: number): CalculatorResult {
  const normalizedBill = Math.max(monthlyBill, 1500);
  const monthlyUnits = normalizedBill / 8.5;
  const systemSizeKw = Math.max(2, Math.round((monthlyUnits / 120) * 10) / 10);
  const costMinLakhs = Number(((systemSizeKw * 55000) / 100000).toFixed(2));
  const costMaxLakhs = Number(((systemSizeKw * 70000) / 100000).toFixed(2));
  const annualSavingsLakhs = Number(((normalizedBill * 0.78 * 12) / 100000).toFixed(2));
  const paybackYears = Number(
    (((costMinLakhs + costMaxLakhs) / 2) / Math.max(annualSavingsLakhs, 0.25)).toFixed(1),
  );

  return {
    systemSizeKw,
    costMinLakhs,
    costMaxLakhs,
    annualSavingsLakhs,
    paybackYears,
  };
}
