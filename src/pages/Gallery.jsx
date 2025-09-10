import { useState, useMemo, useCallback, memo } from "react";
import { gallery } from "../assets/constants/GalleryConstants";

const Gallery = memo(function Gallery() {
  const [activeTab, setActiveTab] = useState(0);

  // Memoize current image to prevent unnecessary re-calculations
  const current = useMemo(() => gallery[activeTab], [activeTab]);

  // Callback to handle tab changes
  const handleTabChange = useCallback((index) => {
    setActiveTab(index);
  }, []);

  return (
    <>
      <div className="gallery-container max-w-[1000px] p-3 w-full text-black flex flex-col relative px-5 pt-3 sm:gap-4">
        <div className="flex flex-col font-bold gap-2 relative">
          Here's what my eyes saw 📸
          <div
            className="w-64 h-64 ml-2 mb-2 sm:mb-0 sm:ml-0 sm:w-[400px] sm:h-[400px] overflow-hidden 
                          border-t-2 border-l-2 border-gray-200 border-b-2 border-r-2 
                          border-b-gray-500 border-r-gray-500 bg-white shadow-md"
          >
            <a href={current.link} target="_blank" className="h-full w-full">
              <img
                src={current.img}
                alt={current.title}
                loading="eager"
                decoding="async"
                className="gallery-image w-full h-full object-cover hover:scale-110 transition-all duration-200"
                style={{
                  willChange: "transform",
                  transform: "translateZ(0)", // Force hardware acceleration
                }}
              />
            </a>
          </div>
        </div>

        {/* Bottom Thumbnails - Same width as main image with smooth scroll */}
        <div
          className="w-64 h-16 ml-2 sm:mb-0 sm:ml-0 sm:w-[400px] sm:h-24 border-t-2 border-l-2 border-gray-500 
                        border-b-2 border-r-2 border-b-gray-200 border-r-gray-200 
                        bg-gray-100 overflow-hidden"
        >
          <div
            className="gallery-scroll flex flex-row gap-1 overflow-x-auto px-2 py-1 h-full"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "thin",
              scrollbarColor: "#9CA3AF #E5E7EB",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {gallery.map((item, i) => (
              <button
                key={item.id} // Use stable ID instead of index
                onClick={() => handleTabChange(i)}
                className="relative text-lg h-14 w-14 sm:h-20 sm:w-20 
                           font-bold transition-transform duration-300 flex-shrink-0"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy" // Lazy load thumbnails
                  decoding="async"
                  className="gallery-thumbnail absolute top-0 h-full w-full object-cover 
                             hover:border-l-4 hover:border-t-4 hover:border-b-4 hover:border-r-4 
                             border-t-2 border-l-2 border-gray-500 border-b-2 border-r-2 
                             border-b-gray-200 border-r-gray-200 bg-gray-100"
                  style={{
                    transform: "translateZ(0)", // Hardware acceleration for smooth scrolling
                  }}
                />
                <div
                  className={`absolute hover:bg-blue-500/50 h-14 w-14 sm:h-20 sm:w-20 top-0
                    ${activeTab === i ? "bg-blue-500/50" : "bg-transparent"}`}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

export default Gallery;
