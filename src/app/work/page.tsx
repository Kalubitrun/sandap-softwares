import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { ProjectCard, ProjectCover } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work — concept systems for schools, hospitals, and businesses",
  description:
    "Three concept systems by Sandap Softwares: Vidya for schools, Arogya for hospitals, and Gati for business operations.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const [featured, ...rest] = projects;

  return (
    <>
      <section className="relative overflow-hidden pt-[8.5rem] pb-14 md:pt-[10.5rem] md:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(23,52,44,0.1),transparent_65%)]"
        />
        <div className="shell relative">
          <Reveal>
            <p className="eyebrow">Selected builds</p>
            <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
              <h1 className="display text-[clamp(2.9rem,7vw,6rem)] text-ink lg:col-span-8">
                Built to show
                <br />
                the <em>thinking</em>.
              </h1>
              <div className="lg:col-span-4 lg:pb-2">
                <p className="max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
                  Three concept systems, designed and coded by Sandap to explore
                  how schools, hospitals, and businesses could work with less
                  friction.
                </p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-white/40 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                  <span className="h-1 w-1 rounded-full bg-clay" />
                  Concept work, not client engagements
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="mt-14">
            <Link href={`/work/${featured.slug}`} className="group block">
              <ProjectCover project={featured} aspectClass="aspect-[16/10] md:aspect-[16/8.5]" />
              <div className="mt-6 grid gap-5 border-t border-line pt-5 md:grid-cols-12 md:items-start">
                <div className="md:col-span-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-3xl font-medium tracking-[-0.04em] text-ink">
                      {featured.name}
                    </h2>
                    <span className="tag">Concept build</span>
                  </div>
                  <p className="mt-2 max-w-xl text-lg tracking-[-0.02em] text-ink">
                    {featured.tagline}
                  </p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
                    {featured.summary}
                  </p>
                </div>
                <div className="flex items-end justify-between gap-4 md:col-span-5 md:justify-end">
                  <div className="text-left md:text-right">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      {featured.sector}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      {featured.year}
                    </p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                    <ArrowUpRight className="h-4.5 w-4.5" strokeWidth={1.6} />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="mt-16 grid gap-x-6 gap-y-14 md:grid-cols-2">
            {rest.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-paper-2/35">
        <div className="shell">
          <Reveal>
            <div className="grid gap-8 rounded-[1.5rem] border border-line bg-white/40 p-7 md:grid-cols-12 md:items-center md:p-10">
              <div className="md:col-span-8">
                <p className="eyebrow">A note on the work</p>
                <h2 className="mt-4 max-w-2xl text-2xl font-medium tracking-[-0.035em] text-ink md:text-[2rem]">
                  These are concept builds — honest examples of how we design
                  and build. Client work is shared privately, with permission.
                </h2>
              </div>
              <div className="md:col-span-4 md:justify-self-end">
                <Link href="/contact" className="btn btn-primary">
                  Ask for client work
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="pt-16 md:pt-24">
        <CtaBand
          title="Have a system"
          accent="in mind?"
          description="Tell us what your team is wrestling with. We'll tell you honestly whether custom software is the right answer — and what it would take."
        />
      </div>
    </>
  );
}
