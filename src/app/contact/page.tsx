import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { InnerHero } from "@/components/inner-hero";
import { ContactForm } from "@/components/contact-form";

export const metadata = { title: "Contact | WiseStream Health" };

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <InnerHero
        eyebrow="Get in Touch"
        title="Let's Start a Conversation"
        subtitle="Whether you're a clinician looking for your next opportunity or a facility in need of coverage, we're here to help."
      />

      <section className="py-20 px-[5%]" style={{ background: "var(--wsh-gray)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm" style={{ border: "1px solid rgba(27,43,107,0.08)" }}>
            <h2 className="font-bold mb-6" style={{ color: "var(--wsh-navy)", fontSize: "1.4rem" }}>Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-bold mb-6" style={{ color: "var(--wsh-navy)", fontSize: "1.4rem" }}>Other Ways to Reach Us</h2>
              <div className="flex flex-col gap-6">
                {[
                  { label: "Email", value: "Doug.wise@wisestreamgroup.com", sub: "" },
                  { label: "Phone", value: "800.393.4005", sub: "Open 24 hours Monday through Friday · Closed Saturday and Sunday" },
                ].map((c) => (
                  <div key={c.label} className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--wsh-sky)" }}>{c.label}</span>
                    <span className="font-semibold" style={{ color: "var(--wsh-navy)" }}>{c.value}</span>
                    {c.sub && <span className="text-sm" style={{ color: "var(--wsh-muted)" }}>{c.sub}</span>}
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://wisestreamgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-6 block no-underline transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--wsh-navy)", color: "rgba(255,255,255,0.75)" }}
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--wsh-sky-l)" }}>A Branch Of</p>
              <p className="text-white font-semibold">WiseStream Group <span aria-hidden className="opacity-60">↗</span></p>
              <p className="text-sm mt-1">Research Triangle Park, NC · Serving All 50 States</p>
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
