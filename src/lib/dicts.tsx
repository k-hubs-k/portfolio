export type Lang = "en" | "fr";

export const en = {
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    hire: "Hire me",
  },
  hero: {
    status: "Open to opportunities",
    greeting: "Hi there, I'm",
    description:
      "Full-stack developer crafting fast, accessible and beautiful digital experiences. I turn complex problems into elegant, pixel-perfect products — from design system to deployment.",
    viewWork: "View my work",
    getInTouch: "Get in touch",
    scrollDown: "scroll down",
    location: "Antananarivo, Madagascar",
    roles: [
      "Full-Stack Developer",
      "React Specialist",
      "TypeScript Enthusiast",
      "UI/UX Advocate",
    ],
    term: {
      title: "hubert@portfolio: ~",
      lines: [
        { cmd: "whoami", out: "Hubert - full-stack developer" },
        { cmd: "cat tools.json", out: "React · TypeScript · Tailwind · Node" },
        { cmd: "npm run build", out: "✓ build succeeded in 2.41s" },
        { cmd: "git push origin main", out: "→ feat: pre-release ✨" },
      ],
    },
  },
  about: {
    tag: "about",
    title: "About me",
    p1: (
      <>
        A developer focused on <span className="text-teal">backend and software engineering</span>, based in{" "}
        <span className="text-mauve">Antananarivo, Madagascar</span>. For me, the details that truly matter are on the server-side: API latency, clean transaction management, and rigorous data modeling.
      </>
    ),
    p2: (
      <>
        Whether I&apos;m designing microservices, securing authentication flows, or tackling algorithmic challenges, my main focus is always on writing clean, readable, testable, and maintainable code.
      </>
    ),
    stats: [
      { value: 1, suffix: "", label: "Year of experience" },
      { value: 10, suffix: "+", label: "Projects & Experiments" },
      { value: 99.9, suffix: "%", label: "Target uptime" },
      { value: 400, suffix: "+", label: "Cups of coffee" },
    ],
    codeTitle: "~/me.ts",
    code: {
      name: "Hubert RAHERIMANANTENA",
      location: "Antananarivo, Madagascar",
      role: "Full-Stack developer",
      focus: '["React", "TypeScript", "Node.js"]',
      status: "Open to work",
    },
  },

  skills: {
    tag: "skills",
    title: "Tech arsenal",
    groups: [
      {
        title: "Frontend",
        emoji: "🧩",
        dot: "bg-mauve",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vite"],
      },
      {
        title: "Backend",
        emoji: "🛠",
        dot: "bg-green",
        skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST", "NestJS"],
      },
      {
        title: "Tooling & DevOps",
        emoji: "🚀",
        dot: "bg-blue",
        skills: ["Git & GitHub", "Docker", "CI/CD", "Vitest", "Playwright"],
      },
      {
        title: "Design",
        emoji: "🎨",
        dot: "bg-pink",
        skills: ["Figma", "Design Systems", "UI/UX", "Accessibility", "Motion"],
      },
    ],
  },

}

export type Dict = typeof en;

export const fr: Dict = {
  nav: {
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    experience: "Expérience",
    contact: "Contact",
    hire: "Engagez-moi",
  },

  hero: {
    status: "ouvert aux opportunités",
    greeting: "Salut, je suis",
    description:
      "Développeur full-stack qui conçoit des expériences digitales rapides, accessibles et élégantes. Je transforme des problèmes complexes en produits nets et précis — du design system au déploiement.",
    viewWork: "Voir mes projets",
    getInTouch: "Contactez-moi",
    scrollDown: "descendre",
    location: "Antananarivo, Madagascar",
    roles: [
      "Développeur Full-Stack",
      "Spécialiste React",
      "Passionné TypeScript",
      "Défenseur UI/UX",
    ],
    term: {
      title: "hubert@portfolio: ~",
      lines: [
        { cmd: "whoami", out: "Hubert - développeur full-stack" },
        { cmd: "cat tools.json", out: "React · TypeScript · Tailwind · Node" },
        { cmd: "npm run build", out: "✓ build réussi en 2,41 s" },
        { cmd: "git push origin main", out: "→ feat: pre-release ✨" },
      ],
    },
  },

  about: {
    tag: "à propos",
    title: "À propos de moi",
    p1: (
      <>
        Développeur orienté <span className="text-teal">backend et ingénierie logicielle</span> à{" "}
        <span className="text-mauve">Antananarivo, Madagascar</span>. Les détails qui comptent pour moi se trouvent côté serveur : la latence d&apos;une API, la gestion propre des transactions et la modélisation rigoureuse de la donnée.
      </>
    ),
    p2: (
      <>
        Qu&apos;il s&apos;agisse de concevoir des microservices, de sécuriser des flux d&apos;authentification ou d&apos;explorer des problématiques d&apos;algorithmique, j&apos;accorde une importance majeure à l&apos;écriture d&apos;un code lisible, testable et maintenable.
      </>
    ), stats: [
      { value: 1, suffix: "", label: "Année d'expérience" },
      { value: 10, suffix: "+", label: "Projets & Expérimentations" },
      { value: 99.9, suffix: "%", label: "Uptime visé" },
      { value: 400, suffix: "+", label: "Tasses de café" },
    ],
    codeTitle: "~/moi.ts",
    code: {
      name: "Hubert RAHERIMANANTENA",
      location: "Antananarivo, Madagascar",
      role: "Développeur Full-Stack",
      focus: '["React", "TypeScript", "Node.js"]',
      status: "Disponible",
    },
  },

  skills: {
    tag: "compétences",
    title: "Stack technique",
    groups: [
      {
        title: "Frontend",
        emoji: "🧩",
        dot: "bg-mauve",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vite"],
      },
      {
        title: "Backend",
        emoji: "🛠",
        dot: "bg-green",
        skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST", "NestJS"],
      },
      {
        title: "Outils & DevOps",
        emoji: "🚀",
        dot: "bg-blue",
        skills: ["Git & GitHub", "Docker", "CI/CD", "Vitest", "Playwright"],
      },
      {
        title: "Design",
        emoji: "🎨",
        dot: "bg-pink",
        skills: ["Figma", "Systèmes de design", "UI/UX", "Accessibilité", "Motion design"],
      },
    ],
  },
}

export const dicts: Record<Lang, Dict> = { en, fr }
