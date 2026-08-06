import Image from "next/image";
import { getSiteSettings } from "@/lib/content";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/IconicToronto", icon: "/facebook.svg" },
  { label: "Twitter", href: "https://twitter.com/iconicSecurity", icon: "/x.svg" },
  { label: "LinkedIn", href: "#", icon: "/linkedin.svg" },
];

export default async function Footer() {
  const settings = await getSiteSettings();

  return (
    <footer className="mt-8 border-t border-white/70 bg-white/55 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <p className="text-xs text-slate/60">
          © 2025 {settings.companyName}. All Rights Reserved.
        </p>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white transition-colors hover:border-gold hover:bg-gold"
            >
              <Image src={s.icon} alt="" width={18} height={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
