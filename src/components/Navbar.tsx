"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { displayName } from "@/lib/content";

export function Navbar() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#work", label: t.nav.work },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2 font-display font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-strong/15 text-accent ring-1 ring-accent/30">
            {displayName(lang).charAt(0)}
          </span>
          <span className="text-sm tracking-tight text-fg">{displayName(lang)}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center gap-1 rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-fg"
          >
            <span className={lang === "th" ? "text-accent" : ""}>TH</span>
            <span className="text-faint">/</span>
            <span className={lang === "en" ? "text-accent" : ""}>EN</span>
          </button>
          <Link
            href="/resume"
            className="hidden rounded-md border border-border bg-surface px-3 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-fg sm:block"
          >
            Resume
          </Link>
          <a
            href="#contact"
            className="hidden rounded-md bg-accent-strong px-3.5 py-2 text-sm font-medium text-white shadow-lg shadow-accent-strong/20 transition-colors hover:bg-accent sm:block"
          >
            {t.nav.cta}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-fg md:hidden"
          >
            <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            ))}
            <Link
              href="/resume"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-sm text-muted transition-colors hover:text-fg"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
