"use client";

import React from "react";

type SkillData = {
  name: string;
  skills: string[];
};
const skills: SkillData[] = [
  {
    name: "Languages",
    skills: [
      "Java",
      "Python",
      "Kotlin",
      "SQL",
      "JavaScript",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "WebSockets",
      "Socket.IO",
      "JPA / Hibernate",
    ],
  },
  {
    name: "Data & Messaging",
    skills: [
      "PostgreSQL",
      "Redis",
      "Kafka",
      "RabbitMQ",
      "Apache Airflow",
      "Apache Spark",
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Helm",
      "Jenkins",
      "CI/CD",
      "Linux",
    ],
  },
  {
    name: "AI & Real-Time",
    skills: [
      "OpenAI",
      "Groq",
      "WebRTC",
      "LiveKit",
      "BLE",
    ],
  },
  {
    name: "Engineering",
    skills: [
      "System Design",
      "Distributed Systems",
      "API Design",
      "ReactJS",
      "Unit Testing",
      "Git",
      "JIRA",
      "Confluence",
    ],
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
