"use client";

import React from "react";

type SkillData = {
  name: string;
  skills: string[];
};

const skills: SkillData[] = [
  {
    name: "Languages",
    skills: ["Kotlin", "Java", "Python", "Javascript", "Typescript", "YAML"],
  },
  {
    name: "Android Development",
    skills: [
      "Android SDK",
      "Jetpack Components",
      "Coroutines",
      "Firebase (Auth, Firestore, Cloud Functions)",
      "RESTful APIs",
      "Hilt (DI)",
      "AAR Packaging",
      "Gradle",
      "Espresso",
      "Unit Testing",
      "Jetpack Compose",
      "Bluetooth (Classic & BLE)",
      "LiveKit",
      "WebRTC",
    ],
  },
  {
    name: "Architecture & SDK",
    skills: ["MVVM", "Modular SDK Development", "TurboModules (React Native)"],
  },
  {
    name: "Web & Cross-Platform",
    skills: [
      "ReactJS",
      "Next.js",
      "Node.js",
      "Flask",
      "Express",
      "Apache Airflow",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Flutter",
    ],
  },
  {
    name: "Databases",
    skills: ["Room", "SQLite", "MySQL", "MongoDB"],
  },
  {
    name: "Dev Tools & Practices",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "JIRA",
      "Confluence",
      "Code Review",
      "Debugging",
      "Agile/Scrum",
      "Postman",
      "Figma",
    ],
  },
  {
    name: "Computer Science Fundamentals",
    skills: ["Data Structures", "Algorithms", "System Design"],
  },
];

type SkillProps = {
  skill: SkillData;
};

function Skill({ skill }: SkillProps) {
  const { name, skills } = skill;

  return (
    <div className="p-8 rounded-lg hover:bg-[var(--app-dark)] hover:bg-opacity-20">
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 rounded-full aspect-square bg-[var(--app-snow-100)]" />
        <div className="w-2 h-2 rounded-full aspect-square bg-[var(--app-snow-100)]" />
        <span className="px-2 text-xl">{name}</span>
      </div>
      <p className="text-slate-400 text-md">{skills.join(", ")}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="space-y-4 md:space-y-8">
      <h1 className="text-4xl underline decoration-[var(--app-green)] underline-offset-8">
        Skills
      </h1>
      <div className="md:grid md:grid-cols-2 md:gap-0">
        {skills.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
