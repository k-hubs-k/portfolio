import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "../lib/constants";
import { useI18n } from "../hooks/useI18n";

const SECTION_IDS = ["about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const { t, lang, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false) // Responsive hamburger menu
  const [active, setActive] = useState("");

  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'experience', label: t.nav.experience },
    { id: 'contact', label: t.nav.contact },
  ]

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY > 24))
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)

      if (el) observer.observe(el)

    })

    return () => observer.disconnect();
  })

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open
        ? "glass shadow-[0_10px_40px_rgb(0_0_0/0.3)]"
        : "border-b border-transparent bg-transparent"
        }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#hero"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight text-text">
          <span
            className="h-2.5 w-2.5 rounded-full bg-linear-to-r from-mauve to-blue transition-transform duration-300 group-hover:scale-125"
          />
          Hubs<span className="text-mauve">.</span>dev
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ id, label }, i) => (
            <li key={id}>
              <a href={`#${id}`}
                className={`group flex items-center gap-1 rounded-lg px-3 py-2 font-mono text-sm transition-colors ${active === id ? "text-mauve" : "text-subtext0 hover:text-text"
                  }`}>
                <span className="text-xs text-surface2 group-hover:text-mauve/60">
                  0{i + 1}.
                </span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggle}
          className="flex h-9 min-w-10 items-center justify-center rounded-lg border border-surface1/60 bg-surface0/30 px-2.5 font-mono text-xs font-bold text-subtext0 transition-colors hover:border-mauve/60 hover:text-mauve"
        >
          {lang === "en" ? "FR" : "EN"}
        </button>

        <a href="#contact"
          className="hidden rounded-full bg-linear-to-r from-mauve to-blue px-5 py-2 font-mono text-sm font-semibold text-crust transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-mauve/25 md:inline-block"
        >
          {t.nav.hire}
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-subtext0 transition-colors hover:text-mauve md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Responsibe hamburger menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col px-6 pb-4">
              {links.map(({ id, label }, i) => (
                <li key={id}>
                  <a href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 border-b border-surface0/60 py-4 font-mono text-lg text-subtext1 transition-colors hover:text-mauve">
                    <span>0{i + 1}.</span>
                    {label}
                  </a>
                </li>
              ))} </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header >
  )
}
