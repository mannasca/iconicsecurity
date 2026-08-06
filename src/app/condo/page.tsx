import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Condo & Residential Security | Iconic Security",
  description: "Concierge-style condo and residential security across the GTA — consistent, courteous, and known to residents.",
};

const pillars = [
  {
    title: "Consistency",
    body: "The same guards on rotation where possible, so residents and boards recognize who's on duty rather than facing a new face every shift.",
  },
  {
    title: "Courtesy first",
    body: "Concierge-trained staff who represent the building professionally — visitor logs, package handling, and day-to-day resident interaction included.",
  },
  {
    title: "Accountability",
    body: "Clear shift reporting and a direct line to management, not a call center, when something needs attention.",
  },
];

export default function CondoPage() {
  return (
    <>
      <PageHero
        eyebrow="Condo & Residential"
        title="A face residents know."
        description="Security that feels like part of the building, not an outside vendor — steady presence, professional conduct, and direct accountability."
        accent="gold"
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title}>
            <h3 className="font-[family-name:var(--font-display)] text-xl text-ink">{p.title}</h3>
            <p className="mt-2 text-sm text-slate/80">{p.body}</p>
          </div>
        ))}
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink">What a typical engagement looks like</h2>
          <p className="mt-3 text-slate/80 max-w-2xl">
            {/* TODO: replace with real detail from an actual condo engagement */}
            Concierge desk coverage, lobby and amenity patrols, visitor and package logging, and
            incident reporting handled the same way every shift — so boards get consistency they
            can rely on, not variance from guard to guard.
          </p>
          <Link href="/quote" className="mt-6 inline-block rounded-sm bg-slate px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-gold">
            Request a quote for your building
          </Link>
        </div>
      </section>
    </>
  );
}
