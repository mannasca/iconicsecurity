"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-6 rounded-3xl border border-white/70 bg-white/80 px-5 py-3 shadow-[0_18px_50px_rgba(24,23,23,0.12)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image src="/logo.png" alt="Iconic Security" width={44} height={57} priority />
            <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[0.28em] text-ink">
              ICONIC
            </span>
          </Link>
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`rounded-full px-4 py-2 transition-colors hover:bg-paper hover:text-ink ${
                  pathname === link.href ? "text-gold" : "text-slate/75"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
