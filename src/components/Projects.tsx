import { motion } from "motion/react";
import { useI18n } from "../hooks/useI18n";
import { Reveal, SectionHeading, SpotlightCard } from "../lib/effects";
import { Github } from "../lib/brand-icons";
import { ExternalLink } from "lucide-react";
import { socials } from "../lib/constants";

export default function Projectss() {
  const { t } = useI18n()

  return (

    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading index="03" tag={t.projects.tag} title={t.projects.title} />

      <div className="grid gap-7 md:grid-cols-2">
        {t.projects.items.map(({ title, emoji, description, tags, gradient, featured }, i) => (
          <Reveal key={title} delay={(i % 2) * 0.1} className="h-full">
            <SpotlightCard className="glass group h-full rounded-2xl transition-colors duration-300 hover:border-mauve/40">
              {featured && (
                <span className="absolute right-4 top-4 z-20 rounded-full bg-linear-to-r from-mauve to-blue px-3 py-1 font-mono text-[11px] font-semibold text-crust">
                  ✦ {t.projects.featured}
                </span>
              )}

              <div className={`relative flex h-48 items-center justify-center overflow-hidden bg-linear-to-br ${gradient}`}>
                <div className="bg-grid absolute inset-0 opacity-30 mask-[radial-gradient(ellipse_at_center,black,transparent)]" />
                <span className="absolute left-4 top-4 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-crust/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-crust/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-crust/25" />
                </span>
                <motion.span
                  className="text-7xl drop-shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 14 }}
                >
                  {emoji}
                </motion.span>
              </div>

              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-text transition-colors duration-300 group-hover:text-mauve">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-subtext1">{description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-surface0 bg-surface0/40 px-2.5 py-1 font-mono text-xs text-subtext0"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 border-t border-surface0/60 pt-5">
                  <a
                    href="#projects"
                    aria-label={`${title} source`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface1/70 text-subtext0 transition-all duration-300 hover:-translate-y-0.5 hover:border-mauve/60 hover:text-mauve"
                  >
                    <Github className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href="#projects"
                    aria-label={`${title} demo`}
                    className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg border border-surface1/70 text-subtext0 transition-all duration-300 hover:-translate-y-0.5 hover:border-mauve/60 hover:text-mauve"
                  >
                    <ExternalLink className="h-4.5 w-4.5" />
                  </a>
                  <span className="ml-auto font-mono text-xs text-surface2">
                    {featured ? "2025" : `0${i + 1}.webapp`}
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-12 text-center">
        <a
          href={socials.find((el) => el.name === "GitHub")?.url || "https://github.com"}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-sm text-subtext0 transition-colors hover:text-mauve"
        >
          <Github className="h-4 w-4" />
          {t.projects.viewMore}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </Reveal>
    </section>
  )
}
