"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function CareersSection() {
  return (
    <section className="py-24 px-[5%] bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="grid grid-cols-3 gap-3">
            {[
              "photo-1559839734-2b71ea197ec2",
              "photo-1582750433449-648ed127bb54",
              "photo-1576091160399-112ba8d25d1d",
              "photo-1551601651-bc60f254d532",
              "photo-1651008376811-b90baee60c1f",
              "photo-1576091160550-2173dba999ef",
              "photo-1622253692010-333f2da6031d",
              "photo-1573496359142-b8d87734a5a2",
              "photo-1600880292203-757bb62b4baf",
              "photo-1527613426441-4da17471b66d",
              "photo-1579684385127-1ef15d508118",
              "photo-1521791136064-7986c2920216",
            ].map((id, i) => (
              <div
                key={id}
                className="relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.04] hover:z-10"
                style={{ aspectRatio: "1 / 1", boxShadow: "0 4px 16px rgba(20,38,78,0.12)" }}
              >
                <Image
                  src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=70`}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 30vw, 180px"
                  className="object-cover"
                  aria-hidden={i > 0}
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="order-1 lg:order-2">
          <p className="text-xs font-bold tracking-[3px] uppercase mb-4" style={{ color: "var(--wsh-accent)" }}>
            Careers
          </p>
          <h2 className="font-bold tracking-tight mb-6" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", color: "var(--wsh-navy)" }}>
            Join us. Make a difference.
          </h2>
          <p className="text-[1.02rem] leading-relaxed mb-9" style={{ color: "var(--wsh-muted)" }}>
            Whether you&apos;re a CRNA looking for your next contract or a travel
            nurse ready for a new city, we&apos;ll help you find work that moves
            your career and your life forward.
          </p>
          <Link
            href="/jobs"
            className="px-7 py-3.5 rounded-md font-semibold text-sm text-white no-underline inline-block transition-all"
            style={{ background: "var(--wsh-accent)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--wsh-accent-d)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--wsh-accent)")}
          >
            Search Roles
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
