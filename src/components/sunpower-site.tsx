"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
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
  contact,
  estimateSolar,
  faqs,
  navigation,
  projectRanges,
  reviewReadiness,
  resourceCards,
  services,
  stats,
  subsidySteps,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [monthlyBill, setMonthlyBill] = useState(6000);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [interest, setInterest] = useState("Residential rooftop solar");
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], shouldReduceMotion ? [0, 0] : [0, 70]);

  const estimate = useMemo(() => estimateSolar(monthlyBill), [monthlyBill]);

  const whatsappQuoteHref = useMemo(() => {
    const message = [
      "Hi Sun Power, I want a solar quote.",
      `Name: ${name || "Not shared yet"}`,
      `Mobile: ${mobile || "Not shared yet"}`,
      `City: ${city || "Delhi NCR"}`,
      `Interest: ${interest}`,
      `Monthly bill: Rs ${monthlyBill}`,
    ].join("\n");

    return `${contact.whatsappHref}?text=${encodeURIComponent(message)}`;
  }, [city, interest, mobile, monthlyBill, name]);

  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,214,10,0.34),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(24,99,242,0.22),_transparent_32%),linear-gradient(180deg,_#f7fbff_0%,_#eff6e8_55%,_#f8fafc_100%)]" />

      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 bottom-24 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-[0_18px_45px_rgba(34,197,94,0.38)] transition-transform duration-200 ease-out hover:scale-[1.04] active:scale-[0.97]"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <div className="border-b border-white/40 bg-foreground text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 text-sm sm:px-6 lg:px-8">
          <p className="text-white/84">
            Delhi NCR rooftop solar, subsidy guidance, and site surveys from an authorized Loom
            Solar dealer.
          </p>
          <a className="hidden items-center gap-2 font-medium md:inline-flex" href={contact.phoneHref}>
            <Phone className="h-4 w-4" />
            {contact.phoneDisplay}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-border/70 bg-white/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-white shadow-[0_12px_30px_rgba(14,31,64,0.22)]">
              <SunMedium className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Sun Power</p>
              <p className="text-xs uppercase tracking-[0.26em] text-muted">Delhi NCR Solar</p>
            </div>
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
        <div className="grid gap-10 lg:grid-cols-[1.16fr_0.84fr] lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            transition={transitions.smooth}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-white/72 px-4 py-2 text-sm font-medium text-emerald-900 shadow-[0_10px_30px_rgba(255,255,255,0.5)]">
              <BadgeCheck className="h-4 w-4 text-emerald-600" />
              Authorized Loom Solar dealer
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5">
              <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Rooftop solar that feels clear before it ever feels technical.
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-slate-700 sm:text-xl">
                Sun Power helps Delhi NCR homeowners, businesses, and industrial sites move from
                confusion to a real plan: sizing, quotation, subsidy guidance, structure work, and
                site execution handled by one accountable team.
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
                Response-time promise: one business hour
              </span>
              <a href="#resources" className="font-semibold text-accent-blue">
                Read how solar works
              </a>
              <a href="#faq" className="font-semibold text-accent-blue">
                See common questions
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
                <div className="rounded-[2rem] bg-[linear-gradient(135deg,_#0f3d82,_#1c68f2_58%,_#7dc1ff)] p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-blue-100">Rapid lead path</p>
                      <h2 className="mt-3 text-2xl font-semibold">Bill to quote in one clean flow</h2>
                    </div>
                    <Bolt className="mt-1 h-6 w-6 text-yellow-300" />
                  </div>
                  <div className="mt-8 grid gap-3 text-sm text-blue-50">
                    <div className="rounded-2xl border border-white/12 bg-white/10 p-4">
                      Share bill or roof details
                    </div>
                    <div className="rounded-2xl border border-white/12 bg-white/10 p-4">
                      Get system sizing, cost band, and subsidy guidance
                    </div>
                    <div className="rounded-2xl border border-white/12 bg-white/10 p-4">
                      Schedule a site visit with Sun Power
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

      <section className="border-y border-border/80 bg-white/88">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm text-slate-700 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <p className="font-semibold text-foreground">Lead objective</p>
            <p className="mt-2">Calls, WhatsApp conversations, site visits, and quotation requests.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Buyer types</p>
            <p className="mt-2">Homeowners, facility managers, schools, factories, and commercial operators.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Core offer</p>
            <p className="mt-2">Solar systems, batteries, inverters, subsidy support, and MMS execution.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Why this matters</p>
            <p className="mt-2">Most buyers want clarity first. The site is built to remove friction fast.</p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="From home rooftops to large execution scopes, the offer stays understandable."
          description="Every service block is written to move a buyer closer to an actual enquiry instead of drowning them in catalog language."
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
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="card-panel p-7 sm:p-8">
            <SectionHeading
              eyebrow="Calculator"
              title="A simple estimate is often enough to start a serious conversation."
              description="Use the monthly bill slider to generate a planning-level system size, cost range, and likely payback band."
            />

            <div className="mt-8 rounded-[2rem] bg-slate-950 p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-white/60">Monthly bill</p>
                  <p className="mt-2 text-4xl font-semibold">Rs {monthlyBill.toLocaleString("en-IN")}</p>
                </div>
                <Calculator className="h-7 w-7 text-yellow-300" />
              </div>

              <input
                type="range"
                min={1500}
                max={50000}
                step={500}
                value={monthlyBill}
                onChange={(event) => setMonthlyBill(Number(event.target.value))}
                className="mt-8 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/20 accent-yellow-300"
              />

              <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2">
                <motion.div layout className="rounded-[1.5rem] border border-white/10 bg-white/7 p-4">
                  <p className="text-sm text-white/64">Estimated system size</p>
                  <p className="mt-2 text-2xl font-semibold">{estimate.systemSizeKw} kW</p>
                </motion.div>
                <motion.div layout className="rounded-[1.5rem] border border-white/10 bg-white/7 p-4">
                  <p className="text-sm text-white/64">Approx. payback</p>
                  <p className="mt-2 text-2xl font-semibold">{estimate.paybackYears} years</p>
                </motion.div>
                <motion.div layout className="rounded-[1.5rem] border border-white/10 bg-white/7 p-4">
                  <p className="text-sm text-white/64">Indicative project cost</p>
                  <p className="mt-2 text-2xl font-semibold">
                    Rs {estimate.costMinLakhs}L - {estimate.costMaxLakhs}L
                  </p>
                </motion.div>
                <motion.div layout className="rounded-[1.5rem] border border-white/10 bg-white/7 p-4">
                  <p className="text-sm text-white/64">Potential annual savings</p>
                  <p className="mt-2 text-2xl font-semibold">Rs {estimate.annualSavingsLakhs}L</p>
                </motion.div>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="card-panel bg-[linear-gradient(180deg,_rgba(236,246,255,0.82),_rgba(255,255,255,0.96))] p-7 sm:p-8">
            <SectionHeading
              eyebrow="Subsidy guide"
              title="PM Surya Ghar only feels complicated when nobody explains the sequence."
              description="The site speaks plainly: what you need, when you need it, and where Sun Power steps in."
            />

            <ol className="mt-8 space-y-4">
              {subsidySteps.map((step, index) => (
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
        <SectionHeading
          eyebrow="Case studies"
          title="Case-study storytelling is in place, ready for client-approved numbers and project photos."
          description="This first pass uses representative Delhi NCR buyer scenarios instead of invented metrics. Swap in verified savings, commissioning dates, and images when they are available."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projectRanges.map((project, index) => (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeUp}
              transition={{ ...transitions.smooth, delay: index * 0.07 }}
              className="card-panel overflow-hidden"
            >
              <div className="h-52 bg-[radial-gradient(circle_at_top_left,_rgba(255,214,10,0.66),_transparent_30%),linear-gradient(135deg,_#0e1f40,_#1753a0_64%,_#54b25e)]" />
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-accent-blue">{project.size}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted">{project.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="resources" className="border-y border-border/80 bg-slate-50/72">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Resources"
            title="A good solar lead often starts with education, not urgency."
            description="These content blocks are ready to become fuller explainer pages, but even now they set the right expectations and reduce repetitive sales calls."
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

      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="Real customer reviews should be imported, not invented."
          description="The section is ready for Google Business or client-approved review content. Until those are supplied, the site stays honest about what is placeholder structure and what is proof."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {reviewReadiness.map((review, index) => (
            <motion.blockquote
              key={review.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
                variants={fadeUp}
                transition={{ ...transitions.smooth, delay: index * 0.05 }}
                className="card-panel p-6"
              >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-blue">
                Pending verified data
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                {review.title}
              </p>
              <p className="mt-4 text-base leading-7 text-slate-700">{review.detail}</p>
            </motion.blockquote>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card-panel p-7 sm:p-8">
            <SectionHeading
              eyebrow="FAQs"
              title="Answer the practical questions before they become objections."
              description="This section is written for buyers comparing vendors on a phone, often while looking at the last electricity bill."
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
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="card-panel p-7 sm:p-8">
            <SectionHeading
              eyebrow="Contact"
              title="Make the next action obvious."
              description="The site treats the lead form as a fast routing layer, not a long application. That matters on mobile."
            />

            <div className="mt-8 space-y-5 text-base text-slate-700">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Phone</p>
                <a href={contact.phoneHref} className="mt-2 inline-flex text-lg font-semibold text-foreground">
                  {contact.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Address</p>
                <p className="mt-2 max-w-md leading-7">{contact.address}</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href={contact.mapsHref} target="_blank" rel="noreferrer" className="button-secondary">
                  <MapPin className="h-4 w-4" />
                  Open Map
                </a>
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="button-secondary">
                  WhatsApp
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

            <div className="mt-4">
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-700">Monthly electricity bill</span>
                <input
                  value={monthlyBill}
                  onChange={(event) => setMonthlyBill(Number(event.target.value || 0))}
                  className="input-field"
                  type="number"
                  min={0}
                />
              </label>
            </div>

            <div className="mt-6 rounded-[1.6rem] bg-slate-100 p-4 text-sm leading-6 text-slate-700">
              Response-time promise: callback and WhatsApp enquiries should be answered within one
              business hour during working hours.
            </div>

            <button type="submit" className="button-primary mt-6 w-full justify-center">
              Continue to thank-you page
              <MessageCircle className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-18 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="card-panel p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-blue">
              Directions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
              Map and directions
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted">
              Add the final Google Business profile link here at launch. For now the map and
              directions CTA route visitors to the correct I.P. Extension office search.
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
            <p className="text-lg font-semibold text-white">Sun Power</p>
            <p className="mt-2 max-w-xl leading-6">
              Solar energy dealership and EPC/MMS contracting firm serving Delhi NCR with rooftop,
              commercial, industrial, and subsidy-linked solar solutions.
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
