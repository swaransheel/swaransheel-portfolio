// src/hooks/useModel.js
import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import retroCarUrl from "../assets/models/retro-car.glb?url";
import forestHouseUrl from "../assets/models/forest_house.glb?url";
import retroComputerUrl from "../assets/models/retro-computer.glb?url";

export const useModel = (modelPath) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Always call useGLTF - React hooks must be called unconditionally
  const gltf = useGLTF(modelPath);

  useEffect(() => {
    if (gltf && gltf.scene) {
      setIsLoading(false);
      setError(null);
    } else if (!gltf) {
      setIsLoading(false);
      setError(new Error(`Failed to load model: ${modelPath}`));
    }
  }, [gltf, modelPath]);

  return { gltf, error, isLoading };
};

// Preload critical models
useGLTF.preload(retroCarUrl);
useGLTF.preload(forestHouseUrl);
useGLTF.preload(retroComputerUrl);

export default useModel;
