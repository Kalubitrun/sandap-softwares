import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

const tone: Record<
  Project["cover"],
  { shell: string; word: string; badge: string; card: string }
> = {
  school: {
    shell: "bg-[#e7dcc9]",
    word: "text-ink/[0.08]",
    badge: "border-ink/15 bg-paper/70 text-ink/70",
    card: "bg-white text-ink",
  },
  hospital: {
    shell: "bg-pine",
    word: "text-paper/[0.08]",
    badge: "border-paper/20 bg-paper/10 text-paper/70",
    card: "bg-[#FBF8F1] text-ink",
  },
  business: {
    shell: "bg-clay",
    word: "text-paper/[0.12]",
    badge: "border-paper/25 bg-paper/10 text-paper/80",
    card: "bg-[#FBF8F1] text-ink",
  },
};

function SchoolCover() {
  return (
    <div className="absolute left-1/2 top-1/2 w-[64%] -translate-x-1/2 -translate-y-[46%] -rotate-[3deg] rounded-xl border border-ink/10 bg-white p-3 shadow-[0_24px_50px_-24px_rgba(20,18,15,0.4)] transition-transform duration-700 group-hover:-translate-y-[49%] group-hover:rotate-[-1.5deg]">
      <div className="flex items-center justify-between">
        <p className="text-[9px] font-semibold tracking-[-0.01em] text-ink">Admissions</p>
        <span className="rounded-full bg-[#E7F0E9] px-1.5 py-0.5 text-[6.5px] text-[#2D6A4F]">Live</span>
      </div>
      <div className="mt-2 space-y-1.5">
        {[
          ["Aarav Mehta", "Class I", "Offer sent"],
          ["Diya Kapoor", "Class VI", "Review"],
          ["Kabir Singh", "Class IX", "Offer sent"],
        ].map(([name, cls, status]) => (
          <div key={name} className="flex items-center justify-between rounded-md bg-[#F7F3EB] px-2 py-1.5">
            <div>
              <p className="text-[7.5px] font-medium text-ink">{name}</p>
              <p className="text-[6.5px] text-muted">{cls}</p>
            </div>
            <span className={`text-[6.5px] ${status === "Review" ? "text-clay" : "text-[#2D6A4F]"}`}>
              {status}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-line pt-2">
        <span className="text-[6.5px] text-muted">Seats filled</span>
        <span className="text-[7px] font-semibold text-ink">186 / 240</span>
      </div>
    </div>
  );
}

function HospitalCover() {
  return (
    <div className="absolute left-1/2 top-1/2 w-[64%] -translate-x-1/2 -translate-y-[46%] rotate-[2.5deg] rounded-xl border border-ink/10 bg-[#FBF8F1] p-3 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:-translate-y-[49%] group-hover:rotate-[1deg]">
      <div className="flex items-center justify-between">
        <p className="text-[9px] font-semibold tracking-[-0.01em] text-ink">OPD queue</p>
        <span className="inline-flex items-center gap-1 text-[6.5px] text-[#2D6A4F]">
          <span className="h-1 w-1 rounded-full bg-[#2D6A4F]" /> Live
        </span>
      </div>
      <div className="mt-2 space-y-1.5">
        {[
          ["A-24", "Meera Nair", "In consult", "bg-[#E7F0E9] text-[#2D6A4F]"],
          ["A-25", "Rakesh Patel", "Waiting", "bg-clay/10 text-clay-deep"],
          ["A-26", "Sunita Das", "Waiting", "bg-clay/10 text-clay-deep"],
        ].map(([token, name, status, cls]) => (
          <div key={token} className="flex items-center gap-2 rounded-md bg-white px-2 py-1.5">
            <span className="rounded bg-[#F1ECE2] px-1 py-0.5 text-[6.5px] font-semibold text-ink">{token}</span>
            <p className="flex-1 text-[7.5px] font-medium text-ink">{name}</p>
            <span className={`rounded-full px-1.5 py-0.5 text-[6px] ${cls}`}>{status}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-line pt-2">
        <span className="text-[6.5px] text-muted">Avg. wait</span>
        <span className="text-[7px] font-semibold text-ink">14 min</span>
      </div>
    </div>
  );
}

function BusinessCover() {
  const bars = [42, 58, 51, 70, 62, 84, 74, 96];
  return (
    <div className="absolute left-1/2 top-1/2 w-[64%] -translate-x-1/2 -translate-y-[46%] -rotate-[2deg] rounded-xl border border-ink/10 bg-[#FBF8F1] p-3 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:-translate-y-[49%] group-hover:rotate-[-0.5deg]">
      <div className="flex items-center justify-between">
        <p className="text-[9px] font-semibold tracking-[-0.01em] text-ink">Revenue</p>
        <span className="text-[6.5px] text-[#2D6A4F]">+18.2%</span>
      </div>
      <p className="mt-0.5 text-[15px] font-semibold tracking-[-0.03em] text-ink">₹68.4L</p>
      <div className="mt-2 flex h-[52px] items-end gap-1">
        {bars.map((height, index) => (
          <div
            key={index}
            className={`flex-1 rounded-t-[1px] ${index === bars.length - 1 ? "bg-clay" : "bg-[#D9CFBE]"}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-line pt-2">
        <span className="text-[6.5px] text-muted">Receivables</span>
        <span className="text-[7px] font-semibold text-ink">₹12.2L</span>
      </div>
    </div>
  );
}

export function ProjectCover({
  project,
  aspectClass = "aspect-[4/3]",
}: {
  project: Project;
  aspectClass?: string;
}) {
  const style = tone[project.cover];
  const Cover =
    project.cover === "school"
      ? SchoolCover
      : project.cover === "hospital"
        ? HospitalCover
        : BusinessCover;

  return (
    <div className={`relative w-full overflow-hidden rounded-[1.25rem] border border-ink/10 ${aspectClass} ${style.shell}`}>
      <div
        aria-hidden="true"
        className={`absolute -bottom-[12%] left-1/2 -translate-x-1/2 select-none font-serif text-[7.5rem] italic leading-none tracking-[-0.04em] sm:text-[9rem] ${style.word}`}
      >
        {project.name}
      </div>
      <span
        className={`absolute left-4 top-4 z-10 rounded-full border px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] backdrop-blur ${style.badge}`}
      >
        Concept build
      </span>
      <span className="absolute right-4 top-4 z-10 font-mono text-[8px] uppercase tracking-[0.14em] text-ink/40">
        {project.index} / {project.sector.split(" ")[0]}
      </span>

      <Cover />

      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent" />
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <ProjectCover project={project} />
      <div className="mt-5 flex items-start justify-between gap-6 border-t border-line pt-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h3 className="text-2xl font-medium tracking-[-0.03em] text-ink">{project.name}</h3>
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              {project.sector}
            </span>
          </div>
          <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-soft">{project.tagline}</p>
        </div>
        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
        </span>
      </div>
    </Link>
  );
}
