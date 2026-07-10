"use client";

import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";

/**
 * Mid-page cinematic photo reveal.
 * The image starts as a small centred card and expands to fill the viewport
 * as the user scrolls — with a frosted overlay that fades in at the end.
 */
export function PhotoReveal() {
  return (
    <SmoothScrollHero
      scrollHeight={1400}
      // Wide landscape: two professional clinicians / CRNA surgical setting
      desktopImage="https://images.unsplash.com/photo-1551601651-bc60f254d532?auto=format&fit=crop&w=1920&q=90"
      // Portrait: confident female physician — trust-building, authoritative
      mobileImage="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85"
      initialClipPercentage={22}
      finalClipPercentage={78}
    >
      {/* Frosted glass caption — fades in once image fills ~80% of screen */}
      <div
        className="text-center max-w-xl w-full rounded-2xl px-8 py-7 md:px-12 md:py-9"
        style={{
          background: "rgba(8, 15, 28, 0.68)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(91,189,232,0.22)",
          boxShadow: "0 8px 48px rgba(0,0,0,0.5)",
        }}
      >
        <p
          className="text-xs font-bold tracking-[2.5px] uppercase mb-3"
          style={{ color: "#5BBDE8" }}
        >
          The WiseStream Standard
        </p>
        <h2
          className="font-extrabold text-white tracking-tight mb-3"
          style={{ fontSize: "clamp(1.35rem, 2.8vw, 2rem)", lineHeight: 1.18 }}
        >
          Every Clinician. Every Credential.<br />Every Time.
        </h2>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.65)", maxWidth: 380, margin: "0 auto" }}
        >
          From CRNAs in the OR to hospitalists covering overnight shifts —
          every placement is built on trust, rigorous vetting, and partnerships
          that last.
        </p>
      </div>
    </SmoothScrollHero>
  );
}
