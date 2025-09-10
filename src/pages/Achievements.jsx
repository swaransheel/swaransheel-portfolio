import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import achievementsBg from "../assets/gif/desktop-bg-5.gif";
import { RefreshCw } from "lucide-react";

export default function Achievements() {
  const [focus, setFocus] = useState("none");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screenWidth on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const panelWidth = screenWidth < 640 ? "320px" : "550px";
  const panelHeight = screenWidth < 640 ? "200px" : "180px";

  // Zoom config (only one focus needed now)
  const zoomConfig = {
    none: { scale: 1, x: 0, y: 0 },
    center: { scale: 1.5, x: "0%", y: "0%" },
  };

  const focusText = {
    center: (
      <>
        <div className="w-full bg-blue-600 text-white leading-sm pl-2">
          Reliance Foundation Undergraduate Scholarship (2024–2025)
        </div>
        <br />
        - Awarded to top-performing undergraduate students across India <br />
        - Selected for academic merit, leadership potential, and community
        impact <br />- Recognition of consistent excellence and commitment to
        growth
      </>
    ),
  };

  return (
    <div className="sm:h-[500px] sm:w-[900px] overflow-hidden text-sm sm:text-lg font-bold w-full h-[500px] flex flex-col sm:flex-row relative">
      <div className="sm:h-[530px] sm:w-[900px] h-full w-full relative overflow-hidden">
        {/* Background Image */}
        <motion.img
          src={achievementsBg}
          className="h-full w-full object-cover absolute top-0 left-0"
          animate={zoomConfig[focus]}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Info Panel */}
        {focus !== "none" && (
          <motion.div
            key={focus}
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: panelWidth,
              height: panelHeight,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              type: "spring",
              delay: 1,
            }}
            className="absolute overflow-y-auto top-32 sm:left-48 p-4 text-sm sm:text-lg z-30 border-t-2 border-l-2 border-gray-200 border-b-2 border-r-2 border-b-gray-500 border-r-gray-500 bg-gray-300 text-black shadow-md"
          >
            {focusText[focus]}
          </motion.div>
        )}

        {/* Button */}
        <div className="absolute bottom-5 sm:bottom-14 w-full justify-center flex flex-row p-5 gap-2">
          <button
            onClick={() => setFocus("center")}
            className="hover:bg-blue-400 text-sm sm:text-xl flex justify-center items-center w-48 h-10 border-t-2 border-l-2 border-gray-200 border-b-2 border-r-2 border-b-gray-500 border-r-gray-500 bg-blue-600 text-white cursor-pointer shadow-md"
          >
            Reliance Scholarship
          </button>
        </div>

        {/* Reset */}
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
