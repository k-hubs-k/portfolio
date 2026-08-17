import { useEffect, useState } from "react";

export function useTypewriter(words: string[], typeSpeed = 90, deleteSpeed = 45, pause = 1400) {
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout: number | undefined

    if (!deleting && text == current) {
      // Finished writing the current text, wait for a "pause" seconds and begin deletion
      timeout = window.setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === "") {

      timeout = window.setTimeout(() => {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)

      }, deleteSpeed)
    } else {

      timeout = window.setTimeout(() =>
        setText(deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)

        ), deleting ? deleteSpeed : typeSpeed)
    }

    return () => window.clearTimeout(timeout)

  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return text
}
