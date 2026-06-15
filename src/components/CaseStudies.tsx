"use client";

import { useLang } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionHead } from "./About";
import type { CaseStudy } from "@/lib/content";

export function CaseStudies() {
  const { t, lang } = useLang();
  const w = t.work;

  const labels =
    lang === "th"
      ? { problem: "ปัญหา", solution: "ทางแก้", result: "ผลลัพธ์", highlights: "ไฮไลต์" }
      : { problem: "Problem", solution: "Solution", result: "Result", highlights: "Highlights" };

  return (
    <section id="work" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead kicker={w.kicker} heading={w.heading} />
        <Reveal>
          <p className="mt-3 text-sm text-faint">{w.note}</p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {w.cases.map((c, i) => (
            <Card key={c.title} c={c} index={i} labels={labels} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  c,
  index,
  labels,
}: {
  c: CaseStudy;
  index: number;
  labels: { problem: string; solution: string; result: string; highlights: string };
}) {
  return (
    <Reveal
      delay={index * 60}
      className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/30"
    >
      <div className="grid gap-0 lg:grid-cols-[1.6fr_1fr]">
        {/* main */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-accent-strong/10 px-2.5 py-1 font-medium text-accent">
              {c.tag}
            </span>
            <span className="text-faint">{c.role}</span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-fg">
              {c.title}
            </h3>
            {c.link && (
              <a
                href={c.link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-accent/40 bg-accent-strong/10 px-2.5 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent-strong/20"
              >
                {c.link.label} ↗
              </a>
            )}
          </div>
          <p className="mt-1 text-sm text-muted">{c.subtitle}</p>

          <dl className="mt-6 space-y-4">
            <Row label={labels.problem} value={c.problem} tone="muted" />
            <Row label={labels.solution} value={c.solution} tone="fg" />
            <Row label={labels.result} value={c.result} tone="teal" />
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            {c.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* aside */}
        <div className="flex flex-col gap-5 border-t border-border bg-surface-2/40 p-6 sm:p-8 lg:border-l lg:border-t-0">
          <div className="rounded-xl border border-border bg-surface px-4 py-3.5">
            <div className="font-display text-4xl font-semibold leading-none text-gradient">
              {c.metric.value}
            </div>
            <div className="mt-1.5 text-sm text-muted">{c.metric.label}</div>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-faint">
              {labels.highlights}
            </div>
            <ul className="space-y-2.5">
              {c.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {c.images && c.images.length > 0 && (
        <div
          className={`grid gap-px border-t border-border bg-border ${
            c.images.length > 1 ? "sm:grid-cols-2" : ""
          }`}
        >
          {c.images.map((img) => (
            <figure key={img.src} className="bg-surface-2/40 p-4 sm:p-5">
              <div className="overflow-hidden rounded-lg border border-border bg-bg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="h-auto w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-2.5 text-xs text-faint">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </Reveal>
  );
}

function Row({ label, value, tone }: { label: string; value: string; tone: "muted" | "fg" | "teal" }) {
  const color = tone === "fg" ? "text-fg" : tone === "teal" ? "text-fg" : "text-muted";
  const dot = tone === "teal" ? "text-teal" : tone === "fg" ? "text-accent" : "text-faint";
  return (
    <div className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
      <dt className={`text-xs font-semibold uppercase tracking-wider ${dot}`}>{label}</dt>
      <dd className={`text-sm leading-relaxed ${color}`}>{value}</dd>
    </div>
  );
}
