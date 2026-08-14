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
  }
}

export const dicts: Record<Lang, Dict> = { en, fr }
