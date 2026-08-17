import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useI18n } from "../hooks/useI18n";
import { SectionHeading, Reveal } from "../lib/effects";

export default function Experience() {
  const { t } = useI18n();
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 70, damping: 22 });

  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading index="04" tag={t.experience.tag} title={t.experience.title} />

      <div ref={lineRef} className="relative">
        <motion.div
          style={{ scaleY }}
          className="absolute bottom-0 left-1.25 top-0 w-px origin-top bg-linear-to-b from-mauve via-blue to-teal"
        />
        <div className="space-y-14">
          {t.experience.items.map(({ role, company, period, dot, points }, i) => (
            <Reveal key={company} delay={i * 0.07}>
              <div className="relative pl-12">
                <span
                  className={`absolute left-0 top-1.5 h-2.75 w-2.75 rounded-full ${dot} ring-4 ring-base`}
                />
                <p className="font-mono text-sm text-mauve">{period}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-text sm:text-2xl">
                  {role}
                </h3>
                <p className="mt-0.5 font-medium text-blue">{company}</p>
                <ul className="mt-4 space-y-2.5">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 leading-relaxed text-subtext1"
                    >
                      <span className="mt-0.5 text-mauve">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

