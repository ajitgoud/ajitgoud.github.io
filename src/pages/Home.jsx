import React from "react";
import { DownloadIcon } from "../assets/icons/Icons";

export default function Home() {
  const handleDownloadResume = () => {
    const pdfUrl = "Ajit_Goud-Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Ajit_Goud-Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full flex flex-col justify-center   items-center font-montserrat">
      <h1 className="text-6xl md:text-8xl  text-slate-300">Ajit Goud</h1>
      <h1 className="mt-2 mb-1 text-2xl md:text-6xl text-app-snow-100 ">
        Fullstack Software Engineer
      </h1>
      <p className="text-md md:text-2xl text-slate-500 ">
        {"Android | ReactJs | NodeJs | Java | Python"}
      </p>
      <button
        onClick={handleDownloadResume}
        className="mt-4 md:mt-8 space-x-2 items-center inline-flex border text-slate-400 fill-slate-400  px-6 py-2 rounded border-app-green hover:text-slate-300 hover:fil
        
        l-slate-300 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 md:w-6 md:h-6"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
          />
        </svg>
        <span className="text-lg md:text-2xl">Resume</span>
      </button>
    </div>
  );
}
