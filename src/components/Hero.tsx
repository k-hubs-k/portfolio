import { motion, type Variants } from "motion/react";
import { EASE, profile, socials } from "../lib/constants";
import { Magnetic } from "../lib/effects";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { useI18n } from "../hooks/useI18n";
import { useTypewriter } from "../hooks/useTypewriter";
import useHero from "../hooks/useHero";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const BADGES = [
  { label: "⚛ React", className: "-top-5 -right-4", duration: 6 },
  { label: "🐈 Catppuccin", className: "-bottom-5 -left-6", duration: 7 },
  { label: "🟦 TypeScript", className: "-top-8 left-10", duration: 8 },
  { label: "⚡ Vite", className: "-right-8 bottom-16", duration: 6.5 },
];

export default function Hero() {
  const { t } = useI18n()
  const typed = useTypewriter(t.hero.roles)
  const { downloadCV } = useHero()

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Effects */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="bg-grid absolute inset-0 mask-[radial-gradient(ellipse_75%_65%_at_50%_40%,black,transparent)]"
          animate={{
            backgroundPosition: ["0px 0px", "28px 28px"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -left-24 -top-32 h-110 w-110 rounded-full bg-mauve/20 blur-[110px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 top-1/3 h-100 w-100 rounded-full bg-blue/15 blur-[110px]"
          animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/3 h-95 w-95 rounded-full bg-pink/15 blur-[110px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>


      { /* Page content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 pb-24 pt-28 lg:grid-cols-[1.15fr_1fr]"
      >
        <div className="relative z-10">
          <motion.p
            variants={item}
            className="mb-5 flex items-center gap-2 font-mono text-sm text-subtext0"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green" />
            {t.hero.status}
          </motion.p>

          <motion.p
            variants={item}
            className="mb-2 font-mono text-mauve"
          >
            <span className="text-surface2">{"//"}</span>
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-gradient font-display text-4xl font-extrabold tracking-tight md:text-7xl"
          >{profile.name}</motion.h1>

          <motion.div variants={item}
            className="mt-4 flex min-h-[2.4rem] items-center gap-2 font-mono text-lg text-subtext1"
          >
            <span className="text-mauve">&gt;_</span>
            <span className="text-text">{typed}</span>

            {/* Carret effect */}
            <span className="animate-blink mt-1 h-6 w-3 shrink-0 bg-mauve" />
          </motion.div>


          <motion.p variants={item} className="mt-6 max-w-lg text-lg leading-relaxed text-subtext1">
            {t.hero.description}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a href="#projects"
                className="group flex items-center gap-2 rounded-full bg-linear-to-r from-mauve to-blue px-7 py-3.5 font-semibold text-crust shadow-lg shadow-mauve/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-mauve/40"
              >
                {t.hero.viewWork}
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                className="rounded-full border border-surface1 bg-surface0/30 px-7 py-3.5 font-semibold text-text backdrop-blur transition-colors duration-300 hover:border-mauve/60 hover:text-mauve"
              >
                {t.hero.getInTouch}
              </a>
            </Magnetic>
            <Magnetic>
              <a
                onClick={downloadCV}
                className="group flex items-center gap-2 rounded-full bg-linear-to-r from-mauve to-blue px-7 py-3.5 font-semibold text-crust shadow-lg shadow-mauve/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-mauve/40"
              >
                <Download />
                {t.hero.downloadCV}
              </a>
            </Magnetic>
          </motion.div>


          <motion.div variants={item} className="mt-10 flex items-center gap-3">
            {socials.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-surface1 bg-surface0/30 text-subtext0 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-mauve/60 hover:text-mauve"
              >
                <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative z-10 hidden lg:block"
        >
          <div className="relative">
            {BADGES.map(({ label, className, duration }) => (
              <motion.span
                key={label}
                className={`glass absolute z-10 rounded-full px-3.5 py-2 font-mono text-xs font-medium text-subtext1 shadow-lg ${className}`}
                animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
                transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
              >
                {label}
              </motion.span>
            ))}

            <motion.div>
              <div className="flex items-center gap-2 border-b border-surface0/70 px-5 py-3.5">
                <span className="h-3 w-3 rounded-full bg-red/80" />
                <span className="h-3 w-3 rounded-full bg-yellow/80" />
                <span className="h-3 w-3 rounded-full bg-green/80" />
                <span className="ml-3 font-mono text-xs text-subtext0">
                  {t.hero.term.title}
                </span>
              </div>

              <div className="space-y-3 p-6 font-mono text-sm leading-relaxed">
                {t.hero.term.lines.map((line, i) => (
                  <motion.div
                    key={line.cmd}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4, delay: 0.9 + i * 0.45, ease: EASE
                    }}
                  >
                    <p className="text-subtext0">
                      <span className="text-green">➜</span>{" "}
                      <span className="text-surface2">~</span>{" "}
                      <span className="text-mauve">{line.cmd}</span>
                    </p>
                    <p className="ml-1 text-teal">{line.out}</p>
                  </motion.div>
                ))}
              </div>

              {/* Prompt line  */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + t.hero.term.lines.length * 0.45 }}
                className="text-subtext0"
              >
                <span className="text-green">➜</span>{" "}
                <span className="text-surface2">~</span>{" "}
                <span className="animate-blink ml-1 inline-block h-4 w-2 translate-y-0.5 bg-mauve" />
              </motion.p>

            </motion.div>
          </div>

        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-xs text-subtext0 transition-colors hover:text-mauve"
      >
        {t.hero.scrollDown}
        <motion.span
          animate={{ y: [0, 6, -0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.span>
      </motion.a>

    </section >
  )

}
