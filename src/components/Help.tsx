import type { Command } from "../types/terminal";

interface HelpProps {
  commands: Record<string, Command>;
}
const Help = ({ commands }: HelpProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="
        font-bold text-[#4ecdc4] mb-3
        text-base
        sm:text-lg sm:mb-4
      ">
        Available Commands:
      </div>
      {Object.values(commands).map((cmd) => (
        <div key={cmd.name} className="
          mb-2
          sm:mb-2.5
        ">
          <div className="
            flex flex-col gap-1
            sm:flex-row sm:gap-0
          ">
            <span className="
              text-[#00ff00] font-bold
              text-sm
              sm:text-base sm:min-w-[100px] sm:inline-block
              md:min-w-[120px]
            ">
              {cmd.name}
            </span>
            <span className="
              text-[#e0e0e0]
              text-xs
              sm:text-sm
              md:text-base
            ">
              <span className="hidden sm:inline"> - </span>
              {cmd.description}
            </span>
          </div>
          {cmd.usage && (
            <div className="
              text-[#8b8b8b] italic
              text-xs ml-2
              sm:text-sm sm:ml-[100px]
              md:ml-[120px]
            ">
              Usage: {cmd.usage}
            </div>
          )}
        </div>
      ))}
      <div className="
        mt-3 p-2 bg-[rgba(78,205,196,0.1)] border-l-[3px] border-[#4ecdc4] text-[#4ecdc4]
        text-xs
        sm:mt-4 sm:p-3 sm:text-sm
      ">
        💡 Tip: Use arrow keys to navigate command history, Tab for autocomplete
      </div>
    </div>
  );
};

export default Help;
