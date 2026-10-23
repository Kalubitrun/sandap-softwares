import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { ProductWindow } from "@/components/product-window";
import { Reveal } from "@/components/reveal";
import { solutions, type Solution } from "@/lib/data";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getSolution(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) return {};

  return {
    title: `${solution.name} — custom software`,
    description: solution.summary,
    alternates: { canonical: `/solutions/${solution.slug}` },
    openGraph: {
      title: `${solution.name} software — ${siteConfig.name}`,
      description: solution.summary,
      url: `/solutions/${solution.slug}`,
    },
  };
}

const ctaCopy: Record<string, { title: string; accent: string; description: string }> = {
  schools: {
    title: "Bring the school day",
    accent: "into one system.",
    description:
      "Tell us how your office, accounts, and teachers work today. We'll show you what a custom system could take off their plate.",
  },
  hospitals: {
    title: "Spend less time",
    accent: "on the paperwork.",
    description:
      "Walk us through your OPD, wards, and billing. We'll map where the time goes — and what a calmer system could look like.",
  },
  businesses: {
    title: "See your operations",
    accent: "clearly.",
    description:
      "Show us how an order moves through your business today. We'll identify where information stalls and what to build first.",
  },
};

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) notFound();

  const otherSolutions = solutions.filter((item) => item.slug !== solution.slug);
  const cta = ctaCopy[solution.slug];

  return (
    <>
      <section className="relative overflow-hidden pt-[8.5rem] pb-12 md:pt-[10.5rem] md:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 -top-48 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(180,85,43,0.12),transparent_65%)]"
        />

        <div className="shell relative">
          <Reveal>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <Link href="/" className="transition-colors hover:text-ink">
                Home
              </Link>
              <span className="text-line-strong">/</span>
              <span>Solutions</span>
              <span className="text-line-strong">/</span>
              <span className="text-ink">{solution.name}</span>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">
                  {solution.index} — {solution.label}
                </p>
                <h1 className="display mt-6 text-[clamp(2.8rem,6.4vw,5.6rem)] text-ink">
                  {solution.title} <em>{solution.titleAccent}</em>
                </h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-ink-soft">
                  {solution.intro}
                </p>
                <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
                  <Link href="/contact" className="btn btn-primary">
                    Discuss your {solution.name.toLowerCase()}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link href="/work" className="btn btn-ghost">
                    See concept work
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.14} className="lg:col-span-5">
              <div className="rounded-[1.25rem] border border-line bg-white/40 p-6 sm:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  At a glance
                </p>
                <dl className="mt-5 space-y-5">
                  <div>
                    <dt className="text-xs text-muted">Start with</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink">
                      A working session with the people who run the process
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">First release</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink">
                      The core workflow, live in weeks — not quarters
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Then</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink">
                      Weekly improvements, training, and long-term support
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Best fit</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {solution.fit}
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5">
                  {solution.modules.slice(0, 4).map((module) => (
                    <span key={module.name} className="tag">
                      {module.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="mt-14 md:mt-16">
            <ProductWindow initial={solution.mockup} />
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-line bg-paper-2/35">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow">The daily reality</p>
                <h2 className="display mt-4 text-[clamp(2.2rem,4.2vw,3.4rem)] text-ink">
                  Where the day <em>leaks</em> time.
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
                  None of this is anyone&apos;s fault. It is what happens when
                  important work is spread across registers, spreadsheets, and
                  message groups.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            {solution.problems.map((problem, index) => (
              <Reveal key={problem} delay={index * 0.05}>
                <div className="flex gap-5 border-t border-line py-6 last:border-b sm:gap-8">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-clay-light">
                    0{index + 1}
                  </span>
                  <p className="text-lg font-medium leading-snug tracking-[-0.02em] text-ink sm:text-xl">
                    {problem}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">What we build</p>
                <h2 className="display mt-4 max-w-2xl text-[clamp(2.2rem,4.6vw,3.8rem)] text-ink">
                  One system. <em>Every</em> handoff.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-ink-soft md:pb-2">
                Start with the modules that hurt most. Add the rest as the
                system settles into daily use.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-x-8 gap-y-0 md:grid-cols-2">
            {solution.modules.map((module, index) => (
              <Reveal key={module.name} delay={(index % 4) * 0.05}>
                <div className="group flex gap-5 border-t border-line py-5 transition-colors hover:border-line-strong">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-medium tracking-[-0.02em] text-ink transition-colors group-hover:text-clay">
                      {module.name}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-soft">
                      {module.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-ink text-paper">
        <div className="shell">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/55">
              A typical rollout
            </p>
            <h2 className="display mt-4 max-w-2xl text-[clamp(2.2rem,4.6vw,3.8rem)] text-paper">
              Careful by design. <em className="!text-[#e8b08e]">Fast</em> in practice.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {solution.rollout.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="border-t border-paper/15 pt-4">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-clay-light">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-medium tracking-[-0.02em] text-paper">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-paper/55">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-2 md:items-end">
              <div>
                <p className="eyebrow">Keep exploring</p>
                <h2 className="display mt-4 text-[clamp(2rem,4vw,3rem)] text-ink">
                  Built for other <em>teams</em> too.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 md:justify-self-end">
                {otherSolutions.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/solutions/${item.slug}`}
                    className="group flex items-center justify-between gap-6 rounded-xl border border-line bg-white/30 px-4 py-4 transition-colors hover:border-line-strong hover:bg-white/60"
                  >
                    <div>
                      <p className="text-sm font-medium text-ink">{item.name}</p>
                      <p className="mt-0.5 text-[11px] text-muted">{item.label}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-clay" />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title={cta.title} accent={cta.accent} description={cta.description} />
    </>
  );
}
