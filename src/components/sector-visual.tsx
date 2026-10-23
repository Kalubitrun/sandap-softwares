import type { MockupKind } from "@/lib/data";

function SchoolVisual() {
  const cells = [
    1, 1, 1, 0.9, 1, 1, 0.35, 1, 1, 0.9, 1, 0.75, 1, 0.55, 1, 0.9, 1, 1, 1,
    0.9, 0.3, 0.9, 1, 0.8, 1, 1, 0.9, 0.6, 1, 0.9, 0.9, 1, 1, 0.8, 0.4, 1,
    0.9, 1, 0.7, 1, 1, 0.9, 0.5, 1, 0.8, 1, 0.9, 1,
  ];

  return (
    <div className="rounded-xl border border-line bg-paper/60 p-3.5">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
          Attendance · this week
        </p>
        <span className="text-[9px] font-medium text-ink">94.6%</span>
      </div>
      <div className="mt-3 grid grid-cols-12 gap-1">
        {cells.map((value, index) => (
          <span
            key={index}
            className="aspect-square rounded-[2px]"
            style={{
              backgroundColor:
                value > 0.85
                  ? "#17342C"
                  : value > 0.65
                    ? "#4F7A68"
                    : value > 0.45
                      ? "#C9A88F"
                      : "#E4D8C6",
            }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[8px] text-muted">
        <span>Mon</span>
        <span>Wed</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
    </div>
  );
}

function HospitalVisual() {
  return (
    <div className="rounded-xl border border-line bg-paper/60 p-3.5">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
          OPD queue
        </p>
        <span className="inline-flex items-center gap-1 text-[8px] text-[#2D6A4F]">
          <span className="h-1 w-1 rounded-full bg-[#2D6A4F]" /> Live
        </span>
      </div>
      <div className="mt-3 space-y-1.5">
        {[
          ["A-24", "Meera N.", "In consult"],
          ["A-25", "Rakesh P.", "6 min"],
          ["A-26", "Sunita D.", "12 min"],
        ].map(([token, name, meta], index) => (
          <div
            key={token}
            className="flex items-center gap-2 rounded-lg border border-line bg-white/70 px-2 py-2"
          >
            <span className="rounded bg-paper-2 px-1.5 py-0.5 text-[8px] font-semibold text-ink">
              {token}
            </span>
            <span className="flex-1 text-[9px] font-medium text-ink">{name}</span>
            <span className={`text-[8px] ${index === 0 ? "text-[#2D6A4F]" : "text-muted"}`}>
              {meta}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-line pt-2.5 text-[8px]">
        <span className="text-muted">Avg. wait</span>
        <span className="font-medium text-ink">14 min</span>
      </div>
    </div>
  );
}

function BusinessVisual() {
  const bars = [38, 56, 47, 68, 59, 82, 71, 92, 78, 100];
  return (
    <div className="rounded-xl border border-line bg-paper/60 p-3.5">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
          Revenue · 10 months
        </p>
        <span className="text-[9px] font-medium text-[#2D6A4F]">+18.2%</span>
      </div>
      <p className="mt-1.5 text-xl font-semibold tracking-[-0.04em] text-ink">₹68.4L</p>
      <div className="mt-3 flex h-[64px] items-end gap-1">
        {bars.map((height, index) => (
          <div
            key={index}
            className={`flex-1 rounded-t-[1px] ${index === bars.length - 1 ? "bg-clay" : "bg-ink/15"}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-line pt-2.5 text-[8px]">
        <span className="text-muted">Receivables</span>
        <span className="font-medium text-ink">₹12.2L</span>
      </div>
    </div>
  );
}

export function SectorVisual({ kind }: { kind: MockupKind }) {
  if (kind === "school") return <SchoolVisual />;
  if (kind === "hospital") return <HospitalVisual />;
  return <BusinessVisual />;
}
