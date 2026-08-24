'use client';

import { GithubIcon, LinkedInIcon } from '@/components/Icons';
import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  const handleDownloadResume = () => {
    const pdfUrl = '/assets/pdf/Ajit_Goud-Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Ajit_Goud-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`h-full flex flex-col justify-center items-center p-6`}>
      <h1 className={`text-6xl md:text-8xl text-[var(--app-green)] font-montserrat text-center`}>
        Ajit Goud
      </h1>
      <h2 className="mt-3 mb-2 text-2xl md:text-6xl text-[var(--app-snow-100)] text-center font-semibold">
        Software Engineer
      </h2>

      <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-md md:text-2xl text-slate-500">
        <span>Java</span>
        <span>• Spring Boot</span>
        <span>• Microservices</span>
        <span>• Distributed Systems</span>
        <span>• Sockets</span>
        <span>• AI</span>
        <span>• WebRTC</span>
        <span>• BLE</span>
      </div>
      <button
        onClick={handleDownloadResume}
        className="mt-8 inline-flex items-center space-x-2 border border-[var(--app-green)] text-slate-400 fill-slate-400 px-6 py-2 rounded hover:text-slate-300 hover:fill-slate-300 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 md:w-6 md:h-6"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
          />
        </svg>
        <span className="text-lg md:text-2xl">Download Resume</span>
      </button>
      <div className="flex items-center gap-4 mt-6">
        <Link
          href="https://www.linkedin.com/in/ajit-goud/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="rounded-full p-3 outline outline-slate-600 hover:outline-[var(--app-green)] transition-colors"
        >
          <LinkedInIcon className="w-5 h-5 md:w-6 md:h-6 fill-slate-400 hover:fill-slate-200" />
        </Link>

        <Link
          href="https://github.com/ajitgoud"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="rounded-full p-3 outline outline-slate-600 hover:outline-[var(--app-green)] transition-colors"
        >
          <GithubIcon className="w-5 h-5 md:w-6 md:h-6 fill-slate-400 hover:fill-slate-200" />
        </Link>
      </div>
    </div>
  );
}
