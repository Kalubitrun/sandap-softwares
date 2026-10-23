"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

type FormState = "idle" | "sending" | "sent" | "fallback" | "error";

const interests = [
  "A school system",
  "A hospital system",
  "A business system",
  "Something else",
];

function buildMailto(data: Record<string, string>) {
  const subject = encodeURIComponent(
    `Project enquiry — ${data.organisation || data.name || "New enquiry"}`,
  );
  const body = encodeURIComponent(
    [
      `Name: ${data.name}`,
      `Organisation: ${data.organisation}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "—"}`,
      `Interested in: ${data.interest}`,
      "",
      data.message,
    ].join("\n"),
  );
  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [key, String(value)]),
    );

    if (data.website) return;

    setState("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        setState("sent");
        return;
      }

      if (response.status === 503) {
        window.location.href = buildMailto(data);
        setState("fallback");
        return;
      }

      const payload = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;
      throw new Error(payload?.error || "Something went wrong.");
    } catch (submissionError) {
      if (process.env.NODE_ENV !== "production") {
        console.error(submissionError);
      }
      window.location.href = buildMailto(data);
      setState("fallback");
    }
  }

  if (state === "sent") {
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center rounded-[1.25rem] border border-line bg-white/45 p-8 sm:p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pine text-paper">
          <Check className="h-5 w-5" strokeWidth={2} />
        </span>
        <h2 className="mt-6 text-2xl font-medium tracking-[-0.03em] text-ink">
          Message received.
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
          Thank you for reaching out. We&apos;ll read your note carefully and
          reply within one working day.
        </p>
        <p className="mt-6 text-sm text-muted">
          In a hurry? Email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="link-line font-medium text-ink"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-[0.95rem] text-ink placeholder:text-muted/60 outline-none transition-colors focus:border-clay";
  const labelClass =
    "font-mono text-[9px] uppercase tracking-[0.16em] text-muted";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.25rem] border border-line bg-white/40 p-6 sm:p-8 md:p-10"
    >
      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name *
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Asha Sharma"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="organisation" className={labelClass}>
            Organisation *
          </label>
          <input
            id="organisation"
            name="organisation"
            required
            autoComplete="organization"
            placeholder="School, hospital, or company"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@organisation.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="interest" className={labelClass}>
            I&apos;m interested in
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue={interests[0]}
            className={`${inputClass} cursor-pointer`}
          >
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            What&apos;s slowing you down? *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="A few lines about your team, your current tools, and what you wish worked better."
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[11px] leading-relaxed text-muted">
          We&apos;ll only use these details to reply. No lists, no spam.
        </p>
        <button
          type="submit"
          disabled={state === "sending"}
          className="btn btn-primary shrink-0 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "sending" ? (
            <>
              Sending
              <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              Send enquiry
              <ArrowUpRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      {state === "fallback" && (
        <p className="mt-4 rounded-lg border border-clay/20 bg-clay-soft/40 px-4 py-3 text-xs leading-relaxed text-ink-soft">
          Your email app should have opened with your message. If it didn&apos;t,
          write to{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-ink underline">
            {siteConfig.email}
          </a>{" "}
          or call {siteConfig.phone}.
        </p>
      )}

      {error && (
        <p className="mt-4 text-xs text-clay-deep" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
