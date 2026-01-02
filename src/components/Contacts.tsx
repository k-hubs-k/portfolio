import type { PortfolioData } from "../data/portfolioDataType";

interface ContactsProps {
  portfolioData: PortfolioData;
}

const Contacts = ({ portfolioData }: ContactsProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="
        font-bold text-[#00ff00] mb-3
        text-base
        sm:text-lg sm:mb-3.5
        md:text-xl md:mb-4
      ">
        📬 Contact Me
      </div>
      <div className="
        mb-2.5
        text-xs
        sm:text-sm sm:mb-3
        md:text-base
      ">
        <div className="
          flex flex-col gap-1
          sm:flex-row sm:gap-0
        ">
          <span className="
            text-[#00ff00] font-bold
            sm:min-w-[100px] sm:inline-block
          ">
            Email:
          </span>
          <a
            href={`mailto:${portfolioData.email}`}
            className="text-[#4ecdc4] no-underline hover:underline break-all"
          >
            {portfolioData.email}
          </a>
        </div>
      </div>
      <div className="
        mb-2.5
        text-xs
        sm:text-sm sm:mb-3
        md:text-base
      ">
        <div className="
          flex flex-col gap-1
          sm:flex-row sm:gap-0
        ">
          <span className="
            text-[#00ff00] font-bold
            sm:min-w-[100px] sm:inline-block
          ">
            GitHub:
          </span>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4ecdc4] no-underline hover:underline break-all"
          >
            {portfolioData.github}
          </a>
        </div>
      </div>
      <div className="
        mb-2.5
        text-xs
        sm:text-sm sm:mb-3
        md:text-base
      ">
        <div className="
          flex flex-col gap-1
          sm:flex-row sm:gap-0
        ">
          <span className="
            text-[#00ff00] font-bold
            sm:min-w-[100px] sm:inline-block
          ">
            LinkedIn:
          </span>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4ecdc4] no-underline hover:underline break-all"
          >
            {portfolioData.linkedin}
          </a>
        </div>
      </div>
      <div className="
        mb-2.5
        text-xs
        sm:text-sm sm:mb-3
        md:text-base
      ">
        <div className="
          flex flex-col gap-1
          sm:flex-row sm:gap-0
        ">
          <span className="
            text-[#00ff00] font-bold
            sm:min-w-[100px] sm:inline-block
          ">
            Website:
          </span>
          <a
            href={portfolioData.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4ecdc4] no-underline hover:underline break-all"
          >
            {portfolioData.website}
          </a>
        </div>
      </div>
      <div className="
        mt-3 p-2 bg-[rgba(78,205,196,0.1)] border-l-[3px] border-[#4ecdc4] text-[#4ecdc4]
        text-xs
        sm:mt-4 sm:p-3 sm:text-sm
      ">
        💡 I'm available for freelance projects and consulting!
      </div>
    </div>
  );
};

export default Contacts;
