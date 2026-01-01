import type { PortfolioData } from "../data/portfolioDataType";

interface AboutProps {
  portfolioData: PortfolioData;
}
const About = ({ portfolioData }: AboutProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="text-xl font-bold text-[#00ff00] mb-4 md:text-lg">
        👋 {portfolioData.name}
      </div>
      <div className="text-lg text-[#4ecdc4] mb-3">{portfolioData.title}</div>
      <div className="whitespace-pre-wrap leading-[1.8] mb-4">
        {portfolioData.about}
      </div>
    </div>
  );
};

export default About;
