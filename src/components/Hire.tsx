interface HireProps {
  email: string;
}

const Hire = ({ email }: HireProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="
        font-bold text-[#00ff00] mb-3
        text-base
        sm:text-lg sm:mb-3.5
        md:text-xl md:mb-4
      ">
        💼 Interested in Hiring Me?
      </div>
      <div className="
        mb-3 text-[#b0b0b0] break-words
        text-xs
        sm:text-sm sm:mb-3.5
        md:text-base md:mb-4
      ">
        Opening your email client with a pre-filled message...
      </div>
      <div className="
        mb-2.5
        text-xs
        sm:text-sm sm:mb-3
        md:text-base
      ">
        <strong className="text-[#00ff00]">To:</strong>{" "}
        <span className="text-[#4ecdc4] break-all">{email}</span>
      </div>
      <div className="
        mb-2.5
        text-xs
        sm:text-sm sm:mb-3
        md:text-base
      ">
        <strong className="text-[#00ff00]">Subject:</strong>{" "}
        <span className="text-[#e0e0e0]">Hiring Inquiry from Portfolio Terminal</span>
      </div>
      <div className="
        mt-3 p-2 bg-[rgba(78,205,196,0.1)] border-l-[3px] border-[#4ecdc4] text-[#4ecdc4]
        text-xs
        sm:mt-4 sm:p-3 sm:text-sm
      ">
        💡 If your email client didn't open automatically, you can reach me at: {email}
      </div>
    </div>
  );
};

export default Hire;

