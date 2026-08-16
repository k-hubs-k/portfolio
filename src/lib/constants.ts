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
