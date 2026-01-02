import type { Education } from "../data/portfolioDataType";

interface EducationProps {
  educations: Education[];
  certifications: string[];
}
const Educations = ({ educations, certifications }: EducationProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="
        font-bold text-[#00ff00] mb-3
        text-base
        sm:text-lg sm:mb-3.5
        md:text-xl md:mb-4
      ">
        🎓 Education
      </div>
      {educations.map((edu, index) => (
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
            {edu.degree}
          </div>
          <div className="
            text-[#4ecdc4] mb-1.5 break-words
            text-xs
            sm:text-sm sm:mb-2
            md:text-base
          ">
            {edu.institution} | {edu.year}
          </div>
        </div>
      ))}
      {certifications.length > 0 && (
        <>
          <div className="
            text-[#4ecdc4] mb-2
            text-sm
            sm:text-base sm:mb-2.5
            md:text-lg md:mb-3
          ">
            Certifications:
          </div>
          <ul className="
            ml-4 mt-1.5
            sm:ml-5 sm:mt-2
            md:ml-6
          ">
            {certifications.map((cert, index) => (
              <li key={index} className="
                mb-1 text-[#e0e0e0] break-words
                text-xs
                sm:text-sm
                md:text-base
              ">
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
