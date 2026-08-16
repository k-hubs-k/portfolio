import { Mail } from "lucide-react";
import type { ComponentType } from "react";
import { Facebook, Github, Linkedin } from "./brand-icons";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const profile = {
  name: "Hubert RAHERIMANANTENA",
  email: "raherihubert@gmail.com"
}

export const socials: { name: string; url: string; icon: ComponentType<{ className?: string }> }[] = [
  { name: "GitHub", url: "https://github.com/k-hubs-k", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/hubert-raherimanantena-97a485324/", icon: Linkedin },
  { name: "Facebook", url: "https://www.facebook.com/hubert.raherimanantena/", icon: Facebook },
  { name: "Email", url: "mailto:raherihubert@gmail.com", icon: Mail },
]

export const techList = [
  { name: "React", color: "bg-sky" },
  { name: "TypeScript", color: "bg-blue" },
  { name: "Tailwind CSS", color: "bg-teal" },
  { name: "Next.js", color: "bg-text" },
  { name: "Framer Motion", color: "bg-mauve" },
  { name: "Node.js", color: "bg-green" },
  { name: "PostgreSQL", color: "bg-sapphire" },
  { name: "NestJS", color: "bg-peach" },
  { name: "Docker", color: "bg-blue" },
  { name: "GraphQL", color: "bg-pink" },
  { name: "Vite", color: "bg-yellow" },
  { name: "Vitest", color: "bg-green" },
];
