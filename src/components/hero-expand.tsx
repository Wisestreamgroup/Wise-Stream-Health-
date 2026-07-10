'use client';

import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

export function HeroExpand() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      // Wide landscape: confident medical team — trust-building staffing image
      mediaSrc="https://images.unsplash.com/photo-1551601651-bc60f254d532?auto=format&fit=crop&w=1400&q=85"
      // Premium hospital corridor — professional, aspirational backdrop
      bgImageSrc="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1920&q=80"
      // First word flies left, rest flies right
      title="Where Opportunity Meets Excellence"
      // Eyebrow label above the card
      date="WiseStream Health"
      // Scroll cue below
      scrollToExpand="↓ Scroll to explore"
      textBlend={false}
    >
      {/* Shown after the card fully expands */}
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="text-xs font-bold tracking-[2.5px] uppercase mb-5"
          style={{ color: 'var(--wsh-sky)' }}
        >
          Nationwide Healthcare Staffing
        </p>
        <h2
          className="font-extrabold tracking-tight text-white mb-6"
          style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.1 }}
        >
          Connecting Exceptional Clinicians<br />
          with Facilities That Need Them
        </h2>
        <p
          className="text-[1.05rem] leading-relaxed mx-auto max-w-2xl"
          style={{ color: 'rgba(255,255,255,0.65)' }}
        >
          From CRNAs to Hospitalists — across every specialty, every state,
          with the speed and precision healthcare demands. Scroll down to learn more.
        </p>
      </div>
    </ScrollExpandMedia>
  );
}
