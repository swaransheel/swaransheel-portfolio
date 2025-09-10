import folder from "../assets/buttons/open-folder.png";
import { useState } from "react";
import { projects } from "../assets/constants/ProjectsConstants";
import { Typewriter } from "../components/TypeWriter";
import Ticker from "framer-motion-ticker";

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0);
  const current = projects[activeTab];
  return (
    <>
      <div className="max-w-[1000px] p-3 overflow-y-auto max-h-[600px] w-full text-black flex flex-col sm:flex-row relative px-5 pt-3 sm:gap-4">
        <div className="flex flex-col font-bold gap-2 relative">
          Projects/{current.title}
          <div className="w-64 sm:w-[650px] sm:h-[320px] overflow-hidden border-t-2 border-l-2 border-gray-200 border-b-2 border-r-2 border-b-gray-500 border-r-gray-500 bg-white shadow-md">
            <a href={current.link} target="_blank" className="h-full w-full">
              <img
                src={current.img}
                className="w-full h-full object-cover hover:scale-110 transition-all duration-0.05"
              ></img>
            </a>
          </div>
          <div className="w-64 sm:w-[650px] text-xl text-blue-600 overflow-hidden flex flex-row">
            Tech Stack :
            <div className="w-64 sm:w-[550px] text-lg text-black overflow-hidden">
              <Ticker duration={10}>
                {current.techStack.map((tech, i) => (
                  <p className="mx-2 ">
                    <span>{tech}</span>
                  </p>
                ))}
              </Ticker>
            </div>
          </div>
          <div className="w-64 sm:w-[650px] text-sm sm:text-lg flex flex-row leading-xs border-t-2 border-l-2 border-gray-500 border-b-2 border-r-2 border-b-gray-200 border-r-gray-200 bg-white p-4">
            <Typewriter text={current.description}></Typewriter>
          </div>
          <button className="hover:bg-blue-400 text-sm sm:text-2xl flex justify-center items-center w-32 border-t-2 border-l-2 border-gray-200 border-b-2 border-r-2 border-b-gray-500 border-r-gray-500 bg-blue-600 text-white cursor-pointer shadow-md">
            <a href={current.link} target="_blank" className="h-full w-full">
              Run
            </a>
          </button>
          {/* sticker */}
        </div>

        <div className="mt-9 sm:relative flex w-full sm:w-1/3 h-full sm:h-[480px] flex-row sm:flex-col text-left items-start border-t-2 border-l-2 border-gray-500 border-b-2 border-r-2 border-b-gray-200 border-r-gray-200 bg-gray-100 p-2">
          <span className="text-xl flex flex-row w-full ">
            {" "}
            <img className="h-6" src={folder}></img>Projects
          </span>
          {projects.map((project, i) => (
            <>
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`hidden sm:block text-sm px-2  hover:bg-blue-600 hover:text-white font-bold transition-transform duration-300 ${
                  activeTab === i ? "bg-blue-600 text-white" : " text-black"
                }`}
              >
                |--{project.title}
              </button>
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`sm:hidden block text-lg px-1  hover:bg-blue-600 hover:text-white font-bold transition-transform duration-300 ${
                  activeTab === i ? "bg-blue-600 text-white" : " text-black"
                }`}
              >
                0{i + 1}
              </button>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
