import { useEffect, useRef } from "react";
import useTerminal from "./hooks/use-terminal";

const Terminal = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { handleKeyDown, input, setInput, history, suggestion } = useTerminal();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="w-[90%] max-w-[1200px] h-[85vh] my-8 mx-auto bg-[#1e1e1e] rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden font-mono md:w-[95%] md:h-[90vh] md:my-4"
      onClick={focusInput}
    >
      {/* Terminal Header */}
      <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-4 border-b border-[#3d3d3d]">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block"></span>
        </div>
        <div className="text-[#8b8b8b] text-sm flex-1 text-center">
          visitor@portfolio:~
        </div>
      </div>

      <div
        className="flex-1 p-6 overflow-y-auto bg-[#1e1e1e] text-[#00ff00] cursor-text terminal-scrollbar md:p-4 md:text-sm"
        ref={terminalRef}
      >
        {history.map((entry, index) => (
          <div key={index} className="mb-4">
            {entry.command && (
              <div className="flex gap-2 mb-2">
                <span className="text-[#00ff00] font-bold whitespace-nowrap">
                  visitor@portfolio:~$
                </span>
                <span className="text-white">{entry.command}</span>
              </div>
            )}
            <div
              className={`ml-0 leading-relaxed ${
                entry.output.type === "error"
                  ? "text-[#ff6b6b]"
                  : entry.output.type === "info"
                    ? "text-[#4ecdc4]"
                    : "text-[#00ff00]"
              }`}
            >
              {entry.output.content}
            </div>
          </div>
        ))}

        <div className="flex gap-2 items-center">
          <span className="text-[#00ff00] font-bold whitespace-nowrap">
            visitor@portfolio:~$
          </span>
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-white font-mono text-base w-full caret-[#00ff00]"
              autoFocus
              spellCheck={false}
            />
            {suggestion && (
              <span className="absolute left-0 top-0 text-[#4d4d4d] pointer-events-none font-mono text-base">
                {suggestion}
              </span>
            )}
          </div>
        </div>

        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default Terminal;
