// src/hooks/useModel.js
import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

export const useModel = (modelPath) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  let gltf = null;

  try {
    gltf = useGLTF(modelPath);
  } catch (err) {
    console.error(`Failed to load model ${modelPath}:`, err);
    setError(err);
  }

  useEffect(() => {
    if (gltf && gltf.scene) {
      setIsLoading(false);
      setError(null);
    } else if (!gltf) {
      setIsLoading(false);
    }
  }, [gltf]);

  return { gltf, error, isLoading };
};

// Preload critical models
useGLTF.preload("/models/retro-car.glb");
useGLTF.preload("/models/forest_house.glb");
useGLTF.preload("/models/retro-computer.glb");

export default useModel;
