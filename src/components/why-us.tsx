import { Zap, ShieldCheck, Users, Globe } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const reasons: { icon: LucideIcon; title: string }[] = [
  { icon: Zap,        title: "Fast Turnaround"    },
  { icon: ShieldCheck,title: "Fully Credentialed" },
  { icon: Users,      title: "Dedicated Support"  },
  { icon: Globe,      title: "Nationwide"          },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-[5%]" style={{ background: "var(--wsh-gray)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-[2.5px] uppercase mb-3" style={{ color: "var(--wsh-sky)" }}>Why WiseStream Health</p>
          <h2 className="font-bold tracking-tight" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", color: "var(--wsh-navy)" }}>
            Built for Healthcare.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="bg-white rounded-2xl p-6 flex gap-4 items-center"
                style={{ border: "1px solid rgba(27,43,107,0.07)", boxShadow: "0 2px 16px rgba(27,43,107,0.04)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(91,189,232,0.12)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "var(--wsh-sky)" }} />
                </div>
                <h4 className="font-bold text-[1rem]" style={{ color: "var(--wsh-navy)" }}>{r.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
