"use client";

import Link from "next/link";

export function CtaBanner() {
  return (
    <section
      id="contact"
      className="py-24 px-[5%] text-center relative overflow-hidden"
      style={{ background: "var(--wsh-navy)" }}
    >
      <div className="relative z-10">
        <h2 className="font-bold tracking-tight text-white mb-4" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)" }}>
          Let&apos;s Work Together.
        </h2>
        <p className="text-[1.05rem] mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
          Reach out and we&apos;ll take it from there.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-md font-semibold text-[0.95rem] no-underline transition-all text-white"
            style={{ background: "var(--wsh-sky)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#256a99")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--wsh-sky)")}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
