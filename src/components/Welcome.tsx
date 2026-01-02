interface WelcomeProps {
  name: string;
}
const Welcome = ({ name }: WelcomeProps) => {
  return (
    <div className="text-center">
      <pre className="
        text-[#00ff00] leading-[1.2] mb-4 overflow-x-auto scroll-on-overflow
        text-[0.28rem]
        xs:text-[0.32rem]
        sm:text-[0.4rem] sm:mb-5
        md:text-[0.45rem] md:mb-6
        lg:text-[0.5rem]
      ">{`
 ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗
 ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
 ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
 ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
 ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
 ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝
        `}</pre>
      <div className="
        text-[#e0e0e0] leading-[1.6]
        sm:leading-[1.8]
      ">
        <p className="
          mb-2 text-sm
          sm:text-base
        ">
          Welcome to {name}'s Interactive Portfolio Terminal!
        </p>
        <p className="
          mb-2 text-xs
          sm:text-sm
        ">
          Type{" "}
          <span className="text-[#00ff00] font-bold bg-[rgba(0,255,0,0.1)] px-1 py-0.5 rounded-sm">
            'help'
          </span>{" "}
          to see available commands.
        </p>
        <p className="
          mb-2 text-xs
          sm:text-sm
        ">
          Type{" "}
          <span className="text-[#00ff00] font-bold bg-[rgba(0,255,0,0.1)] px-1 py-0.5 rounded-sm">
            'about'
          </span>{" "}
          to learn more about me.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
