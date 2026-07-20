import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { InnerHero } from "@/components/inner-hero";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export const metadata = { title: "About Us | WiseStream Health" };

const values = [
  { title: "Clinician-First", desc: "We advocate for the professionals who make healthcare work, with fair pay, respectful placement, and genuine support." },
  { title: "Speed with Integrity", desc: "Urgency never overrides rigor. We move fast and maintain the highest credentialing and compliance standards." },
  { title: "Transparent Partnership", desc: "No hidden fees, no bait-and-switch contracts. Facilities and clinicians always know exactly what to expect." },
  { title: "Nationwide Reach", desc: "From rural critical-access hospitals to major urban health systems, we place clinicians across the country." },
];

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <InnerHero
        eyebrow="Our Story"
        title="Healthcare Talent Solutions Built on Trust"
        subtitle="WiseStream Health was founded with one belief: that the recruiting process should serve the people doing the work, not just the bottom line."
      />

      <section className="py-20 px-[5%]" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[2.5px] uppercase mb-4" style={{ color: "var(--wsh-sky)" }}>Who We Are</p>
          <h2 className="font-bold tracking-tight mb-6" style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.3rem)", color: "var(--wsh-navy)" }}>
            Built on the Foundation of WiseStream Group.
          </h2>
          <p className="text-[1.05rem] leading-relaxed mb-6" style={{ color: "var(--wsh-muted)" }}>
            WiseStream Health is the healthcare branch of WiseStream Group, a talent
            firm built on connecting great people with the organizations that need
            them. We bring that same people-first approach to clinical recruiting.
          </p>
          <p className="text-[1.05rem] leading-relaxed" style={{ color: "var(--wsh-muted)" }}>
            Our focus is travel nurses, CRNAs, and advanced practice providers. We match them with travel, locum, and permanent roles at facilities
            that share our standards.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-[5%]" style={{ background: "var(--wsh-gray)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[2.5px] uppercase mb-3" style={{ color: "var(--wsh-sky)" }}>Leadership</p>
          <h2 className="font-bold tracking-tight mb-10" style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.3rem)", color: "var(--wsh-navy)" }}>Our Team</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Doug */}
            <div className="flex flex-col items-center bg-white rounded-2xl p-8" style={{ border: "1px solid rgba(27,43,107,0.07)" }}>
              <AnimatedTooltip
                className="mb-5"
                imageSizeClass="h-[150px] w-[150px]"
                items={[{ id: 1, name: "Doug Wise", designation: "Founder", image: "/team-doug.jpg" }]}
              />
              <h3 className="font-bold text-xl" style={{ color: "var(--wsh-navy)" }}>Doug Wise</h3>
              <p className="text-sm font-semibold mt-1 mb-3" style={{ color: "var(--wsh-sky)" }}>Founder</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--wsh-muted)" }}>
                Founder of WiseStream Group, bringing a people-first approach to
                talent, now focused on the clinicians who keep healthcare running.
              </p>
              <a
                href="https://www.linkedin.com/in/doug-wise/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 px-5 py-2.5 rounded-md text-sm font-semibold no-underline text-white"
                style={{ background: "var(--wsh-navy)" }}
              >
                Connect on LinkedIn
              </a>
            </div>

            {/* Liz */}
            <div className="flex flex-col items-center bg-white rounded-2xl p-8" style={{ border: "1px solid rgba(27,43,107,0.07)" }}>
              <AnimatedTooltip
                className="mb-5"
                imageSizeClass="h-[150px] w-[150px]"
                items={[{ id: 2, name: "Liz DeLaPaz Farber", designation: "Partner · Finance & Payroll", image: "/team-liz.jpg" }]}
              />
              <h3 className="font-bold text-xl" style={{ color: "var(--wsh-navy)" }}>Liz DeLaPaz Farber</h3>
              <p className="text-sm font-semibold mt-1 mb-3" style={{ color: "var(--wsh-sky)" }}>Partner · Finance &amp; Payroll</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--wsh-muted)" }}>
                A registered nurse with 20 years of clinical experience, Liz
                leads the financial side of WiseStream Health, including payroll,
                billing, and everything that keeps clinicians paid on time.
              </p>
              <a
                href="https://www.linkedin.com/in/liz-delapaz-farber-602310233/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 px-5 py-2.5 rounded-md text-sm font-semibold no-underline text-white"
                style={{ background: "var(--wsh-navy)" }}
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-[5%]" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[2.5px] uppercase mb-3 text-center" style={{ color: "var(--wsh-sky)" }}>What We Stand For</p>
          <h2 className="font-bold tracking-tight text-center mb-12" style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.3rem)", color: "var(--wsh-navy)" }}>Our Core Values</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl p-7" style={{ background: "var(--wsh-gray)", border: "1px solid rgba(27,43,107,0.05)" }}>
                <h3 className="font-bold text-lg mb-3" style={{ color: "var(--wsh-navy)" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--wsh-muted)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-[5%] text-center" style={{ background: "var(--wsh-navy)" }}>
        <p className="text-xs font-bold tracking-[2.5px] uppercase mb-4" style={{ color: "var(--wsh-sky-l)" }}>Ready to Connect?</p>
        <h2 className="font-bold text-white mb-6" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}>Join the WiseStream Network</h2>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/jobs" className="px-8 py-4 rounded-md font-semibold text-white no-underline" style={{ background: "var(--wsh-sky)" }}>Find Work</Link>
          <Link href="/contact" className="px-8 py-4 rounded-md font-semibold no-underline" style={{ border: "1px solid rgba(255,255,255,0.35)", color: "#fff" }}>Contact Us</Link>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
