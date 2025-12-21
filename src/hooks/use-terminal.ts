import { useState } from "react";

const useTerminal = () => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;

    if (key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return { handleKeyDown, input, setInput };
};

export default useTerminal;
