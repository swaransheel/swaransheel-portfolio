import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import PlayerImg from "../assets/game/game-player.png"; // change to football player image if available
import BallImg from "../assets/game/game-ball.png"; // change to football image if available

const COLS = 4;
const COL_WIDTH = 80;
const GAME_WIDTH = COLS * COL_WIDTH;

export default function FootballGame() {
  const [playerCol, setPlayerCol] = useState(1); // start at 2nd column
  const [balls, setBalls] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameRef = useRef(null);

  // Handle arrow key movement
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameOver) return;
      if (e.key === "ArrowLeft") {
        setPlayerCol((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setPlayerCol((prev) => Math.min(COLS - 1, prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameOver]);

  // Drop balls periodically
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      const newBall = {
        id: Date.now(),
        col: Math.floor(Math.random() * COLS),
        y: 0,
      };
      setBalls((prev) => [...prev, newBall]);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameOver]);

  // Animate balls
  useEffect(() => {
    if (gameOver) return;
    const gravity = setInterval(() => {
      setBalls((prevBalls) => {
        return prevBalls.map((ball) => ({ ...ball, y: ball.y + 20 }));
      });
    }, 300);
    return () => clearInterval(gravity);
  }, [gameOver]);

  // Check collision
  useEffect(() => {
    setBalls((prev) => {
      return prev.filter((ball) => {
        if (ball.y >= 400) {
          if (ball.col === playerCol) {
            setScore((s) => s + 1);
            return false;
          } else {
            setGameOver(true);
            return false;
          }
        }
        return true;
      });
    });
  }, [balls, playerCol]);

  return (
    <div
      ref={gameRef}
      className="w-full max-w-[350px] h-[500px] mx-auto relative border-2 border-gray-500 bg-black overflow-hidden"
    >
      <div className="absolute top-2 right-4 text-white text-xl font-bold z-50">
        Score: {score}
      </div>
      {/* Balls */}
      {balls.map((ball) => (
        <motion.img
          key={ball.id}
          src={BallImg}
          alt="football"
          className="absolute w-8 h-8"
          style={{
            left: `${ball.col * COL_WIDTH + COL_WIDTH / 2 - 16}px`,
            top: `${ball.y}px`,
          }}
        />
      ))}
      {/* Player */}
      <motion.img
        src={PlayerImg}
        alt="player"
        className="absolute w-24 h-24 bottom-2 transition-all duration-200"
        style={{
          left: `${playerCol * COL_WIDTH + COL_WIDTH / 2 - 48}px`,
        }}
      />
      {/* Game Over Message */}
      {gameOver && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white text-2xl font-bold">
          <p>Game Over!</p>
        </div>
      )}
    </div>
  );
}
