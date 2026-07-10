"use client";

import Link from "next/link";
import Image from "next/image";

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

const cols = [
  {
    title: "For Clinicians",
    links: [
      { label: "Browse Jobs",       href: "/jobs"           },
      { label: "Specialties",       href: "/#specialties"   },
      { label: "Locum Tenens",      href: "/locum-tenens"   },
      { label: "Travel Positions",  href: "/travel"         },
      { label: "Permanent Roles",   href: "/permanent"      },
    ],
  },
  {
    title: "For Facilities",
    links: [
      { label: "Request Coverage",  href: "/request-coverage" },
      { label: "Credentialing",     href: "/credentialing"    },
      { label: "Compliance",        href: "/compliance"       },
      { label: "Contact Sales",     href: "/contact"          },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us",  href: "/about"                                          },
      { label: "Our Team",  href: "/team"                                           },
      { label: "Careers",   href: "/careers"                                        },
      { label: "LinkedIn",  href: "https://www.linkedin.com/company/wisestreamgroup", external: true, icon: "linkedin" },
      { label: "WiseStream Group", href: "https://wisestreamgroup.com", external: true, icon: "globe" },
      { label: "Contact",   href: "/contact"                                        },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer style={{ background: "var(--wsh-navy-d, #111d4a)", color: "rgba(255,255,255,0.65)" }}>
      {/* Conversion moment */}
      <div className="px-[5%] py-16 text-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <h2 className="font-bold text-white mb-8" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>
          How can we help?
        </h2>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/request-coverage"
            className="px-7 py-3.5 rounded-md font-semibold text-sm text-white no-underline transition-all"
            style={{ background: "var(--wsh-accent)" }}
          >
            Hire Talent
          </Link>
          <Link
            href="/jobs"
            className="px-7 py-3.5 rounded-md font-semibold text-sm text-white no-underline transition-all"
            style={{ border: "1px solid rgba(255,255,255,0.35)" }}
          >
            View Open Roles
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-md font-semibold text-sm text-white no-underline transition-all"
            style={{ border: "1px solid rgba(255,255,255,0.35)" }}
          >
            Talk With Us
          </Link>
        </div>
      </div>

      <div className="px-[5%] pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="flex flex-col items-center justify-center text-center gap-1">
            <Link href="/" className="no-underline">
              <Image
                src="/logo-transparent.png"
                alt="WiseStream Health logo"
                width={150}
                height={150}
                style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.22)) drop-shadow(0 0 10px rgba(143,193,222,0.15))" }}
              />
            </Link>
            <p className="text-white font-bold text-[1.15rem] leading-none" style={{ fontFamily: "var(--font-heading)" }}>
              WiseStream Health
            </p>
            <p className="text-[0.72rem] font-semibold tracking-[2.5px] uppercase mt-1" style={{ color: "var(--wsh-sky-l)" }}>
              Healthcare Recruiting
            </p>
            <div className="mt-4 flex flex-col gap-1 text-sm">
              <Link href="/contact" className="no-underline transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>800.393.4005</Link>
              <Link href="/contact" className="no-underline transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>Doug.wise@wisestreamgroup.com</Link>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h5 className="text-white font-bold text-sm tracking-wide mb-5">{col.title}</h5>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm no-underline transition-colors inline-flex items-center gap-1.5"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                      {...(("external" in l && l.external) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--wsh-sky)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                    >
                      {"icon" in l && l.icon === "linkedin" && <LinkedInIcon />}
                      {"icon" in l && l.icon === "globe" && <GlobeIcon />}
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex justify-between items-center flex-wrap gap-3 pt-7 text-sm"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <span>© 2026 WiseStream Health. All rights reserved.</span>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="no-underline transition-colors"
                style={{ color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--wsh-sky)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
