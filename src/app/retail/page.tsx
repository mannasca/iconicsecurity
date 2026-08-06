import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Retail & Loss Prevention Security | Iconic Security",
  description: "Uniformed and plainclothes retail security focused on shrinkage, internal theft patterns, and floor-level vigilance.",
};

const pillars = [
  {
    title: "Pattern recognition",
    body: "Trained to spot the behavioral signals of theft and fraud — not just react after a loss has already happened.",
  },
  {
    title: "Uniformed or plainclothes",
    body: "Visible deterrence when that's the goal, or discreet floor presence when it isn't. Matched to what the store actually needs.",
  },
  {
    title: "Staff-side awareness",
    body: "Shrinkage isn't only a customer problem — coverage accounts for internal theft and POS/return fraud risk too.",
  },
];

export default function RetailPage() {
  return (
    <>
      <PageHero
        eyebrow="Retail & Loss Prevention"
        title="Eyes for what others miss."
        description="Security built around the specific ways retail businesses lose money — not a generic guard posted at the door."
        accent="clay"
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
            {/* TODO: replace with real detail / case study once available */}
            Floor presence during peak hours, documented incident reporting, and coordination with
            store management on recurring theft patterns — so loss prevention becomes a repeatable
            process, not one-off intervention.
          </p>
          <Link href="/quote" className="mt-6 inline-block rounded-sm bg-slate px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-gold">
            Request a quote for your store
          </Link>
        </div>
      </section>
    </>
  );
}
