import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { ProductWindow } from "@/components/product-window";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectorVisual } from "@/components/sector-visual";
import { principles, processSteps, projects, solutions } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const marqueeItems = [
  "School ERP",
  "Hospital management",
  "Admissions",
  "Patient records",
  "Fees & billing",
  "Inventory",
  "Payroll",
  "Parent apps",
  "Field sales",
  "Dashboards",
  "Workflow automation",
];

function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee border-y border-line bg-paper-2/50 py-4">
      <div className="marquee-track items-center gap-8">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-8 text-[0.8rem] font-medium tracking-[-0.01em] text-ink-soft"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-clay/70" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[8.5rem] pb-14 md:pt-[10.5rem] md:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(180,85,43,0.13),transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-[7rem] hidden h-[30rem] w-[30rem] rounded-full border border-ink/[0.06] lg:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[14%] top-[11rem] hidden h-[20rem] w-[20rem] rounded-full border border-ink/[0.05] lg:block"
        />

        <div className="shell relative">
          <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10">
            <div className="lg:col-span-7 xl:col-span-8">
              <Reveal>
                <p className="eyebrow">
                  Independent software studio — {siteConfig.location}
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="display mt-6 text-[clamp(2.95rem,7.6vw,6.7rem)] text-ink">
                  <span className="block">Software built</span>
                  <span className="block">
                    around <em>your</em>
                  </span>
                  <span className="block">organisation.</span>
                </h1>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:pb-2 xl:col-span-4">
              <Reveal delay={0.18}>
                <p className="max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
                  Sandap Softwares designs and builds the systems that schools,
                  hospitals, and businesses rely on every day — admissions and
                  fees, patient records and billing, inventory and operations.
                  Custom from the first line.
                </p>
                <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                  <Link href="/contact" className="btn btn-primary">
                    Start a project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link href="/work" className="btn btn-ghost">
                    See what we build
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <p className="mt-5 inline-flex items-center gap-2 text-xs text-muted">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-clay" />
                  Taking on a small number of new projects for {siteConfig.year}
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.24} className="mt-12 md:mt-16">
            <ProductWindow />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 grid gap-4 border-t border-line pt-6 text-sm text-ink-soft sm:grid-cols-3 md:mt-16">
              <p className="flex items-center gap-2.5">
                <span className="h-1 w-1 rounded-full bg-clay" />
                Schools · Hospitals · Businesses
              </p>
              <p className="flex items-center gap-2.5">
                <span className="h-1 w-1 rounded-full bg-clay" />
                Custom-built, not configured
              </p>
              <p className="flex items-center gap-2.5">
                <span className="h-1 w-1 rounded-full bg-clay" />
                Design, build, and support under one roof
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      <section id="solutions" className="section">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">What we build</p>
                <h2 className="display mt-4 max-w-2xl text-[clamp(2.4rem,5vw,4.1rem)] text-ink">
                  Three sectors. <em>One</em> standard.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-ink-soft md:pb-2">
                No off-the-shelf licences. No forcing your team into someone
                else&apos;s workflow. Every system starts with how your
                organisation actually runs.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <Reveal key={solution.slug} delay={index * 0.08}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="group flex h-full flex-col rounded-[1.25rem] border border-line bg-white/25 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-line-strong hover:bg-white/55 hover:shadow-[0_30px_60px_-40px_rgba(20,18,15,0.35)] sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      {solution.index} / {solution.label}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay"
                      strokeWidth={1.6}
                    />
                  </div>

                  <h3 className="mt-5 text-[1.7rem] font-medium tracking-[-0.04em] text-ink">
                    {solution.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {solution.summary}
                  </p>

                  <div className="mt-5">
                    <SectorVisual kind={solution.mockup} />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {solution.modules.slice(0, 4).map((module) => (
                      <span key={module.name} className="tag">
                        {module.name}
                      </span>
                    ))}
                    <span className="tag">+{solution.modules.length - 4} more</span>
                  </div>

                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-ink transition-colors group-hover:text-clay">
                    Explore {solution.name.toLowerCase()}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-paper-2/35">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Selected builds</p>
                <h2 className="display mt-4 max-w-2xl text-[clamp(2.4rem,5vw,4.1rem)] text-ink">
                  Built to show what&apos;s <em>possible</em>.
                </h2>
              </div>
              <div className="max-w-sm md:text-right">
                <p className="text-sm leading-relaxed text-ink-soft">
                  Three concept systems, designed and coded by Sandap to
                  demonstrate how we think about schools, hospitals, and
                  business operations.
                </p>
                <Link
                  href="/work"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-clay"
                >
                  View all work
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <p className="mt-10 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            Concept work — not client engagements. Client case studies available
            on request.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">How we work</p>
                <h2 className="display mt-4 max-w-2xl text-[clamp(2.4rem,5vw,4.1rem)] text-ink">
                  A short path from <em>problem</em> to production.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-ink-soft md:pb-2">
                No black boxes and no six-month silence. You see the system
                taking shape from the first week.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06}>
                <div className="group relative border-t border-line-strong pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-clay">
                      {step.number}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-line-strong transition-colors group-hover:bg-clay" />
                  </div>
                  <h3 className="mt-5 text-lg font-medium tracking-[-0.02em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-ink-soft">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-paper-2/35">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Why Sandap</p>
                <h2 className="display mt-4 max-w-2xl text-[clamp(2.4rem,5vw,4.1rem)] text-ink">
                  Small studio. <em>Serious</em> software.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-ink-soft md:pb-2">
                We keep the team small so the people who understand your problem
                are the same people building and supporting the answer.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Reveal className="md:col-span-2">
              <div className="relative h-full overflow-hidden rounded-[1.25rem] bg-ink p-7 text-paper sm:p-9">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-paper/10"
                />
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/55">
                  01 — Principles
                </p>
                <h3 className="mt-5 max-w-md text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
                  {principles[0].title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-paper/60">
                  {principles[0].desc}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-paper/15 px-3 py-1.5 text-[10px] text-paper/60">
                    Your workflow
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-clay" />
                  <span className="rounded-full bg-paper px-3 py-1.5 text-[10px] font-medium text-ink">
                    The system
                  </span>
                  <span className="rounded-full border border-paper/15 px-3 py-1.5 text-[10px] text-paper/60">
                    Not the reverse
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="flex h-full flex-col rounded-[1.25rem] border border-line bg-white/45 p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  02 — Team
                </p>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.035em] text-ink">
                  {principles[1].title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {principles[1].desc}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-8">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[10px] font-semibold text-paper">
                    D
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-clay text-[10px] font-semibold text-paper">
                    B
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pine text-[10px] font-semibold text-paper">
                    S
                  </span>
                  <span className="ml-1 text-[10px] text-muted">Design · Build · Support</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-[1.25rem] border border-line bg-clay-soft/70 p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-clay-deep/60">
                  03 — Ownership
                </p>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.035em] text-ink">
                  {principles[2].title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {principles[2].desc}
                </p>
                <div className="mt-auto pt-8">
                  <code className="block rounded-lg border border-ink/10 bg-paper/50 px-3 py-2 font-mono text-[10px] text-ink-soft">
                    your data · your code · your call
                  </code>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="flex h-full flex-col rounded-[1.25rem] border border-line bg-white/45 p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  04 — Support
                </p>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.035em] text-ink">
                  {principles[3].title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {principles[3].desc}
                </p>
                <div className="mt-auto space-y-1.5 pt-8">
                  <p className="w-fit max-w-[90%] rounded-lg rounded-bl-sm bg-paper-2 px-3 py-1.5 text-[10px] text-ink-soft">
                    Fee receipt isn&apos;t printing.
                  </p>
                  <p className="ml-auto w-fit max-w-[90%] rounded-lg rounded-br-sm bg-ink px-3 py-1.5 text-[10px] text-paper">
                    Fixed and deployed. Try now.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="flex h-full flex-col rounded-[1.25rem] border border-line bg-white/45 p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  05 — Reality
                </p>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.035em] text-ink">
                  {principles[4].title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {principles[4].desc}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-8">
                  {["Shared devices", "Patchy networks", "Busy front desks"].map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="eyebrow justify-center">Our belief</p>
              <blockquote className="mt-7 font-serif text-[clamp(2.1rem,5vw,3.9rem)] italic leading-[1.04] tracking-[-0.03em] text-ink">
                “We don&apos;t sell licences. We build the thing your team{" "}
                <span className="text-clay">actually needs</span>.”
              </blockquote>
              <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                The Sandap way
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
