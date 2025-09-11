import { useState, useEffect, lazy, Suspense } from "react";
import BootLoader from "./components/BootLoader";
import DesktopIcon from "./components/DesktopIcon";
import Window from "./components/Window";
import Taskbar from "./components/Taskbar";
import AboutIcon from "./assets/desktopIcons/about.png";
import ExperienceIcon from "./assets/desktopIcons/experience.png";
import StudyIcon from "./assets/desktopIcons/study.png";
import ProjectsIcon from "./assets/desktopIcons/projects.png";
import AchievementsIcon from "./assets/desktopIcons/Achievements.png";
import certificationIcon from "./assets/desktopIcons/certifications.png";
import ArtIcon from "./assets/desktopIcons/art.png";
import SkillIcon from "./assets/desktopIcons/skills.png";
import MailIcon from "./assets/desktopIcons/mail.png";
import GameIcon from "./assets/desktopIcons/games.png";
// Import specific background images
import desktopBg7 from "./assets/gif/desktop-bg-7.gif";
import nightBg5 from "./assets/gif/night-bg-5.gif";
import StickyNote from "./components/StickyNote";
import useRetroSounds from "./utils/sounds";
import desktop_right from "./assets/gif/desktop_right.gif";
import { motion } from "framer-motion";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load page components for code splitting
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Study = lazy(() => import("./pages/Study"));
const Experience = lazy(() => import("./pages/Experience"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Skills = lazy(() => import("./pages/Skills"));
const Certifications = lazy(() => import("./pages/Certifications"));
const FootballGame = lazy(() => import("./components/FootballGame"));
const Connect = lazy(() => import("./pages/Connect"));
const Achievements = lazy(() => import("./pages/Achievements"));

export default function App() {
  const [booted, setBooted] = useState(false);
  const [openApps, setOpenApps] = useState([]);
  const [theme, setTheme] = useState("morning");
  const { playClick } = useRetroSounds();

  const openWindow = (id) => {
    playClick();
    setOpenApps((prev) => [...new Set([...prev, id])]);
  };

  const closeWindow = (id) => {
    setOpenApps((prev) => prev.filter((w) => w !== id));
  };

  const closeAllWindows = () => {
    setOpenApps([]);
  };

  const handleTheme = (theme) => {
    setTheme(theme);
    // console.log(theme);
  };
  return (
    <>
      {!booted && <BootLoader onFinish={() => setBooted(true)} />}
      {booted && (
        <div className="h-screen cursor w-screen overflow-hidden relative">
          {/* <CustomCursor/> */}
          <img
            src={desktopBg7}
            className="h-full w-full object-fill fixed top-0"
          ></img>
          {
            theme == "night" && (
              <img
                src={nightBg5}
                className="h-full w-full object-fill fixed  top-0"
              ></img>
            )
            //  <div className="h-screen w-screen bg-gradient-to-r from-black/60 via-blue-900/20 to-black/60  absolute top-0">
          }
          <img
            src={desktop_right}
            className="h-44 w-44 object-cover fixed bottom-10 right-10 cursor-pointer"
          ></img>
          {/* Desktop Icons */}
          <div className="absolute top-4 left-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <DesktopIcon
              icon={AboutIcon}
              label="About.exe"
              onClick={() => openWindow("about")}
            />
            <DesktopIcon
              icon={ProjectsIcon}
              label="Projects.exe"
              onClick={() => openWindow("projects")}
            />
            <DesktopIcon
              icon={ExperienceIcon}
              label="Experience.exe"
              onClick={() => openWindow("exp")}
            />
            <DesktopIcon
              icon={StudyIcon}
              label="Education.exe"
              onClick={() => openWindow("study")}
            />
            <DesktopIcon
              icon={SkillIcon}
              label="Skills.exe"
              onClick={() => openWindow("skills")}
            />
            <DesktopIcon
              icon={certificationIcon}
              label="Certifications.exe"
              onClick={() => openWindow("certifications")}
            />
            <DesktopIcon
              icon={ArtIcon}
              label="Gallery.exe"
              onClick={() => openWindow("art")}
            />
            <DesktopIcon
              icon={AchievementsIcon}
              label="Achievements.exe"
              onClick={() => openWindow("achievements")}
            />
          </div>
          <motion.div
            className="absolute top-64 right-5 flex flex-col items-center cursor-pointer select-none w-20 sm:w-44 sm:h-32 text-xs text-white"
            drag
            dragConstraints={{ top: 0, left: 0 }}
            onClick={() => openWindow("game")}
          >
            <img
              src={GameIcon}
              alt={"Game.exe"}
              className="w-10 h-10 sm:w-20 sm:h-20 hover:border-2 hover:border-amber-300 hover:rounded-lg"
            />
            <span className="mt-1 text-black text-center text-sm sm:text-xl bg-amber-300 px-2 sm:px-5">
              Game.exe
            </span>
          </motion.div>
          <motion.div
            className="absolute bottom-44 right-5 flex flex-col items-center cursor-pointer select-none w-20 sm:w-44 sm:h-32 text-xs text-white"
            drag
            dragConstraints={{ top: 0, left: 0 }}
            onClick={() => openWindow("connect")}
          >
            <img
              src={MailIcon}
              alt={"LetsConnect.exe"}
              className="w-10 h-10 sm:w-20 sm:h-20 hover:border-2 hover:border-amber-300 hover:rounded-lg"
            />
            <span className="mt-1 text-black text-center text-sm sm:text-xl bg-amber-300 px-2 sm:px-5">
              LetsConnect.exe
            </span>
          </motion.div>

          {/* Windows */}
          {openApps.includes("about") && (
            <Window title="About.exe" onClose={() => closeWindow("about")}>
              <Suspense fallback={<LoadingSpinner />}>
                <About />
              </Suspense>
            </Window>
          )}
          {openApps.includes("projects") && (
            <Window
              title="Projects.exe"
              onClose={() => closeWindow("projects")}
            >
              <Suspense fallback={<LoadingSpinner />}>
                <Projects />
              </Suspense>
            </Window>
          )}
          {openApps.includes("study") && (
            <Window title="Education.exe" onClose={() => closeWindow("study")}>
              <Suspense fallback={<LoadingSpinner />}>
                <Study />
              </Suspense>
            </Window>
          )}
          {openApps.includes("exp") && (
            <Window title="Experience.exe" onClose={() => closeWindow("exp")}>
              <Suspense fallback={<LoadingSpinner />}>
                <Experience />
              </Suspense>
            </Window>
          )}
          {openApps.includes("skills") && (
            <Window title="Skills.exe" onClose={() => closeWindow("skills")}>
              <Suspense fallback={<LoadingSpinner />}>
                <Skills />
              </Suspense>
              {/* <SkillsComputer /> */}
            </Window>
          )}
          {openApps.includes("certifications") && (
            <Window
              title="Certifications.exe"
              onClose={() => closeWindow("certifications")}
            >
              <Suspense fallback={<LoadingSpinner />}>
                <Certifications />
              </Suspense>
            </Window>
          )}
          {openApps.includes("art") && (
            <Window title="Gallery.exe" onClose={() => closeWindow("art")}>
              <Suspense fallback={<LoadingSpinner />}>
                <Gallery />
              </Suspense>
            </Window>
          )}
          {openApps.includes("game") && (
            <Window title="Game.exe" onClose={() => closeWindow("game")}>
              <Suspense fallback={<LoadingSpinner />}>
                <FootballGame />
              </Suspense>
            </Window>
          )}
          {openApps.includes("connect") && (
            <Window
              title="LetsConnect.exe"
              onClose={() => closeWindow("connect")}
            >
              <Suspense fallback={<LoadingSpinner />}>
                <Connect />
              </Suspense>
            </Window>
          )}
          {openApps.includes("achievements") && (
            <Window
              title="Achievements.exe"
              onClose={() => closeWindow("achievements")}
            >
              <Suspense fallback={<LoadingSpinner />}>
                <Achievements />
              </Suspense>
            </Window>
          )}
          <StickyNote
            defaultText="I’m Swaransheel, I mix AI/ML, web dev & creative coding into meaningful digital experiences"
            color="bg-yellow-300"
          />
          <Taskbar
            onAppClick={openWindow}
            onThemeChange={handleTheme}
            onCloseAll={closeAllWindows}
            currentTheme={theme}
          />
        </div>
      )}
    </>
  );
}
