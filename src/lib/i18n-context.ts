import { createContext } from "react";
import type { Dict, Lang } from "./dicts";

export type I18nContextValue = {
  lang: Lang,
  setLang: (l: Lang) => void
  toggle: () => void
  t: Dict;
}

export const I18nContext = createContext<I18nContextValue | null>(null)
