import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-[8rem] pb-20">
      <div className="shell">
        <p className="eyebrow">404 — Not found</p>
        <h1 className="display mt-6 max-w-3xl text-[clamp(2.8rem,7vw,5.8rem)] text-ink">
          This page took a <em>different</em> route.
        </h1>
        <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
          The page you were looking for doesn&apos;t exist, or has moved. The
          good news: everything important is one click away.
        </p>
        <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
