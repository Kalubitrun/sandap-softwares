import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

type CtaBandProps = {
  title?: string;
  accent?: string;
  description?: string;
};

export function CtaBand({
  title = "Tell us what's",
  accent = "slowing you down.",
  description = "A short conversation is usually enough to work out whether custom software is the right answer. No pitch deck, no pressure.",
}: CtaBandProps) {
  return (
    <section className="shell pb-16 md:pb-24">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-pine px-6 py-14 text-paper sm:px-10 md:rounded-[2rem] md:px-14 md:py-20 lg:px-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_130%_at_100%_0%,#2d5c4d_0%,#17342c_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-paper/10 md:-right-10 md:h-[28rem] md:w-[28rem]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-10 h-64 w-64 rounded-full border border-paper/[0.07] md:h-80 md:w-80"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/4 h-52 w-52 rounded-full bg-clay/20 blur-3xl"
        />

        <div className="relative">
          <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/55">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-clay" />
            {siteConfig.availability} · {siteConfig.year}
          </p>

          <h2 className="display mt-6 max-w-3xl text-[clamp(2.5rem,6vw,4.6rem)] text-paper">
            {title} <em className="!text-[#e8b08e]">{accent}</em>
          </h2>

          <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-paper/65">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact" className="btn btn-light">
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/25 px-5 py-3 text-sm font-medium text-paper/90 transition-colors hover:border-paper/50 hover:bg-paper/5"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
          </div>

          <p className="mt-6 text-xs text-paper/55">
            Prefer to talk? Call{" "}
            <a href={siteConfig.phoneHref} className="link-line text-paper/70">
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
