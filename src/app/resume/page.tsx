"use client";

import type { ComponentType, CSSProperties } from "react";
import Link from "next/link";
import {
  TbUser,
  TbMail,
  TbPhone,
  TbMapPin,
  TbSchool,
  TbStar,
  TbCode,
  TbBriefcase,
  TbTrophy,
  TbUsers,
  TbTargetArrow,
  TbArrowRight,
  TbCircleCheckFilled,
  TbDownload,
  TbDeviceMobile,
  TbStack2,
  TbLanguage,
  TbListNumbers,
  TbRocket,
  TbFileSearch,
  TbRouteSquare,
  TbMessages,
  TbClockCheck,
  TbApi,
  TbBolt,
  TbMap2,
  TbBrandAdobeIllustrator,
} from "react-icons/tb";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiBun,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiFigma,
  SiPhp,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiJson,
} from "react-icons/si";
import { useLang } from "@/components/LanguageProvider";
import { profile, displayName } from "@/lib/content";
import { resume, type IconKey } from "@/lib/resume";

type Icon = ComponentType<{ className?: string; style?: CSSProperties }>;

const TECH: Record<IconKey, { Icon: Icon; color: string }> = {
  nextjs: { Icon: SiNextdotjs, color: "#000000" },
  react: { Icon: SiReact, color: "#61dafb" },
  typescript: { Icon: SiTypescript, color: "#3178c6" },
  tailwind: { Icon: SiTailwindcss, color: "#38bdf8" },
  mongodb: { Icon: SiMongodb, color: "#47a248" },
  nodejs: { Icon: SiNodedotjs, color: "#5fa04e" },
  bun: { Icon: SiBun, color: "#fbf0df" },
  elysia: { Icon: TbBolt, color: "#8b5cf6" },
  express: { Icon: SiExpress, color: "#444444" },
  postgresql: { Icon: SiPostgresql, color: "#4169e1" },
  mysql: { Icon: SiMysql, color: "#4479a1" },
  docker: { Icon: SiDocker, color: "#2496ed" },
  git: { Icon: SiGit, color: "#f05032" },
  restapi: { Icon: TbApi, color: "#1d4ed8" },
  json: { Icon: SiJson, color: "#292929" },
  deckgl: { Icon: TbMap2, color: "#059669" },
  figma: { Icon: SiFigma, color: "#f24e1e" },
  illustrator: { Icon: TbBrandAdobeIllustrator, color: "#ff9a00" },
  php: { Icon: SiPhp, color: "#777bb4" },
  html: { Icon: SiHtml5, color: "#e34f26" },
  css: { Icon: SiCss, color: "#663399" },
  javascript: { Icon: SiJavascript, color: "#f7df1e" },
};

const STAT_ICON: Record<string, Icon> = {
  devices: TbDeviceMobile,
  platforms: TbStack2,
  languages: TbLanguage,
  steps: TbListNumbers,
  endtoend: TbRocket,
};

const SOFT_ICON: Record<string, Icon> = {
  requirement: TbFileSearch,
  teamwork: TbUsers,
  userflow: TbRouteSquare,
  communication: TbMessages,
  value: TbTargetArrow,
  responsibility: TbClockCheck,
};

const NAVY = "#13294b";

