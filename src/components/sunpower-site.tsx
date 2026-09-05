"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
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
  ShieldCheck,
  SunMedium,
  Star,
} from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { AvatarCircles } from "@/registry/magicui/avatar-circles";
import { BorderBeam } from "@/registry/magicui/border-beam";
import { TextAnimate } from "@/registry/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { fadeUp, staggerContainer, transitions } from "@/lib/motion";
import { cn } from "@/lib/utils";
import {
  aboutHighlights,
  contact,
  estimateSolar,
  faqs,
  navigation,
  processSteps,
  productCatalogSections,
  projectProfiles,
  resourceCards,
  serviceAreas,
  services,
  testimonials,
  trustSignals,
} from "@/lib/site";

const serviceIcons = [SunMedium, Factory, ShieldCheck, BatteryCharging, FileText];

const avatars = [
  { imageUrl: "https://avatars.githubusercontent.com/u/16860528", profileUrl: "https://github.com/dillionverma" },
  { imageUrl: "https://avatars.githubusercontent.com/u/20110627", profileUrl: "https://github.com/tomonarifeehan" },
  { imageUrl: "https://avatars.githubusercontent.com/u/106103625", profileUrl: "https://github.com/BankkRoll" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59228569", profileUrl: "https://github.com/safethecode" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59442788", profileUrl: "https://github.com/sanjay-mali" },
  { imageUrl: "https://avatars.githubusercontent.com/u/89768406", profileUrl: "https://github.com/itsarghyadas" },
];

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
      <h2 className="text-balance text-3xl leading-tight font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="text-pretty text-base leading-7 text-muted sm:text-lg">{description}</p>
    </div>
  );
}

