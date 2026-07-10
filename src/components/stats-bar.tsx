"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 25,  suffix: "+",  label: "Years of Expertise"       },
  { num: 500, suffix: "+",  label: "Clinicians Placed"        },
  { num: 12,  suffix: "+",  label: "Clinical Specialties"     },
  { num: 48,  suffix: "hr", label: "Average Placement Time"   },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1200;
        const step = 16;
        const inc = target / (dur / step);
        let cur = 0;
        const timer = setInterval(() => {
          cur += inc;
          if (cur >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(cur));
        }, step);
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-extrabold leading-none tracking-tight" style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "#fff" }}>
      {count}<span style={{ color: "var(--wsh-sky)" }}>{suffix}</span>
    </span>
  );
}

export function StatsBar() {
  return (
    <div style={{ background: "var(--wsh-navy)" }}>
      {/* Inner row with subtle top separator and side padding */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 mx-auto px-[5%]"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="flex flex-col items-center py-10 px-6 text-center"
            style={{
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
            }}
          >
            <Counter target={s.num} suffix={s.suffix} />
            <p className="text-sm mt-2.5 font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
