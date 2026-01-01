import type { Education } from "../data/portfolioDataType";

interface EducationProps {
  educations: Education[];
  certifications: string[];
}
const Educations = ({ educations, certifications }: EducationProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="text-xl font-bold text-[#00ff00] mb-4 md:text-lg">
        🎓 Education
      </div>
      {educations.map((edu, index) => (
        <div
          key={index}
          className="mb-6 pb-4 border-b border-[#3d3d3d] last:border-b-0"
        >
          <div className="text-[#00ff00] font-bold text-lg mb-1">
            {edu.degree}
          </div>
          <div className="text-[#4ecdc4] mb-2">
            {edu.institution} | {edu.year}
          </div>
        </div>
      ))}
      {certifications.length > 0 && (
        <>
          <div className="text-lg text-[#4ecdc4] mb-3">Certifications:</div>
          <ul className="ml-6 mt-2">
            {certifications.map((cert, index) => (
              <li key={index} className="mb-1 text-[#e0e0e0]">
                {cert}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Educations;
