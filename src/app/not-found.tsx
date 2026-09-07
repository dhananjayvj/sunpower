import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { contact } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(90deg,#0b192c_0%,#15803d_100%)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue-deep to-accent-green-dark text-2xl font-semibold text-white shadow-lg shadow-accent-blue-deep/15">
          404
        </div>
        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-accent-blue">
          SUNPOWER
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s get you back to the right solar solution.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">
          The page you&apos;re looking for may have moved. Explore our solar services or speak with
          the SUNPOWER team about your requirement.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="button-primary justify-center">
            Go to homepage
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/#contact" className="button-secondary justify-center">
            Request a callback
          </Link>
          <a href={contact.phoneHref} className="button-secondary justify-center">
            <Phone className="h-4 w-4" />
            Call {contact.phoneDisplay}
          </a>
        </div>
      </div>
    </main>
  );
}
