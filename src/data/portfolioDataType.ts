export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  website: string;
  about: string;

  skills: Record<string, string[]>;

  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  highlights: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}
