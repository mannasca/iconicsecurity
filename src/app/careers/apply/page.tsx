import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import JobApplicationForm from "@/components/JobApplicationForm";

export const metadata: Metadata = {
  title: "Apply | Iconic Security",
  description: "Job application form for Iconic Security.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Job Application"
        description="Complete the form below to apply for a position at Iconic Security."
        accent="none"
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-3xl border border-white/70 bg-white/85 p-8 shadow-[0_20px_50px_rgba(24,23,23,0.08)] backdrop-blur-sm md:p-10">
          <JobApplicationForm />
        </div>
      </section>
    </>
  );
}