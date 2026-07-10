"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ScrollShowcase() {
  return (
    <div style={{ background: "var(--wsh-navy)" }}>
      <ContainerScroll
        titleComponent={
          <div className="px-4">
            <p
              className="text-xs font-bold tracking-[2.5px] uppercase mb-4"
              style={{ color: "var(--wsh-sky)" }}
            >
              The Partnership
            </p>
            <h2
              className="font-extrabold tracking-tight text-white mb-5"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", lineHeight: 1.1 }}
            >
              Every Great Placement Starts
              <br />
              <span style={{ color: "var(--wsh-sky)" }}>With the Right Relationship</span>
            </h2>
            <p
              className="text-[1.05rem] leading-relaxed mx-auto max-w-2xl"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              We connect skilled clinicians directly with the facilities that need them —
              building partnerships grounded in trust, speed, and unwavering clinical standards.
            </p>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1400&q=85"
          alt="Clinicians collaborating — the WiseStream Health partnership in action"
          height={720}
          width={1400}
          className="mx-auto object-cover h-full w-full object-center rounded-2xl"
          draggable={false}
          priority={false}
        />
      </ContainerScroll>
    </div>
  );
}
