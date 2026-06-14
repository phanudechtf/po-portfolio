"use client";

import { useLang } from "./LanguageProvider";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead kicker={a.kicker} heading={a.heading} />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="space-y-5">
            {a.body.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted sm:text-lg">
                {p}
              </p>
            ))}
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {a.pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/30"
              >
                <h3 className="font-display text-base font-semibold text-fg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ kicker, heading }: { kicker: string; heading: string }) {
  return (
    <Reveal>
      <span className="text-sm font-medium uppercase tracking-widest text-accent">{kicker}</span>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {heading}
      </h2>
    </Reveal>
  );
}
