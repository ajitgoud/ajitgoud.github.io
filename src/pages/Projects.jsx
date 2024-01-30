import React from "react";
import Footer from "../components/Footer";
import projects from "../data/projects.js";
import { Link } from "react-router-dom";
import { GithubIcon, YoutubeIcon } from "../assets/icons/Icons.jsx";

function Project({ project }) {
  const { name, descriptions, link, techstack, Icon } = project;
  return (
    <div className="space-y-4 rounded-lg p-4 md:p-8 hover:bg-app-dark hover:bg-opacity-20">
      <div className="flex items-center space-x-4">
        <div className="rounded-full p-2 bg-app-dark bg-opacity-80 outline outline-1 outline-app-snow-100">
          <Icon className="w-6 h-6 fill-slate-300 " />
        </div>
        <p className="text-2xl ">{name}</p>
      </div>
      <div className="text-slate-400 opacity-80 space-y-2">
        {descriptions.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>

      <div className="space-y-1">
        <p className="text-slate-400">Tech stack:</p>
        <div className="flex flex-wrap space-x-2">
          {techstack.map((tech, index) => (
            <p
              key={index}
              className="my-1 rounded-md border  text-app-green px-2 py-1 "
            >
              {tech}
            </p>
          ))}
        </div>
      </div>

      {link ? (
        <div className="flex items-center space-x-3">
          <span className="text-slate-400">Links: </span>
          {link.github ? (
            <Link
              to={link.github}
              target="_blank"
              className="rounded-full p-1  outline outline-1"
            >
              <GithubIcon className="w-6 h-6 fill-slate-300 hover:fill-slate-100 " />
            </Link>
          ) : null}

          {link.youtube ? (
            <Link
              to={link.youtube}
              target="_blank"
              className="rounded-full p-1  outline outline-1"
            >
              <YoutubeIcon className="w-6 h-6 fill-slate-300 hover:fill-slate-100 " />
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="h-full flex flex-col p-8 lg:px-32 lg:py-16 text-slate-300 space-y-16 ">
      <div className="flex-1  space-y-8 md:space-y-16">
        <h1 className="text-4xl underline decoration-app-green underline-offset-8">
          Projects
        </h1>
        <div className="md:grid md:grid-cols-2 md:gap-8 max-md:space-y-4">
          {projects.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
