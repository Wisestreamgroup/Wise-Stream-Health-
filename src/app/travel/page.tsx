import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { InnerHero } from "@/components/inner-hero";
import Link from "next/link";

export const metadata = { title: "Travel Positions | WiseStream Health" };

const features = [
  { title: "13-Week Contracts", desc: "Standard travel assignments give you time to truly settle in, then move on when you're ready." },
  { title: "Housing Stipend", desc: "Furnished housing or a tax-free housing stipend. You choose what works best." },
  { title: "Travel Reimbursement", desc: "Flight or mileage covered for every new assignment." },
  { title: "Benefits Package", desc: "Health insurance, 401(k), and professional liability coverage included." },
  { title: "Extension Options", desc: "Love where you landed? Most facilities welcome extension requests." },
  { title: "Rapid Onboarding", desc: "Our credentialing team gets you cleared and oriented fast, usually within two weeks." },
];

export default function TravelPage() {
  return (
    <>
      <SiteNav />
      <InnerHero
        eyebrow="Travel Positions"
        title="See the Country. Advance Your Career."
        subtitle="Travel clinician roles combine competitive pay, adventure, and career growth, with the support to make every move simple."
      />

      <section className="py-20 px-[5%]" style={{ background: "var(--wsh-gray)" }}>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-7" style={{ border: "1px solid rgba(27,43,107,0.07)" }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--wsh-navy)" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--wsh-muted)" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-[5%] text-center" style={{ background: "var(--wsh-navy)" }}>
        <h2 className="font-extrabold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>Find Your Next Travel Assignment</h2>
        <p className="mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>Tell us your specialty, preferred region, and start date, and we&apos;ll find the match.</p>
        <Link href="/contact" className="px-10 py-4 rounded-lg font-bold text-white no-underline" style={{ background: "var(--wsh-sky)" }}>
          Talk to a Recruiter
        </Link>
      </section>
      <SiteFooter />
    </>
  );
}
