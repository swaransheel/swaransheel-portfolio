// src/components/BootLoader.jsx
import { useEffect, useState } from "react";
import f1Gif from "../assets/gif/f1_crashing.gif";

export default function BootLoader({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 3000); // show for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-red-500 text-sm sm:text-lg font-mono">
      <p className="absolute top-8 z-10 text-red-500 font-bold text-lg sm:text-xl animate-pulse">
        Crashing in to my portfolio...
      </p>
      <img
        src={f1Gif}
        alt="Booting..."
        className="w-4/5 h-4/5 object-cover rounded-lg"
      />
    </div>
  );
}
