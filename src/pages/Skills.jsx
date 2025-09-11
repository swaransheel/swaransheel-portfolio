// src/components/SkillsComputer.jsx
/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Environment, PresentationControls, useGLTF } from "@react-three/drei";
import { useState, Suspense } from "react";
import { X } from "lucide-react";
import ErrorBoundary from "../components/ErrorBoundary";

function ForestHouseModel({ onPartClick }) {
  const gltf = useGLTF("/models/forest_house.glb");

  return (
    <group
      position={[-1, -1.2, -0.5]}
      rotation={[0, Math.PI / 2.5, 0]}
      scale={[0.25, 0.25, 0.25]}
      onClick={onPartClick}
    >
      <primitive object={gltf.scene} />
    </group>
  );
}

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState("");

  const handlePartClick = ({ partName }) => {
    console.log("Clicked:", partName);

    if (partName.toLowerCase().includes("roof")) setActiveSkill("languages");
    else if (partName.toLowerCase().includes("door")) setActiveSkill("webdev");
    else if (partName.toLowerCase().includes("window")) setActiveSkill("tools");
    else if (partName.toLowerCase().includes("chimney"))
      setActiveSkill("databases");
    else if (partName.toLowerCase().includes("garden")) setActiveSkill("aiml");
    else if (partName.toLowerCase().includes("foundation"))
      setActiveSkill("corecs");
    else setActiveSkill("unknown");
  };

  const skillsMap = {
    languages: ["Python", "Java", "C", "C#", "R"],
    webdev: ["ReactJS", "JavaScript", "HTML", "CSS", "Node.js", "Express.js"],
    databases: [
      "MySQL",
      "PostgreSQL",
      "DBMS (SQL concepts)",
      "Relational Databases",
    ],
    aiml: ["Machine Learning", "Generative AI", "Pandas", "NumPy", "LangChain"],
    frameworks: ["Flask", "Streamlit"],
    corecs: [
      "Object-Oriented Programming",
      "Data Structures and Algorithms",
      "Data Warehousing",
    ],
    tools: ["Git", "WEKA", "Blue Prism", "VSCode"],
    unknown: ["🏠 Just clicked something random on the forest house!"],
  };

  return (
    <>
      <div className="sm:w-[800px] w-full h-[400px] sm:h-[600px] flex justify-center items-center relative">
        <ErrorBoundary>
          <Canvas shadows camera={{ position: [5, 1, 0], fov: 35 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
            <Environment preset="city" />

            <PresentationControls
              global
              config={{ mass: 1, tension: 10 }}
              snap={true}
              rotation={[0, 0.3, 0]}
              polar={[-0.2, 0.2]}
              azimuth={[-0.4, 0.4]}
            >
              <Suspense
                fallback={
                  <div className="text-center text-gray-600 p-4">
                    Loading 3D Model...
                  </div>
                }
              >
                <ForestHouseModel onPartClick={handlePartClick} />
              </Suspense>
            </PresentationControls>
          </Canvas>
        </ErrorBoundary>

        {/* Buttons mapped to parts */}
        <button
          onClick={() => handlePartClick({ partName: "roof" })}
          className="hover:scale-110 absolute top-20 left-5 sm:left-44 px-4 bg-blue-600 
          border-t border-l border-white border-b-2 border-r-2 border-b-gray-700 border-r-gray-700 shadow-md"
        >
          Programming Languages
        </button>

        <button
          onClick={() => handlePartClick({ partName: "door" })}
          className="hover:scale-110 absolute bottom-24 sm:bottom-52 right-5 sm:right-64 px-4 bg-blue-600 
          border-t border-l border-white border-b-2 border-r-2 border-b-gray-700 border-r-gray-700 shadow-md"
        >
          Web Dev
        </button>

        <button
          onClick={() => handlePartClick({ partName: "chimney" })}
          className="hover:scale-110 absolute top-44 right-5 sm:right-72 px-4 bg-green-600 
          border-t border-l border-white border-b-2 border-r-2 border-b-gray-700 border-r-gray-700 shadow-md"
        >
          Databases
        </button>

        <button
          onClick={() => handlePartClick({ partName: "garden" })}
          className="hover:scale-110 absolute bottom-10 right-10 sm:right-80 px-4 bg-purple-600 
          border-t border-l border-white border-b-2 border-r-2 border-b-gray-700 border-r-gray-700 shadow-md"
        >
          AI/ML
        </button>

        <button
          onClick={() => handlePartClick({ partName: "foundation" })}
          className="hover:scale-110 absolute bottom-10 left-10 sm:left-64 px-4 bg-orange-500 
          border-t border-l border-white border-b-2 border-r-2 border-b-gray-700 border-r-gray-700 shadow-md"
        >
          Core CS
        </button>

        <button
          onClick={() => handlePartClick({ partName: "window" })}
          className="hover:scale-110 absolute sm:bottom-44 bottom-10 left-10 sm:left-20 px-4 bg-blue-600 
          border-t border-l border-white border-b-2 border-r-2 border-b-gray-700 border-r-gray-700 shadow-md"
        >
          Tools
        </button>

        {activeSkill && (
          <div
            className="absolute top-4 p-1 left-4 border-t-2 border-l-2 border-white border-b-4 border-r-4 
          border-b-gray-500 border-r-gray-500 bg-gray-200 shadow-md text-sm sm:text-lg w-[280px] sm:w-[400px] z-50"
          >
            <div className="uppercase bg-gradient-to-r from-blue-800 to-blue-400 text-white text-lg px-2 py-1 flex justify-between items-center">
              <span>{activeSkill} Skills</span>
              <button
                onClick={() => setActiveSkill("")}
                className="hover:bg-red-600 p-1"
              >
                <X size={12} />
              </button>
            </div>
            <ul className="list-disc p-4">
              {skillsMap[activeSkill].map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