export function SunPowerSite() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const brandLogoSrc = `${basePath}/images/logo.png`;
  const withBasePath = (src: string) => `${basePath}${src}`;
  const aboutPhotoSrc = withBasePath("/images/install-team.webp");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calculatorMode, setCalculatorMode] = useState<"bill" | "roof">("bill");
  const [monthlyBill, setMonthlyBill] = useState(6000);
  const [roofAreaSqFt, setRoofAreaSqFt] = useState(500);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [city] = useState("Delhi NCR");
  const [requirement] = useState("Residential rooftop solar");
  const [activeReview, setActiveReview] = useState(0);
  const reviewViewportRef = useRef<HTMLDivElement>(null);

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
      `Email: ${email || "Not shared yet"}`,
      `Mobile: ${mobile || "Not shared yet"}`,
      `City: ${city || "Delhi NCR"}`,
      `Requirement: ${requirement || "Residential rooftop solar"}`,
      `Message: ${inquiryMessage || "Not shared yet"}`,
      calculatorMode === "bill"
        ? `Monthly bill: Rs ${monthlyBill.toLocaleString("en-IN")}`
        : `Approx. roof area: ${roofAreaSqFt} sq ft`,
    ].join("\n");

    return `${contact.whatsappHref}?text=${encodeURIComponent(message)}`;
  }, [calculatorMode, city, email, inquiryMessage, mobile, monthlyBill, name, requirement, roofAreaSqFt]);

  const scrollToReview = (index: number) => {
    const viewport = reviewViewportRef.current;
    const card = viewport?.querySelector<HTMLElement>(`[data-review-index="${index}"]`);

    if (viewport && card) {
      viewport.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
      setActiveReview(index);
    }
  };

  return (
    <main className="relative isolate overflow-x-hidden pb-20 md:pb-0">
      <ScrollProgress />
      <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,214,10,0.32),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(24,99,242,0.2),_transparent_34%),linear-gradient(180deg,_#f9fcff_0%,_#eef7ec_52%,_#f6f9fb_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />

      <a
        href={whatsappQuoteHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 bottom-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-[0_18px_45px_rgba(34,197,94,0.38)] hover:scale-[1.04] hover:shadow-[0_22px_52px_rgba(34,197,94,0.46)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22c55e] md:inline-flex"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-4">
            <img
              src={brandLogoSrc}
              alt="Sun Power Renewable Energy Solutions logo"
              width={1930}
              height={1001}
              loading="eager"
              decoding="async"
              className="h-9 w-auto object-contain drop-shadow-[0_10px_24px_rgba(15,23,42,0.08)] sm:h-10 lg:h-12"
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
            <MobileNav
              open={mobileMenuOpen}
              onToggle={() => setMobileMenuOpen((value) => !value)}
              items={navigation}
            />
          </div>
        </div>
      </header>

      <section id="home" className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            transition={transitions.smooth}
            className="space-y-7"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-white/72 px-4 py-2 text-sm font-medium text-emerald-900 shadow-[0_10px_30px_rgba(255,255,255,0.5)]"
            >
              <BadgeCheck className="h-4 w-4 text-emerald-600" />
              Authorized Loom Solar Dealer
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5">
              <h1 className="max-w-4xl text-balance text-5xl leading-[0.94] font-semibold tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl">
                <TextAnimate animation="blurInUp" by="character" once>
                  Clean, Reliable Solar Energy for Homes & Businesses across Delhi NCR
                </TextAnimate>
              </h1>
              <p className="max-w-xl text-pretty text-lg leading-8 text-slate-700/92 sm:text-xl">
                End-to-end rooftop installations, PM Surya Ghar support, Loom Solar product access,
                and commercial EPC contracting.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="button-primary">
                Book a Free Site Survey
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={whatsappQuoteHref} target="_blank" rel="noreferrer" className="button-secondary">
                Chat on WhatsApp
                <MessageCircle className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
              <span className="rounded-full border border-white/70 bg-white/72 px-3 py-2 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
                Rooftop solar, EPC delivery, and subsidy support under one team
              </span>
              <a href="#resources" className="font-semibold text-accent-blue underline-offset-4 hover:underline">
                Learn how solar works
              </a>
              <a href="#projects" className="font-semibold text-accent-blue underline-offset-4 hover:underline">
                View recent project types
              </a>
            </motion.div>

          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ ...transitions.smooth, delay: 0.08 }}
            className="relative z-10"
          >
            <div className="card-panel p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-blue">
                    Survey to installation
                  </p>
                  <h2 className="mt-4 max-w-md text-3xl leading-tight font-semibold text-foreground">
                    One local team for design, products, structure, installation, and subsidy support
                  </h2>
                </div>
                <div className="rounded-full bg-blue-50 p-3 text-accent-blue">
                  <Bolt className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-white/72 p-5">
                  <p className="text-sm font-semibold text-foreground">Residential systems</p>
                  <p className="mt-2 text-sm leading-6 text-muted">3-5 kW rooftops with bill-led sizing and subsidy support.</p>
                </div>
                <div className="rounded-2xl border border-border bg-white/72 p-5">
                  <p className="text-sm font-semibold text-foreground">Commercial scopes</p>
                  <p className="mt-2 text-sm leading-6 text-muted">10 kW to 1 MW planning for facilities and industrial rooftops.</p>
                </div>
                <div className="rounded-2xl border border-border bg-white/72 p-5 sm:col-span-2">
                  <p className="text-sm font-semibold text-foreground">Delhi NCR coverage</p>
                  <p className="mt-2 text-sm leading-6 text-muted">Site survey, product recommendation, EPC coordination, and structure execution through a single point of contact.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 mx-auto max-w-7xl bg-[linear-gradient(180deg,rgba(249,252,255,0.78),rgba(244,249,241,0.72))] px-4 pb-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal className="rounded-[1.5rem] border border-white/55 bg-[linear-gradient(135deg,rgba(14,31,64,0.95),rgba(28,104,242,0.9)_58%,rgba(61,163,90,0.88))] p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-100">
              Trusted Execution
            </p>
            <h2 className="mt-4 max-w-md text-3xl leading-tight font-semibold tracking-[-0.04em]">
              Solar planning, products, and project support under one local team
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-blue-50/92">
              Built for homeowners and businesses that want clear guidance, clean installation, and dependable after-survey support across Delhi NCR.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {trustSignals.map((signal, index) => (
              <Reveal
                key={signal}
                delay={index * 0.04}
                className="card-panel flex min-h-36 flex-col justify-between p-5"
              >
                <Leaf className="h-5 w-5 text-accent-green" />
                <p className="mt-6 text-base leading-7 text-slate-700">{signal}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="relative z-30 mx-auto max-w-7xl bg-[linear-gradient(180deg,rgba(246,250,255,0.86),rgba(255,255,255,0.74))] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="card-panel p-4 sm:p-8">
            <SectionHeading
              eyebrow="Calculator"
              title="Estimate Your Solar Savings"
              description="Calculate your recommended system size, cost band, and estimated payback period."
            />

            <div className="mt-5 rounded-[1.5rem] bg-slate-950 p-4 text-white sm:mt-8 sm:rounded-[2rem] sm:p-6">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setCalculatorMode("bill")}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-semibold sm:py-2",
                    calculatorMode === "bill" ? "bg-white text-slate-950" : "bg-white/10 text-white",
                  )}
                >
                  Monthly bill
                </button>
                <button
                  type="button"
                  onClick={() => setCalculatorMode("roof")}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-semibold sm:py-2",
                    calculatorMode === "roof" ? "bg-white text-slate-950" : "bg-white/10 text-white",
                  )}
                >
                  Roof area
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 sm:mt-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-white/60">
                    {calculatorMode === "bill" ? "Monthly bill" : "Roof area"}
                  </p>
                  <p className="tech-data mt-1 text-3xl font-semibold sm:mt-2 sm:text-4xl">
                    {calculatorMode === "bill"
                      ? `Rs ${monthlyBill.toLocaleString("en-IN")}`
                      : `${roofAreaSqFt.toLocaleString("en-IN")} sq ft`}
                  </p>
                </div>
                <Calculator className="h-6 w-6 text-yellow-300 sm:h-7 sm:w-7" />
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
                className="mt-5 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/20 accent-yellow-300 sm:mt-8"
              />

              <motion.div layout className="mt-5 grid gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                <motion.div layout className="rounded-[1rem] border border-white/10 bg-white/7 p-3 sm:rounded-[1.5rem] sm:p-4">
                  <p className="text-sm text-white/64">Estimated system size</p>
                  <p className="tech-data mt-1 text-xl font-semibold sm:mt-2 sm:text-2xl">{estimate.systemSizeKw} kW</p>
                </motion.div>
                <motion.div layout className="rounded-[1rem] border border-white/10 bg-white/7 p-3 sm:rounded-[1.5rem] sm:p-4">
                  <p className="text-sm text-white/64">Approx. roof needed</p>
                  <p className="tech-data mt-1 text-xl font-semibold sm:mt-2 sm:text-2xl">{estimate.roofAreaSqFt} sq ft</p>
                </motion.div>
                <motion.div layout className="rounded-[1rem] border border-white/10 bg-white/7 p-3 sm:rounded-[1.5rem] sm:p-4">
                  <p className="text-sm text-white/64">Indicative project cost</p>
                  <p className="tech-data mt-1 text-xl font-semibold sm:mt-2 sm:text-2xl">
                    Rs {estimate.costMinLakhs}L - {estimate.costMaxLakhs}L
                  </p>
                </motion.div>
                <motion.div layout className="rounded-[1rem] border border-white/10 bg-white/7 p-3 sm:rounded-[1.5rem] sm:p-4">
                  <p className="text-sm text-white/64">Approx. payback</p>
                  <p className="tech-data mt-1 text-xl font-semibold sm:mt-2 sm:text-2xl">{estimate.paybackYears} years</p>
                </motion.div>
              </motion.div>

              <div className="tech-data mt-2 rounded-[1rem] border border-white/10 bg-white/5 p-3 text-sm text-white/80 sm:mt-4 sm:rounded-[1.5rem] sm:p-4">
                Planning-level annual savings estimate: Rs {estimate.annualSavingsLakhs}L
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="card-panel bg-[linear-gradient(180deg,_rgba(236,246,255,0.82),_rgba(255,255,255,0.96))] p-7 sm:p-8">
            <SectionHeading
              eyebrow="How It Works"
              title="From first enquiry to final installation"
              description="A simple process built for fast quotations, accurate site surveys, and smooth project execution."
            />

            <ol className="mt-8 list-none space-y-4 p-0">
              {processSteps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-[1.25rem] border border-border bg-white/78 p-4 sm:p-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-green text-sm font-bold text-white shadow-[0_10px_22px_rgba(61,163,90,0.24)]">
                    0{index + 1}
                  </div>
                  <p className="text-base leading-7 text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="section-shell px-6 py-8 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Services"
            title="Solar services tailored for homes, facilities, and project teams"
            description="Choose the service you need and speak with Sun Power for a site survey, product recommendation, or project quotation."
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
                  <div className="relative -mx-6 -mt-6 mb-6 aspect-video overflow-hidden rounded-t-[1.25rem] bg-slate-100">
                    <img
                      src={withBasePath(service.imageSrc)}
                      alt={service.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain object-center"
                    />
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
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="border-y border-border/70 bg-[linear-gradient(180deg,rgba(244,249,241,0.72),rgba(232,242,251,0.68))]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Customer Stories"
            title="What Delhi NCR customers say after installation"
            description="Real project experiences from homeowners, businesses, and industrial teams who worked with Sun Power."
          />

          <div
            ref={reviewViewportRef}
            onScroll={(event) => {
              const firstCard = event.currentTarget.querySelector<HTMLElement>("[data-review-index='0']");
              const cardStep = firstCard?.nextElementSibling instanceof HTMLElement
                ? firstCard.nextElementSibling.offsetLeft - firstCard.offsetLeft
                : firstCard?.offsetWidth ?? 1;
              setActiveReview(Math.min(testimonials.length - 1, Math.round(event.currentTarget.scrollLeft / Math.max(cardStep, 1))));
            }}
            className="testimonial-marquee-viewport group mt-10 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none"
          >
            <div
              className={cn(
                "testimonial-marquee-track flex w-max gap-4 sm:gap-6",
                shouldReduceMotion ? "testimonial-marquee-track--reduced" : "",
              )}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <article
                  key={`${testimonial.name}-${index}`}
                  aria-hidden={index >= testimonials.length}
                  data-review-index={index % testimonials.length}
                  className="flex min-w-[300px] max-w-[380px] snap-start flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md sm:min-w-[360px]"
                >
                  <div>
                    <div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="mt-5 text-base leading-7 text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
                  </div>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-sm font-semibold text-white">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted">{testimonial.location}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-blue">
                        {testimonial.system}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-2 flex justify-center gap-2" aria-label="Review navigation">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show review ${index + 1}`}
                aria-current={activeReview === index ? "true" : undefined}
                onClick={() => scrollToReview(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  activeReview === index ? "w-7 bg-accent-blue" : "w-2.5 bg-slate-300 hover:bg-slate-400",
                )}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="section-shell px-6 py-8 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Projects"
            title="Project experience across residential and commercial solar"
            description="Sun Power supports compact home rooftops, larger commercial installations, and industrial-scale execution across Delhi NCR."
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
                <div className="relative aspect-video bg-slate-100">
                  <img
                    src={withBasePath(project.imageSrc)}
                    alt={project.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain object-center"
                  />
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

      <section id="catalog" className="border-y border-border/70 bg-[linear-gradient(180deg,rgba(232,242,251,0.72),rgba(244,249,241,0.66))] backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Products"
            title="Panels, batteries, and inverters for every solar project stage"
            description="Browse common product categories and request the right datasheet or quotation for your site requirement."
          />

          <div className="mt-12 space-y-8">
            {productCatalogSections.map((section, sectionIndex) => {
              const isBatterySection = section.title === "Batteries";

              return (
                <motion.div
                  key={section.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  variants={fadeUp}
                  transition={{ ...transitions.smooth, delay: sectionIndex * 0.04 }}
                  className="space-y-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                        {section.title}
                      </h3>
                      <p className="mt-2 max-w-3xl text-base leading-7 text-muted">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-5 lg:grid-cols-3">
                    {section.cards.map((card) => (
                      <article
                        key={card.name}
                        className="group overflow-hidden rounded-[1.5rem] border border-white/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,251,255,0.88))] shadow-[0_18px_50px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]"
                      >
                        <div className="flex h-full flex-col">
                          <div className="px-5 pt-5">
                            <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                              {card.badge}
                            </span>
                          </div>

                          <div className="px-5 pt-4">
                            <div
                              className={cn(
                                "overflow-hidden rounded-[1rem] border border-slate-200 bg-slate-50",
                                isBatterySection ? "aspect-square" : "aspect-video",
                              )}
                            >
                              <img
                                src={card.imageSrc.startsWith("/") ? withBasePath(card.imageSrc) : card.imageSrc}
                                alt={card.imageAlt}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-contain object-center"
                              />
                            </div>
                          </div>

                          <div className="flex flex-1 flex-col px-5 pt-5 pb-5">
                            <h4 className="text-xl font-semibold tracking-tight text-foreground">
                              {card.name}
                            </h4>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {card.chips.map((chip) => (
                                <span
                                  key={chip}
                                  className="tech-data rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-medium uppercase text-slate-700"
                                >
                                  {chip}
                                </span>
                              ))}
                            </div>
                            <a
                              href={`${contact.whatsappHref}?text=${encodeURIComponent(
                                `Hi Sun Power, please share the datasheet for ${card.name}.`,
                              )}`}
                              target="_blank"
                              rel="noreferrer"
                              className="button-secondary mt-5 justify-center"
                            >
                              {card.ctaLabel}
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <Reveal className="card-panel overflow-hidden p-6 sm:p-8">
            <SectionHeading
              eyebrow="About Sun Power"
              title="Trusted solar planning and execution for Delhi NCR"
              description="Sun Power supports homeowners, businesses, and industrial buyers with system design, product selection, installation planning, and project execution."
            />

            <div className="mt-8 space-y-4">
              {aboutHighlights.map((item) => (
                <div key={item.title} className="rounded-[1.7rem] border border-border bg-white/70 p-5">
                  <p className="text-base font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05} className="card-panel overflow-hidden p-3 sm:p-4">
            <div className="relative aspect-video overflow-hidden rounded-[1.25rem] bg-slate-100">
              <img
                src={aboutPhotoSrc}
                alt="Sun Power engineering team with rooftop solar installation equipment"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain object-center"
              />
            </div>
            <div className="mt-4 rounded-[1.25rem] border border-border bg-white/72 p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-800">
                  Product credential
                </span>
                <span className="rounded-full border border-border bg-white px-3 py-2 text-sm font-medium text-slate-700">
                  Certificate no. 23873/DL/08/2026
                </span>
              </div>
              <p className="mt-4 max-w-lg text-base leading-7 text-slate-700">
                Active across Delhi, Noida, Greater Noida, Ghaziabad, Gurugram, and Faridabad for rooftop solar, EPC delivery, and mounting structure execution.
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
      </section>

      <section id="resources" className="border-y border-border/70 bg-[linear-gradient(180deg,rgba(232,242,251,0.72),rgba(244,249,241,0.66))] backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Resources"
            title="Clear answers before you book your survey"
            description="Use these guides to understand system types, subsidy steps, panel choices, and the basics of rooftop solar."
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
                className="rounded-[1.85rem] border border-white/60 bg-white/68 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold tracking-tight text-foreground">{card.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted">{card.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/55 bg-white/62 p-7 shadow-[0_18px_46px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-8">
            <SectionHeading
              eyebrow="FAQs"
              title="Common questions from solar buyers"
              description="Quick answers on pricing, subsidy support, system types, installation scope, and project delivery."
            />
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.8rem] border border-white/60 bg-white/72 p-6 shadow-[0_16px_36px_rgba(15,23,42,0.04)] backdrop-blur-sm"
              >
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
                title="Speak with the Sun Power team"
                description="Share your requirement and we will help you plan the right rooftop solar system for your property."
              />

              <div className="mt-6">
                <AvatarCircles numPeople={99} avatarUrls={avatars} />
              </div>

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
                  <p className="tech-data mt-2 leading-7">{contact.gstin}</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={contact.mapsHref} target="_blank" rel="noreferrer" className="button-secondary">
                    <MapPin className="h-4 w-4" />
                    Open Map
                  </a>
                  <a href="#catalog" className="button-secondary">
                    View Products
                  </a>
                </div>
              </div>
            </Reveal>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeUp}
              transition={{ ...transitions.smooth, delay: 0.04 }}
            >
            <Card className="relative w-full overflow-hidden border-white/65 bg-white/90 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
              <CardHeader className="relative z-10 p-7 pb-4 sm:p-8 sm:pb-5">
                <CardTitle>Request a callback</CardTitle>
                <CardDescription>Tell us what you are planning and we will get back to you with the next step.</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 p-7 pt-2 sm:p-8 sm:pt-3">
              <form
              onSubmit={(event) => {
                event.preventDefault();
                window.open(whatsappQuoteHref, "_blank", "noopener,noreferrer");
                router.push("/thank-you");
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Label className="space-y-2">
                  <span>Name</span>
                  <Input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="input-field"
                    placeholder="Your name"
                    required
                  />
                </Label>
                <Label className="space-y-2">
                  <span>Email</span>
                  <Input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                  />
                </Label>
                <Label className="space-y-2">
                  <span>Phone</span>
                  <Input
                    value={mobile}
                    onChange={(event) => setMobile(event.target.value)}
                    placeholder="+91"
                    required
                  />
                </Label>
                <Label className="space-y-2 sm:col-span-2">
                  <span>Message</span>
                  <textarea
                    value={inquiryMessage}
                    onChange={(event) => setInquiryMessage(event.target.value)}
                    className="input-field min-h-28 resize-y"
                    placeholder="Tell us about your roof, monthly bill, or project requirement"
                    required
                  />
                </Label>
              </div>

              <CardFooter className="p-0 pt-6">
                <Button type="submit" className="w-full justify-center">
                  Request a Callback
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </CardFooter>
            </form>
            </CardContent>
            <BorderBeam duration={8} size={100} />
            </Card>
            </motion.div>
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
              Visit the registered office or open the map for directions before your site visit.
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
            <p className="text-lg font-semibold tracking-tight text-white">Sun Power</p>
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
            <p>GSTIN {contact.gstin}</p>
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

      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-slate-200 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-xl gap-3">
          <a href="#calculator" className="button-primary min-w-0 flex-1 justify-center">
            <Calculator className="h-4 w-4" />
            Get a Free Quote
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
