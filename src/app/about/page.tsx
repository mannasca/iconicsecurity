import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About | Iconic Security",
  description: "About Iconic Security — condo and retail security specialists in the GTA.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Iconic Security"
        description="A closer look at our company, what sets us apart, and the mission that drives every site we protect."
        accent="none"
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <article className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-[0_20px_50px_rgba(24,23,23,0.08)] backdrop-blur-sm md:p-10">
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.28em] text-slate/55">
              About
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-ink md:text-4xl">
              Iconic Security
            </h2>
            <p className="mt-5 max-w-3xl text-slate/80 leading-7 md:text-lg">
              Iconic Security is a Canadian owned and operated Security Company. Iconic provides
              uniformed security personnel and prides itself in providing quality services in a
              professional and courteous manner with high focus on customer satisfaction. Iconic
              ensures this through its policies on customer service, health and safety, quality
              management and environmental control.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                "Canadian owned and operated",
                "Uniformed security personnel",
                "Customer-first service standards",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-line bg-paper/50 px-4 py-4 text-sm font-medium text-ink"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-3xl border border-slate bg-slate p-8 text-paper shadow-[0_20px_50px_rgba(42,46,53,0.18)] md:p-10">
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.28em] text-gold-light">
              At a glance
            </p>
            <ul className="mt-6 space-y-5 text-paper/80">
              <li>
                <span className="block text-base font-semibold text-gold">Professional presence</span>
                <span className="mt-1 block leading-7">
                  Uniformed officers who reinforce confidence and maintain a polished site image.
                </span>
              </li>
              <li>
                <span className="block text-base font-semibold text-gold">Operational discipline</span>
                <span className="mt-1 block leading-7">
                  Policies built around customer service, health and safety, quality management,
                  and environmental control.
                </span>
              </li>
              <li>
                <span className="block text-base font-semibold text-gold">Client satisfaction</span>
                <span className="mt-1 block leading-7">
                  We aim to deliver steady, courteous service that reflects well on every property.
                </span>
              </li>
            </ul>
          </aside>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-[0_20px_50px_rgba(24,23,23,0.08)] backdrop-blur-sm">
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.28em] text-gold">
              Why Iconic?
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-ink">
              Why Iconic?
            </h2>
            <p className="mt-4 text-slate/80 leading-7">
              What differentiates Iconic from its worthy competitors? Iconic prides itself in
              being affordable while making sure it provides professional services that not only
              meet clients&apos; needs but exceeds them as well.
            </p>
          </article>

          <article className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-[0_20px_50px_rgba(24,23,23,0.08)] backdrop-blur-sm">
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.28em] text-clay">
              Our Mission
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-ink">
              Our Mission
            </h2>
            <p className="mt-4 text-slate/80 leading-7">
              Provide premier security services in such a way that our clients feel special, and
              to secure and protect the interest, property and personnel of our clients.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
