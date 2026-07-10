import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { InnerHero } from "@/components/inner-hero";

export const metadata = { title: "Privacy Policy | WiseStream Health" };

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <InnerHero eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: January 1, 2025" />
      <section className="py-20 px-[5%]" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto prose" style={{ color: "var(--wsh-muted)" }}>
          {[
            { h: "1. Information We Collect", p: "We collect information you provide directly (name, email, professional credentials), information collected automatically (usage data, cookies), and information from third parties (licensing boards, reference checks)." },
            { h: "2. How We Use Your Information", p: "We use your information to match clinicians with opportunities, fulfill staffing contracts, communicate with you about placements, improve our services, and comply with legal obligations." },
            { h: "3. Information Sharing", p: "We share your information with healthcare facilities for placement purposes, with credentialing and verification services, and as required by law. We do not sell your personal information." },
            { h: "4. Data Security", p: "We implement industry-standard security measures including encryption at rest and in transit, access controls, and regular security audits to protect your information." },
            { h: "5. Your Rights", p: "You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at privacy@wisestreamhealth.com." },
            { h: "6. Contact Us", p: "For privacy-related questions, contact our Privacy Officer at privacy@wisestreamhealth.com or (800) 555-0190." },
          ].map((section) => (
            <div key={section.h} className="mb-8">
              <h2 className="font-bold text-xl mb-3" style={{ color: "var(--wsh-navy)" }}>{section.h}</h2>
              <p className="leading-relaxed">{section.p}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
