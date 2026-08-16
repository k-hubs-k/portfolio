import { animate, motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { EASE } from "./constants";

export interface MagneticProps {
  children: ReactNode, strength?: number, className?: string
}

export function Magnetic({
  children,
  strength = 0.35,
  className = ""
}: MagneticProps) {

  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 180, damping: 14, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 180, damping: 14, mass: 0.2 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return

    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}

interface RevealProps {
  children: ReactNode,
  delay?: number,
  y?: number,
  className?: string
}

export function Reveal({ children, delay = 0, y = 28, className = "" }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface SectionHeadingProps {
  index: string, tag: string, title: string, center?: boolean
}

export function SectionHeading({
  index, tag, title, center = false
}: SectionHeadingProps) {
  return (
    <Reveal className={`mb-14 ${center ? "text-center" : ""}`}>
      <p className="mb-3 font-mono text-sm text-mauve">
        <span className="text-surface2">{"//"}</span> {index}. {tag}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </Reveal>
  )
}

interface CountUpProps {
  to: number,
  suffix?: string,
  duration?: number
}

export function CountUp({ to, suffix = "", duration = 1.6 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, to, { duration, ease: "easeOut", onUpdate: (v) => setValue(Math.round(v)) })

    return () => controls.stop()

  }, [inView, to, duration])

  return (
    <span ref={ref}>{value}{suffix}</span>
  )
}
