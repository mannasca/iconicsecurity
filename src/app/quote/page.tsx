import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteForm from "@/components/SiteForm";

export const metadata: Metadata = {
  title: "Get a Quote | Iconic Security",
  description: "Request a free security quote from Iconic Security.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Free Quote"
        title="Tell us about your property."
        description="Condo, retail, or something else — we'll follow up with a proposal that fits."
        accent="none"
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <SiteForm
          submitLabel="Request quote"
          fields={[
            { name: "name", label: "Name", required: true },
            {
              name: "service",
              label: "Type of Service you require",
              type: "select",
              required: true,
              options: [
                "Condo & Residential",
                "Retail & Loss Prevention",
                "Foot & Car Patrols",
                "Special Event Security",
                "Parking Enforcement",
                "Commercial & Office",
              ],
            },
            { name: "company", label: "Company / Building", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "phone", label: "Phone", type: "tel" },
            { name: "details", label: "Details", type: "textarea" },
          ]}
        />
      </section>
    </>
  );
}
