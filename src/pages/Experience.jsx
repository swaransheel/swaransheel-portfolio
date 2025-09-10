import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import exp from "../assets/me/exp.gif";
import { RefreshCw } from "lucide-react";

export default function Experience() {
  const [focus, setFocus] = useState("none");
  // inside Experience component
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screenWidth on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const panelWidth = screenWidth < 640 ? "320px" : "550px";
  const panelHeight = screenWidth < 640 ? "250px" : "220px";
  // Define zoom areas
  const zoomConfig = {
    none: { scale: 1, x: 0, y: 0 },
    topLeft: { scale: 1.5, x: "25%", y: "25%" },
  };
  const focusText = {
    topLeft: (
      <>
        <div className="w-full h bg-blue-500 text-white leading-sm pl-2">
          Free Software Wing Club – Technical Support Member (Nov 2024 –
          Present)
        </div>
        <br />
        - Provided technical support for club initiatives, troubleshooting, and
        project development <br />
        - Coordinated logistics and setup for a 24-hour hackathon with 200+
        participants <br />- Mentored juniors in open-source tools and
        development practices
      </>
    ),
  };

  return (
    <div className="sm:h-[500px] sm:w-[900px] overflow-hidden text-sm sm:text-lg font-bold w-full h-[500px] flex flex-col sm:flex-row relative">
      <div className="sm:h-[530px] sm:w-[900px] h-full w-full relative overflow-hidden">
        {/* Zoomable Image */}
        <motion.img
          src={exp}
          className="h-full w-full object-cover absolute top-0 left-0"
          animate={zoomConfig[focus]}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        {/* Centered Expanding Info Panel */}
        {focus !== "none" && (
          <>
            <motion.div
              key={focus} // so animation restarts when focus changes
              initial={{
                width: 0,
                height: 0,
                opacity: 0,
                color: "transparent",
              }}
              animate={{
                width: panelWidth,
                height: panelHeight,
                opacity: 1,
                color: "black",
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                type: "spring",
                delay: 1,
              }}
              className="absolute overflow-y-auto top-32 sm:left-48 p-4 text-sm sm:text-lg z-30 border-t-2 border-l-2 border-gray-200 border-b-2 border-r-2 border-b-gray-500 border-r-gray-500 bg-gray-300 text-black cursor-pointer shadow-md"
            >
              {focusText[focus]}
            </motion.div>
          </>
        )}
        {/* Buttons */}
        <div className="absolute bottom-5 sm:bottom-14 w-full justify-center flex flex-row sm:px-10 p-5">
          <button
            onClick={() => setFocus("topLeft")}
            className="hover:bg-blue-400 text-sm sm:text-2xl flex justify-center items-center w-32 sm:w-40 border-t-2 border-l-2 border-gray-200 border-b-2 border-r-2 border-b-gray-500 border-r-gray-500 bg-blue-600 text-white cursor-pointer shadow-md"
          >
            2024-
          </button>
        </div>
        <button
          onClick={() => setFocus("none")}
          className="absolute top-5 right-5 hover:bg-blue-400 text-sm sm:text-2xl flex justify-center items-center p-1 border-t-2 border-l-2 border-gray-200 border-b-2 border-r-2 border-b-gray-500 border-r-gray-500 bg-blue-600 text-white cursor-pointer shadow-md"
        >
          <RefreshCw />
        </button>
      </div>
    </div>
  );
}
