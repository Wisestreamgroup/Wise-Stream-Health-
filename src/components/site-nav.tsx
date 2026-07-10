"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home",    href: "/"        },
  { label: "About",   href: "/about"   },
  {
    label: "Specialties",
    href: "/jobs",
    dropdown: {
      tagline: "We're here when you need us.",
      links: [
        { label: "CRNA Placement",     href: "/jobs"             },
        { label: "Travel Nursing",     href: "/travel"           },
        { label: "Permanent Roles",    href: "/permanent"        },
        { label: "Request Coverage",   href: "/request-coverage" },
      ],
    },
  },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 bg-white border-b"
      style={{ borderColor: "rgba(20,38,78,0.08)", boxShadow: "0 2px 16px rgba(20,38,78,0.06)" }}
    >
      <div className="mx-auto px-[5%] flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image src="/logo-transparent.png" alt="WiseStream Health logo" width={42} height={42} priority />
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-[1.1rem] tracking-tight" style={{ color: "var(--wsh-navy)", fontFamily: "var(--font-heading)" }}>
              WiseStream Health
            </span>
            <span className="font-semibold text-[0.72rem] tracking-[2px] uppercase" style={{ color: "var(--wsh-sky)" }}>
              Healthcare Recruiting
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium no-underline transition-colors pb-0.5 inline-flex items-center gap-1"
                  style={{
                    color: active ? "var(--wsh-accent)" : "var(--wsh-navy)",
                    borderBottom: active ? "2px solid var(--wsh-accent)" : "2px solid transparent",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--wsh-accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = active ? "var(--wsh-accent)" : "var(--wsh-navy)")}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.dropdown && openDropdown === item.label && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                    style={{ minWidth: 260 }}
                  >
                    <div
                      className="bg-white rounded-xl p-5"
                      style={{ boxShadow: "0 12px 40px rgba(20,38,78,0.16)", border: "1px solid rgba(20,38,78,0.06)" }}
                    >
                      <p className="text-sm font-semibold mb-3 pb-3" style={{ color: "var(--wsh-navy)", borderBottom: "1px solid rgba(20,38,78,0.08)" }}>
                        {item.dropdown.tagline}
                      </p>
                      <ul className="flex flex-col gap-1">
                        {item.dropdown.links.map((l) => (
                          <li key={l.label}>
                            <Link
                              href={l.href}
                              className="block text-sm no-underline rounded-md px-3 py-2 transition-colors"
                              style={{ color: "var(--wsh-muted)" }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = "var(--wsh-accent)";
                                e.currentTarget.style.background = "rgba(13,148,136,0.06)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = "var(--wsh-muted)";
                                e.currentTarget.style.background = "transparent";
                              }}
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Single CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-md text-sm font-bold no-underline transition-all text-white"
            style={{ background: "var(--wsh-accent)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--wsh-accent-d)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--wsh-accent)")}
          >
            Talk With Us
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: "var(--wsh-navy)" }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <path d="M4 4L18 18M4 18L18 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-[5%] py-5 flex flex-col gap-4" style={{ borderColor: "rgba(20,38,78,0.08)" }}>
          {navLinks.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="text-sm font-medium no-underline"
                style={{ color: "var(--wsh-navy)" }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="mt-2 ml-3 flex flex-col gap-2">
                  {item.dropdown.links.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      className="text-sm no-underline"
                      style={{ color: "var(--wsh-muted)" }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="mt-1 inline-block px-5 py-2.5 rounded-md text-sm font-bold no-underline text-white text-center"
            style={{ background: "var(--wsh-accent)" }}
            onClick={() => setMenuOpen(false)}
          >
            Talk With Us
          </Link>
        </div>
      )}
    </nav>
  );
}
