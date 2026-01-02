import type { Project } from "../data/portfolioDataType";

interface ProjectsProps {
  projects: Project[];
}
const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="
        font-bold text-[#00ff00] mb-3
        text-base
        sm:text-lg sm:mb-3.5
        md:text-xl md:mb-4
      ">
        🚀 Featured Projects
      </div>
      {projects.map((project, index) => (
        <div
          key={index}
          className="
            flex gap-2 mb-4 pb-3 border-b border-[#3d3d3d] last:border-b-0
            sm:gap-3 sm:mb-5 sm:pb-4
            md:gap-4 md:mb-6
          "
        >
          <div className="
            text-[#4ecdc4] font-bold shrink-0
            text-base
            sm:text-lg
            md:text-xl
          ">
            [{index + 1}]
          </div>
          <div className="flex-1 min-w-0">
            <div className="
              text-[#00ff00] font-bold mb-1
              text-sm
              sm:text-base
              md:text-lg
            ">
              {project.name}
            </div>
            <div className="
              text-[#b0b0b0] mb-1.5 break-words
              text-xs
              sm:text-sm sm:mb-2
              md:text-base
            ">
              {project.description}
            </div>
            <div className="
              text-[#8b8b8b] break-words
              text-xs
              sm:text-sm
            ">
              {project.technologies.join(" • ")}
            </div>
          </div>
        </div>
      ))}
      <div className="
        mt-3 p-2 bg-[rgba(78,205,196,0.1)] border-l-[3px] border-[#4ecdc4] text-[#4ecdc4]
        text-xs
        sm:mt-4 sm:p-3 sm:text-sm
      ">
        💡 Type 'projects [number]' to see details (e.g., 'projects 1')
      </div>
    </div>
  );
};

export default Projects;
