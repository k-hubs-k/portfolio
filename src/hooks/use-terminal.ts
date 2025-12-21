import { useState } from "react";
import { executeCommand } from "../utils/commands";
import type { HistoryEntry } from "../types/terminal";

const useTerminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const handleSubmit = () => {
    if (!input.trim()) return;

    const output = executeCommand(input);

    // handle clear command specially
    if (input.trim().toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      setCommandHistory([...commandHistory, input]);
      setHistoryIndex(-1);
      return;
    }

    setHistory([...history, { command: input, output, timestamp: new Date() }]);
    setCommandHistory([...commandHistory, input]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;

    if (key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return { handleKeyDown, input, setInput, history, setHistory, historyIndex };
};

export default useTerminal;
