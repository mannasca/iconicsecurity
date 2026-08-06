import type { Service } from "@/lib/content";

export default function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((service) => (
        <div key={service.slug} className="border border-line rounded-sm p-6 bg-white">
          <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg text-gold">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-slate/80">{service.summary}</p>
        </div>
      ))}
    </div>
  );
}
