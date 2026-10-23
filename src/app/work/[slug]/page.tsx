import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { ProjectCover } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects, type Project } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.name} — ${project.sector} concept`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} — ${project.sector} concept by Sandap`,
      description: project.summary,
      url: `/work/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="relative overflow-hidden pt-[8.5rem] pb-10 md:pt-[10rem]">
        <div className="shell relative">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All work
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="tag">Concept build</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {project.index} / {project.sector} / {project.year}
                  </span>
                </div>
                <h1 className="display mt-6 text-[clamp(3.4rem,9vw,7.4rem)] text-ink">
                  {project.name}
                </h1>
                <p className="mt-4 text-xl tracking-[-0.03em] text-ink md:text-2xl">
                  {project.tagline}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:col-span-5 lg:pt-10">
              <p className="text-[0.98rem] leading-relaxed text-ink-soft">
                {project.summary}
              </p>
              <div className="mt-7 flex flex-wrap gap-1.5">
                {project.scope.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-clay"
              >
                Discuss a similar system
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="mt-12 md:mt-16">
            <ProjectCover
              project={project}
              aspectClass="aspect-[16/10] md:aspect-[16/8]"
            />
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow">The brief</p>
                <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)] text-ink">
                  What we set out to <em>learn</em>.
                </h2>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-[1.35rem] leading-[1.5] tracking-[-0.02em] text-ink sm:text-[1.55rem]">
                {project.brief}
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 border-t border-line pt-8 sm:grid-cols-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  Sector
                </p>
                <p className="mt-2 text-sm text-ink">{project.sector}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  Type
                </p>
                <p className="mt-2 text-sm text-ink">Concept build</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  Year
                </p>
                <p className="mt-2 text-sm text-ink">{project.year}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-paper-2/35">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">What&apos;s inside</p>
                <h2 className="display mt-4 max-w-2xl text-[clamp(2.2rem,4.6vw,3.8rem)] text-ink">
                  The system, <em>module</em> by module.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-ink-soft md:pb-2">
                Each module solves a real moment in the day. Together they form
                one continuous record instead of five disconnected tools.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-x-8 md:grid-cols-2">
            {project.modules.map((module, moduleIndex) => (
              <Reveal key={module.name} delay={(moduleIndex % 3) * 0.05}>
                <div className="flex gap-5 border-t border-line py-5">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-clay">
                    0{moduleIndex + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-medium tracking-[-0.02em] text-ink">
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

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow">Design decisions</p>
                <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)] text-ink">
                  The details that <em>matter</em>.
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
                  A system is not just a list of features. These are the choices
                  that shape how it feels at 9 AM on a busy day.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            {project.decisions.map((decision, decisionIndex) => (
              <Reveal key={decision} delay={decisionIndex * 0.05}>
                <div className="flex gap-5 border-t border-line py-6 last:border-b sm:gap-8">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-muted">
                    0{decisionIndex + 1}
                  </span>
                  <p className="text-lg leading-snug tracking-[-0.02em] text-ink sm:text-xl">
                    {decision}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="shell">
          <Reveal>
            <div className="grid gap-6 rounded-[1.5rem] border border-line bg-clay-soft/50 p-7 md:grid-cols-12 md:items-center md:p-10">
              <div className="md:col-span-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-clay-deep/60">
                  A note on this build
                </p>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
                  {project.name} is a concept system created by Sandap Softwares
                  to demonstrate our approach. It is not a client engagement and
                  does not use real organisation data. If you would like to see
                  private client work, we are happy to share it on a call.
                </p>
              </div>
              <div className="md:col-span-4 md:justify-self-end">
                <Link href="/contact" className="btn btn-primary">
                  Ask for client work
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <Link
              href={`/work/${next.slug}`}
              className="group mt-14 flex flex-col justify-between gap-5 border-t border-line pt-6 sm:flex-row sm:items-center"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Next project
                </p>
                <p className="mt-2 text-3xl font-medium tracking-[-0.04em] text-ink transition-colors group-hover:text-clay">
                  {next.name}
                </p>
                <p className="mt-1 text-sm text-ink-soft">{next.tagline}</p>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                <ArrowRight className="h-5 w-5" strokeWidth={1.6} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
