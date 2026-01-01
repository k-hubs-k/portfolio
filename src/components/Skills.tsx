import type { PortfolioData } from "../data/portfolioDataType";

interface SkillsProps {
  portfolioData: PortfolioData;
}
const Skills = ({ portfolioData }: SkillsProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="text-xl font-bold text-[#00ff00] mb-4 md:text-lg">
        💻 Technical Skills
      </div>
      {Object.entries(portfolioData.skills).map(([category, items]) => (
        <div key={category} className="mb-4">
          <div className="text-[#00ff00] font-bold mb-1">{category}:</div>
          <div className="text-[#e0e0e0] ml-6">{items.join(" • ")}</div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
