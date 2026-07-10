"use client";

import Link from "next/link";
import { Stethoscope, Building2 } from "lucide-react";

export function DualPath() {
  return (
    <section id="clinicians" className="py-24 px-[5%]" style={{ background: "var(--wsh-gray)" }}>
      <div className="text-center mb-14">
        <p className="text-xs font-bold tracking-[2.5px] uppercase mb-3" style={{ color: "var(--wsh-sky)" }}>Who We Serve</p>
        <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", color: "var(--wsh-navy)" }}>
          Clinicians &amp; Facilities.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Clinician card */}
        <div className="rounded-2xl p-10 relative overflow-hidden" style={{ background: "var(--wsh-navy)", color: "#fff" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(91,189,232,0.2)" }}>
            <Stethoscope className="w-6 h-6" style={{ color: "var(--wsh-sky)" }} />
          </div>
          <h3 className="text-xl font-extrabold mb-6">For Clinicians</h3>
          <Link
            href="/jobs"
            className="inline-block px-6 py-3 rounded-lg font-bold text-sm text-white no-underline transition-all"
            style={{ background: "var(--wsh-sky)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#47a8d4")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--wsh-sky)")}
          >
            Browse Opportunities →
          </Link>
          <svg className="absolute bottom-[-20px] right-[-30px] w-40 opacity-[0.07] pointer-events-none" viewBox="0 0 200 200" fill="none" aria-hidden>
            <path d="M160 0 C120 50, 60 70, 40 130 C20 180, 80 210, 130 200 L200 200 L200 0 Z" fill="#5BBDE8" />
          </svg>
        </div>

        {/* Facility card */}
        <div id="facilities" className="rounded-2xl p-10 relative overflow-hidden bg-white" style={{ border: "2px solid rgba(27,43,107,0.1)" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(27,43,107,0.07)" }}>
            <Building2 className="w-6 h-6" style={{ color: "var(--wsh-navy)" }} />
          </div>
          <h3 className="text-xl font-extrabold mb-6" style={{ color: "var(--wsh-navy)" }}>For Facilities</h3>
          <Link
            href="/request-coverage"
            className="inline-block px-6 py-3 rounded-lg font-bold text-sm text-white no-underline transition-all"
            style={{ background: "var(--wsh-navy)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--wsh-navy-d, #111d4a)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--wsh-navy)")}
          >
            Request Coverage →
          </Link>
          <svg className="absolute bottom-[-20px] right-[-30px] w-40 opacity-[0.05] pointer-events-none" viewBox="0 0 200 200" fill="none" aria-hidden>
            <path d="M160 0 C120 50, 60 70, 40 130 C20 180, 80 210, 130 200 L200 200 L200 0 Z" fill="#1B2B6B" />
          </svg>
        </div>
      </div>
    </section>
  );
}
