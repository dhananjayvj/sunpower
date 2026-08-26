import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You | Sun Power",
  description:
    "Thank-you page for Sun Power enquiries with next steps for WhatsApp, call-back requests, and returning to the main site.",
};

export default function ThankYouPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Thank you" }]} />

      <div className="card-panel mt-8 p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-blue">
          Enquiry received
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Your next step should still be easy.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          Sun Power is using this page as a clean handoff after the enquiry form. If the customer
          is ready now, move them straight into a WhatsApp or phone conversation instead of making
          them guess what happens next.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="button-primary justify-center"
          >
            Continue on WhatsApp
          </a>
          <a href={contact.phoneHref} className="button-secondary justify-center">
            Call {contact.phoneDisplay}
          </a>
        </div>

        <div className="mt-8 rounded-[1.8rem] bg-slate-100 p-5 text-sm leading-7 text-slate-700">
          Response-time promise: WhatsApp and callback requests should be answered within one
          business hour during working hours.
        </div>

        <div className="mt-8">
          <Link href="/" className="text-sm font-semibold text-accent-blue">
            Return to the homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
