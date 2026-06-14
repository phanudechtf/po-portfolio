"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { profile, displayName } from "@/lib/content";
import { resume } from "@/lib/resume";

export default function ResumePage() {
  const { lang, toggle } = useLang();
  const r = resume[lang];
  const L = r.labels;

  return (
    <div className="min-h-screen py-10">
      {/* toolbar */}
      <div className="no-print mx-auto mb-6 flex max-w-3xl items-center justify-between px-5">
        <Link href="/" className="text-sm text-muted transition-colors hover:text-fg">
          {L.backHome}
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:text-fg"
          >
            {lang === "th" ? "EN" : "TH"}
          </button>
          <button
            onClick={() => window.print()}
            className="rounded-md bg-accent-strong px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            {L.download}
          </button>
        </div>
      </div>

      {/* sheet */}
      <article className="print-sheet mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-8 sm:p-10">
        {/* header */}
        <header className="border-b border-border pb-5">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-fg">
            {displayName(lang)}
          </h1>
          <p className="print-accent mt-1 text-lg font-medium text-accent">{profile.title}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
            <span>{lang === "th" ? profile.location : profile.locationEn}</span>
            <span>
              {L.age} {profile.age}
            </span>
          </div>
        </header>

        {/* summary */}
        <Section title={L.summary}>
          <p className="text-sm leading-relaxed text-muted">{r.summary}</p>
        </Section>

        {/* experience */}
        <Section title={L.experience}>
          <div className="space-y-5">
            {r.experience.map((e) => (
              <div key={e.role + e.org}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-display text-base font-semibold text-fg">{e.role}</h3>
                  <span className="text-xs text-faint">{e.period}</span>
                </div>
                <div className="print-accent text-sm font-medium text-accent">{e.org}</div>
                <ul className="mt-2 space-y-1.5">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="print-accent mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* projects */}
        <Section title={L.projects}>
          <div className="space-y-3">
            {r.projects.map((p) => (
              <div key={p.name}>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-sm font-semibold text-fg">{p.name}</span>
                  {p.link && (
                    <a href={p.link} className="print-accent text-xs text-accent">
                      {p.link.replace(/^https?:\/\//, "")}
                    </a>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* skills */}
        <Section title={L.skills}>
          <div className="space-y-1.5">
            {r.skills.map((s) => (
              <div key={s.group} className="grid gap-1 sm:grid-cols-[7rem_1fr]">
                <span className="print-accent text-sm font-semibold text-accent">{s.group}</span>
                <span className="text-sm text-muted">{s.items}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* education */}
        <Section title={L.education}>
          <div className="space-y-3">
            {r.education.map((ed) => (
              <div key={ed.degree}>
                <div className="text-sm font-semibold text-fg">{ed.degree}</div>
                <div className="text-sm text-muted">{ed.org}</div>
                <div className="text-xs text-faint">{ed.period}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* qualities */}
        <Section title={L.qualities}>
          <ul className="grid gap-1.5 sm:grid-cols-2">
            {r.qualities.map((q) => (
              <li key={q} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span className="print-accent mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {q}
              </li>
            ))}
          </ul>
        </Section>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-faint">{title}</h2>
      {children}
    </section>
  );
}
