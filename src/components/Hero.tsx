import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.85),_transparent_42%),radial-gradient(circle_at_20%_25%,_rgba(185,138,50,0.18),_transparent_26%),radial-gradient(circle_at_80%_15%,_rgba(201,80,46,0.12),_transparent_24%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="max-w-xl">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.35em] text-slate/60">
            Toronto and the GTA
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-body)] text-6xl font-light uppercase tracking-tight text-gold md:text-7xl">
            Security
          </h1>
          <p className="mt-2 font-[family-name:var(--font-display)] text-2xl italic text-slate md:text-3xl">
            That&rsquo;s what we live for.
          </p>
          <p className="mt-6 max-w-md text-slate/70">
            Providing premier security services to our clients to safeguard, secure and protect
            their interests, property and personnel.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full bg-slate px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-paper transition-transform hover:-translate-y-0.5 hover:bg-gold"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-line bg-white/70 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Explore Services
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate/50">Don&rsquo;t worry, it&rsquo;s free.</p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_24px_60px_rgba(24,23,23,0.14)] backdrop-blur-xl">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <Image src="/logo.png" alt="Iconic Security" width={320} height={415} priority className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
