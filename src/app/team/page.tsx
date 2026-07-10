import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { InnerHero } from "@/components/inner-hero";
import Link from "next/link";

export const metadata = { title: "Our Team | WiseStream Health" };

const team = [
  { name: "Team Member", role: "Chief Executive Officer", bio: "20+ years leading healthcare staffing organizations across the country." },
  { name: "Team Member", role: "Chief Clinical Officer", bio: "Former hospitalist with deep credentialing and compliance expertise." },
  { name: "Team Member", role: "VP of Clinician Relations", bio: "Built and managed locum networks across 30+ specialties." },
  { name: "Team Member", role: "VP of Facility Partnerships", bio: "Forged long-term relationships with health systems in all 50 states." },
  { name: "Team Member", role: "Head of Credentialing", bio: "Ensures every clinician meets the highest licensing and malpractice standards." },
  { name: "Team Member", role: "Director of Compliance", bio: "Keeps every placement in line with federal, state, and accreditation requirements." },
];

export default function TeamPage() {
  return (
    <>
      <SiteNav />
      <InnerHero
        eyebrow="Meet the Team"
        title="People Who Know Healthcare"
        subtitle="Our leadership team brings together clinical experience, healthcare operations, and staffing expertise, so you always work with someone who truly understands your world."
        align="center"
      />

      <section className="py-20 px-[5%]" style={{ background: "var(--wsh-gray)" }}>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(27,43,107,0.07)", boxShadow: "0 2px 16px rgba(27,43,107,0.05)" }}>
              {/* Photo placeholder */}
              <div
                className="w-full flex items-center justify-center"
                style={{ height: 200, background: "linear-gradient(135deg, var(--wsh-navy) 0%, #2a4a9e 100%)" }}
              >
                {/* Replace with <Image src="…" /> when photos are ready */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "rgba(91,189,232,0.2)", border: "2px dashed rgba(91,189,232,0.5)" }}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="12" r="6" stroke="rgba(91,189,232,0.7)" strokeWidth="1.5" />
                      <path d="M4 28c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="rgba(91,189,232,0.7)" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[0.65rem] font-semibold tracking-widest uppercase" style={{ color: "rgba(91,189,232,0.5)" }}>Photo Coming Soon</span>
                </div>
              </div>
              <div className="p-6">
                <p className="font-extrabold mb-1" style={{ color: "var(--wsh-navy)" }}>{member.name}</p>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--wsh-sky)" }}>{member.role}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--wsh-muted)" }}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-16 text-center">
          <p className="text-sm mb-4" style={{ color: "var(--wsh-muted)" }}>Want to join this team?</p>
          <Link href="/careers" className="px-8 py-3 rounded-lg font-bold text-white no-underline" style={{ background: "var(--wsh-navy)" }}>
            View Open Positions
          </Link>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
