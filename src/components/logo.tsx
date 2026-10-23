import { siteConfig } from "@/lib/site";

type LogoProps = {
  className?: string;
  markClassName?: string;
  stacked?: boolean;
  tone?: "dark" | "light";
  markOnly?: boolean;
};

export function Logo({
  className = "",
  markClassName = "",
  stacked = true,
  tone = "dark",
  markOnly = false,
}: LogoProps) {
  const tile = tone === "dark" ? "fill-ink" : "fill-paper";
  const stroke = tone === "dark" ? "stroke-paper" : "stroke-ink";
  const text = tone === "dark" ? "text-ink" : "text-paper";
  const sub = tone === "dark" ? "text-muted" : "text-paper/55";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className={`h-9 w-9 shrink-0 ${markClassName}`}
      >
        <rect width="40" height="40" rx="11.5" className={tile} />
        <path
          d="M28.6 11.6H19a7 7 0 0 0 0 14h5.4a6.8 6.8 0 0 1 0 13.6H11.7"
          fill="none"
          strokeWidth="4.4"
          strokeLinecap="round"
          className={stroke}
        />
        <circle cx="29.1" cy="11.6" r="3" className="fill-clay" />
      </svg>
      {!markOnly && (
        <span className={`flex flex-col leading-none ${text}`}>
          <span className="text-[1.125rem] font-semibold tracking-[-0.045em]">
            sandap
          </span>
          {stacked ? (
            <span
              className={`mt-[3px] font-mono text-[7px] uppercase tracking-[0.26em] ${sub}`}
            >
              softwares
            </span>
          ) : (
            <span className={`sr-only ${sub}`}>{siteConfig.name}</span>
          )}
        </span>
      )}
    </span>
  );
}
