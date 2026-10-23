import type { Metadata } from "next";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — start a project with Sandap Softwares",
  description:
    "Tell Sandap Softwares what's slowing your organisation down. We build custom systems for schools, hospitals, and businesses across India.",
  alternates: { canonical: "/contact" },
};

const steps = [
  {
    number: "01",
    title: "We reply",
    desc: "A real person reads your note and replies within one working day.",
  },
  {
    number: "02",
    title: "We talk",
    desc: "A short, honest conversation about your workflow and what you need.",
  },
  {
    number: "03",
    title: "You get clarity",
    desc: "A clear scope, timeline, and price — or an honest recommendation to do something else.",
  },
];

const faqs = [
  {
    q: "How long does a custom system take?",
    a: "The first usable release usually takes weeks, not quarters. We scope tightly, ship the core workflow first, and add modules as the system settles into daily use. You will see working screens every week.",
  },
  {
    q: "What does it cost?",
    a: "Every system is scoped and priced individually, based on the workflows involved. There are no per-seat licences or surprise renewals. After an initial conversation, you get a written scope and a fixed price for the first phase.",
  },
  {
    q: "Do we own the software and our data?",
    a: "Yes. Your data, your code, and your hosting. We set things up so you are never locked in, and we document the system for a clean handover if you ever need one.",
  },
  {
    q: "Can you work with our existing system?",
    a: "Often, yes. We can audit what you have, improve the parts that work, and replace the parts that don't. We will tell you honestly if starting fresh is the better investment.",
  },
  {
    q: "Do you only work in India?",
    a: "We are based in India and work remotely with teams across the country. For larger rollouts, we can be on site for discovery, training, and launch.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[8.5rem] pb-12 md:pt-[10.5rem] md:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(180,85,43,0.13),transparent_65%)]"
        />
        <div className="shell relative">
          <Reveal>
            <p className="eyebrow">Start a project</p>
          </Reveal>
          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-8">
              <h1 className="display text-[clamp(2.9rem,7.2vw,6.2rem)] text-ink">
                Let&apos;s build something
                <br />
                that <em>fits</em>.
              </h1>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-4 lg:pb-2">
              <p className="max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
                Tell us a little about your organisation and what&apos;s slowing
                you down. We&apos;ll reply within one working day — with
                questions, not a sales pitch.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-xs text-muted">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-clay" />
                {siteConfig.availability} · {siteConfig.year}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal delay={0.08}>
              <div className="rounded-[1.25rem] border border-line bg-paper-2/40 p-6 sm:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  What happens next
                </p>
                <div className="mt-5 space-y-5">
                  {steps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <span className="font-mono text-[10px] tracking-[0.14em] text-clay">
                        {step.number}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-ink">{step.title}</p>
                        <p className="mt-1 text-[0.82rem] leading-relaxed text-ink-soft">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-4 rounded-[1.25rem] border border-line bg-white/35 p-6 sm:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Prefer to write directly?
                </p>
                <div className="mt-5 space-y-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-center justify-between gap-4 border-b border-line pb-4"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper/70 text-ink-soft">
                        <Mail className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                      <span>
                        <span className="block text-[10px] uppercase tracking-[0.12em] text-muted">
                          Email
                        </span>
                        <span className="mt-0.5 block text-sm text-ink">
                          {siteConfig.email}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-clay" />
                  </a>

                  <a
                    href={siteConfig.phoneHref}
                    className="group flex items-center justify-between gap-4 border-b border-line pb-4"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper/70 text-ink-soft">
                        <Phone className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                      <span>
                        <span className="block text-[10px] uppercase tracking-[0.12em] text-muted">
                          Phone
                        </span>
                        <span className="mt-0.5 block text-sm text-ink">
                          {siteConfig.phone}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-clay" />
                  </a>

                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper/70 text-ink-soft">
                      <MapPin className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.12em] text-muted">
                        Based in
                      </span>
                      <span className="mt-0.5 block text-sm text-ink">
                        {siteConfig.location} · working remotely
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-2 rounded-lg bg-paper-2/60 px-3 py-2.5">
                  <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-clay" />
                  <p className="text-[11px] leading-relaxed text-ink-soft">
                    We usually reply within one working day, Monday to Saturday.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-paper-2/35">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow">Good to know</p>
                <h2 className="display mt-4 text-[clamp(2.2rem,4.4vw,3.6rem)] text-ink">
                  Questions, <em>answered</em>.
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
                  A few things people usually ask before the first
                  conversation. If yours isn&apos;t here, ask us directly.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              {faqs.map((faq, index) => (
                <Reveal key={faq.q} delay={index * 0.04}>
                  <details className="group border-t border-line py-5 last:border-b">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium tracking-[-0.02em] text-ink marker:hidden">
                      {faq.q}
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-2xl pr-8 text-sm leading-relaxed text-ink-soft">
                      {faq.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
