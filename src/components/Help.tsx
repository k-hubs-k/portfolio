import type { Command } from "../types/terminal";

interface HelpProps {
  commands: Record<string, Command>;
}
const Help = ({ commands }: HelpProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="font-bold text-[#4ecdc4] mb-4">Available Commands:</div>
      {Object.values(commands).map((cmd) => (
        <div key={cmd.name} className="mb-2">
          <span className="text-[#00ff00] font-bold min-w-[120px] inline-block md:min-w-[100px]">
            {cmd.name}
          </span>
          <span className="text-[#e0e0e0]"> - {cmd.description}</span>
          {cmd.usage && (
            <div className="text-[#8b8b8b] ml-[120px] italic md:ml-[100px]">
              {" "}
              Usage: {cmd.usage}
            </div>
          )}
        </div>
      ))}
      <div className="mt-4 p-3 bg-[rgba(78,205,196,0.1)] border-l-[3px] border-[#4ecdc4] text-[#4ecdc4]">
        💡 Tip: Use arrow keys to navigate command history, Tab for autocomplete
      </div>
    </div>
  );
};

export default Help;
