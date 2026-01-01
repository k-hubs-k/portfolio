import type { PortfolioData } from "../data/portfolioDataType";

interface ContactsProps {
  portfolioData: PortfolioData;
}

const Contacts = ({ portfolioData }: ContactsProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="text-xl font-bold text-[#00ff00] mb-4 md:text-lg">
        📬 Contact Me
      </div>
      <div className="mb-3">
        <span className="text-[#00ff00] font-bold min-w-[100px] inline-block">
          Email:
        </span>
        <a
          href={`mailto:${portfolioData.email}`}
          className="text-[#4ecdc4] no-underline hover:underline"
        >
          {portfolioData.email}
        </a>
      </div>
      <div className="mb-3">
        <span className="text-[#00ff00] font-bold min-w-[100px] inline-block">
          GitHub:
        </span>
        <a
          href={portfolioData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4ecdc4] no-underline hover:underline"
        >
          {portfolioData.github}
        </a>
      </div>
      <div className="mb-3">
        <span className="text-[#00ff00] font-bold min-w-[100px] inline-block">
          LinkedIn:
        </span>
        <a
          href={portfolioData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4ecdc4] no-underline hover:underline"
        >
          {portfolioData.linkedin}
        </a>
      </div>
      <div className="mb-3">
        <span className="text-[#00ff00] font-bold min-w-[100px] inline-block">
          Website:
        </span>
        <a
          href={portfolioData.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4ecdc4] no-underline hover:underline"
        >
          {portfolioData.website}
        </a>
      </div>
      <div className="mt-4 p-3 bg-[rgba(78,205,196,0.1)] border-l-[3px] border-[#4ecdc4] text-[#4ecdc4]">
        💡 I'm available for freelance projects and consulting!
      </div>
    </div>
  );
};

export default Contacts;
