"use client";
import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  motion,
  MotionValue,
} from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // start animating the moment the section enters view,
    // finish before it fully leaves — tighter window = more drama
    offset: ["start 0.9", "end 0.15"],
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ── Raw transforms ──────────────────────────────────────────────────────────
  // Rotation: starts tilted back, eases flat over first 80% of scroll
  const rotateRaw = useTransform(scrollYProgress, [0, 0.8], [32, 0]);

  // Scale: slightly overshoots 1 at start to give a "coming at you" feel
  const scaleRaw = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0.65, 0.92] : [1.1, 1]
  );

  // Header translates upward as card reveals
  const translateRaw = useTransform(scrollYProgress, [0, 1], [0, -90]);

  // Card fades in from slightly transparent so it "materialises"
  const opacityRaw = useTransform(scrollYProgress, [0, 0.25], [0.55, 1]);

  // Subtle Y-axis twist for extra 3D dimensionality
  const rotateYRaw = useTransform(scrollYProgress, [0, 0.5], [-4, 0]);

  // ── Spring physics ──────────────────────────────────────────────────────────
  // stiffness: how snappy  |  damping: how much it resists oscillation
  // Lower stiffness + moderate damping = heavy, luxurious feel
  const springConfig = { stiffness: 70, damping: 22, restDelta: 0.001 };

  const rotate   = useSpring(rotateRaw,   springConfig);
  const scale    = useSpring(scaleRaw,    springConfig);
  const translate = useSpring(translateRaw, springConfig);
  const opacity  = useSpring(opacityRaw,  { stiffness: 70, damping: 18 });
  const rotateY  = useSpring(rotateYRaw,  springConfig);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{ perspective: "1400px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          rotateY={rotateY}
          translate={translate}
          scale={scale}
          opacity={opacity}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mx-auto text-center mb-10"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  rotateY,
  scale,
  opacity,
  children,
}: {
  rotate: MotionValue<number>;
  rotateY: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  opacity: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        rotateY: rotateY,
        scale,
        opacity,
        // Shadow deepens when tilted, lightens when flat — gives depth cue
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
        transformOrigin: "center bottom",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
};
