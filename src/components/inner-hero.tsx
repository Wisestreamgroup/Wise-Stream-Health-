"use client";

import { motion } from "framer-motion";

interface InnerHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function InnerHero({ eyebrow, title, subtitle, align = "left" }: InnerHeroProps) {
  const centered = align === "center";
  return (
    <section
      className={`relative overflow-hidden pt-20 pb-16 px-[5%] ${centered ? "text-center" : ""}`}
      style={{ background: "var(--wsh-navy)" }}
    >
      {/* subtle path decoration */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 696 220" fill="none" aria-hidden>
        {Array.from({ length: 12 }, (_, i) => (
          <motion.path
            key={i}
            d={`M-${180 - i * 12} -${40 + i * 8}C-${120 - i * 10} ${80 + i * 5} ${200 + i * 14} ${160 + i * 4} ${696 + i * 8} ${100 + i * 3}`}
            stroke="rgba(91,189,232,1)"
            strokeWidth={0.6 + i * 0.05}
            strokeOpacity={0.4 + i * 0.04}
            initial={{ pathLength: 0.4 }}
            animate={{ pathLength: 1, pathOffset: [0, 1] }}
            transition={{ duration: 18 + i * 2, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>

      <div className={`relative z-10 ${centered ? "max-w-3xl mx-auto" : "max-w-2xl"}`}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold tracking-[2.5px] uppercase mb-4"
          style={{ color: "var(--wsh-sky)" }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-extrabold tracking-tight text-white mb-5"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[1.05rem] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
