import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="card-panel p-8 text-center sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-blue">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          This page does not exist.
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          Send the visitor back to a useful action: quote request, call, or the main site.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="button-primary justify-center">
            Back to homepage
          </Link>
          <Link href="/privacy" className="button-secondary justify-center">
            Privacy policy
          </Link>
        </div>
      </div>
    </main>
  );
}
