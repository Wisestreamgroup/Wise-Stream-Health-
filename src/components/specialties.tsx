"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Syringe,
  Plane,
  Activity,
  Slice,
  Siren,
  Baby,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

const specialties: { icon: LucideIcon; name: string }[] = [
  { icon: Syringe,     name: "CRNAs"                },
  { icon: Plane,       name: "Travel Nurses"        },
  { icon: Activity,    name: "ICU / Critical Care"  },
  { icon: Slice,       name: "Operating Room"       },
  { icon: Siren,       name: "Emergency Room"       },
  { icon: Baby,        name: "Labor & Delivery"     },
  { icon: HeartPulse,  name: "PACU"                 },
  { icon: Stethoscope, name: "Med-Surg / Telemetry" },
];

export function Specialties() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="specialties" className="py-24 px-[5%] bg-white">
      <div className="flex justify-between items-end mb-12 flex-wrap gap-5 max-w-5xl mx-auto">
        <div>
          <p className="text-xs font-bold tracking-[2.5px] uppercase mb-3" style={{ color: "var(--wsh-sky)" }}>What We Staff</p>
          <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", color: "var(--wsh-navy)" }}>
            Specialties
          </h2>
        </div>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-md text-sm font-bold border-2 no-underline transition-all"
          style={{ borderColor: "var(--wsh-navy)", color: "var(--wsh-navy)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--wsh-navy)";
            (e.currentTarget as HTMLElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "var(--wsh-navy)";
          }}
        >
          Get in Touch →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {specialties.map((s, i) => {
          const Icon = s.icon;
          const isHovered = hovered === i;
          return (
            <div
              key={s.name}
              className="rounded-xl p-6 cursor-default transition-all duration-250 relative overflow-hidden flex flex-col items-center text-center"
              style={{
                border: isHovered ? "1.5px solid var(--wsh-sky)" : "1.5px solid rgba(27,43,107,0.1)",
                boxShadow: isHovered ? "0 8px 32px rgba(91,189,232,0.12)" : "none",
                transform: isHovered ? "translateY(-3px)" : "none",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="absolute bottom-0 left-0 h-[3px] transition-all duration-300"
                style={{ width: isHovered ? "100%" : "0%", background: "var(--wsh-sky)" }}
              />
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-all duration-250"
                style={{ background: isHovered ? "rgba(91,189,232,0.18)" : "rgba(27,43,107,0.06)" }}
              >
                <Icon
                  className="w-5 h-5 transition-colors duration-250"
                  style={{ color: isHovered ? "var(--wsh-sky)" : "var(--wsh-navy)" }}
                />
              </div>
              <h4 className="font-bold text-[0.92rem]" style={{ color: "var(--wsh-navy)" }}>{s.name}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}
