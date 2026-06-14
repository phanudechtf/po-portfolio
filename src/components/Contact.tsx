"use client";

import { useLang } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { profile, displayName } from "@/lib/content";

export function Contact() {
  const { t, lang } = useLang();
  const c = t.contact;

  const items = [
    { label: c.emailLabel, value: profile.email, href: `mailto:${profile.email}` },
    { label: c.phoneLabel, value: profile.phone, href: `tel:${profile.phone.replace(/[^0-9+]/g, "")}` },
    { label: c.githubLabel, value: profile.github.replace(/^https?:\/\//, ""), href: profile.github },
  ];

  return (
    <section id="contact" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-accent">
                {c.kicker}
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {c.heading}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{c.body}</p>
            </div>

            <div className="grid gap-3">
              {items.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-border bg-surface-2/50 px-5 py-4 transition-colors hover:border-accent/40"
                >
                  <div>
                    <div className="text-xs uppercase tracking-wider text-faint">{it.label}</div>
                    <div className="mt-0.5 text-sm font-medium text-fg">{it.value}</div>
                  </div>
                  <span className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-sm text-faint sm:flex-row">
          <span>
            © {displayName(lang)} · {profile.title}
          </span>
          <span>{t.footer}</span>
        </Reveal>
      </div>
    </section>
  );
}
