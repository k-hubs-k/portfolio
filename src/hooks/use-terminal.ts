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

  const handleSubmit = (commandToExecute?: string) => {
    const commandInput = commandToExecute || input;
    if (!commandInput.trim()) return;

    const output = executeCommand(commandInput);

    // handle clear command specially
    if (commandInput.trim().toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      setCommandHistory([...commandHistory, commandInput]);
      setHistoryIndex(-1);
      return;
    }

    setHistory([
      ...history,
      { command: commandInput, output, timestamp: new Date() },
    ]);
    setCommandHistory([...commandHistory, commandInput]);
    setHistoryIndex(-1);
    setInput("");
  };

  // Programmatic command execution for tour
  const executeCommandProgrammatically = (command: string) => {
    handleSubmit(command);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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

  const executeTerminalCommand = (command: string) => {
    const output = executeCommand(command);
    setHistory([
      ...history,
      { command: command, output, timestamp: new Date() },
    ]);
  };

  return {
    handleKeyDown,
    input,
    setInput,
    history,
    setHistory,
    historyIndex,
    suggestion,
    executeCommandProgrammatically,
    executeCommand: executeTerminalCommand,
  };
};

export default useTerminal;
