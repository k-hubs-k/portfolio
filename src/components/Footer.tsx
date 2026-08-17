import { ArrowUp } from "lucide-react";
import { useI18n } from "../hooks/useI18n";
import { profile } from "../lib/constants";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface0/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="font-mono text-xs text-subtext0">
          © {year} {profile.name} — {t.footer.rights}
        </p>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 rounded-full border border-surface1/60 bg-surface0/40 px-3.5 py-1.5 font-mono text-xs text-subtext1">
            🐈 {t.footer.catppuccin}
          </span>
          <a
            href="#hero"
            aria-label={t.footer.backToTop}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-surface1/60 bg-surface0/40 text-subtext0 transition-all duration-300 hover:-translate-y-1 hover:border-mauve/60 hover:text-mauve"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