export default function ResumePage() {
  const { lang, toggle } = useLang();
  const r = resume[lang];
  const L = r.labels;

  return (
    <div className="min-h-screen bg-bg py-8">
      {/* toolbar */}
      <div className="no-print mx-auto mb-6 flex max-w-5xl items-center justify-between px-5">
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
            className="inline-flex items-center gap-1.5 rounded-md bg-accent-strong px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            <TbDownload className="h-4 w-4" />
            {L.download}
          </button>
        </div>
      </div>

      {/* sheet */}
      <article className="print-sheet mx-auto grid max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-[300px_1fr]">
        {/* ── sidebar ───────────────────────────── */}
        <aside className="space-y-7 bg-gradient-to-b from-[#0f2547] to-[#1b3a66] px-6 py-8 text-white">
          {/* identity */}
          <div className="text-center">
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-white/10 ring-4 ring-white/20">
              <TbUser className="h-16 w-16 text-white/40" />
            </div>
            <h1 className="mt-4 font-display text-2xl font-bold tracking-tight">{displayName(lang)}</h1>
            <p className="mt-1 text-xs font-semibold tracking-wide text-sky-300">{r.title}</p>
          </div>

          {/* contact */}
          <SideBlock icon={TbUser} title={L.contact}>
            <ContactRow icon={TbMail} text={profile.email} />
            <ContactRow icon={TbPhone} text={profile.phone} />
            <ContactRow icon={TbMapPin} text={lang === "th" ? profile.location : profile.locationEn} />
          </SideBlock>

          {/* education */}
          <SideBlock icon={TbSchool} title={L.education}>
            {r.education.map((ed) => (
              <div key={ed.degree} className="text-sm leading-relaxed text-sky-100/90">
                <div className="font-semibold text-white">{ed.degree}</div>
                <div>{ed.org}</div>
                <div className="text-xs text-sky-300/80">{ed.period}</div>
              </div>
            ))}
          </SideBlock>

          {/* strengths */}
          <SideBlock icon={TbStar} title={L.strengths}>
            <ul className="space-y-2">
              {r.strengths.map((s) => (
                <li key={s} className="flex gap-2 text-sm leading-snug text-sky-100/90">
                  <TbCircleCheckFilled className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </SideBlock>

          {/* tech stack */}
          <SideBlock icon={TbCode} title={L.techStack}>
            <div className="space-y-4">
              {r.techStack.map((g) => (
                <div key={g.group}>
                  <div className="mb-2 text-[11px] font-bold tracking-widest text-sky-300/80">{g.group}</div>
                  <div className="grid grid-cols-2 gap-2">
                    {g.items.map((t) => {
                      const { Icon } = TECH[t.icon];
                      return (
                        <div
                          key={t.name}
                          className="flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1.5 text-xs text-sky-50"
                        >
                          <Icon className="h-4 w-4 shrink-0 text-sky-300" />
                          <span className="truncate">{t.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </SideBlock>
        </aside>

        {/* ── content ───────────────────────────── */}
        <main className="space-y-8 px-7 py-8 text-slate-600">
          {/* about */}
          <section>
            <Heading icon={TbUser}>{L.about}</Heading>
            <p className="text-sm leading-relaxed">{r.about}</p>
          </section>

          {/* experience */}
          <section>
            <Heading icon={TbBriefcase}>{L.experience}</Heading>
            <div className="space-y-6">
              {r.experience.map((e) => (
                <div key={e.role + e.org}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-display text-base font-bold" style={{ color: NAVY }}>
                        {e.role}
                      </h3>
                      <div className="text-sm font-medium text-blue-700">{e.org}</div>
                    </div>
                    <span className="rounded-full bg-[#13294b] px-3 py-1 text-xs font-semibold text-white">
                      {e.period}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* projects */}
          <section>
            <Heading icon={TbStar}>{L.projects}</Heading>
            <div className="space-y-5">
              {r.projects.map((p) => (
                <div
                  key={p.no}
                  className="rounded-xl border border-slate-200 bg-slate-50/60 p-4"
                >
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                          {p.no}
                        </span>
                        <h3 className="font-display text-base font-bold leading-tight" style={{ color: NAVY }}>
                          {p.name}
                        </h3>
                      </div>
                      <ul className="mt-3 space-y-1.5">
                        {p.bullets.map((b, i) => (
                          <li key={i} className="flex gap-2 text-sm leading-relaxed">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="sm:w-40">
                      {p.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.image}
                          alt={p.name}
                          className="mb-3 h-24 w-full rounded-lg border border-slate-200 object-cover sm:h-20"
                        />
                      ) : null}
                      <div className="text-[11px] font-bold tracking-widest text-slate-400">
                        {L.technologies}
                      </div>
                      <div className="mt-2 space-y-1.5">
                        {p.tech.map((t) => {
                          const { Icon, color } = TECH[t.icon];
                          return (
                            <div key={t.name} className="flex items-center gap-2 text-xs text-slate-600">
                              <Icon className="h-4 w-4 shrink-0" style={{ color }} />
                              <span>{t.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* stats */}
          <section>
            <Heading icon={TbTrophy}>{L.stats}</Heading>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {r.stats.map((s) => {
                const Icon = STAT_ICON[s.icon];
                return (
                  <div
                    key={s.icon}
                    className="rounded-xl border border-slate-200 bg-white p-3 text-center"
                  >
                    <Icon className="mx-auto h-6 w-6 text-blue-600" />
                    <div className="mt-1.5 font-display text-lg font-extrabold leading-tight" style={{ color: NAVY }}>
                      {s.value}
                    </div>
                    {s.label ? (
                      <div className="text-xs font-semibold text-blue-700">{s.label}</div>
                    ) : null}
                    <div className="mt-1 text-[11px] leading-snug text-slate-500">{s.desc}</div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* soft skills */}
          <section>
            <Heading icon={TbUsers}>{L.softSkills}</Heading>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {r.softSkills.map((s) => {
                const Icon = SOFT_ICON[s.icon];
                return (
                  <div key={s.icon} className="flex items-center gap-2.5 text-sm">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50">
                      <Icon className="h-4 w-4 text-blue-600" />
                    </span>
                    <span>{s.label}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* career goal */}
          <section>
            <Heading icon={TbTargetArrow}>{L.careerGoal}</Heading>
            <div className="rounded-xl bg-gradient-to-r from-[#0f2547] to-[#1b3a66] p-5 text-white">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-bold">
                  <TbCode className="h-5 w-5 text-sky-300" />
                  {r.careerGoal.from}
                </span>
                <TbArrowRight className="h-5 w-5 text-sky-300" />
                <span className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-bold">
                  <TbUser className="h-5 w-5 text-sky-300" />
                  {r.careerGoal.to}
                </span>
              </div>
              <p className="mt-4 text-center text-sm leading-relaxed text-sky-100/90">
                &ldquo;{r.careerGoal.quote}&rdquo;
              </p>
            </div>
          </section>
        </main>
      </article>
    </div>
  );
}

function SideBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: Icon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2 border-b border-white/15 pb-2">
        <Icon className="h-5 w-5 text-sky-300" />
        <h2 className="font-display text-sm font-bold uppercase tracking-wide">{title}</h2>
      </div>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function ContactRow({ icon: Icon, text }: { icon: Icon; text: string }) {
  return (
    <div className="flex items-center gap-2.5 text-sm text-sky-100/90">
      <Icon className="h-4 w-4 shrink-0 text-sky-300" />
      <span className="break-all">{text}</span>
    </div>
  );
}

function Heading({ icon: Icon, children }: { icon: Icon; children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#13294b] text-white">
        <Icon className="h-5 w-5" />
      </span>
      <h2 className="font-display text-lg font-bold" style={{ color: NAVY }}>
        {children}
      </h2>
      <span className="ml-1 h-px flex-1 bg-slate-200" />
    </div>
  );
}
