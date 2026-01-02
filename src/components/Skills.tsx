import type { PortfolioData } from "../data/portfolioDataType";

interface SkillsProps {
  portfolioData: PortfolioData;
}
const Skills = ({ portfolioData }: SkillsProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="
        font-bold text-[#00ff00] mb-3
        text-base
        sm:text-lg sm:mb-3.5
        md:text-xl md:mb-4
      ">
        💻 Technical Skills
      </div>
      {Object.entries(portfolioData.skills).map(([category, items]) => (
        <div key={category} className="
          mb-3
          sm:mb-3.5
          md:mb-4
        ">
          <div className="
            text-[#00ff00] font-bold mb-1
            text-sm
            sm:text-base
          ">
            {category}:
          </div>
          <div className="
            text-[#e0e0e0] ml-3 break-words
            text-xs leading-relaxed
            sm:text-sm sm:ml-4
            md:text-base md:ml-6
          ">
            {items.join(" • ")}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
