"use client";

import { useState } from "react";

export interface FormField {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: string[];
}

export default function SiteForm({
  fields,
  submitLabel,
  action,
}: {
  fields: FormField[];
  submitLabel: string;
  // Placeholder endpoint — wire to a real form-handling service (e.g. Formspree, Netlify Forms) before launch.
  action?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: replace with a real POST to the configured form endpoint
    await new Promise((r) => setTimeout(r, 500));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="w-full border border-line rounded-sm p-6 bg-white">
        <p className="font-[family-name:var(--font-display)] text-lg text-ink">Thanks — that&rsquo;s been sent.</p>
        <p className="mt-1 text-sm text-slate/70">We&rsquo;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} action={action} method="POST" className="w-full space-y-5 max-w-lg">
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="block text-sm font-medium text-ink mb-1.5">
            {field.label}
            {field.required && <span className="text-clay"> *</span>}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              rows={5}
              className="w-full border border-line rounded-sm px-3 py-2 bg-white text-slate focus:outline-none focus:ring-2 focus:ring-ink"
            />
          ) : field.type === "select" ? (
            <div className="relative">
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                defaultValue=""
                className="site-select w-full appearance-none border border-line rounded-sm px-3 py-2 pr-10 bg-white text-slate focus:outline-none focus:ring-2 focus:ring-ink"
              >
                <option value="" disabled>
                  —Please choose an option—
                </option>
                {(field.options ?? []).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate/60"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 7 5 5 5-5" />
                </svg>
              </span>
            </div>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type ?? "text"}
              required={field.required}
              className="w-full border border-line rounded-sm px-3 py-2 bg-white text-slate focus:outline-none focus:ring-2 focus:ring-ink"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-sm bg-slate px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-gold disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
