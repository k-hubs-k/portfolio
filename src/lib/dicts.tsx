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
    downloadCV: "Download my CV"
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

  projects: {
    tag: "projects",
    title: "Selected work",
    featured: "featured",
    viewMore: "view more on GitHub",
    items: [
      {
        title: "Aurora",
        emoji: "📈",
        description:
          "Realtime analytics dashboard streaming live metrics over WebSockets. Interactive D3 charts, zero-jank re-renders and buttery-smooth 60fps.",
        tags: ["React", "TypeScript", "D3", "WebSockets"],
        gradient: "from-mauve to-blue",
        featured: true,
      }
    ],
  },

  experience: {
    tag: "experience",
    title: "Work History",
    items: [
      {
        role: "Junior Full-Stack Developer",
        company: "MEDDoC",
        period: "2024 - 2025",
        dot: "bg-mauve",
        points: [
          "Contributed to software development for the MEDDoC e-health startup platform.",
          "Designed and implemented core appointment scheduling workflows for healthcare professionals.",
          "Optimized critical React component rendering and frontend application performance."
        ]
      }
    ],
  },

  contact: {
    tag: "contact",
    title: "Let's connect",
    lead: "have an opportunity or a project in mind?",
    heading1: "Let's build something",
    heading2: "great",
    heading3: "together.",
    paragraph:
      "I'm currently open to new roles and freelance collaborations. Whether it's a product, a team, or just a coffee — my inbox is always open.",
    copied: "Copied!",
  },
  footer: {
    rights: "crafted with React, TypeScript, Tailwind & Framer Motion",
    catppuccin: "Catppuccin Mocha",
    backToTop: "Back to top",
  },
  meta: {
    switchTheme: "Toggle theme",
    switchLang: "Switch language",
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
    downloadCV: "Télécharger mon CV"
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

  projects: {
    tag: "projets",
    title: "Projets sélectionnés",
    featured: "à la une",
    viewMore: "voir plus sur GitHub",
    items: [
      {
        title: "Aurora",
        emoji: "📈",
        description:
          "Dashboard d'analytics temps réel diffusant des métriques live via WebSockets. Graphiques D3 interactifs, zéro re-render parasite et 60fps fluides.",
        tags: ["React", "TypeScript", "D3", "WebSockets"],
        gradient: "from-mauve to-blue",
        featured: true,
      },
    ],
  },

  experience: {
    tag: "parcours",
    title: "Parcours professionnel",
    items: [
      {
        role: "Développeur Full-Stack Junior",
        company: "MEDDoC",
        period: "2024 - 2025",
        dot: "bg-mauve",
        points: [
          "Participation active au développement d'une solution logicielle e-santé au sein de la startup MEDDoC.",
          "Conception et intégration du module de prise de rendez-vous en ligne pour les professionnels de santé.",
          "Optimisation des performances et de la réactivité des composants React clés de l'application."
        ]
      }
    ],
  },

  contact: {
    tag: "contact",
    title: "Contact",
    lead: "une opportunité ou un projet en tête ?",
    heading1: "Construisons quelque chose",
    heading2: "génial",
    heading3: "ensemble.",
    paragraph:
      "Je suis actuellement ouvert aux nouveaux postes et aux collaborations freelance. Qu'il s'agisse d'un produit, d'une équipe ou juste d'un café — ma boîte mail est toujours ouverte.",
    copied: "Copié !",
  },
  footer: {
    rights: "conçu avec React, TypeScript, Tailwind & Framer Motion",
    catppuccin: "Catppuccin Mocha",
    backToTop: "Retour en haut",
  },
  meta: {
    switchTheme: "Changer de thème",
    switchLang: "Changer de langue",
  },

}

export const dicts: Record<Lang, Dict> = { en, fr }
