import type { Experience } from "../data/portfolioDataType";

interface ExperienceProps {
  experiences: Experience[];
}

const Experiences = ({ experiences }: ExperienceProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="text-xl font-bold text-[#00ff00] mb-4 md:text-lg">
        💼 Work Experience
      </div>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="mb-6 pb-4 border-b border-[#3d3d3d] last:border-b-0"
        >
          <div className="text-[#00ff00] font-bold text-lg mb-1">
            {exp.role}
          </div>
          <div className="text-[#4ecdc4] mb-2">
            {exp.company} | {exp.period}
          </div>
          <div className="text-[#b0b0b0]">{exp.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
