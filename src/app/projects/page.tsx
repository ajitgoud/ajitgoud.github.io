'use client';

import React from "react";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const ProjectsPage: React.FC = () => {
  return (
    <div className="h-full flex flex-col p-8 lg:px-32 lg:py-16 text-slate-300 space-y-16">
      <div className="flex-1 space-y-16">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
