import type { Project } from "../data/portfolioDataType";

interface ProjectProps {
  project: Project;
}

export const ProjectComponent = ({ project }: ProjectProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="text-xl font-bold text-[#00ff00] mb-4 md:text-lg">
        📁 {project.name}
      </div>
      <div className="mb-4 text-[#b0b0b0]">{project.description}</div>
      <div className="mb-3">
        <strong>Technologies:</strong> {project.technologies.join(", ")}
      </div>
      <div className="mb-4">
        <strong>Highlights:</strong>
        <ul className="ml-6 mt-2">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="mb-1 text-[#e0e0e0]">
              {highlight}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-3">
        <strong>Link:</strong>{" "}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4ecdc4] no-underline hover:underline"
        >
          {project.link}
        </a>
      </div>
    </div>
  );
};
