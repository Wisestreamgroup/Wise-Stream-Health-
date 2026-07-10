import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { InnerHero } from "@/components/inner-hero";
import Link from "next/link";

export const metadata = { title: "Careers | WiseStream Health" };

const openings = [
  { title: "Senior Healthcare Recruiter", dept: "Recruiting", location: "Chicago, IL · Remote", type: "Full-Time" },
  { title: "Physician Recruiter (Locum Tenens)", dept: "Recruiting", location: "Remote", type: "Full-Time" },
  { title: "Credentialing Specialist", dept: "Compliance & Credentialing", location: "Chicago, IL · Hybrid", type: "Full-Time" },
  { title: "Account Executive (Facility Partnerships)", dept: "Sales", location: "Remote", type: "Full-Time" },
  { title: "Clinician Experience Coordinator", dept: "Operations", location: "Chicago, IL · Hybrid", type: "Full-Time" },
  { title: "Compliance Analyst", dept: "Compliance & Credentialing", location: "Remote", type: "Full-Time" },
];

const perks = [
  { title: "Competitive Compensation", desc: "Base salary + performance bonuses tied to real outcomes, not vanity metrics." },
  { title: "Full Benefits", desc: "Medical, dental, vision, and a 401(k) with company match from day one." },
  { title: "Remote-Friendly", desc: "Most roles are fully remote or hybrid. Work from where you do your best work." },
  { title: "Growth Path", desc: "Clear career ladders and leadership development programs for every level." },
];

export default function CareersPage() {
  return (
    <>
      <SiteNav />
      <InnerHero
        eyebrow="Join Our Team"
        title="Build the Future of Healthcare Staffing"
        subtitle="We're growing fast and looking for people who are passionate about healthcare, driven by results, and committed to doing right by clinicians and facilities alike."
        align="center"
      />

      <section className="py-20 px-[5%]" style={{ background: "var(--wsh-gray)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[2.5px] uppercase mb-3" style={{ color: "var(--wsh-sky)" }}>Open Positions</p>
          <h2 className="font-extrabold tracking-tight mb-10" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--wsh-navy)" }}>Current Openings</h2>

          <div className="flex flex-col gap-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                style={{ border: "1px solid rgba(27,43,107,0.07)", boxShadow: "0 2px 12px rgba(27,43,107,0.04)" }}
              >
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: "var(--wsh-navy)" }}>{job.title}</h3>
                  <div className="flex flex-wrap gap-3 items-center">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(91,189,232,0.12)", color: "var(--wsh-sky)" }}>{job.dept}</span>
                    <span className="text-xs" style={{ color: "var(--wsh-muted)" }}>{job.location}</span>
                    <span className="text-xs" style={{ color: "var(--wsh-muted)" }}>{job.type}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 px-6 py-2.5 rounded-lg font-bold text-sm text-white no-underline"
                  style={{ background: "var(--wsh-sky)" }}
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>

          <p className="text-sm mt-8 text-center" style={{ color: "var(--wsh-muted)" }}>
            Don&apos;t see your role?{" "}
            <Link href="/contact" className="font-semibold no-underline" style={{ color: "var(--wsh-sky)" }}>
              Send us your resume anyway →
            </Link>
          </p>
        </div>
      </section>

      <section className="py-20 px-[5%]" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[2.5px] uppercase mb-3 text-center" style={{ color: "var(--wsh-sky)" }}>Why Work Here</p>
          <h2 className="font-extrabold tracking-tight text-center mb-12" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--wsh-navy)" }}>What We Offer</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="rounded-2xl p-7" style={{ background: "var(--wsh-gray)" }}>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--wsh-navy)" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--wsh-muted)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
