// This file simulates what a headless CMS (e.g. Sanity) would return.
// Every function here is written the way a CMS client query would look,
// so migrating to a real CMS later means swapping the implementation of
// each function, not rewriting the pages that call them.

export interface SiteSettings {
  companyName: string;
  phone: string;
  email: string;
  address: string;
  tagline: string;
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  featured: boolean; // Condo & Retail are featured; others are "also available"
}

export interface Testimonial {
  quote: string;
  author: string;
  org: string;
}

export interface JobPosting {
  slug: string;
  title: string;
  type: string;
  location: string;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return {
    companyName: "Iconic Security",
    phone: "647-313-8990",
    email: "info@iconicsecurity.ca",
    address: "18 King St East, Suite 1400, Toronto, ON M5C 1C4",
    tagline: "Condo & Retail Security Specialists",
  };
}

export async function getServices(): Promise<Service[]> {
  return [
    {
      slug: "condo",
      title: "Condo & Residential",
      summary:
        "A consistent, trusted presence residents recognize — concierge-style security built around courtesy and reliability.",
      featured: true,
    },
    {
      slug: "retail",
      title: "Retail & Loss Prevention",
      summary:
        "Uniformed and plainclothes coverage focused on shrinkage, internal theft patterns, and floor-level vigilance.",
      featured: true,
    },
    {
      slug: "patrols",
      title: "Foot & Car Patrols",
      summary: "Marked and unmarked patrol coverage with scheduled sweeps and alarm response.",
      featured: false,
    },
    {
      slug: "events",
      title: "Special Event Security",
      summary: "Crowd control, access control, and on-site emergency management.",
      featured: false,
    },
    {
      slug: "parking",
      title: "Parking Enforcement",
      summary: "Inspection and documentation for improperly parked vehicles on private property.",
      featured: false,
    },
    {
      slug: "commercial",
      title: "Commercial & Office",
      summary: "Access control and on-site presence for offices, logistics, and industrial sites.",
      featured: false,
    },
  ];
}

export async function getTestimonials(): Promise<Testimonial[]> {
  // TODO: replace with real client testimonials before launch
  return [
    { quote: "Placeholder testimonial — replace with a real client quote.", author: "Client Name", org: "Condo Board" },
    { quote: "Placeholder testimonial — replace with a real client quote.", author: "Client Name", org: "Retail Group" },
  ];
}

export async function getJobPostings(): Promise<JobPosting[]> {
  // TODO: replace with real, current openings
  return [
    { slug: "retail-lp-guard", title: "Retail Loss Prevention Guard", type: "Part-time", location: "Toronto, ON" },
    { slug: "condo-concierge", title: "Condo Concierge / Security Guard", type: "Full-time", location: "Toronto, ON" },
  ];
}
