// Optimized imports - these will be bundled efficiently by Vite
import img_1 from "../art/img_1.jpg";
import img_2 from "../art/img_2.jpg";
import img_3 from "../art/img_3.jpg";
import img_4 from "../art/img_4.jpg";
import img_5 from "../art/img_5.jpg";
import img_6 from "../art/img_6.jpg";
import img_7 from "../art/img_7.jpg";
import img_8 from "../art/img_8.jpg";

// WebP versions (from public directory)
const webpImages = {
  img_1: "/images/webp/img_1.webp",
  img_2: "/images/webp/img_2.webp",
  img_3: "/images/webp/img_3.webp",
  img_4: "/images/webp/img_4.webp",
  img_5: "/images/webp/img_5.webp",
  img_6: "/images/webp/img_6.webp",
  img_7: "/images/webp/img_7.webp",
  img_8: "/images/webp/img_8.webp",
};

export const gallery = [
  {
    id: 1,
    title: "Artwork 1",
    img: img_1,
    webp: webpImages.img_1,
    link: "#", // Add link if needed
  },
  {
    id: 2,
    title: "Artwork 2",
    img: img_2,
    webp: webpImages.img_2,
    link: "#",
  },
  {
    id: 3,
    title: "Artwork 3",
    img: img_3,
    webp: webpImages.img_3,
    link: "#",
  },
  {
    id: 4,
    title: "Artwork 4",
    img: img_4,
    webp: webpImages.img_4,
    link: "#",
  },
  {
    id: 5,
    title: "Artwork 5",
    img: img_5,
    webp: webpImages.img_5,
    link: "#",
  },
  {
    id: 6,
    title: "Artwork 6",
    img: img_6,
    webp: webpImages.img_6,
    link: "#",
  },
  {
    id: 7,
    title: "Artwork 7",
    img: img_7,
    webp: webpImages.img_7,
    link: "#",
  },
  {
    id: 8,
    title: "Artwork 8",
    img: img_8,
    webp: webpImages.img_8,
    link: "#",
  },
];
