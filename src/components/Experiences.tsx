import type { Experience } from "../data/portfolioDataType";

interface ExperienceProps {
  experiences: Experience[];
}

const Experiences = ({ experiences }: ExperienceProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="
        font-bold text-[#00ff00] mb-3
        text-base
        sm:text-lg sm:mb-3.5
        md:text-xl md:mb-4
      ">
        💼 Work Experience
      </div>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="
            mb-4 pb-3 border-b border-[#3d3d3d] last:border-b-0
            sm:mb-5 sm:pb-4
            md:mb-6
          "
        >
          <div className="
            text-[#00ff00] font-bold mb-1
            text-sm
            sm:text-base
            md:text-lg
          ">
            {exp.role}
          </div>
          <div className="
            text-[#4ecdc4] mb-1.5 break-words
            text-xs
            sm:text-sm sm:mb-2
            md:text-base
          ">
            {exp.company} | {exp.period}
          </div>
          <div className="
            text-[#b0b0b0] break-words
            text-xs
            sm:text-sm
            md:text-base
          ">
            {exp.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
