import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { InnerHero } from "@/components/inner-hero";

export const metadata = { title: "Terms of Service | WiseStream Health" };

export default function TermsPage() {
  return (
    <>
      <SiteNav />
      <InnerHero eyebrow="Legal" title="Terms of Service" subtitle="Last updated: January 1, 2025" />
      <section className="py-20 px-[5%]" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto" style={{ color: "var(--wsh-muted)" }}>
          {[
            { h: "1. Acceptance of Terms", p: "By accessing or using WiseStream Health's website and services, you agree to be bound by these Terms of Service and our Privacy Policy." },
            { h: "2. Services", p: "WiseStream Health provides healthcare staffing and recruitment services connecting clinicians with healthcare facilities. We facilitate placements but are not a party to the employment relationship between clinicians and facilities." },
            { h: "3. User Responsibilities", p: "You agree to provide accurate information, maintain the confidentiality of your account, and use our services in compliance with all applicable laws and regulations." },
            { h: "4. Intellectual Property", p: "All content on this website, including text, graphics, and branding, is owned by WiseStream Health and protected by applicable intellectual property laws." },
            { h: "5. Limitation of Liability", p: "WiseStream Health is not liable for indirect, incidental, or consequential damages arising from your use of our services. Our liability is limited to the extent permitted by law." },
            { h: "6. Governing Law", p: "These Terms are governed by the laws of the State of Illinois. Any disputes shall be resolved in the courts of Cook County, Illinois." },
            { h: "7. Changes to Terms", p: "We reserve the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the updated Terms." },
            { h: "8. Contact", p: "For questions about these Terms, contact us at legal@wisestreamhealth.com." },
          ].map((s) => (
            <div key={s.h} className="mb-8">
              <h2 className="font-bold text-xl mb-3" style={{ color: "var(--wsh-navy)" }}>{s.h}</h2>
              <p className="leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
