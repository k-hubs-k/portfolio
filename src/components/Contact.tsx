import { useState } from "react";
import { useI18n } from "../hooks/useI18n"
import { profile, socials } from "../lib/constants"
import { Magnetic, Reveal, SectionHeading } from "../lib/effects"
import { Check, Copy } from "lucide-react";

export default function Contact() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading index="05" tag={t.contact.tag} title={t.contact.title} center />

      <Reveal className="text-center">
        <p className="font-mono text-sm text-green">
          <span className="text-surface2">{"//"}</span> {t.contact.lead}
        </p>

        <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl md:text-6xl">
          {t.contact.heading1}{" "}
          <span className="text-gradient">{t.contact.heading2}</span>{" "}
          {t.contact.heading3}
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-subtext1">
          {t.contact.paragraph}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Magnetic>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2.5 rounded-full bg-linear-to-r from-mauve to-blue px-8 py-4 font-mono text-base font-semibold shadow-lg shadow-mauve/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-mauve/40"
            >
              {copied ? (
                <Check className="h-5 w-5" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
              {copied ? t.contact.copied : profile.email}
            </button>
          </Magnetic>

          <div className="flex items-center gap-3">
            {socials.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-surface1 bg-surface0/30 text-subtext0 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-mauve/60 hover:text-mauve"
              >
                <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

      </Reveal>
    </section>
  )
}
