import React from "react";

const skills = [
  {
    name: "Android",
    skills: [
      "Android SDK",
      "Compose",
      "Jetpack components",
      "RESTful Apis",
      "Coroutines",
      "Dependency injection (Hilt)",
      "MVVM",
      "AAR",
      "Unit tests",
      "Espresso",
    ],
  },
  {
    name: "Languages",
    skills: ["Java", "Kotlin", "Javascript", "Python", "Typescript"],
  },

  {
    name: "Backend",
    skills: ["Flask", "NodeJs", "Express", "Firebase"],
  },

  {
    name: "Frontend",
    skills: ["ReactJs", "NextJs", "HTML", "CSS"],
  },

  {
    name: "Database",
    skills: ["SQLite", "MySQL", "MongoDB"],
  },

  {
    name: "Version control",
    skills: ["Git", "Gitlab", "Github"],
  },
  {
    name: "Others",
    skills: ["Figma", "Postman", "Data structures", "Algorithms"],
  },
];

function Skill({ skill }) {
  const { name, skills } = skill;
  return (
    <div className="p-8  rounded-lg hover:bg-app-dark hover:bg-opacity-20">
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 rounded-[50%] aspect-square bg-app-snow-100" />
        <div className="w-2 h-2 rounded-[50%] aspect-square bg-app-snow-100" />
        <span className="px-2 text-xl">{name}</span>
      </div>
      <p className="text-slate-400 text-md">{skills.join(", ")}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="space-y-4 md:space-y-8">
      <h1 className="text-4xl underline decoration-app-green underline-offset-8">
        Skills
      </h1>
      <div className=" md:grid md:grid-cols-2 md:gap-0">
        {skills.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
