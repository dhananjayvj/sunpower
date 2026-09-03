"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  Bolt,
  Calculator,
  ChevronRight,
  Factory,
  FileText,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  SunMedium,
} from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { fadeUp, staggerContainer, transitions } from "@/lib/motion";
import { cn } from "@/lib/utils";
import {
  aboutHighlights,
  catalogGroups,
  contact,
  estimateSolar,
  faqs,
  leadPoints,
  navigation,
  processSteps,
  projectProfiles,
  proofPoints,
  resourceCards,
  serviceAreas,
  services,
  stats,
  trustSignals,
} from "@/lib/site";

const serviceIcons = [SunMedium, Factory, ShieldCheck, BatteryCharging, FileText];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-blue">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="text-pretty text-base leading-7 text-muted sm:text-lg">{description}</p>
    </div>
  );
}

export function SunPowerSite() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], shouldReduceMotion ? [0, 0] : [0, 70]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calculatorMode, setCalculatorMode] = useState<"bill" | "roof">("bill");
  const [monthlyBill, setMonthlyBill] = useState(6000);
  const [roofAreaSqFt, setRoofAreaSqFt] = useState(500);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("Delhi NCR");
  const [interest, setInterest] = useState("Residential rooftop solar");

  const estimate = useMemo(
    () =>
      estimateSolar({
        monthlyBill: calculatorMode === "bill" ? monthlyBill : undefined,
        roofAreaSqFt: calculatorMode === "roof" ? roofAreaSqFt : undefined,
      }),
    [calculatorMode, monthlyBill, roofAreaSqFt],
  );

  const whatsappQuoteHref = useMemo(() => {
    const message = [
      "Hi Sun Power, I want a solar quote.",
      `Name: ${name || "Not shared yet"}`,
      `Mobile: ${mobile || "Not shared yet"}`,
      `City: ${city || "Delhi NCR"}`,
      `Interest: ${interest}`,
      calculatorMode === "bill"
        ? `Monthly bill: Rs ${monthlyBill.toLocaleString("en-IN")}`
        : `Approx. roof area: ${roofAreaSqFt} sq ft`,
    ].join("\n");

    return `${contact.whatsappHref}?text=${encodeURIComponent(message)}`;
  }, [calculatorMode, city, interest, mobile, monthlyBill, name, roofAreaSqFt]);

  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,214,10,0.32),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(24,99,242,0.2),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#eef7ec_52%,_#f6f9fb_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />

      <a
        href={whatsappQuoteHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 bottom-24 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-[0_18px_45px_rgba(34,197,94,0.38)] hover:scale-[1.04] active:scale-[0.97]"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <div className="border-b border-white/40 bg-foreground text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 text-sm sm:px-6 lg:px-8">
          <p className="max-w-3xl text-white/84">
            Authorized Loom Solar dealer for Delhi NCR rooftop solar, subsidy assistance, EPC, and
            MMS contracting.
          </p>
          <a className="hidden items-center gap-2 font-medium md:inline-flex" href={contact.phoneHref}>
            <Phone className="h-4 w-4" />
            {contact.phoneDisplay}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-border/70 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-4">
            <Image
              src="/images/sunpower-logo.png"
              alt="Sun Power Renewable Energy Solutions logo"
              width={196}
              height={72}
              priority
              className="h-12 w-auto rounded-xl bg-white"
            />
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-accent-blue"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={contact.phoneHref} className="hidden text-sm font-semibold text-foreground md:inline">
              Call Now
            </a>
            <a href="#contact" className="button-primary">
              Get a Free Quote
            </a>
            <MobileNav
              open={mobileMenuOpen}
              onToggle={() => setMobileMenuOpen((value) => !value)}
              items={navigation}
            />
          </div>
        </div>
      </header>

      <section id="home" className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            transition={transitions.smooth}
            className="space-y-8"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-white/72 px-4 py-2 text-sm font-medium text-emerald-900 shadow-[0_10px_30px_rgba(255,255,255,0.5)]"
            >
              <BadgeCheck className="h-4 w-4 text-emerald-600" />
              Authorized Loom Solar dealer | Certificate valid till August 31, 2028
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5">
              <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Delhi NCR solar quotes that feel trustworthy before they feel technical.
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-slate-700 sm:text-xl">
                Sun Power helps homeowners, facilities, and industrial buyers move from bill
                confusion to a real solar plan: system sizing, quote guidance, subsidy support,
                product sourcing, and EPC or MMS execution from one accountable team.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="button-primary">
                Book a Site Survey
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={whatsappQuoteHref} target="_blank" rel="noreferrer" className="button-secondary">
                Quote on WhatsApp
                <MessageCircle className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
              <span className="rounded-full bg-white/72 px-3 py-2 shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                Response path: call, WhatsApp, or quote request
              </span>
              <a href="#resources" className="font-semibold text-accent-blue">
                Read the solar guides
              </a>
              <a href="#catalog" className="font-semibold text-accent-blue">
                See product catalog scope
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="card-panel">
                  <p className="text-3xl font-semibold tracking-tight text-foreground">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ ...transitions.smooth, delay: 0.08 }}
            style={{ y: heroY }}
            className="relative will-change-transform"
          >
            <div className="card-panel overflow-hidden p-6 sm:p-8">
              <div className="grid gap-5">
                <div className="rounded-[2rem] bg-[linear-gradient(135deg,_#0f3d82,_#1c68f2_58%,_#49a93f)] p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-blue-100">
                        Product & services catalog
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold">
                        Solar panels, batteries, inverters, EPC and MMS
                      </h2>
                    </div>
                    <Bolt className="mt-1 h-6 w-6 text-yellow-300" />
                  </div>
                  <div className="mt-8 grid gap-3 text-sm text-blue-50">
                    <div className="rounded-2xl border border-white/12 bg-white/10 p-4">
                      Rooftop and ground-mounted systems
                    </div>
                    <div className="rounded-2xl border border-white/12 bg-white/10 p-4">
                      Authorized Loom Solar dealer with multi-brand sourcing
                    </div>
                    <div className="rounded-2xl border border-white/12 bg-white/10 p-4">
                      Delhi NCR lead flow built around site surveys and quotations
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {trustSignals.map((signal) => (
                    <motion.div
                      key={signal}
                      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                      transition={transitions.spring}
                      className="rounded-[1.6rem] border border-border bg-white px-5 py-4"
                    >
                      <div className="flex items-start gap-3">
                        <Leaf className="mt-1 h-4 w-4 text-accent-green" />
                        <p className="text-sm leading-6 text-slate-700">{signal}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm text-slate-700 sm:grid-cols-3 sm:px-6 lg:px-8">
          {leadPoints.map((point) => (
            <div key={point}>
              <p className="font-semibold text-foreground">Lead objective</p>
              <p className="mt-2">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="section-shell px-6 py-8 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
            <Reveal className="card-panel overflow-hidden p-6 sm:p-8">
              <SectionHeading
                eyebrow="About Sun Power"
                title="A lead-generation solar website should prove credibility fast."
                description="The supplied brief is clear about the job of the site: build trust, educate buyers, and make quote requests frictionless on mobile."
              />

              <div className="mt-8 space-y-4">
                {aboutHighlights.map((item) => (
                  <div key={item.title} className="rounded-[1.7rem] border border-border bg-white/80 p-5">
                    <p className="text-base font-semibold text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05} className="card-panel bg-[linear-gradient(180deg,_rgba(236,246,255,0.9),_rgba(255,255,255,0.96))] p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-800">
                  Authorized Loom Solar dealer
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                  GSTIN {contact.gstin}
                </span>
              </div>

              <div className="mt-6 rounded-[2rem] border border-border/80 bg-white p-4">
                <Image
                  src="/images/sunpower-logo.png"
                  alt="Sun Power company logo"
                  width={700}
                  height={700}
                  className="h-auto w-full rounded-[1.6rem] object-contain"
                />
              </div>

              <div className="mt-6 rounded-[1.7rem] border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
                  Certificate detail
                </p>
                <p className="mt-3 text-lg font-semibold text-foreground">
                  Authorized dealer of Loom Solar
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Certificate no. 23873/DL/08/2026. Valid till August 31, 2028.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">
                  Service area
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="section-shell px-6 py-8 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Services"
            title="The site now sells clarity across the full Sun Power service stack."
            description="Each service card is aligned to the written brief and to the catalog scope so buyers can see where Sun Power fits before they ask for a quote."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <motion.article
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  variants={fadeUp}
                  transition={{ ...transitions.smooth, delay: index * 0.05 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  className={cn(
                    "card-panel p-6",
                    index === 1 && "lg:translate-y-6",
                    index === 4 && "lg:col-span-2",
                  )}
                >
                  <div className="relative -mx-6 -mt-6 mb-6 h-52 overflow-hidden rounded-t-[2rem]">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,31,64,0.08),rgba(14,31,64,0.28))]" />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-accent-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-muted">{service.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-700">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <ChevronRight className="mt-0.5 h-4 w-4 text-accent-green" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a href="#contact" className="text-sm font-semibold text-accent-blue">
                      Get a quote for this service
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="catalog" className="border-y border-border/70 bg-[linear-gradient(180deg,rgba(232,242,251,0.72),rgba(244,249,241,0.66))] backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Catalog"
            title="Product & services catalog aligned to the client PDF."
            description="The supplied catalog is image-based, so the site has been updated from the visible catalog cover scope and the written requirement brief without inventing hidden SKU details."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {catalogGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                variants={fadeUp}
                transition={{ ...transitions.smooth, delay: index * 0.04 }}
                className="card-panel p-6"
              >
                <h3 className="text-xl font-semibold tracking-tight text-foreground">{group.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted">{group.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
            <Reveal className="card-panel p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-blue">
                Verified from client assets
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {proofPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-4 w-4 text-accent-green" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.04} className="card-panel p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Catalog scope</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                    What the supplied catalog clearly confirms
                  </h3>
                </div>
                <FileText className="h-7 w-7 text-accent-blue" />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.7rem] border border-border bg-slate-50 p-5">
                  <p className="text-base font-semibold text-foreground">Products</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Solar panels, batteries, and inverters with multi-brand sourcing for Delhi NCR buyers.
                  </p>
                </div>
                <div className="rounded-[1.7rem] border border-border bg-slate-50 p-5">
                  <p className="text-base font-semibold text-foreground">Execution</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Rooftop installation, ground-mounted installation, EPC, and MMS contracting.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="card-panel p-7 sm:p-8">
            <SectionHeading
              eyebrow="Calculator"
              title="A planning estimate should work from either the bill or the roof."
              description="The brief asked for a lead-friendly calculator, so this one supports the two inputs most real buyers already have on hand."
            />

            <div className="mt-8 rounded-[2rem] bg-slate-950 p-6 text-white">
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setCalculatorMode("bill")}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold",
                    calculatorMode === "bill" ? "bg-white text-slate-950" : "bg-white/10 text-white",
                  )}
                >
                  Monthly bill
                </button>
                <button
                  type="button"
                  onClick={() => setCalculatorMode("roof")}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold",
                    calculatorMode === "roof" ? "bg-white text-slate-950" : "bg-white/10 text-white",
                  )}
                >
                  Roof area
                </button>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-white/60">
                    {calculatorMode === "bill" ? "Monthly bill" : "Roof area"}
                  </p>
                  <p className="mt-2 text-4xl font-semibold">
                    {calculatorMode === "bill"
                      ? `Rs ${monthlyBill.toLocaleString("en-IN")}`
                      : `${roofAreaSqFt.toLocaleString("en-IN")} sq ft`}
                  </p>
                </div>
                <Calculator className="h-7 w-7 text-yellow-300" />
              </div>

              <input
                type="range"
                min={calculatorMode === "bill" ? 1500 : 200}
                max={calculatorMode === "bill" ? 50000 : 5000}
                step={calculatorMode === "bill" ? 500 : 50}
                value={calculatorMode === "bill" ? monthlyBill : roofAreaSqFt}
                onChange={(event) =>
                  calculatorMode === "bill"
                    ? setMonthlyBill(Number(event.target.value))
                    : setRoofAreaSqFt(Number(event.target.value))
                }
                className="mt-8 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/20 accent-yellow-300"
              />

              <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2">
                <motion.div layout className="rounded-[1.5rem] border border-white/10 bg-white/7 p-4">
                  <p className="text-sm text-white/64">Estimated system size</p>
                  <p className="mt-2 text-2xl font-semibold">{estimate.systemSizeKw} kW</p>
                </motion.div>
                <motion.div layout className="rounded-[1.5rem] border border-white/10 bg-white/7 p-4">
                  <p className="text-sm text-white/64">Approx. roof needed</p>
                  <p className="mt-2 text-2xl font-semibold">{estimate.roofAreaSqFt} sq ft</p>
                </motion.div>
                <motion.div layout className="rounded-[1.5rem] border border-white/10 bg-white/7 p-4">
                  <p className="text-sm text-white/64">Indicative project cost</p>
                  <p className="mt-2 text-2xl font-semibold">
                    Rs {estimate.costMinLakhs}L - {estimate.costMaxLakhs}L
                  </p>
                </motion.div>
                <motion.div layout className="rounded-[1.5rem] border border-white/10 bg-white/7 p-4">
                  <p className="text-sm text-white/64">Approx. payback</p>
                  <p className="mt-2 text-2xl font-semibold">{estimate.paybackYears} years</p>
                </motion.div>
              </motion.div>

              <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                Planning-level annual savings estimate: Rs {estimate.annualSavingsLakhs}L
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="card-panel bg-[linear-gradient(180deg,_rgba(236,246,255,0.82),_rgba(255,255,255,0.96))] p-7 sm:p-8">
            <SectionHeading
              eyebrow="Lead flow"
              title="The path from first enquiry to installed system should read like a process, not a pitch."
              description="This sequence is built from the supplied requirement brief and the catalog positioning."
            />

            <ol className="mt-8 space-y-4">
              {processSteps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-[1.7rem] border border-border bg-white/78 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-blue text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <p className="pt-1 text-base leading-7 text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="section-shell px-6 py-8 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Projects"
            title="Project coverage is now framed around the real range Sun Power handles."
            description="The supplied brief confirms residential through 1 MW-scale work. Where verified savings and commissioning dates are still missing, the section stays factual rather than inventing outcomes."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projectProfiles.map((project, index) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                variants={fadeUp}
                transition={{ ...transitions.smooth, delay: index * 0.07 }}
                className="card-panel overflow-hidden"
              >
                <div className="relative h-52">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,31,64,0.06),rgba(14,31,64,0.3))]" />
                </div>
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-accent-blue">
                    {project.size} | {project.location}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-muted">{project.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="border-y border-border/70 bg-[linear-gradient(180deg,rgba(232,242,251,0.72),rgba(244,249,241,0.66))] backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Resources"
            title="The site now teaches the questions Delhi NCR solar buyers actually ask."
            description="This content is intentionally practical: savings, system types, subsidy process, and sourcing decisions, not abstract solar jargon."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {resourceCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                variants={fadeUp}
                transition={{ ...transitions.smooth, delay: index * 0.05 }}
                className="card-panel p-6"
              >
                <h3 className="text-xl font-semibold tracking-tight text-foreground">{card.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted">{card.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card-panel p-7 sm:p-8">
            <SectionHeading
              eyebrow="FAQs"
              title="The FAQ now answers cost, subsidy, system-type, and scope questions directly."
              description="This is written for mobile visitors who usually want to decide whether Sun Power is worth calling before they read every page."
            />
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.question} className="card-panel group p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold text-foreground">
                  {item.question}
                </summary>
                <p className="mt-4 text-base leading-7 text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="section-shell px-6 py-8 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal className="card-panel p-7 sm:p-8">
              <SectionHeading
                eyebrow="Contact"
                title="The form is short because qualified leads are lost in long forms."
                description="This matches the requirement brief: name, mobile, city, and the most useful sizing signal the buyer already has."
              />

              <div className="mt-8 space-y-5 text-base text-slate-700">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Phone</p>
                  <a href={contact.phoneHref} className="mt-2 inline-flex text-lg font-semibold text-foreground">
                    {contact.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">WhatsApp</p>
                  <a href={contact.whatsappHref} className="mt-2 inline-flex font-semibold text-accent-blue">
                    Start a chat
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Address</p>
                  <p className="mt-2 max-w-md leading-7">{contact.address}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">GSTIN</p>
                  <p className="mt-2 leading-7">{contact.gstin}</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={contact.mapsHref} target="_blank" rel="noreferrer" className="button-secondary">
                    <MapPin className="h-4 w-4" />
                    Open Map
                  </a>
                  <a href="#catalog" className="button-secondary">
                    View Catalog Scope
                  </a>
                </div>
              </div>
            </Reveal>

            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeUp}
              transition={{ ...transitions.smooth, delay: 0.04 }}
              className="card-panel p-7 sm:p-8"
              onSubmit={(event) => {
                event.preventDefault();
                window.open(whatsappQuoteHref, "_blank", "noopener,noreferrer");
                router.push("/thank-you");
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-700">Name</span>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="input-field"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-700">Mobile number</span>
                  <input
                    value={mobile}
                    onChange={(event) => setMobile(event.target.value)}
                    className="input-field"
                    placeholder="+91"
                    required
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-700">City</span>
                  <input
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    className="input-field"
                    placeholder="Delhi / Noida / Gurgaon"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-700">Interested in</span>
                  <select
                    value={interest}
                    onChange={(event) => setInterest(event.target.value)}
                    className="input-field"
                  >
                    <option>Residential rooftop solar</option>
                    <option>Commercial solar</option>
                    <option>Industrial solar</option>
                    <option>Batteries and inverters</option>
                    <option>PM Surya Ghar subsidy help</option>
                    <option>MMS contracting</option>
                  </select>
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-700">Monthly bill</span>
                  <input
                    value={monthlyBill}
                    onChange={(event) => setMonthlyBill(Number(event.target.value || 0))}
                    className="input-field"
                    type="number"
                    min={0}
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-700">Approx. roof area</span>
                  <input
                    value={roofAreaSqFt}
                    onChange={(event) => setRoofAreaSqFt(Number(event.target.value || 0))}
                    className="input-field"
                    type="number"
                    min={0}
                  />
                </label>
              </div>

              <div className="mt-6 rounded-[1.6rem] bg-slate-100 p-4 text-sm leading-6 text-slate-700">
                Submitting this form opens a prefilled WhatsApp enquiry and then routes the visitor
                to the thank-you page. That keeps the static site lead-friendly without pretending a
                backend CRM exists yet.
              </div>

              <button type="submit" className="button-primary mt-6 w-full justify-center">
                Send enquiry on WhatsApp
                <MessageCircle className="h-4 w-4" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-18 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="card-panel p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-blue">
              Directions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
              Office and map
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted">
              The office address from the brief and the client catalog is wired into the map and
              direction links so local buyers can go from research to site visit without searching again.
            </p>
            <div className="mt-6">
              <a href={contact.mapsHref} target="_blank" rel="noreferrer" className="button-primary">
                Get directions
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.04} className="card-panel overflow-hidden p-2">
            <iframe
              title="Sun Power office map"
              src={contact.mapsEmbedHref}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full rounded-[1.8rem] border-0"
            />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-white/74 sm:px-6 lg:px-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Image
              src="/images/sunpower-logo.png"
              alt="Sun Power logo"
              width={196}
              height={72}
              className="h-12 w-auto rounded-xl bg-white"
            />
            <p className="mt-3 max-w-xl leading-6">
              Solar energy dealership and EPC or MMS contracting firm serving Delhi NCR with
              rooftop, ground-mounted, residential, commercial, industrial, and subsidy-linked solar solutions.
            </p>
          </div>
          <div className="space-y-2 md:text-right">
            <a href={contact.phoneHref} className="block font-semibold text-white">
              {contact.phoneDisplay}
            </a>
            <p>{contact.address}</p>
            <div className="flex gap-4 md:justify-end">
              <Link href="/privacy" className="hover:text-white">
                Privacy policy
              </Link>
              <Link href="/thank-you" className="hover:text-white">
                Thank-you page
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-white/96 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-16px_40px_rgba(15,23,42,0.12)] md:hidden">
        <div className="mx-auto flex max-w-xl gap-3">
          <a href={contact.phoneHref} className="button-secondary min-w-0 flex-1 justify-center">
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a
            href={whatsappQuoteHref}
            target="_blank"
            rel="noreferrer"
            className="button-primary min-w-0 flex-1 justify-center"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
