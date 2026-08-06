const weekdayOptions = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const positionOptions = ["Security Guard", "Patrol Supervisor", "Admin/HR", "Other"];
const yesNoOptions = ["Yes", "No"];
const employmentOptions = ["FULL-TIME only", "PART-TIME only", "FULL or PART-TIME"];

function TextField({ label, required = false, type = "text", placeholder }: { label: string; required?: boolean; type?: string; placeholder?: string; }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-clay"> *</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-sm border border-line bg-white px-4 py-3 text-base text-slate focus:outline-none focus:ring-2 focus:ring-ink"
        required={required}
      />
    </div>
  );
}

function TextAreaField({ label, required = false, placeholder }: { label: string; required?: boolean; placeholder?: string; }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-clay"> *</span>}
      </label>
      <textarea
        placeholder={placeholder}
        rows={8}
        className="w-full rounded-sm border border-line bg-white px-4 py-3 text-base text-slate focus:outline-none focus:ring-2 focus:ring-ink"
        required={required}
      />
    </div>
  );
}

function SelectField({ label, options, required = false }: { label: string; options: string[]; required?: boolean; }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-clay"> *</span>}
      </label>
      <div className="relative">
        <select
          defaultValue=""
          required={required}
          className="site-select w-full appearance-none rounded-sm border border-line bg-white px-4 py-3 pr-10 text-base text-slate focus:outline-none focus:ring-2 focus:ring-ink"
        >
          <option value="" disabled>
            —Please choose an option—
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate/60">
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 7 5 5 5-5" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function RadioGroup({ label, options, required = false }: { label: string; options: string[]; required?: boolean; }) {
  const groupName = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <fieldset>
      <legend className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-clay"> *</span>}
      </legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 rounded-2xl border border-line bg-paper/40 px-4 py-3 text-sm text-slate/80">
            <input
              type="radio"
              name={groupName}
              value={option}
              required={required}
              className="h-4 w-4 accent-[var(--color-gold)]"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function CheckboxGroup({ label, options, required = false }: { label: string; options: string[]; required?: boolean; }) {
  const groupName = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <fieldset>
      <legend className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-clay"> *</span>}
      </legend>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 rounded-2xl border border-line bg-paper/40 px-4 py-3 text-sm text-slate/80">
            <input
              type="checkbox"
              name={groupName}
              value={option}
              className="h-4 w-4 accent-[var(--color-gold)]"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function JobApplicationForm() {
  return (
    <form className="space-y-8">
      <div>
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.28em] text-gold">
          Job Application
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-ink md:text-4xl">
          This is a basic employment application that can be customized as necessary.
        </h2>
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        <TextField label="Last Name" required />
        <TextField label="First Name" required />
        <TextField label="Social Security Number (SIN)" required />
        <TextField label="Date of Application" type="date" required />
        <TextField label="Present Address" required />
        <TextField label="City" required />
        <TextField label="Phone Number" required />
        <TextField label="Other Phone Number" />
        <TextField label="Email" type="email" required />
      </section>

      <section className="space-y-6">
        <RadioGroup label="Are you under 18 years old?" options={["No, I'm older than 18 years old.", "Yes, I'm under 18."]} required />
        <RadioGroup label="Are you currently employed?" options={yesNoOptions} required />
        <RadioGroup label="Are you legally entitled to work in Canada?" options={yesNoOptions} required />
        <RadioGroup label="Do you currently hold a valid Security Guard License?" options={yesNoOptions} required />
        <TextField label="Your security Guard License number?" required placeholder="Enter N/A for no license." />
        <RadioGroup label="Do you currently hold a valid Driving License (G)?" options={yesNoOptions} required />
        <TextField label="Have you worked at Iconic before? If yes, where?" required />
        <TextField label="Have you worked at any other security company before? If yes, where?" required />
      </section>

      <section className="space-y-6">
        <SelectField label="Position applied for?" options={positionOptions} required />
        <TextField label="Hourly salary desired" required placeholder="Please be specific." />
        <CheckboxGroup label="Days available" options={weekdayOptions} required />
        <TextField label="How many hours can you work weekly?" required />
        <RadioGroup label="Can you work nights?" options={yesNoOptions} required />
        <RadioGroup label="Employment desired" options={employmentOptions} required />
        <TextField label="If hired when can you start work?" type="date" required />
        <TextField label="What is your means of transportation to work?" required />
      </section>

      <section className="space-y-6">
        <TextAreaField
          label="Educational History"
          required
          placeholder="Please list all educational history, including a list of schools attended (name + address), # of years completed, and any major/degree."
        />
        <TextAreaField
          label="List of any specialized training apprentice skills, awards, professional designations and other education"
        />
        <RadioGroup
          label="Have you been ever convicted of a criminal offence for which a pardon has not been granted?"
          options={yesNoOptions}
          required
        />
        <TextAreaField
          label="If yes, explain number of conviction(s), nature of offense(s) leading to conviction(s), how recently such offense(s) was/were committed, sentence(s) imposed, and type(s) of rehabilitation."
        />
        <TextAreaField
          label="Work Experience"
          required
          placeholder="Please provide a list of work experience from most recent to least recent for the last 5 years. Include employer address, name of supervisor, dates of employment, salary, title, and reason for leaving."
        />
        <TextAreaField
          label="List any Military or Police History"
          placeholder="Please list your specialty, date entered, and discharge date as appropriate."
        />
        <RadioGroup label="May we contact your current employer?" options={yesNoOptions} required />
        <TextAreaField
          label="Why should Iconic hire you?"
          required
          placeholder="Please do not write more than 200 words."
        />
        <TextAreaField
          label="References"
          required
          placeholder="Please list two references other than relatives or friends."
        />
        <RadioGroup label="Did you complete this application yourself?" options={yesNoOptions} required />
        <TextAreaField label="Other" />
      </section>

      <div className="flex flex-wrap gap-4">
        <button
          type="submit"
          className="inline-flex rounded-full bg-slate px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold"
        >
          Submit Application
        </button>
        <button
          type="reset"
          className="inline-flex rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:border-gold hover:text-gold"
        >
          Clear Form
        </button>
        <p className="self-center text-xs text-slate/60">
          * Indicates required question
        </p>
      </div>
    </form>
  );
}