import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { InnerHero } from "@/components/inner-hero";
import Link from "next/link";

export const metadata = { title: "Credentialing | WiseStream Health" };

const steps = [
  { num: "01", title: "Document Collection", desc: "We gather everything upfront, including DEA, state licenses, board certifications, malpractice history, and references, so nothing delays your start date." },
  { num: "02", title: "Primary Source Verification", desc: "Every credential is verified directly with the issuing authority. No shortcuts, no assumptions." },
  { num: "03", title: "Facility-Specific Privileging", desc: "We navigate each facility's unique privileging requirements and handle the administrative back-and-forth on your behalf." },
  { num: "04", title: "Ongoing Monitoring", desc: "Licenses, DEA, and board certifications are tracked and renewed proactively. We notify you well before anything lapses." },
];

export default function CredentialingPage() {
  return (
    <>
      <SiteNav />
      <InnerHero
        eyebrow="Credentialing"
        title="Rigorous. Fast. Handled For You."
        subtitle="Credentialing delays cost facilities money and clinicians assignments. Our dedicated team makes it one of the fastest processes in the industry."
      />

      <section className="py-20 px-[5%]" style={{ background: "var(--wsh-gray)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[2.5px] uppercase mb-3" style={{ color: "var(--wsh-sky)" }}>Our Process</p>
          <h2 className="font-extrabold tracking-tight mb-12" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--wsh-navy)" }}>From Application to First Shift</h2>
          <div className="flex flex-col gap-6">
            {steps.map((s) => (
              <div key={s.num} className="bg-white rounded-2xl p-7 flex gap-6" style={{ border: "1px solid rgba(27,43,107,0.07)" }}>
                <span className="font-extrabold text-2xl shrink-0" style={{ color: "var(--wsh-sky)" }}>{s.num}</span>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "var(--wsh-navy)" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--wsh-muted)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl p-8 grid sm:grid-cols-3 gap-6 text-center" style={{ background: "var(--wsh-navy)" }}>
            {[
              { stat: "< 2 wks", label: "Average credentialing time" },
              { stat: "100%", label: "Primary source verified" },
              { stat: "50+", label: "States credentialed" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-extrabold text-3xl text-white mb-1">{s.stat}</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-[5%] text-center" style={{ background: "#fff" }}>
        <h2 className="font-extrabold mb-4" style={{ color: "var(--wsh-navy)", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>Questions About Credentialing?</h2>
        <p className="mb-8" style={{ color: "var(--wsh-muted)" }}>Our credentialing specialists are available to walk you through the process.</p>
        <Link href="/contact" className="px-10 py-4 rounded-lg font-bold text-white no-underline" style={{ background: "var(--wsh-sky)" }}>
          Contact Our Team
        </Link>
      </section>
      <SiteFooter />
    </>
  );
}
