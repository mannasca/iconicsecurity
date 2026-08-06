export default function PageHero({
  eyebrow,
  title,
  description,
  accent = "gold",
}: {
  eyebrow: string;
  title: string;
  description: string;
  accent?: "gold" | "clay" | "none";
}) {
  const accentClass = accent === "clay" ? "text-clay" : "text-gold";
  return (
    <section className="border-b border-white/10 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className={`font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] ${accentClass}`}>
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-tight text-gold md:text-5xl">
          {title}
        </h1>
        {description ? <p className="mt-4 max-w-xl text-paper/70">{description}</p> : null}
      </div>
    </section>
  );
}
