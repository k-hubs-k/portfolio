import { useEffect, useState, type ReactNode } from "react";
import { dicts, type Lang } from "./dicts";
import { I18nContext } from "./i18n-context";

const STORAGE_KEY = "portfolio-lang"

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === "fr" ? "fr" : "en"
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang])

  const toEnglish = () => setLang("en")
  const toFrench = () => setLang("fr")

  return (
    <I18nContext.Provider value={{ lang, setLang, toEnglish, toFrench, t: dicts[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}
