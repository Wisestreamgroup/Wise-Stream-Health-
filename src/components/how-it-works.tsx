const steps = [
  { n: 1, title: "Connect With Us"    },
  { n: 2, title: "We Find the Match"  },
  { n: 3, title: "You Show Up Ready"  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-[5%] relative overflow-hidden"
      style={{ background: "var(--wsh-navy)" }}
    >
      <svg className="absolute right-[-5%] top-[-10%] w-[50%] opacity-[0.05] pointer-events-none" viewBox="0 0 600 700" fill="none" aria-hidden>
        <path d="M450 0 C350 150, 200 200, 150 400 C100 580, 250 650, 350 700 L600 700 L600 0 Z" fill="#5BBDE8" />
      </svg>

      <div className="text-center mb-16 relative z-10">
        <p className="text-xs font-bold tracking-[3px] uppercase mb-3" style={{ color: "var(--wsh-sky-l, #A8DDEF)" }}>The WiseStream Method</p>
        <h2 className="font-bold tracking-tight text-white" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)" }}>Simple. Fast. Supported.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto relative z-10">
        {steps.map((s) => (
          <div
            key={s.n}
            className="text-center px-7 py-10 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(91,189,232,0.15)" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-extrabold text-white mx-auto mb-5"
              style={{ background: "var(--wsh-sky)" }}
            >
              {s.n}
            </div>
            <h4 className="text-white font-bold text-[1rem]">{s.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
