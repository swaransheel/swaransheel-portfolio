import Zombie from "../assets/gif/Zombie.gif";
import LinkedIn from "../assets/desktopIcons/linkedin-pixel.png";
import Github from "../assets/desktopIcons/github-pixel.png";
import MailIcon from "../assets/desktopIcons/mail.png";

export default function Connect() {
  return (
    <>
      <div className="max-w-[1000px] p-3 overflow-y-auto max-h-[600px] w-full text-black flex flex-col relative px-5 pt-3 sm:gap-4">
        <div className="flex flex-col justify-center items-center sm:flex-row font-bold gap-2 relative">
          <img
            src={Zombie}
            className="h-24 w-24 sm:h-44 sm:w-44 border-t-2 border-l-2 border-gray-200 border-b-2 border-r-2 border-b-gray-500 border-r-gray-500 bg-white shadow-md"
          />

          <div className="flex flex-col p-4 text-xs sm:text-lg border-t-2 border-l-2 border-gray-200 border-b-2 border-r-2 border-b-gray-500 border-r-gray-500 bg-white shadow-md">
            Hey! You’ve reached{" "}
            <span className="text-blue-600">Chinthamalla Swaransheel</span>{" "}
            <br />
            Based in Hyderabad, passionate about AI/ML, Web Dev, and Data
            Science. <br />
            Got a project idea, collaboration, or just wanna geek out about
            tech? <br />
            Drop me a line - I’m always up for a chat!
            <br />
            <div className="flex flex-row gap-2 mt-2 items-end">
              <a
                href="mailto:chinthamallaswaransheel@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={MailIcon}
                  className="hover:scale-110 w-8 h-8 cursor-pointer"
                  alt="Email"
                />
              </a>
              <a
                href="https://github.com/swaransheel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Github}
                  className="hover:scale-110 w-8 h-8 cursor-pointer"
                  alt="GitHub"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/swaransheel-chinthamalla-741979265"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedIn}
                  className="hover:scale-110 w-8 h-8 cursor-pointer"
                  alt="LinkedIn"
                />
              </a>
            </div>
            <p className="mt-2 text-gray-700 text-xs sm:text-sm">
              📞 +91 6301515641
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
