"use client";

import { useLang } from "./LanguageProvider";
import { profile } from "@/lib/content";

export function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-fade pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal in-view flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-strong/10 px-3 py-1 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            {h.badge}
          </span>

          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            {h.titleA} <span className="text-gradient">{h.titleHi}</span>
            <br className="hidden sm:block" /> {h.titleB}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {h.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-lg bg-accent-strong px-5 py-3 text-sm font-medium text-white shadow-lg shadow-accent-strong/25 transition-transform hover:-translate-y-0.5 hover:bg-accent"
            >
              {h.primaryCta}
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent/40"
            >
              {h.secondaryCta}
            </a>
            <span className="ml-1 text-sm text-faint">{profile.title}</span>
          </div>

          <div className="mt-14 grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {h.stats.map((s) => (
              <div key={s.label} className="bg-surface px-6 py-6">
                <div className="font-display text-3xl font-semibold text-fg">{s.value}</div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
