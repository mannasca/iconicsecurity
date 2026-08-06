import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Open Positions | Iconic Security",
  description: "Current open positions at Iconic Security.",
};

export default function OpenPositionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Open Positions"
        description="This page is ready for future Sanity CMS job listings."
        accent="none"
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-3xl border border-white/70 bg-white/85 p-8 shadow-[0_20px_50px_rgba(24,23,23,0.08)] backdrop-blur-sm md:p-10">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.28em] text-gold">
            Sanity CMS ready
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-ink md:text-4xl">
            Job listings will be managed here.
          </h2>
          <p className="mt-5 max-w-2xl text-slate/80 leading-7">
            When the Sanity CMS integration is added, this page can list active roles, details,
            and application links without changing the site structure.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-paper/50 px-4 py-4 text-sm text-slate/80">
              Placeholder for current openings
            </div>
            <div className="rounded-2xl border border-line bg-paper/50 px-4 py-4 text-sm text-slate/80">
              Placeholder for application instructions
            </div>
          </div>
        </div>
      </section>
    </>
  );
}