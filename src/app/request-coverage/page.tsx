import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { InnerHero } from "@/components/inner-hero";

export const metadata = { title: "Request Coverage | WiseStream Health" };

const specialties = [
  "Hospitalist", "CRNA", "Emergency Medicine", "Internal Medicine",
  "Family Medicine", "Critical Care", "Anesthesiology", "Psychiatry",
  "Radiology", "Surgery", "Pediatrics", "Other",
];

export default function RequestCoveragePage() {
  return (
    <>
      <SiteNav />
      <InnerHero
        eyebrow="For Facilities"
        title="Request Clinician Coverage"
        subtitle="Tell us what you need, including specialty, start date, and duration, and we'll have qualified candidates in your inbox within 48 hours."
      />

      <section className="py-20 px-[5%]" style={{ background: "var(--wsh-gray)" }}>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-10 shadow-sm" style={{ border: "1px solid rgba(27,43,107,0.08)" }}>
          <h2 className="font-extrabold mb-8" style={{ color: "var(--wsh-navy)", fontSize: "1.4rem" }}>Coverage Request Form</h2>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--wsh-muted)" }}>First Name</label>
                <input className="border rounded-lg px-4 py-3 text-sm outline-none" style={{ borderColor: "rgba(27,43,107,0.15)" }} placeholder="First name" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--wsh-muted)" }}>Last Name</label>
                <input className="border rounded-lg px-4 py-3 text-sm outline-none" style={{ borderColor: "rgba(27,43,107,0.15)" }} placeholder="Last name" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--wsh-muted)" }}>Facility / Organization Name</label>
              <input className="border rounded-lg px-4 py-3 text-sm outline-none" style={{ borderColor: "rgba(27,43,107,0.15)" }} placeholder="General Hospital" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--wsh-muted)" }}>Work Email</label>
                <input type="email" className="border rounded-lg px-4 py-3 text-sm outline-none" style={{ borderColor: "rgba(27,43,107,0.15)" }} placeholder="you@hospital.org" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--wsh-muted)" }}>Phone</label>
                <input type="tel" className="border rounded-lg px-4 py-3 text-sm outline-none" style={{ borderColor: "rgba(27,43,107,0.15)" }} placeholder="(800) 555-0100" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--wsh-muted)" }}>Specialty Needed</label>
              <select className="border rounded-lg px-4 py-3 text-sm outline-none" style={{ borderColor: "rgba(27,43,107,0.15)", color: "var(--wsh-navy)" }}>
                <option value="">Select specialty</option>
                {specialties.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--wsh-muted)" }}>Coverage Start Date</label>
                <input type="date" className="border rounded-lg px-4 py-3 text-sm outline-none" style={{ borderColor: "rgba(27,43,107,0.15)", color: "var(--wsh-navy)" }} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--wsh-muted)" }}>Duration</label>
                <select className="border rounded-lg px-4 py-3 text-sm outline-none" style={{ borderColor: "rgba(27,43,107,0.15)", color: "var(--wsh-navy)" }}>
                  <option value="">Select duration</option>
                  <option>1–4 weeks</option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                  <option>6+ months</option>
                  <option>Ongoing / Permanent</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--wsh-muted)" }}>Additional Notes</label>
              <textarea rows={4} className="border rounded-lg px-4 py-3 text-sm outline-none resize-none" style={{ borderColor: "rgba(27,43,107,0.15)" }} placeholder="Shift structure, census volume, specific certifications required, urgency level…" />
            </div>
            <button type="submit" className="py-4 rounded-lg font-bold text-white text-sm transition-all hover:-translate-y-0.5" style={{ background: "var(--wsh-sky)" }}>
              Submit Coverage Request
            </button>
            <p className="text-xs text-center" style={{ color: "var(--wsh-muted)" }}>
              We respond to all requests within one business day. Urgent needs? Call us at (800) 555-0190.
            </p>
          </form>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
