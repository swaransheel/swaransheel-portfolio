import { useState, useMemo, useCallback, memo, useEffect } from "react";
import { gallery } from "../assets/constants/GalleryConstants";

const Gallery = memo(function Gallery() {
  const [activeTab, setActiveTab] = useState(0);
  const [imageLoadStates, setImageLoadStates] = useState({});
  const [preloadedImages, setPreloadedImages] = useState(new Set());

  // Memoize current image to prevent unnecessary re-calculations
  const current = useMemo(() => gallery[activeTab], [activeTab]);

  // Helper function to get WebP image path
  const getWebPPath = useCallback((originalPath) => {
    // Convert src/assets/art/img_X.jpg to /images/webp/img_X.webp
    const filename = originalPath.split('/').pop(); // Get filename
    const webpFilename = filename.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return `/images/webp/${webpFilename}`;
  }, []);

  // Preload images for better performance
  const preloadImage = useCallback((src, webpSrc) => {
    const cacheKey = `${src}_${webpSrc}`;
    if (preloadedImages.has(cacheKey)) return;
    
    // Preload WebP first (if supported)
    const webpImg = new Image();
    webpImg.onload = () => {
      setPreloadedImages(prev => new Set([...prev, cacheKey]));
      setImageLoadStates(prev => ({ ...prev, [cacheKey]: 'webp-loaded' }));
    };
    webpImg.onerror = () => {
      // If WebP fails, try original format
      const originalImg = new Image();
      originalImg.onload = () => {
        setPreloadedImages(prev => new Set([...prev, cacheKey]));
        setImageLoadStates(prev => ({ ...prev, [cacheKey]: 'original-loaded' }));
      };
      originalImg.onerror = () => {
        setImageLoadStates(prev => ({ ...prev, [cacheKey]: 'error' }));
      };
      originalImg.src = src;
    };
    webpImg.src = webpSrc;
    setImageLoadStates(prev => ({ ...prev, [cacheKey]: 'loading' }));
  }, [preloadedImages]);

  // Preload current and adjacent images
  useEffect(() => {
    const webpPath = getWebPPath(current.img);
    preloadImage(current.img, webpPath);
    
    // Preload next/previous images for smooth navigation
    const nextIndex = (activeTab + 1) % gallery.length;
    const prevIndex = (activeTab - 1 + gallery.length) % gallery.length;
    
    const nextWebpPath = getWebPPath(gallery[nextIndex].img);
    const prevWebpPath = getWebPPath(gallery[prevIndex].img);
    
    preloadImage(gallery[nextIndex].img, nextWebpPath);
    preloadImage(gallery[prevIndex].img, prevWebpPath);
  }, [activeTab, current.img, getWebPPath, preloadImage]);

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
                          border-b-gray-500 border-r-gray-500 bg-white shadow-md relative"
          >
            {/* Loading placeholder */}
            {imageLoadStates[`${current.img}_${getWebPPath(current.img)}`] === 'loading' && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="text-gray-400 text-sm">Loading...</div>
              </div>
            )}
            
            <a href={current.link} target="_blank" className="h-full w-full">
              <picture>
                {/* WebP source for modern browsers */}
                <source 
                  srcSet={getWebPPath(current.img)} 
                  type="image/webp" 
                />
                {/* Fallback for older browsers */}
                <img
                  src={current.img}
                  alt={current.title}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className={`gallery-image w-full h-full object-cover hover:scale-110 transition-all duration-200
                    ${imageLoadStates[`${current.img}_${getWebPPath(current.img)}`]?.includes('loaded') ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    willChange: "transform",
                    transform: "translateZ(0)",
                    transition: "opacity 0.3s ease-in-out, transform 0.2s ease-in-out",
                  }}
                  onLoad={() => {
                    const cacheKey = `${current.img}_${getWebPPath(current.img)}`;
                    setImageLoadStates(prev => ({ ...prev, [cacheKey]: 'loaded' }));
                  }}
                  onError={() => {
                    const cacheKey = `${current.img}_${getWebPPath(current.img)}`;
                    setImageLoadStates(prev => ({ ...prev, [cacheKey]: 'error' }));
                  }}
                />
              </picture>
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
                <picture>
                  <source 
                    srcSet={getWebPPath(item.img)} 
                    type="image/webp" 
                  />
                  <img
                    src={item.img}
                    alt={item.title}
                    loading={i <= 5 ? "eager" : "lazy"} // Eager load first 6 thumbnails
                    decoding="async"
                    className={`gallery-thumbnail absolute top-0 h-full w-full object-cover 
                               hover:border-l-4 hover:border-t-4 hover:border-b-4 hover:border-r-4 
                               border-t-2 border-l-2 border-gray-500 border-b-2 border-r-2 
                               border-b-gray-200 border-r-gray-200 bg-gray-100
                               ${imageLoadStates[`${item.img}_${getWebPPath(item.img)}`]?.includes('loaded') ? 'opacity-100' : 'opacity-75'}`}
                    style={{
                      transform: "translateZ(0)",
                      transition: "opacity 0.2s ease-in-out",
                    }}
                    onLoad={() => {
                      const cacheKey = `${item.img}_${getWebPPath(item.img)}`;
                      setImageLoadStates(prev => ({ ...prev, [cacheKey]: 'loaded' }));
                    }}
                  />
                </picture>
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
