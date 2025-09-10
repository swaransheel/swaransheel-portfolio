import me from "../assets/me/swaran.jpg"; // replace with your actual image
import happy from "../assets/smiley/football.png";

export default function About() {
  return (
    <>
      <div className="sm:h-[350px] sm:w-[600px] flex flex-col sm:flex-row relative p-4 pl-10 sm:pl-4 sm:pt-8 sm:gap-4">
        <div className="h-80 w-[250px] relative">
          <div className="overflow-hidden absolute h-72 top-0 border-t-2 border-l-2 border-gray-300 border-b-4 border-r-4 border-b-gray-500 border-r-gray-500 bg-gray-300 shadow-md">
            <img
              src={me}
              className="h-full w-full hover:scale-150 transition-all duration-0.05"
              alt="Chinthamalla Swaransheel"
            />
          </div>
        </div>
        <div className="h-full w-[250px] sm:w-[300px] text-sm sm:text-lg">
          Hi, I’m{" "}
          <span className="font-bold text-blue-600">
            Chinthamalla Swaransheel
          </span>
          .
          <br />
          I’m a curious mind who enjoys blending tech with creativity, but
          beyond coding I’m deeply passionate about{" "}
          <span className="font-semibold">football ⚽</span> and the calm beauty
          of sunset photography. Whether it’s chasing the ball on the field or
          chasing the perfect golden-hour shot, I love capturing moments that
          inspire me. Life for me is about balance — building cool things in
          tech and enjoying the simple joys of the world outside the screen.
        </div>
      </div>
    </>
  );
}
