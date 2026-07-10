import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { InnerHero } from "@/components/inner-hero";
import Link from "next/link";

export const metadata = { title: "Locum Tenens | WiseStream Health" };

const benefits = [
  { title: "Flexible Scheduling", desc: "Work when you want, where you want. Take time off between assignments without penalty." },
  { title: "Top-Market Pay", desc: "Locum rates consistently exceed employed physician compensation, and we negotiate on your behalf." },
  { title: "Malpractice Covered", desc: "We provide tail and occurrence malpractice coverage on every assignment at no cost to you." },
  { title: "Travel & Housing", desc: "Flights, hotel or furnished housing, and a per diem are fully covered by WiseStream Health." },
  { title: "Licensing Support", desc: "Our team fast-tracks multi-state licensing so you can practice wherever the opportunity takes you." },
  { title: "Dedicated Recruiter", desc: "One point of contact who knows your preferences and won't waste your time with bad fits." },
];

export default function LocumTenensPage() {
  return (
    <>
      <SiteNav />
      <InnerHero
        eyebrow="Locum Tenens"
        title="Practice on Your Terms"
        subtitle="Locum tenens gives you clinical freedom. Choose your assignments, control your schedule, and earn more while exploring the country."
      />

      <section className="py-20 px-[5%]" style={{ background: "var(--wsh-gray)" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[2.5px] uppercase mb-3" style={{ color: "var(--wsh-sky)" }}>What&apos;s Included</p>
          <h2 className="font-extrabold tracking-tight mb-10" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--wsh-navy)" }}>Everything You Need, Handled</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-7" style={{ border: "1px solid rgba(27,43,107,0.07)" }}>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--wsh-navy)" }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--wsh-muted)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-[5%] text-center" style={{ background: "var(--wsh-navy)" }}>
        <h2 className="font-extrabold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>Ready to Start Your First Assignment?</h2>
        <p className="mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>A recruiter will reach out within one business day to discuss your preferences.</p>
        <Link href="/contact" className="px-10 py-4 rounded-lg font-bold text-white no-underline" style={{ background: "var(--wsh-sky)" }}>
          Get Started
        </Link>
      </section>
      <SiteFooter />
    </>
  );
}
