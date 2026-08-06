import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteForm from "@/components/SiteForm";
import { getSiteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Iconic Security",
  description: "Contact Iconic Security.",
};

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us."
        description={`${settings.phone} · ${settings.email}`}
        accent="none"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2">
        <SiteForm
          submitLabel="Send message"
          fields={[
            { name: "name", label: "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "message", label: "Message", type: "textarea", required: true },
          ]}
        />
        <div className="text-sm text-slate/80 space-y-2">
          <p className="font-[family-name:var(--font-display)] text-lg text-ink mb-2">{settings.companyName}</p>
          <p>{settings.address}</p>
          <p>{settings.phone}</p>
          <p>{settings.email}</p>
        </div>
      </section>
    </>
  );
}
