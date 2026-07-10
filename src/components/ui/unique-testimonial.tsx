"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    quote: "WiseStream Health placed me in my dream locum position within 48 hours. The entire process — credentialing, travel, housing — was completely seamless.",
    author: "Dr. Alicia Monroe",
    role: "Hospitalist · Chicago, IL",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "We've tried five staffing agencies. None came close to the quality and speed WiseStream Health delivers. They genuinely understand what our ER needs.",
    author: "Marcus Webb",
    role: "CMO · Regional Medical Center",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "My recruiter felt like a true partner, not just a placement engine. They found me a position that matched my lifestyle and my specialty perfectly.",
    author: "Dr. Elena Vasquez",
    role: "CRNA · Travel Clinician",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote)
  const [displayedRole, setDisplayedRole] = useState(testimonials[0].role)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleSelect = (index: number) => {
    if (index === activeIndex || isAnimating) return
    setIsAnimating(true)

    setTimeout(() => {
      setDisplayedQuote(testimonials[index].quote)
      setDisplayedRole(testimonials[index].role)
      setActiveIndex(index)
      setTimeout(() => setIsAnimating(false), 400)
    }, 200)
  }

  return (
    <section className="py-24 px-[5%] bg-white">
      {/* Section header */}
      <div className="text-center mb-4">
        <p
          className="text-xs font-bold tracking-[2.5px] uppercase mb-3"
          style={{ color: "var(--wsh-sky)" }}
        >
          What People Are Saying
        </p>
        <h2
          className="font-extrabold tracking-tight"
          style={{ fontSize: "clamp(1.9rem, 3vw, 2.7rem)", color: "var(--wsh-navy)" }}
        >
          Trusted by Clinicians & Facilities
        </h2>
      </div>

      <div className="flex flex-col items-center gap-10 py-10">
        {/* Quote Container */}
        <div className="relative px-8 max-w-2xl mx-auto">
          <span className="absolute -left-2 -top-6 text-7xl font-serif select-none pointer-events-none" style={{ color: "var(--wsh-navy)", opacity: 0.06 }}>
            "
          </span>

          <p
            className={cn(
              "text-2xl md:text-3xl font-light text-center leading-relaxed transition-all duration-400 ease-out",
              isAnimating ? "opacity-0 blur-sm scale-[0.98]" : "opacity-100 blur-0 scale-100",
            )}
            style={{ color: "var(--wsh-navy)" }}
          >
            {displayedQuote}
          </p>

          <span className="absolute -right-2 -bottom-8 text-7xl font-serif select-none pointer-events-none" style={{ color: "var(--wsh-navy)", opacity: 0.06 }}>
            "
          </span>
        </div>

        <div className="flex flex-col items-center gap-6 mt-2">
          {/* Role text */}
          <p
            className={cn(
              "text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-500 ease-out",
              isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
            )}
            style={{ color: "var(--wsh-muted)" }}
          >
            {displayedRole}
          </p>

          {/* Avatar pill selectors */}
          <div className="flex items-center justify-center gap-2">
            {testimonials.map((testimonial, index) => {
              const isActive = activeIndex === index
              const isHovered = hoveredIndex === index && !isActive
              const showName = isActive || isHovered

              return (
                <button
                  key={testimonial.id}
                  onClick={() => handleSelect(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={cn(
                    "relative flex items-center rounded-full cursor-pointer",
                    "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    showName ? "pr-4 pl-2 py-2" : "p-0.5",
                  )}
                  style={{
                    background: isActive
                      ? "var(--wsh-navy)"
                      : isHovered
                      ? "rgba(27,43,107,0.07)"
                      : "transparent",
                    boxShadow: isActive ? "0 4px 14px rgba(27,43,107,0.25)" : "none",
                  }}
                >
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className={cn(
                        "w-9 h-9 rounded-full object-cover",
                        "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                        !isActive && "hover:scale-105",
                      )}
                      style={{
                        outline: isActive ? "2px solid rgba(255,255,255,0.3)" : "none",
                        outlineOffset: "2px",
                      }}
                    />
                  </div>

                  {/* Expanding name */}
                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                      showName ? "grid-cols-[1fr] opacity-100 ml-2" : "grid-cols-[0fr] opacity-0 ml-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <span
                        className={cn(
                          "text-sm font-semibold whitespace-nowrap block",
                          "transition-colors duration-300",
                        )}
                        style={{ color: isActive ? "#fff" : "var(--wsh-navy)" }}
                      >
                        {testimonial.author}
                      </span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
