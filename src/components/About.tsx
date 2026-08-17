import { useI18n } from "../hooks/useI18n"
import { CountUp, Reveal, SectionHeading } from "../lib/effects"

export default function About() {
  const { t } = useI18n()

  const infos = [
    { key: "name", value: t.about.code.name, color: "text-pink" },
    { key: "location", value: t.about.code.location, color: "text-teal" },
    { key: "role", value: t.about.code.role, color: "text-mauve" },
    { key: "focus", value: t.about.code.focus, color: "text-sky" }
  ]

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading index="01" tag={t.about.tag} title={t.about.title} />

      <div className="mb-20 grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-subtext1">{t.about.p1}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-subtext1">{t.about.p2}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {t.about.stats.map(({ value, suffix, label }) => (
                <div key={label} className="glass rounded-2xl p-5 text-center transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-gradient font-display text-3xl font-bold">
                    <CountUp to={value} suffix={suffix} />
                  </p>
                  <p className="mt-1 font-mono text-xs leading-snug text-subtext0">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="glass relative overflow-hidden rounded-2xl shadow-2xl shadow-crust/50">

            <div className="flex items-center gap-2 border-b border-surface0/70 px-5 py-3.5">
              {/* Mac like window control buttons */}
              <span className="w-3 h-3 rounded-full bg-red/80" />
              <span className="w-3 h-3 rounded-full bg-yellow/80" />
              <span className="w-3 h-3 rounded-full bg-green/80" />

              <span className="ml-3 font-mono text-xs text-subtext0">
                {t.about.codeTitle}
              </span>
            </div>

            <div className="p-6 font-mono text-sm leading-loose">
              <p className="text-surface2">const <span className="text-yellow">developer</span> = {"{"}</p>
              {infos.map(({ key, value, color }) => (
                <p key={key} className="pl-5 text-subtext0">
                  <span className="text-blue">{key}</span>
                  <span className="text-surface2">: </span>
                  <span className={color}>{value}</span>,
                </p>
              ))}
              <p className="pl-5 text-subtext0">
                <span className="text-blue">status</span>
                <span className="text-surface2">: </span>
                <span className="text-green">"{t.about.code.status}"</span>
              </p>
              <p className="text-surface2">{"}"};</p>

              <p className="mt-4 text-subtext1">
                <span className="text-mauve">export default </span>
                <span className="text-yellow">developer</span>;
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
