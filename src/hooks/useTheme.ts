import { useEffect, useState } from "react";

type Theme = "dark" | "light"
const STORAGE_KEY = "hubs-portfolio-theme"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = document.documentElement.dataset.theme
    return stored === "light" ? "light" : "dark";
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggle = () => setTheme((t) => t === "light" ? "dark" : "light")

  return { theme, toggle }
}
