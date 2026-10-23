import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = siteConfig.year;

  return (
    <footer className="relative mt-auto overflow-hidden bg-ink text-paper">
      <div className="shell pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" aria-label={`${siteConfig.name} — home`}>
              <span className="inline-flex items-center gap-3">
                <svg viewBox="0 0 40 40" aria-hidden="true" className="h-10 w-10">
                  <rect width="40" height="40" rx="11.5" className="fill-paper" />
                  <path
                    d="M28.6 11.6H19a7 7 0 0 0 0 14h5.4a6.8 6.8 0 0 1 0 13.6H11.7"
                    fill="none"
                    strokeWidth="4.4"
                    strokeLinecap="round"
                    className="stroke-ink"
                  />
                  <circle cx="29.1" cy="11.6" r="3" className="fill-clay" />
                </svg>
                <span className="flex flex-col leading-none">
                  <span className="text-xl font-semibold tracking-[-0.045em]">
                    sandap
                  </span>
                  <span className="mt-1 font-mono text-[7px] uppercase tracking-[0.26em] text-paper/50">
                    softwares
                  </span>
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">
              Custom software for schools, hospitals, and businesses. Designed
              around how your organisation actually works — then built, shipped,
              and supported.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/50">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-clay" />
              {siteConfig.availability}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:pl-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55">
                Solutions
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/solutions/schools" className="link-line text-paper/75 hover:text-paper">
                    Schools
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/hospitals" className="link-line text-paper/75 hover:text-paper">
                    Hospitals
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/businesses" className="link-line text-paper/75 hover:text-paper">
                    Businesses
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55">
                Studio
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/work" className="link-line text-paper/75 hover:text-paper">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="link-line text-paper/75 hover:text-paper">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="link-line text-paper/75 hover:text-paper">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55">
                Get in touch
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 text-paper/75 transition-colors hover:text-paper"
                  >
                    <Mail className="h-3.5 w-3.5 text-paper/55" />
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center gap-2 text-paper/75 transition-colors hover:text-paper"
                  >
                    <Phone className="h-3.5 w-3.5 text-paper/55" />
                    {siteConfig.phone}
                  </a>
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 text-xs font-medium text-paper/85 transition-colors hover:border-paper/50 hover:bg-paper/5"
              >
                Start a project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-6 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em]">
            Independent software studio · {siteConfig.location}
          </p>
          <a href="#top" className="link-line w-fit hover:text-paper">
            Back to top ↑
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none relative -mb-[1.2vw] select-none overflow-hidden px-4 md:px-8"
      >
        <div className="flex items-end justify-center leading-[0.72]">
          <span className="text-[24vw] font-semibold tracking-[-0.075em] text-paper/[0.07] md:text-[21vw]">
            sandap
          </span>
          <span className="mb-[5.2vw] ml-[1vw] h-[2.4vw] w-[2.4vw] rounded-full bg-clay/70" />
        </div>
      </div>
    </footer>
  );
}
