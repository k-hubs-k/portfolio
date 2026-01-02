import type { PortfolioData } from "../data/portfolioDataType";

interface AboutProps {
  portfolioData: PortfolioData;
}
const About = ({ portfolioData }: AboutProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="
        font-bold text-[#00ff00] mb-3
        text-base
        sm:text-lg sm:mb-3.5
        md:text-xl md:mb-4
      ">
        👋 {portfolioData.name}
      </div>
      <div className="
        text-[#4ecdc4] mb-2
        text-sm
        sm:text-base sm:mb-2.5
        md:text-lg md:mb-3
      ">
        {portfolioData.title}
      </div>
      <div className="
        whitespace-pre-wrap leading-[1.6] mb-3
        text-xs
        sm:text-sm sm:leading-[1.7] sm:mb-3.5
        md:text-base md:leading-[1.8] md:mb-4
      ">
        {portfolioData.about}
      </div>
    </div>
  );
};

export default About;
