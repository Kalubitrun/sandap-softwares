"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  ChevronDown,
  HeartPulse,
  Menu,
  School,
  X,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { navLinks, siteConfig, solutionLinks } from "@/lib/site";

const solutionIcons = [School, HeartPulse, Briefcase];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-[76px] items-center justify-between gap-6">
          <Link
            href="/"
            aria-label={`${siteConfig.name} — home`}
            className="relative z-10 shrink-0"
          >
            <Logo />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            <div className="group relative">
              <button
                type="button"
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-clay ${
                  pathname.startsWith("/solutions") ? "text-clay" : "text-ink"
                }`}
                aria-haspopup="true"
              >
                Solutions
                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
                  strokeWidth={1.8}
                />
              </button>
              <div className="pointer-events-none absolute left-1/2 top-full w-[340px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <div className="translate-y-2 rounded-2xl border border-line bg-paper p-2 shadow-[0_28px_60px_-30px_rgba(20,18,15,0.35)] transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0">
                  {solutionLinks.map((item, index) => {
                    const Icon = solutionIcons[index];
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-paper-2"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-paper-2 text-ink-soft">
                          <Icon className="h-4 w-4" strokeWidth={1.6} />
                        </span>
                        <span>
                          <span className="block text-sm font-medium text-ink">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                  <div className="mx-3 mt-1 border-t border-line pt-3 pb-1">
                    <Link
                      href="/work"
                      className="group/link flex items-center justify-between px-0 pb-2 text-xs font-medium text-ink-soft transition-colors hover:text-clay"
                    >
                      See how we build
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-clay ${
                  isActive(link.href) ? "text-clay" : "text-ink"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-clay" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <Link
              href="/contact"
              className="btn btn-primary h-11 px-5 text-sm"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:bg-ink hover:text-paper lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="h-5 w-5" strokeWidth={1.7} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex flex-col bg-paper lg:hidden"
          >
            <div className="shell flex h-[76px] shrink-0 items-center justify-between">
              <Link href="/" onClick={() => setOpen(false)} aria-label="Home">
                <Logo />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" strokeWidth={1.7} />
              </button>
            </div>

            <div className="shell flex flex-1 flex-col overflow-y-auto pb-8">
              <p className="eyebrow mt-6">Solutions</p>
              <div className="mt-4 border-t border-line">
                {solutionLinks.map((item, index) => {
                  const Icon = solutionIcons[index];
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-line py-4"
                    >
                      <span className="flex items-center gap-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft">
                          <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                        </span>
                        <span className="text-lg font-medium">{item.label}</span>
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-muted" />
                    </Link>
                  );
                })}
              </div>

              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-[2.6rem] leading-[1.15] tracking-[-0.02em] text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-10">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary w-full"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <div className="mt-6 flex flex-col gap-1 text-sm text-ink-soft">
                  <a href={`mailto:${siteConfig.email}`} className="link-line w-fit">
                    {siteConfig.email}
                  </a>
                  <a href={siteConfig.phoneHref} className="link-line w-fit">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
