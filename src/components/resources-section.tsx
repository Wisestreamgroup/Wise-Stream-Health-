"use client";

import { LinkPreview } from "@/components/ui/link-preview";
import { ArrowUpRight, ExternalLink } from "lucide-react";

// Each resource uses a static Unsplash image so no external API is required.
// Swap isStatic → false to use live microlink screenshots instead.
const resources = [
  {
    label: "AANA",
    description: "American Association of Nurse Anesthetists — the professional home for CRNAs nationwide.",
    url: "https://www.aana.com",
    imageSrc:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&h=250&auto=format&fit=crop",
  },
  {
    label: "NBCRNA",
    description: "National Board of Certification & Recertification for Nurse Anesthetists.",
    url: "https://www.nbcrna.com",
    imageSrc:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=400&h=250&auto=format&fit=crop",
  },
  {
    label: "NursingWorld",
    description: "American Nurses Association — advocacy, education, and career resources for RNs.",
    url: "https://www.nursingworld.org",
    imageSrc:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=400&h=250&auto=format&fit=crop",
  },
  {
    label: "MGMA",
    description: "Medical Group Management Association — healthcare practice management resources.",
    url: "https://www.mgma.com",
    imageSrc:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400&h=250&auto=format&fit=crop",
  },
];

export function ResourcesSection() {
  return (
    <section className="py-20 px-[5%] bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p
              className="text-xs font-bold tracking-[2.5px] uppercase mb-3"
              style={{ color: "var(--wsh-sky)" }}
            >
              Explore the Field
            </p>
            <h2
              className="font-extrabold tracking-tight leading-tight"
              style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)", color: "var(--wsh-navy)" }}
            >
              Industry Resources
            </h2>
            <p
              className="text-[0.97rem] leading-relaxed mt-3 max-w-lg"
              style={{ color: "var(--wsh-muted)" }}
            >
              Hover any link for a quick peek — then click to explore. We keep an eye on these so
              you don&apos;t have to.
            </p>
          </div>
        </div>

        {/* Resource links — two columns on md+ */}
        <div className="grid sm:grid-cols-2 gap-5">
          {resources.map((r) => (
            <div
              key={r.label}
              className="group flex items-start gap-4 p-5 rounded-2xl transition-all duration-200"
              style={{
                border: "1.5px solid rgba(27,43,107,0.09)",
                background: "var(--wsh-gray)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(91,189,232,0.4)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(27,43,107,0.09)")
              }
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "rgba(91,189,232,0.15)" }}
              >
                <ExternalLink className="w-4 h-4" style={{ color: "var(--wsh-sky)" }} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  {/* The hover-preview link */}
                  <LinkPreview
                    url={r.url}
                    isStatic
                    imageSrc={r.imageSrc}
                    width={260}
                    height={160}
                    className="font-extrabold text-[1rem] no-underline transition-colors text-[#1B2B6B] hover:text-[#5BBDE8]"
                  >
                    {r.label}
                  </LinkPreview>
                  <ArrowUpRight
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--wsh-sky)" }}
                  />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--wsh-muted)" }}>
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-xs text-center mt-8" style={{ color: "var(--wsh-muted)" }}>
          Hover any link above to preview — click to open in a new tab.
        </p>
      </div>
    </section>
  );
}
