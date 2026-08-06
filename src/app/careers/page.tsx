import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Careers | Iconic Security",
  description: "Current openings at Iconic Security.",
};

export default async function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Career With Us"
        description="We're always looking for dedicated security professionals who are committed to excellence and ready to make an impact."
        accent="none"
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-white/70 bg-white/85 p-8 shadow-[0_20px_50px_rgba(24,23,23,0.08)] backdrop-blur-sm md:p-10">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.28em] text-gold">
            Careers
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-ink md:text-4xl">
            We are hiring!
          </h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-slate/60">
            HR Admin
          </p>
          <p className="mt-5 max-w-2xl text-slate/80 leading-7">
            We are hiring security guards and patrol supervisors. Please apply online for the
            positions available only if you have valid security guard license. Only online
            applications will be considered. Thank you.
          </p>
          <Link
            href="/careers/apply"
            className="mt-8 inline-flex rounded-full bg-slate px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold"
          >
            Apply Now
          </Link>
        </article>

        <article className="rounded-3xl border border-white/70 bg-white/85 p-8 shadow-[0_20px_50px_rgba(24,23,23,0.08)] backdrop-blur-sm md:p-10">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.28em] text-gold">
            New Postings
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-ink md:text-4xl">
            New Job Postings.
          </h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-slate/60">
            HR Admin
          </p>
          <p className="mt-5 max-w-2xl text-slate/80 leading-7">
            Please apply for new job postings for security guards, patrol supervisors, and
            schedulers online from the panel on your left.
          </p>
          <Link
            href="/careers/open-positions"
            className="mt-8 inline-flex rounded-full bg-slate px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold"
          >
            Open Positions
          </Link>
        </article>
        </div>
      </section>
    </>
  );
}
