// src/pages/Certifications.jsx
/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Environment, PresentationControls, useGLTF } from "@react-three/drei";
import { useState, Suspense } from "react";
import { X } from "lucide-react";
import ErrorBoundary from "../components/ErrorBoundary";

function RetroCarModel({ onPartClick }) {
  const gltf = useGLTF("/models/retro-car.glb");

  return (
    <group
      position={[0.5, -0.75, 0]}
      rotation={[0.1, Math.PI / 2, 0.0]}
      scale={[2.5, 2.5, 2.5]}
      onClick={onPartClick}
    >
      <primitive object={gltf.scene} />
    </group>
  );
}

export default function Certifications() {
  const [activeCertification, setActiveCertification] = useState("");

  const handlePartClick = ({ partName }) => {
    if (partName.toLowerCase().includes("monitor"))
      setActiveCertification("ccna");
    else if (partName.toLowerCase().includes("keyboard"))
      setActiveCertification("cyber");
    else if (partName.toLowerCase().includes("cpu"))
      setActiveCertification("datascience");
    else if (partName.toLowerCase().includes("mouse"))
      setActiveCertification("ai");
    else if (partName.toLowerCase().includes("speaker"))
      setActiveCertification("automation");
    else if (partName.toLowerCase().includes("base"))
      setActiveCertification("programming");
    else setActiveCertification("unknown");
  };

  const certificationsMap = {
    ccna: [
      "CCNA: Enterprise Networking, Security, and Automation – Cisco (Apr 2025)",
      "CCNA: Switching, Routing, and Wireless Essentials – Cisco (Feb 2025)",
      "CCNA: Introduction to Networks – Cisco (Oct 2024)",
    ],
    cyber: [
      "Cybersecurity Virtual Internship – Palo Alto Networks (Jan–Mar 2025)",
      "Introduction to Internet of Things – NPTEL (Oct 2024)",
    ],
    datascience: ["Data Engineering Virtual Internship – AWS (Jan–Mar 2024)"],
    ai: [
      "AI-ML Virtual Internship – AWS (Dec 2023–Feb 2024)",
      "Google Generative AI Virtual Internship – Google Cloud (Jul–Sep 2024)",
    ],
    automation: [
      "Blue Prism Intelligent Automation Virtual Internship – SS&C Blue Prism (Apr–Jun 2024)",
    ],
    programming: [
      "Programming Data Structures & Algorithms using Python – NPTEL (Mar 2024)",
    ],
    unknown: ["� Just clicked something random on the retro car!"],
  };

  return (
    <>
      <div className="sm:w-[800px] w-full h-[400px] sm:h-[600px] flex justify-center items-center relative">
        <ErrorBoundary>
          <Canvas shadows camera={{ position: [5, 2, 5], fov: 35 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <Environment preset="studio" />

            <PresentationControls
              global
              config={{ mass: 1, tension: 10 }}
              snap={true}
              rotation={[0, 0.2, 0]}
              polar={[-0.3, 0.3]}
              azimuth={[-0.5, 0.5]}
            >
              <Suspense fallback={
                <div className="text-center text-gray-600 p-4">
                  Loading 3D Model...
                </div>
              }>
                <RetroCarModel onPartClick={handlePartClick} />
              </Suspense>
            </PresentationControls>
          </Canvas>
        </ErrorBoundary>

        {/* Buttons */}
        <button
          onClick={() => handlePartClick({ partName: "monitor" })}
          className="hover:scale-110 absolute top-20 left-20 sm:left-32 px-4 bg-orange-600 text-white shadow-md"
        >
          CCNA
        </button>

        <button
          onClick={() => handlePartClick({ partName: "keyboard" })}
          className="hover:scale-110 absolute bottom-32 sm:bottom-40 right-20 sm:right-32 px-4 bg-blue-600 text-white shadow-md"
        >
          Cybersecurity / IoT
        </button>

        <button
          onClick={() => handlePartClick({ partName: "cpu" })}
          className="hover:scale-110 absolute top-32 right-20 sm:right-40 px-4 bg-green-600 text-white shadow-md"
        >
          Data Science
        </button>

        <button
          onClick={() => handlePartClick({ partName: "mouse" })}
          className="hover:scale-110 absolute bottom-20 right-20 sm:right-48 px-4 bg-red-600 text-white shadow-md"
        >
          AI/ML
        </button>

        <button
          onClick={() => handlePartClick({ partName: "speaker" })}
          className="hover:scale-110 absolute bottom-20 left-20 sm:left-32 px-4 bg-purple-600 text-white shadow-md"
        >
          Automation
        </button>

        <button
          onClick={() => handlePartClick({ partName: "base" })}
          className="hover:scale-110 absolute bottom-32 sm:bottom-40 left-20 sm:left-48 px-4 bg-yellow-600 text-white shadow-md"
        >
          Programming
        </button>

        {activeCertification && (
          <div
            className="absolute top-4 p-1 left-4 border-t-2 border-l-2 border-white border-b-4 border-r-4 
          border-b-gray-500 border-r-gray-500 bg-gray-200 shadow-md text-sm sm:text-lg w-[280px] sm:w-[400px] z-50"
          >
            <div className="uppercase bg-gradient-to-r from-red-800 to-red-400 text-white text-lg px-2 py-1 flex justify-between items-center">
              <span>{activeCertification} Certifications</span>
              <button
                onClick={() => setActiveCertification("")}
                className="hover:bg-red-600 p-1"
              >
                <X size={12} />
              </button>
            </div>
            <ul className="list-disc p-4">
              {certificationsMap[activeCertification].map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
