"use client";
import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

interface SmoothScrollHeroProps {
  /** Extra scroll distance (px) before the image is fully expanded */
  scrollHeight?: number;
  /** Desktop background image URL */
  desktopImage: string;
  /** Mobile background image URL */
  mobileImage: string;
  /** Starting clip-path inset % (how small the card starts) */
  initialClipPercentage?: number;
  /** Ending clip-path inset % (should be > 50 so it reaches edges) */
  finalClipPercentage?: number;
  /** Optional content to render centred over the image */
  children?: React.ReactNode;
}

/**
 * Scroll-driven clip-path image reveal.
 * Uses a container ref so the animation is relative to THIS element,
 * not the absolute top of the page — meaning it works anywhere mid-page.
 */
const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1400,
  desktopImage,
  mobileImage,
  initialClipPercentage = 22,
  finalClipPercentage = 78,
  children,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Track progress relative to THIS container, not the whole page
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Clip-path corners shrink inward at start, fully open at end
  const clipStart = useTransform(
    scrollYProgress,
    [0, 1],
    [initialClipPercentage, 0]
  );
  const clipEnd = useTransform(
    scrollYProgress,
    [0, 1],
    [finalClipPercentage, 100]
  );
  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  // Image zooms out as it expands — parallax feel
  const backgroundSize = useTransform(
    scrollYProgress,
    [0, 1],
    ["170%", "100%"]
  );

  // Children fade in during the second half of the reveal
  const childOpacity = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);
  const childY       = useTransform(scrollYProgress, [0.5, 0.85], [28, 0]);

  return (
    <div
      ref={containerRef}
      style={{ height: `calc(${scrollHeight}px + 100vh)` }}
      className="relative w-full"
    >
      {/* Sticky expanding image */}
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden bg-[#080f1c]"
        style={{ clipPath, willChange: "clip-path" }}
      >
        {/* Mobile */}
        <motion.div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${mobileImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Desktop */}
        <motion.div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url(${desktopImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dark vignette so overlay text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,15,28,0.75) 0%, rgba(8,15,28,0.2) 50%, transparent 100%)",
          }}
        />

        {/* Overlay content — fades in once image is large enough */}
        {children && (
          <motion.div
            className="absolute inset-0 flex items-end justify-center pb-14 md:pb-20 px-6"
            style={{ opacity: childOpacity, y: childY }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SmoothScrollHero;
