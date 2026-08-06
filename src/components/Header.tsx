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
        <div className="flex flex-col items-center gap-3 rounded-3xl border border-white/70 bg-white/80 px-4 py-3 shadow-[0_18px_50px_rgba(24,23,23,0.12)] backdrop-blur-xl supports-[backdrop-filter]:flex-row supports-[backdrop-filter]:items-center supports-[backdrop-filter]:justify-between sm:px-5">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image src="/logo.png" alt="Iconic Security" width={44} height={57} />
          </Link>
          <nav aria-label="Main navigation" className="flex w-full flex-wrap items-center justify-center gap-2 text-[11px] font-medium sm:w-auto sm:justify-end sm:text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`rounded-full px-3 py-2 transition-colors hover:bg-paper hover:text-ink sm:px-4 ${
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
