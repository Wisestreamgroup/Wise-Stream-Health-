import Image from "next/image";
import { Reveal } from "@/components/reveal";

/* Founder mission quote — swap for a real client/candidate testimonial once one exists. */
export function FounderQuote() {
  return (
    <section className="py-24 px-[5%]" style={{ background: "var(--wsh-navy)" }}>
      <Reveal className="max-w-3xl mx-auto text-center">
        <blockquote
          className="font-medium leading-relaxed text-white mb-9 relative inline-block px-10"
          style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)" }}
        >
          <span
            aria-hidden
            className="absolute left-0 top-0"
            style={{ color: "var(--wsh-accent)", fontSize: "1.6em", lineHeight: 1, transform: "translateY(-0.15em)" }}
          >
            ❝
          </span>
          We started WiseStream Health because clinicians deserve a
          recruiter who treats them like people, not placements.
          <span
            aria-hidden
            className="absolute right-0 bottom-0"
            style={{ color: "var(--wsh-accent)", fontSize: "1.6em", lineHeight: 1, transform: "translateY(0.15em)" }}
          >
            ❞
          </span>
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/team-doug.jpg"
            alt="Doug Wise"
            width={56}
            height={56}
            className="rounded-full object-cover"
            style={{ width: 56, height: 56, objectPosition: "top" }}
          />
          <div className="text-left">
            <p className="text-white font-semibold text-sm">Doug Wise</p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>Founder, WiseStream Health</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
