import { useI18n } from "../hooks/useI18n"
import { techList } from "../lib/constants"
import { Reveal, SectionHeading } from "../lib/effects"

export default function Skills() {
  const { t } = useI18n()

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading index="02" tag={t.skills.tag} title={t.skills.title} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.skills.groups.map(({ title, emoji, dot, skills }, i) => (
          <Reveal key={title} delay={i * 0.06} className="h-full">
            <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-mauve/40">
              <div className="mb-5 flex items-center gap-3">
                <span className="text-2xl transition-transform duration-300 group-hover:scale-125">
                  {emoji}
                </span>
                <h3 className="font-display text-lg font-bold text-text">
                  {title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-surface0 bg-surface0/40 px-3 py-1.5 font-mono text-xs text-subtext1 transition-colors duration-200 hover:border-surface1 hover:text-text"
                  >
                    <span className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${dot}`} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-16">
        <div className="relative overflow-hidden py-4 mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-12">
            {[...techList, ...techList].map(({ name, color }, i) => (
              <span
                key={`${name}-${i}`}
                className="flex items-center gap-2.5 font-mono text-lg text-subtext0"
              >
                <span className={`h-2 w-2 rounded-full ${color}`} />
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

    </section>
  )

}
