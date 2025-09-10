// src/assets/constants/ProjectsConstants.js

import TransparentProImg from "../projects/transparentpro.png";
import ToxicityImg from "../projects/toxicity.png";
import CareerBoostImg from "../projects/careerboost.png";
import SalesChatImg from "../projects/saleschatai.png";
import Chat2PDFImg from "../projects/chat2pdf.png";
import ConstitutionImg from "../projects/constitution.png";
import CarbonImg from "../projects/carbon.png";
import YouTubeImg from "../projects/youtube.png";

export const projects = [
  {
    id: 1,
    title: "TransparentPro",
    description:
      "Enhanced a web platform using React, Node.js, and Google Gemini AI to generate machine-readable transparency reports, reducing manual verification by 60%. Built adaptive questioning logic, automated scoring, and interactive PDF reports with visualizations.",
    techStack: ["React", "Node.js", "PostgreSQL", "Google Gemini AI"],
    img: TransparentProImg,
    colorClass: "indigo-400",
    link: "https://github.com/swaransheel/TransparentPro",
  },
  {
    id: 2,
    title: "Bilingual Toxicity Detection System",
    description:
      "Engineered an AI-driven web application with Flask, Faster-Whisper, and transformer models (BERT, RoBERTa, MuRIL) for multilingual audio toxicity detection. Implemented real-time speech-to-text with word-level timestamps.",
    techStack: ["Flask", "Faster-Whisper", "BERT", "RoBERTa", "MuRIL"],
    img: ToxicityImg,
    colorClass: "stone-400",
    link: "https://github.com/swaransheel/Bilingual-Hindi-English-toxicity-detection-system",
  },
  {
    id: 3,
    title: "CareerBoost Job Application Platform",
    description:
      "Built a job application platform with React, Express.js, and PostgreSQL. Delivered a streamlined interface for job seekers and an admin dashboard for application management.",
    techStack: ["React", "Express.js", "PostgreSQL"],
    img: CareerBoostImg,
    colorClass: "amber-400",
    link: "https://github.com/swaransheel/CareerBoost",
  },
  {
    id: 4,
    title: "SalesChatAI",
    description:
      "Developed a sales chatbot for LeadMate CRM with a structured 5-stage sales flow. Improved simulated lead conversion by 40% through intelligent conversation management.",
    techStack: ["Flask", "LangChain", "CRM API"],
    img: SalesChatImg,
    colorClass: "orange-400",
    link: "https://github.com/swaransheel/SalesChatAI",
  },
  {
    id: 5,
    title: "Chat2PDF Interactive Document Assistant",
    description:
      "Created a conversational AI app with Streamlit, LangChain, and Google Generative AI for interactive PDF querying. Implemented document processing and natural language understanding.",
    techStack: ["Streamlit", "LangChain", "Google Generative AI"],
    img: Chat2PDFImg,
    colorClass: "blue-400",
    link: "https://github.com/swaransheel/chat2PDFs",
  },
  {
    id: 6,
    title: "Learn Indian Constitution",
    description:
      "Built an educational app leveraging Google Generative Language Model API to retrieve and present structured information on Indian constitutional articles, enhancing accessibility to legal knowledge.",
    techStack: ["React", "Google Generative AI"],
    img: ConstitutionImg,
    colorClass: "green-400",
    link: "https://github.com/swaransheel/Learn-Indian-Constitution",
  },
  {
    id: 7,
    title: "Carbon Emission Impact Analysis",
    description:
      "Analyzed correlation between CO2 concentrations and temperature changes using statistical and visual methods. Identified predictive trends linking rising emissions with temperature change patterns.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib"],
    img: CarbonImg,
    colorClass: "red-400",
    link: "https://github.com/swaransheel/Carbon-Emissions-Impact-Analysis-with-Python",
  },
  {
    id: 8,
    title: "YouTube Data Collection and Analysis",
    description:
      "Designed and implemented a project around YouTube data exploration and insights. Worked with APIs and data visualization to uncover trends, engagement patterns, and content analysis.",
    techStack: ["JavaScript", "YouTube API", "Data Visualization"],
    img: YouTubeImg,
    colorClass: "pink-400",
    link: "https://github.com/swaransheel/YouTube-Data-Collection-and-Analysis-with-Python",
  },
];
