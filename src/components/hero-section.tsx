"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="rgba(91,189,232,1)"
            strokeWidth={path.width}
            strokeOpacity={0.06 + path.id * 0.012}
            initial={{ pathLength: 0.3, opacity: 0.5 }}
            animate={{ pathLength: 1, opacity: [0.25, 0.5, 0.25], pathOffset: [0, 1, 0] }}
            transition={{ duration: 24 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center px-[5%]"
      style={{ background: "var(--wsh-navy)", minHeight: 620 }}
    >
      {/* Background photo with navy wash */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(120deg, rgba(13,26,56,0.94) 0%, rgba(13,26,56,0.82) 55%, rgba(13,26,56,0.62) 100%)" }}
        />
      </div>

      {/* Subtle flowing lines */}
      <div className="absolute inset-0 z-10">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Page content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 py-28">

        {/* Left: text + CTAs */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className="font-bold leading-[1.1] tracking-tight mb-7 text-white"
            style={{ fontSize: "clamp(2.5rem, 4.6vw, 4rem)" }}
            aria-label="Welcome to WiseStream Health"
          >
            <span className="flex items-baseline" aria-hidden>
              <Image
                src="/logo-w-blue.png"
                alt=""
                width={235}
                height={162}
                priority
                style={{
                  height: "1.3em",
                  width: "auto",
                  transform: "translateY(0.28em)",
                  filter: "drop-shadow(0 0 6px rgba(255,255,255,0.55)) drop-shadow(0 0 18px rgba(255,255,255,0.3))",
                }}
              />
              <span style={{ marginLeft: "-0.14em" }}>elcome to</span>
            </span>
            <span className="block" aria-hidden>WiseStream Health.</span>
          </h1>

          <p
            className="text-[1.1rem] leading-relaxed mb-11"
            style={{ color: "rgba(255,255,255,0.75)", maxWidth: 460 }}
          >
            Specialized recruiting for travel nurses, CRNAs, and advanced
            practice providers across the country.
          </p>

          <div className="flex gap-4 flex-wrap items-center">
            <Link
              href="/request-coverage"
              className="px-8 py-4 rounded-md text-white font-semibold text-[0.95rem] no-underline transition-all"
              style={{ background: "var(--wsh-accent)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--wsh-accent-d)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--wsh-accent)")}
            >
              Find Talent
            </Link>
            <Link
              href="/jobs"
              className="px-8 py-4 rounded-md font-semibold text-[0.95rem] no-underline transition-all text-white"
              style={{ border: "1px solid rgba(255,255,255,0.35)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#fff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.35)")}
            >
              Find Your Next Role
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
