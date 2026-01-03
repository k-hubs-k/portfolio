interface CVProps {
  name: string;
}

const CV = ({ name }: CVProps) => {
  return (
    <div className="text-[#e0e0e0]">
      <div className="
        font-bold text-[#00ff00] mb-3
        text-base
        sm:text-lg sm:mb-3.5
        md:text-xl md:mb-4
      ">
        📄 Downloading CV/Resume
      </div>
      <div className="
        mb-3 text-[#b0b0b0] break-words
        text-xs
        sm:text-sm sm:mb-3.5
        md:text-base md:mb-4
      ">
        Your download should start automatically. Check your downloads folder!
      </div>
      <div className="
        mb-2.5
        text-xs
        sm:text-sm sm:mb-3
        md:text-base
      ">
        <strong className="text-[#00ff00]">File:</strong>{" "}
        <span className="text-[#e0e0e0]">{name}_CV.pdf</span>
      </div>
      <div className="
        mb-2.5
        text-xs
        sm:text-sm sm:mb-3
        md:text-base
      ">
        <strong className="text-[#00ff00]">Status:</strong>{" "}
        <span className="text-[#4ecdc4]">✓ Download initiated</span>
      </div>
      <div className="
        mt-3 p-2 bg-[rgba(78,205,196,0.1)] border-l-[3px] border-[#4ecdc4] text-[#4ecdc4]
        text-xs
        sm:mt-4 sm:p-3 sm:text-sm
      ">
        💡 If the download didn't start, please check your browser's download settings or pop-up blocker.
      </div>
    </div>
  );
};

export default CV;

