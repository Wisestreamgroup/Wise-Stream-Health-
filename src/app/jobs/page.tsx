import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { InnerHero } from "@/components/inner-hero";
import Link from "next/link";

export const metadata = { title: "Browse Jobs | WiseStream Health" };

const specialties = [
  "Hospitalist", "CRNA", "Emergency Medicine", "Internal Medicine",
  "Family Medicine", "Anesthesiology", "Psychiatry", "Radiology",
  "Critical Care", "Surgery", "Pediatrics", "Cardiology",
];

const jobTypes = [
  { label: "Locum Tenens", desc: "Short-term, flexible assignments that let you fill gaps or try new markets.", href: "/locum-tenens" },
  { label: "Travel Positions", desc: "13-week contracts across the country with housing and travel covered.", href: "/travel" },
  { label: "Permanent Roles", desc: "Long-term placements for clinicians ready to put down roots.", href: "/permanent" },
];

export default function JobsPage() {
  return (
    <>
      <SiteNav />
      <InnerHero
        eyebrow="For Clinicians"
        title="Find Your Next Opportunity"
        subtitle="Explore locum, travel, and permanent positions across every specialty. Your recruiter handles the paperwork so you can focus on care."
      />

      {/* Job type cards */}
      <section className="py-20 px-[5%]" style={{ background: "var(--wsh-gray)" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[2.5px] uppercase mb-3" style={{ color: "var(--wsh-sky)" }}>Choose Your Path</p>
          <h2 className="font-extrabold tracking-tight mb-10" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--wsh-navy)" }}>What Kind of Work Are You Looking For?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {jobTypes.map((jt) => (
              <Link
                key={jt.label}
                href={jt.href}
                className="bg-white rounded-2xl p-7 no-underline flex flex-col gap-3 transition-all hover:-translate-y-1"
                style={{ border: "1px solid rgba(27,43,107,0.07)", boxShadow: "0 2px 16px rgba(27,43,107,0.05)" }}
              >
                <h3 className="font-bold text-lg" style={{ color: "var(--wsh-navy)" }}>{jt.label}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--wsh-muted)" }}>{jt.desc}</p>
                <span className="text-sm font-bold" style={{ color: "var(--wsh-sky)" }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties grid */}
      <section className="py-20 px-[5%]" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[2.5px] uppercase mb-3" style={{ color: "var(--wsh-sky)" }}>Specialties We Staff</p>
          <h2 className="font-extrabold tracking-tight mb-10" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--wsh-navy)" }}>Browse by Specialty</h2>
          <div className="flex flex-wrap gap-3 mb-12">
            {specialties.map((s) => (
              <Link
                key={s}
                href="/contact"
                className="px-5 py-2.5 rounded-full text-sm font-semibold no-underline transition-all"
                style={{ background: "var(--wsh-gray)", color: "var(--wsh-navy)", border: "1px solid rgba(27,43,107,0.1)" }}
              >
                {s}
              </Link>
            ))}
          </div>
          <div className="rounded-2xl p-8 text-center" style={{ background: "var(--wsh-navy)" }}>
            <p className="text-white font-bold text-lg mb-2">Don&apos;t see your specialty?</p>
            <p className="mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>We staff 30+ specialties. Contact a recruiter to discuss your specific field.</p>
            <Link href="/contact" className="px-8 py-3 rounded-lg font-bold text-white no-underline" style={{ background: "var(--wsh-sky)" }}>
              Talk to a Recruiter
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
