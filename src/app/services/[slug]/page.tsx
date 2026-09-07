import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { contact, servicePageContent, services, siteUrl } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

function getService(slug: string) {
  const service = services.find((item) => item.slug === slug);
  const content = servicePageContent[slug];

  return service && content ? { service, content } : null;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = getService(slug);

  if (!result) return {};

  const { service, content } = result;
  return {
    title: `${service.title} | SUNPOWER Delhi NCR`,
    description: content.intro,
    alternates: { canonical: `${siteUrl}/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | SUNPOWER`,
      description: content.intro,
      url: `${siteUrl}/services/${service.slug}`,
      type: "article",
      images: [{ url: `${siteUrl}/images/logo.png`, alt: "SUNPOWER solar solutions" }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const result = getService(slug);

  if (!result) notFound();

  const { service, content } = result;
  const serviceUrl = `${siteUrl}/services/${service.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: content.intro,
    url: serviceUrl,
    provider: {
      "@type": "Organization",
      name: "SUNPOWER",
      url: siteUrl,
      telephone: contact.phoneDisplay,
      areaServed: "Delhi NCR",
    },
    areaServed: ["Delhi", "Noida", "Ghaziabad", "Gurugram", "Faridabad"],
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_42%,#f1f5f9_100%)] px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/#services", label: "Services" }, { label: service.title }]} />

        <section className="mt-8 overflow-hidden rounded-[2rem] bg-gradient-to-r from-accent-blue-deep to-accent-green-dark p-7 text-white shadow-[0_20px_60px_rgba(11,25,44,0.18)] sm:p-10 lg:p-14">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200">SUNPOWER service</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{content.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/#contact" className="button-primary bg-white text-accent-blue-deep hover:bg-slate-100">
                Book a free site survey
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="button-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="card-panel h-fit p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-blue">A good fit for</p>
            <p className="mt-4 text-lg leading-8 text-slate-700">{content.audience}</p>
            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-foreground">What we cover</h2>
            <ul className="mt-5 space-y-4">
              {content.scope.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7 text-slate-700">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-accent-green-dark" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>

          <section className="card-panel p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-blue">How it works</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">A clear path from requirement to execution</h2>
            <div className="mt-8 space-y-5">
              {content.process.map((step, index) => (
                <div key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white/75 p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-blue-deep text-sm font-semibold text-white">0{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 leading-7 text-slate-700">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-slate-200/80 bg-white/95 p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-blue">Questions</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">Before you get started</h2>
          <div className="mt-7 divide-y divide-slate-200">
            {content.questions.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronRight className="h-5 w-5 shrink-0 text-accent-blue transition-transform duration-200 group-open:rotate-90" />
                </summary>
                <p className="max-w-3xl pt-3 leading-7 text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-10 flex justify-center">
          <Link href="/#services" className="button-secondary">
            Explore all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
