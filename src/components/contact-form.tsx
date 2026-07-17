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

// Google's official reCAPTCHA v2 TEST key. Swap for a real site key from
// https://www.google.com/recaptcha/admin when the domain is live.
const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

// Formspree endpoint. Replace YOUR_FORM_ID with the id from your Formspree
// dashboard (the /f/xxxxxxxx part of the form endpoint URL).
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgnyzlk";

export function ContactForm() {
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const token = window.grecaptcha?.getResponse(widgetId.current ?? undefined);
    if (!token) {
      setError("Please check the “I'm not a robot” box before sending.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        window.grecaptcha?.reset(widgetId.current ?? undefined);
      } else {
        setStatus("idle");
        setError("Something went wrong sending your message. Please try again or email us directly.");
      }
    } catch {
      setStatus("idle");
      setError("Something went wrong sending your message. Please try again or email us directly.");
    }
  }

  if (status === "sent") {
    return (
      <div className="py-12 text-center">
        <p className="font-bold text-lg mb-2" style={{ color: "var(--wsh-navy)" }}>Message sent.</p>
        <p className="text-sm" style={{ color: "var(--wsh-muted)" }}>
          Thanks for reaching out. We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      {/* Honeypot: invisible to humans, bots fill it and get rejected */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }}
        aria-hidden="true"
      />
      <input type="hidden" name="_subject" value="New inquiry from wisestreamhealth.com" />

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
        disabled={status === "sending"}
        className="w-full py-4 rounded-lg font-bold text-white text-sm transition-all hover:-translate-y-0.5"
        style={{ background: "var(--wsh-sky)", opacity: status === "sending" ? 0.7 : 1 }}
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
