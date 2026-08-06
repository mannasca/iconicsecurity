const items = ["Licensed & Insured", "24/7 Availability", "Serving the GTA"];

export default function TrustBar() {
  return (
    <div className="border-y border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-2 px-6 py-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide text-slate/70">
        {items.map((item) => (
          <span key={item} className="font-semibold text-slate">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
