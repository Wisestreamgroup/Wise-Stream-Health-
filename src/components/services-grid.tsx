"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";

const services = [
  {
    title: "Travel Nursing",
    desc: "Assignments that fit your life, matched to your specialty, schedule, and preferred locations.",
    href: "/travel",
    cta: "Discover travel roles",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "CRNA Placement",
    desc: "Locum and permanent anesthesia placements handled by people who understand the specialty.",
    href: "/jobs",
    cta: "Discover CRNA roles",
    img: "https://images.unsplash.com/photo-1551601651-bc60f254d532?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Facility Staffing",
    desc: "Vetted, credentialed clinicians for short-term gaps, long-term needs, and permanent hires.",
    href: "/request-coverage",
    cta: "Discover staffing solutions",
    img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 px-[5%]" style={{ background: "var(--wsh-gray)" }}>
      <Reveal className="text-center mb-14">
        <p className="text-xs font-bold tracking-[3px] uppercase mb-4" style={{ color: "var(--wsh-accent)" }}>
          What We Do
        </p>
        <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", color: "var(--wsh-navy)" }}>
          Built around the people we place.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <div
              className="bg-white rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "0 4px 24px rgba(20,38,78,0.07)" }}
            >
              <div className="relative h-52 w-full">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-2.5" style={{ color: "var(--wsh-navy)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--wsh-muted)" }}>{s.desc}</p>
                <Link
                  href={s.href}
                  className="text-sm font-semibold no-underline inline-flex items-center gap-1.5 transition-colors"
                  style={{ color: "var(--wsh-accent)" }}
                >
                  {s.cta} <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
