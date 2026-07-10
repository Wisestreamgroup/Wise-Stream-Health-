import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { InnerHero } from "@/components/inner-hero";
import Link from "next/link";

export const metadata = { title: "Compliance | WiseStream Health" };

const areas = [
  { title: "Licensing & Privileging", desc: "Every clinician holds active, unencumbered licensure in the state of practice. We verify and track all licenses continuously." },
  { title: "Malpractice Coverage", desc: "Occurrence and tail coverage provided on every assignment, so facilities and clinicians are both fully protected." },
  { title: "Background Checks", desc: "Comprehensive criminal background, OIG exclusion list, and NPDB checks are completed before any placement begins." },
  { title: "DEA Registration", desc: "We confirm active DEA registration for all controlled substance prescribers and monitor for any changes." },
  { title: "Joint Commission Standards", desc: "Our credentialing process aligns with The Joint Commission and DNV GL standards, so you're ready for your next survey." },
  { title: "HIPAA & Privacy", desc: "All clinician and patient data is handled in strict compliance with HIPAA and applicable state privacy laws." },
];

export default function CompliancePage() {
  return (
    <>
      <SiteNav />
      <InnerHero
        eyebrow="Compliance"
        title="Protection You Can Count On"
        subtitle="WiseStream Health maintains the highest compliance standards so your facility never has to worry about regulatory risk from a staffed clinician."
      />

      <section className="py-20 px-[5%]" style={{ background: "var(--wsh-gray)" }}>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a) => (
            <div key={a.title} className="bg-white rounded-2xl p-7" style={{ border: "1px solid rgba(27,43,107,0.07)" }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--wsh-navy)" }}>{a.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--wsh-muted)" }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-[5%] text-center" style={{ background: "var(--wsh-navy)" }}>
        <h2 className="font-extrabold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>Want a Compliance Overview for Your Facility?</h2>
        <p className="mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>We&apos;ll walk you through our full compliance checklist and answer any specific questions.</p>
        <Link href="/contact" className="px-10 py-4 rounded-lg font-bold text-white no-underline" style={{ background: "var(--wsh-sky)" }}>
          Speak with Our Compliance Team
        </Link>
      </section>
      <SiteFooter />
    </>
  );
}
