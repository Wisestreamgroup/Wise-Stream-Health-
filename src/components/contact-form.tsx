"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      render: (el: HTMLElement, opts: { sitekey: string }) => number;
      getResponse: (id?: number) => string;
      reset: (id?: number) => void;
    };
    onRecaptchaLoad?: () => void;
  }
}

// Google's official reCAPTCHA v2 TEST key — always passes, shows a "testing only" banner.
// Swap for a real site key from https://www.google.com/recaptcha/admin when the domain is live.
const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

export function ContactForm() {
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const renderCaptcha = () => {
      if (window.grecaptcha && captchaRef.current && widgetId.current === null) {
        widgetId.current = window.grecaptcha.render(captchaRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
        });
      }
    };

    if (window.grecaptcha) {
      renderCaptcha();
    } else {
      window.onRecaptchaLoad = renderCaptcha;
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const token = window.grecaptcha?.getResponse(widgetId.current ?? undefined);
    if (!token) {
      setError("Please check the “I'm not a robot” box before sending.");
      return;
    }

    const data = new FormData(e.currentTarget);
    const first = data.get("firstName") || "";
    const last = data.get("lastName") || "";
    const email = data.get("email") || "";
    const role = data.get("role") || "";
    const message = data.get("message") || "";

    const subject = encodeURIComponent(`Website inquiry from ${first} ${last}`);
    const body = encodeURIComponent(
      `Name: ${first} ${last}\nEmail: ${email}\nI am a: ${role}\n\n${message}`
    );
    window.location.href = `mailto:Doug.wise@wisestreamgroup.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--wsh-muted)" }}>First Name</label>
          <input name="firstName" required className="border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2" style={{ borderColor: "rgba(27,43,107,0.15)" }} placeholder="Jane" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--wsh-muted)" }}>Last Name</label>
          <input name="lastName" required className="border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2" style={{ borderColor: "rgba(27,43,107,0.15)" }} placeholder="Smith" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--wsh-muted)" }}>Email</label>
        <input name="email" type="email" required className="border rounded-lg px-4 py-3 text-sm outline-none" style={{ borderColor: "rgba(27,43,107,0.15)" }} placeholder="jane@example.com" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--wsh-muted)" }}>I am a…</label>
        <select name="role" className="border rounded-lg px-4 py-3 text-sm outline-none" style={{ borderColor: "rgba(27,43,107,0.15)", color: "var(--wsh-navy)" }}>
          <option value="">Select one</option>
          <option>Clinician seeking work</option>
          <option>Healthcare facility</option>
          <option>Recruiter / Partner</option>
          <option>Other</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--wsh-muted)" }}>Message</label>
        <textarea name="message" rows={5} className="border rounded-lg px-4 py-3 text-sm outline-none resize-none" style={{ borderColor: "rgba(27,43,107,0.15)" }} placeholder="Tell us how we can help…" />
      </div>

      {/* reCAPTCHA */}
      <div ref={captchaRef} />
      {error && (
        <p className="text-sm font-semibold" style={{ color: "var(--wsh-red)" }}>{error}</p>
      )}

      <button
        type="submit"
        className="w-full py-4 rounded-lg font-bold text-white text-sm transition-all hover:-translate-y-0.5"
        style={{ background: "var(--wsh-sky)" }}
      >
        Send Message
      </button>
    </form>
  );
}
