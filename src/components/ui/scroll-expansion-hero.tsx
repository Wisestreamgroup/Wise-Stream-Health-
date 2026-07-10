'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import Image from 'next/image';
import { motion, useSpring, useTransform } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'image',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  // ── Logical scroll progress (0 → 1) ──────────────────────────────────────
  const [scrollProgress, setScrollProgress]         = useState(0);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [showContent, setShowContent]               = useState(false);
  const [touchStartY, setTouchStartY]               = useState(0);
  const [isMobile, setIsMobile]                     = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  // Reset on mediaType change
  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  // ── Spring — all visuals run through this, not raw state ─────────────────
  // Low stiffness + tuned damping = heavy, cinematic feel
  const smooth = useSpring(scrollProgress, {
    stiffness: 72,
    damping:   20,
    restDelta: 0.0005,
  });

  // Derived animated values — zero React re-renders on scroll
  const bgOpacity      = useTransform(smooth, [0, 1], [1,    0   ]);
  const overlayOpacity = useTransform(smooth, [0, 1], [0.52, 0.06]);
  const cardWidth      = useTransform(smooth, [0, 1], [300,  isMobile ? 960  : 1560]);
  const cardHeight     = useTransform(smooth, [0, 1], [400,  isMobile ? 600  : 800 ]);
  const cardShadow     = useTransform(
    smooth,
    [0, 1],
    ['0px 30px 80px rgba(0,0,0,0.7)', '0px 60px 120px rgba(0,0,0,0.4)']
  );

  // Text flies apart in opposite directions (vw-based so it scales with viewport)
  const shiftFactor  = isMobile ? 160 : 140;
  const leftTransform  = useTransform(smooth, (v) => `translateX(${-v * shiftFactor}vw)`);
  const rightTransform = useTransform(smooth, (v) => `translateX(${v  * shiftFactor}vw)`);

  // Eyebrow & cue also drift
  const eyebrowShift = useTransform(smooth, (v) => `translateX(${-v * 60}vw)`);
  const cueShift     = useTransform(smooth, (v) => `translateX(${v  * 60}vw)`);

  // ── Scroll / touch handlers ───────────────────────────────────────────────
  useEffect(() => {
    const handleWheel = (e: Event) => {
      const we = e as WheelEvent;
      if (mediaFullyExpanded && we.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        we.preventDefault();
        return;
      }
      if (!mediaFullyExpanded) {
        we.preventDefault();
        setScrollProgress((prev) => {
          const next = Math.min(Math.max(prev + we.deltaY * 0.0008, 0), 1);
          if (next >= 1)    { setMediaFullyExpanded(true); setShowContent(true); }
          else if (next < 0.72) { setShowContent(false); }
          return next;
        });
      }
    };

    const handleTouchStart = (e: Event) => {
      setTouchStartY((e as TouchEvent).touches[0].clientY);
    };

    const handleTouchMove = (e: Event) => {
      const te = e as TouchEvent;
      if (!touchStartY) return;
      const deltaY = touchStartY - te.touches[0].clientY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        te.preventDefault();
        return;
      }
      if (!mediaFullyExpanded) {
        te.preventDefault();
        const factor = deltaY < 0 ? 0.007 : 0.005;
        setScrollProgress((prev) => {
          const next = Math.min(Math.max(prev + deltaY * factor, 0), 1);
          if (next >= 1)    { setMediaFullyExpanded(true); setShowContent(true); }
          else if (next < 0.72) { setShowContent(false); }
          return next;
        });
        setTouchStartY(te.touches[0].clientY);
      }
    };

    const handleTouchEnd  = () => setTouchStartY(0);
    const handleScroll    = () => { if (!mediaFullyExpanded) window.scrollTo(0, 0); };

    window.addEventListener('wheel',      handleWheel,      { passive: false });
    window.addEventListener('scroll',     handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove',  handleTouchMove,  { passive: false });
    window.addEventListener('touchend',   handleTouchEnd);

    return () => {
      window.removeEventListener('wheel',      handleWheel);
      window.removeEventListener('scroll',     handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove',  handleTouchMove);
      window.removeEventListener('touchend',   handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const firstWord   = title?.split(' ')[0]         ?? '';
  const restOfTitle = title?.split(' ').slice(1).join(' ') ?? '';

  return (
    <div ref={sectionRef} className="overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">

          {/* ── Full-screen background ── fades as card expands ─────────── */}
          <motion.div
            className="absolute inset-0 z-0 h-full"
            style={{ opacity: bgOpacity }}
          >
            <Image
              src={bgImageSrc}
              alt="Background"
              width={1920}
              height={1080}
              className="w-screen h-screen object-cover object-center"
              priority
            />
            {/* Dark vignette overlay */}
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, rgba(17,29,74,0.55) 0%, rgba(0,0,0,0.65) 100%)' }}
            />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

              {/* ── Expanding card ──────────────────────────────────────── */}
              <motion.div
                className="absolute top-1/2 left-1/2 rounded-2xl overflow-hidden"
                style={{
                  width:     cardWidth,
                  height:    cardHeight,
                  maxWidth:  '95vw',
                  maxHeight: '85vh',
                  x:         '-50%',
                  y:         '-50%',
                  boxShadow: cardShadow,
                }}
              >
                {mediaType === 'video' ? (
                  <div className="relative w-full h-full">
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay muted loop playsInline
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        opacity: overlayOpacity,
                        background: 'linear-gradient(135deg, rgba(17,29,74,0.7) 0%, rgba(0,0,0,0.5) 100%)',
                      }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={mediaSrc}
                      alt={title ?? 'Hero image'}
                      width={1400}
                      height={800}
                      className="w-full h-full object-cover object-center"
                      priority
                    />
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        opacity: overlayOpacity,
                        background: 'linear-gradient(135deg, rgba(17,29,74,0.65) 0%, rgba(0,0,0,0.45) 100%)',
                      }}
                    />
                  </div>
                )}

                {/* Eyebrow + scroll cue sit inside the card bottom area */}
                <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-1 z-10">
                  {date && (
                    <motion.p
                      className="text-xs font-bold tracking-[2.5px] uppercase"
                      style={{
                        color: 'var(--wsh-sky-l, #A8DDEF)',
                        transform: eyebrowShift,
                      }}
                    >
                      {date}
                    </motion.p>
                  )}
                  {scrollToExpand && (
                    <motion.p
                      className="text-[0.7rem] font-semibold tracking-widest uppercase"
                      style={{
                        color: 'rgba(255,255,255,0.45)',
                        transform: cueShift,
                      }}
                    >
                      {scrollToExpand}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              {/* ── Split headline — flies apart as card expands ─────────── */}
              <div
                className={`flex flex-col items-center justify-center gap-2 w-full relative z-10 pointer-events-none ${
                  textBlend ? 'mix-blend-difference' : ''
                }`}
              >
                <motion.h1
                  className="font-extrabold tracking-tight leading-none"
                  style={{
                    fontSize: 'clamp(2.6rem, 5.5vw, 5rem)',
                    color: '#ffffff',
                    transform: leftTransform,
                    textShadow: '0 2px 20px rgba(0,0,0,0.4)',
                  }}
                >
                  {firstWord}
                </motion.h1>
                <motion.h1
                  className="font-extrabold tracking-tight leading-none text-center"
                  style={{
                    fontSize: 'clamp(2.6rem, 5.5vw, 5rem)',
                    color: 'var(--wsh-sky, #5BBDE8)',
                    transform: rightTransform,
                    textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                  }}
                >
                  {restOfTitle}
                </motion.h1>
              </div>

            </div>

            {/* ── Content revealed after full expansion ─────────────────── */}
            <motion.section
              className="flex flex-col w-full px-8 py-16 md:px-16 lg:py-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
