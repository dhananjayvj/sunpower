import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Sun Power",
  description:
    "Privacy policy for Sun Power website enquiries, calls, WhatsApp contact, and quote requests.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Privacy policy" }]} />

      <article className="card-panel mt-8 space-y-8 p-8 sm:p-10">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-blue">
            Privacy policy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Sun Power collects enquiry details for quotation and follow-up, not for clutter.
          </h1>
          <p className="text-lg leading-8 text-muted">
            This draft policy covers website lead forms, phone calls, and WhatsApp enquiries for
            Sun Power. It should still be reviewed against the company&apos;s final legal and
            operational requirements before launch.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground">What we collect</h2>
          <p className="leading-7 text-slate-700">
            We may collect your name, mobile number, city, electricity bill details, property
            information, and the service you are interested in when you request a quote, site
            survey, or support.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground">Why we collect it</h2>
          <p className="leading-7 text-slate-700">
            The data is used to assess likely system size, prepare quotations, schedule site
            visits, support subsidy-related communication, and respond to your enquiry.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground">How we handle it</h2>
          <p className="leading-7 text-slate-700">
            Sun Power should limit access to enquiry data to the people involved in sales,
            technical review, installation planning, and customer support. Data should not be sold
            to third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground">Contact about privacy</h2>
          <p className="leading-7 text-slate-700">
            For privacy requests, use the primary Sun Power contact number listed on the website
            until a dedicated privacy email is published.
          </p>
        </section>
      </article>
    </main>
  );
}
