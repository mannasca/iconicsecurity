import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | Iconic Security",
  description: "All security services offered by Iconic Security across the GTA.",
};

export default async function ServicesPage() {
  const services = await getServices();
  const featured = services.filter((s) => s.featured);
  const secondary = services.filter((s) => !s.featured);
  const featuredImages: Record<string, string> = {
    condo: "/img1.jpg",
    retail: "/img2.jpg",
  };

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Right people, right environment."
        description="Condo and retail are our specialties. Every other engagement follows the same standard."
        accent="none"
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.28em] text-gold">
              Simple service overview
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-ink md:text-3xl">
              Our core services
            </h2>
          </div>
          <Link
            href="/quote"
            className="inline-flex shrink-0 rounded-full bg-slate px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold"
          >
            Get a Quote
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((service) => (
            <article
              key={service.slug}
              className="overflow-hidden rounded-3xl border border-white/70 bg-white/85 shadow-[0_20px_50px_rgba(24,23,23,0.08)] backdrop-blur-sm"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-white p-4">
                <Image
                  src={featuredImages[service.slug]}
                  alt={service.title}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority={service.slug === "condo"}
                />
              </div>
              <div className="p-7">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate/80 leading-7">{service.summary}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl text-ink">
            Additional coverage
          </h2>
          <ServiceGrid services={secondary} />
        </div>
      </section>
    </>
  );
}
