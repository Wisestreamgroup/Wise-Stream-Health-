import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { InnerHero } from "@/components/inner-hero";
import Link from "next/link";

export const metadata = { title: "Permanent Roles | WiseStream Health" };

const steps = [
  { step: "01", title: "Discovery Call", desc: "We learn what matters to you: location, culture, specialty, compensation, and leadership structure." },
  { step: "02", title: "Curated Matches", desc: "We present only vetted opportunities that genuinely fit." },
  { step: "03", title: "Interviews & Site Visits", desc: "We coordinate everything and prep you for every conversation." },
  { step: "04", title: "Offer & Negotiation", desc: "We negotiate on your behalf to ensure the offer reflects your true market value." },
  { step: "05", title: "Credentialing & Onboarding", desc: "Our team manages licensing, privileging, and all the paperwork so you can focus on day one." },
];

export default function PermanentPage() {
  return (
    <>
      <SiteNav />
      <InnerHero
        eyebrow="Permanent Placement"
        title="Find the Role You'll Actually Stay In"
        subtitle="We don't just find jobs. We find the right fit. Culture, compensation, leadership, community. All of it matters."
      />

      <section className="py-20 px-[5%]" style={{ background: "var(--wsh-gray)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[2.5px] uppercase mb-3" style={{ color: "var(--wsh-sky)" }}>Our Process</p>
          <h2 className="font-extrabold tracking-tight mb-12" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--wsh-navy)" }}>How Permanent Placement Works</h2>
          <div className="flex flex-col gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-7 flex gap-6 items-start" style={{ border: "1px solid rgba(27,43,107,0.07)" }}>
                <span className="font-extrabold text-2xl shrink-0 mt-0.5" style={{ color: "var(--wsh-sky)" }}>{s.step}</span>
                <div>
                  <h3 className="font-bold text-lg mb-1.5" style={{ color: "var(--wsh-navy)" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--wsh-muted)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-[5%] text-center" style={{ background: "var(--wsh-navy)" }}>
        <h2 className="font-extrabold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>Start Your Permanent Search</h2>
        <p className="mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>No pressure and no spam, just a conversation about what your ideal next chapter looks like.</p>
        <Link href="/contact" className="px-10 py-4 rounded-lg font-bold text-white no-underline" style={{ background: "var(--wsh-sky)" }}>
          Speak with a Recruiter
        </Link>
      </section>
      <SiteFooter />
    </>
  );
}
