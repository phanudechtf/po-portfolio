"use client";

import { useLang } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionHead } from "./About";

export function Skills() {
  const { t } = useLang();
  const s = t.skills;

  return (
    <section id="skills" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead kicker={s.kicker} heading={s.heading} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {s.groups.map((g, i) => (
            <Reveal
              key={g.title}
              delay={i * 70}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
