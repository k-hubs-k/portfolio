import type { Project } from "../data/portfolioDataType";

interface ProjectProps {
  project: Project;
}

export const ProjectComponent = ({ project }: ProjectProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="
        font-bold text-[#00ff00] mb-3
        text-base
        sm:text-lg sm:mb-3.5
        md:text-xl md:mb-4
      ">
        📁 {project.name}
      </div>
      <div className="
        mb-3 text-[#b0b0b0] break-words
        text-xs
        sm:text-sm sm:mb-3.5
        md:text-base md:mb-4
      ">
        {project.description}
      </div>
      <div className="
        mb-2.5
        text-xs
        sm:text-sm sm:mb-3
        md:text-base
      ">
        <strong className="text-[#00ff00]">Technologies:</strong>{" "}
        <span className="break-words">{project.technologies.join(", ")}</span>
      </div>
      <div className="
        mb-3
        text-xs
        sm:text-sm sm:mb-3.5
        md:text-base md:mb-4
      ">
        <strong className="text-[#00ff00]">Highlights:</strong>
        <ul className="
          ml-4 mt-1.5
          sm:ml-5 sm:mt-2
          md:ml-6
        ">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="
              mb-1 text-[#e0e0e0] break-words
              text-xs
              sm:text-sm
              md:text-base
            ">
              {highlight}
            </li>
          ))}
        </ul>
      </div>
      <div className="
        mb-2.5
        text-xs
        sm:text-sm sm:mb-3
        md:text-base
      ">
        <strong className="text-[#00ff00]">Link:</strong>{" "}
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4ecdc4] no-underline hover:underline break-all"
          >
            {project.link}
          </a>
        ) : (
          <span className="text-[#8b8b8b] italic">Not available</span>
        )}
      </div>
    </div>
  );
};
