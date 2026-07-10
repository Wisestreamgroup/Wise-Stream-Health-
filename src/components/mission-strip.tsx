import { Reveal } from "@/components/reveal";

export function MissionStrip() {
  return (
    <section className="py-24 px-[5%] bg-white">
      <Reveal className="max-w-3xl mx-auto text-center">
        <p
          className="text-xs font-bold tracking-[3px] uppercase mb-5"
          style={{ color: "var(--wsh-accent)" }}
        >
          Our Mission
        </p>
        <p
          className="leading-relaxed font-medium"
          style={{ fontSize: "clamp(1.25rem, 2vw, 1.6rem)", color: "var(--wsh-navy)" }}
        >
          We believe great care starts with great people. WiseStream Health
          exists to connect skilled clinicians with the facilities that
          need them, with honesty, speed, and genuine support at every step.
        </p>
      </Reveal>
    </section>
  );
}
