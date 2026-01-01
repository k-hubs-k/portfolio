import type { Project } from "../data/portfolioDataType";

interface ProjectsProps {
  projects: Project[];
}
const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="text-xl font-bold text-[#00ff00] mb-4 md:text-lg">
        🚀 Featured Projects
      </div>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex gap-4 mb-6 pb-4 border-b border-[#3d3d3d] last:border-b-0"
        >
          <div className="text-[#4ecdc4] font-bold text-xl">[{index + 1}]</div>
          <div className="flex-1">
            <div className="text-[#00ff00] font-bold text-lg mb-1">
              {project.name}
            </div>
            <div className="text-[#b0b0b0] mb-2">{project.description}</div>
            <div className="text-[#8b8b8b] text-sm">
              {project.technologies.join(" • ")}
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4 p-3 bg-[rgba(78,205,196,0.1)] border-l-[3px] border-[#4ecdc4] text-[#4ecdc4]">
        💡 Type 'projects [number]' to see details (e.g., 'projects 1')
      </div>
    </div>
  );
};

export default Projects;
