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
}

export const dicts: Record<Lang, Dict> = { en, fr }
