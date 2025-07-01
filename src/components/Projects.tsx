"use client";

import React from "react";
import Link from "next/link";
import { GithubIcon, YoutubeIcon } from "@/components/Icons";
import projects from "@/utils/projects";

type ProjectType = {
  name: string;
  descriptions: string[];
  link?: {
    github?: string;
    youtube?: string;
  };
  techstack: string[];
  Icon: React.ElementType;
};

function ProjectCard({ project }: { project: ProjectType }) {
  const { name, descriptions, link, techstack, Icon } = project;

  return (
    <div className="space-y-4 rounded-lg p-4 md:p-8 hover:bg-[var(--app-dark)] hover:bg-opacity-20">
      <div className="flex items-center space-x-4">
        <div className="rounded-full p-2 bg-[var(--app-dark)] bg-opacity-80 outline outline-[var(--app-snow-100)]">
          <Icon className="w-6 h-6 fill-slate-300" />
        </div>
        <p className="text-2xl">{name}</p>
      </div>

      <div className="text-slate-400 opacity-80 space-y-2">
        {descriptions.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>


      <div className="space-y-1">
        <p className="text-slate-400">Tech stack:</p>
        <div className="flex flex-wrap gap-2">
          {techstack.map((tech, index) => (
            <span
              key={index}
              className="my-1 rounded-md border border-[var(--app-green)] text-[var(--app-green)] px-2 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {link && (link.github || link.youtube) && (
        <div className="flex items-center space-x-3">
          <span className="text-slate-400">Links:</span>
          {link.github && (
            <Link
              href={link.github}
              target="_blank"
              className="rounded-full p-1 outline"
            >
              <GithubIcon className="w-6 h-6 fill-slate-300 hover:fill-slate-100" />
            </Link>
          )}
          {link.youtube && (
            <Link
              href={link.youtube}
              target="_blank"
              className="rounded-full p-1 outline"
            >
              <YoutubeIcon className="w-6 h-6 fill-slate-300 hover:fill-slate-100" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="space-y-4 md:space-y-16">
      <h1 className="text-4xl underline decoration-[var(--app-green)] underline-offset-8">
        Projects
      </h1>
      <div className="md:grid md:grid-cols-2 md:gap-8 max-md:space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
