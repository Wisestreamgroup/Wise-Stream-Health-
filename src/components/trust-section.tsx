"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { ShieldCheck, FileCheck2, Handshake } from "lucide-react";

const proofPoints = [
  { icon: ShieldCheck, text: "Every clinician is fully vetted. Licenses, references, and work history are verified before placement." },
  { icon: FileCheck2, text: "Credentialing and compliance handled end-to-end, so facilities start coverage without paperwork delays." },
  { icon: Handshake, text: "Built on the talent expertise of WiseStream Group, with a people-first approach now focused on healthcare." },
];

export function TrustSection() {
  return (
    <section className="py-24 px-[5%] bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="text-xs font-bold tracking-[3px] uppercase mb-4" style={{ color: "var(--wsh-accent)" }}>
            Trust
          </p>
          <h2 className="font-bold tracking-tight mb-6" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", color: "var(--wsh-navy)" }}>
            A partner you can rely on.
          </h2>
          <ul className="flex flex-col gap-5 mb-9">
            {proofPoints.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.text} className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(13,148,136,0.1)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "var(--wsh-accent)" }} />
                  </div>
                  <p className="text-[0.97rem] leading-relaxed" style={{ color: "var(--wsh-muted)" }}>{p.text}</p>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/request-coverage"
              className="px-7 py-3.5 rounded-md font-semibold text-sm text-white no-underline transition-all"
              style={{ background: "var(--wsh-accent)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--wsh-accent-d)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--wsh-accent)")}
            >
              Find Talent
            </Link>
            <Link
              href="/credentialing"
              className="px-7 py-3.5 rounded-md font-semibold text-sm no-underline transition-all"
              style={{ border: "1.5px solid var(--wsh-navy)", color: "var(--wsh-navy)" }}
            >
              Our Credentialing Process
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "0 12px 48px rgba(20,38,78,0.15)" }}>
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
              alt="Healthcare professionals collaborating"
              width={1000}
              height={700}
              className="object-cover w-full h-auto"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
