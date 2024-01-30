import React from "react";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Educations from "../components/Educations";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="h-full flex flex-col p-8 lg:px-32 lg:py-16 text-slate-300 space-y-16 ">
      <div className="flex-1 space-y-16">
        <AboutMe />
        <Skills />
        <Educations />
        <Experiences />
      </div>
      <Footer />
    </div>
  );
}
