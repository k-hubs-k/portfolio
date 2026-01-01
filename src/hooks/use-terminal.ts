import { useEffect, useState } from "react";
import { executeCommand, getCommandSuggestions } from "../utils/commands";
import type { HistoryEntry } from "../types/terminal";

const useTerminal = () => {
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestion, setSuggestion] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>(() => {
    const welcomeOutput = executeCommand("welcome");

    return [
      {
        command: "",
        output: welcomeOutput,
        timestamp: new Date(),
      },
    ];
  });

  useEffect(() => {
    // Get command suggestions
    if (input) {
      const suggestions = getCommandSuggestions(input);
      if (suggestions.length === 1 && suggestions[0] !== input) {
        setSuggestion(suggestions[0]);
      } else {
        setSuggestion("");
      }
    } else {
      setSuggestion("");
    }
  }, [input]);

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
    if (key === "ArrowUp") {
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex < commandHistory.length - 1
            ? historyIndex + 1
            : historyIndex;

        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - historyIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (suggestion) {
        setInput(suggestion);
        setSuggestion("");
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    } else if (e.key === "c" && e.ctrlKey) {
      e.preventDefault();
      setInput("");
    }
  };

  return {
    handleKeyDown,
    input,
    setInput,
    history,
    setHistory,
    historyIndex,
    suggestion,
  };
};

export default useTerminal;
