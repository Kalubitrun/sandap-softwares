import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { principles } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — an independent software studio in India",
  description:
    "Sandap Softwares is an independent studio building custom systems for schools, hospitals, and businesses across India.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[8.5rem] pb-14 md:pt-[10.5rem] md:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(180,85,43,0.12),transparent_65%)]"
        />
        <div className="shell relative">
          <Reveal>
            <p className="eyebrow">About the studio</p>
          </Reveal>
          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <Reveal className="lg:col-span-8">
              <h1 className="display text-[clamp(2.9rem,7.2vw,6.2rem)] text-ink">
                Small studio.
                <br />
                <em>Serious</em> software.
              </h1>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-4 lg:pb-2">
              <p className="max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
                Sandap Softwares is an independent software studio based in India.
                We work with schools, hospitals, and businesses that have
                outgrown spreadsheets — but don&apos;t want to bend their
                operations around generic software.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-xs text-muted">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-clay" />
                {siteConfig.availability} · {siteConfig.year}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="mt-14 md:mt-20">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-paper-2/60 px-6 py-12 sm:px-10 md:rounded-[2rem] md:px-14 md:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -right-10 select-none font-serif text-[16rem] italic leading-none text-ink/[0.04] sm:text-[22rem]"
              >
                S
              </div>
              <p className="relative max-w-4xl font-serif text-[clamp(1.8rem,4.2vw,3.2rem)] italic leading-[1.1] tracking-[-0.03em] text-ink">
                “The best system is the one built for the people using it — not
                the one that asks them to change how they work.”
              </p>
              <p className="relative mt-7 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Why Sandap exists
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow">The story</p>
                <h2 className="display mt-4 text-[clamp(2.2rem,4.4vw,3.6rem)] text-ink">
                  Built from the <em>inside</em> out.
                </h2>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <div className="space-y-5 text-[0.98rem] leading-relaxed text-ink-soft">
                <p>
                  Sandap started with a simple observation: the organisations
                  that keep India running — schools, hospitals, growing
                  businesses — are often the ones least served by software.
                  Generic products arrive with fields to rename and processes to
                  abandon. The team adapts to the tool, instead of the tool
                  adapting to the team.
                </p>
                <p>
                  We wanted to build the other way around. Start with the people
                  at the front desk, in the ward, on the shop floor. Understand
                  the handoffs, the exceptions, and the workarounds nobody wrote
                  down. Then design a system that fits that reality.
                </p>
                <p>
                  That approach takes more care than installing a template. It
                  also produces something far more useful: software that people
                  actually use, long after the launch meeting.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    Based in
                  </p>
                  <p className="mt-2 text-sm text-ink">{siteConfig.location}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    Model
                  </p>
                  <p className="mt-2 text-sm text-ink">Independent studio</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    Focus
                  </p>
                  <p className="mt-2 text-sm text-ink">
                    Schools · Hospitals · Businesses
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-paper-2/35">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">What we believe</p>
                <h2 className="display mt-4 max-w-2xl text-[clamp(2.2rem,4.6vw,3.8rem)] text-ink">
                  A few things we <em>won&apos;t</em> compromise on.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-ink-soft md:pb-2">
                These aren&apos;t posters on a wall. They shape how we scope,
                build, and support every system we take on.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.slice(0, 3).map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.07}>
                <div className="flex h-full flex-col rounded-[1.25rem] border border-line bg-white/45 p-7">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-clay">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 text-2xl font-medium tracking-[-0.035em] text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {principle.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {principles.slice(3).map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.07}>
                <div className="flex h-full items-start gap-5 rounded-[1.25rem] border border-line bg-white/25 p-6">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line font-mono text-[9px] text-muted">
                    0{index + 4}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium tracking-[-0.02em] text-ink">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow">Working together</p>
                <h2 className="display mt-4 text-[clamp(2.2rem,4.4vw,3.6rem)] text-ink">
                  Direct, honest, and <em>close</em>.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-soft">
                  We keep the studio small on purpose. The people you meet at the
                  start are the people designing, building, and supporting your
                  system.
                </p>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-clay"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            {[
              {
                title: "You talk to the builders",
                desc: "No account manager relaying messages. Questions go to the people who can answer them and make the change.",
              },
              {
                title: "You see progress every week",
                desc: "Working screens, not status decks. Feedback happens while the system is taking shape, not after it is finished.",
              },
              {
                title: "You get a straight answer",
                desc: "If custom software is not the right investment, we will say so. If a smaller scope will do, we will recommend it.",
              },
              {
                title: "You keep what we build",
                desc: "Your data, your code, your hosting. We are happy to document everything and hand over the keys.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="flex gap-5 border-t border-line py-6 last:border-b sm:gap-8">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-clay">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.025em] text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-paper-2/60 px-6 py-12 sm:px-10 md:rounded-[2rem] md:px-14 md:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(180,85,43,0.12),transparent_65%)]"
              />
              <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    Currently
                  </p>
                  <h2 className="display mt-4 max-w-xl text-[clamp(2rem,4vw,3.2rem)] text-ink">
                    Building concept systems and taking on a{" "}
                    <em>few</em> new projects.
                  </h2>
                </div>
                <div className="md:col-span-5">
                  <ul className="space-y-3 text-sm text-ink-soft">
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-clay" />
                      School and hospital concept builds in progress
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-clay" />
                      Working with teams across India, remotely
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-clay" />
                      New projects starting in {siteConfig.year}
                    </li>
                  </ul>
                  <Link href="/contact" className="btn btn-primary mt-7">
                    Start a project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Let's talk about"
        accent="your organisation."
        description="Tell us what's slowing your team down. We'll listen first, then tell you honestly what we would build and what it would take."
      />

      <div className="sr-only">
        <p>
          {siteConfig.name} — custom software for schools, hospitals, and
          businesses in {siteConfig.location}.
        </p>
      </div>
    </>
  );
}
