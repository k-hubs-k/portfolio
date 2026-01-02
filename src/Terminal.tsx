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
      className="
        w-full h-[100dvh] mx-auto bg-[#1e1e1e] flex flex-col overflow-hidden font-mono
        sm:w-[95%] sm:h-[95vh] sm:my-2 sm:rounded-lg sm:shadow-[0_10px_40px_rgba(0,0,0,0.3)]
        md:w-[90%] md:h-[90vh] md:my-4 md:shadow-[0_15px_50px_rgba(0,0,0,0.4)]
        lg:max-w-[1200px] lg:h-[85vh] lg:my-8 lg:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
      "
      onClick={focusInput}
    >
      {/* Terminal Header */}
      <div className="
        bg-[#2d2d2d] px-3 py-2 flex items-center gap-2 border-b border-[#3d3d3d]
        sm:px-4 sm:py-2.5 sm:gap-3
        md:py-3 md:gap-4
      ">
        <div className="flex gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] inline-block"></span>
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] inline-block"></span>
        </div>
        <div className="
          text-[#8b8b8b] text-xs flex-1 text-center
          sm:text-sm
        ">
          visitor@portfolio:~
        </div>
      </div>

      <div
        className="
          flex-1 p-3 overflow-y-auto bg-[#1e1e1e] text-[#00ff00] cursor-text terminal-scrollbar
          text-sm leading-relaxed
          sm:p-4 sm:text-base
          md:p-5
          lg:p-6
        "
        ref={terminalRef}
      >
        {history.map((entry, index) => (
          <div key={index} className="mb-3 sm:mb-4">
            {entry.command && (
              <div className="flex gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 flex-wrap">
                <span className="text-[#00ff00] font-bold whitespace-nowrap text-xs sm:text-sm md:text-base">
                  visitor@portfolio:~$
                </span>
                <span className="text-white text-xs sm:text-sm md:text-base break-all">{entry.command}</span>
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

        <div className="flex gap-1.5 sm:gap-2 items-center touch-target">
          <span className="text-[#00ff00] font-bold whitespace-nowrap text-xs sm:text-sm md:text-base">
            visitor@portfolio:~$
          </span>
          <div className="flex-1 relative min-h-[44px] flex items-center sm:min-h-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="
                bg-transparent border-none outline-none text-white font-mono w-full caret-[#00ff00]
                text-xs sm:text-sm md:text-base
                py-2 sm:py-0
              "
              autoFocus
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
            />
            {suggestion && (
              <span className="
                absolute left-0 top-1/2 -translate-y-1/2 text-[#4d4d4d] pointer-events-none font-mono
                text-xs sm:text-sm md:text-base
              ">
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
