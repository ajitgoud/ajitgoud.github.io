"use client";

import { getMonthYear } from "@/utils/dateFormatter";

type ProjectType = {
  title: string;
  descriptions: string[];
};

type ExperienceType = {
  position: string;
  company: string;
  location: string;
  start: string;
  end: string;
  projects?: ProjectType[];
  descriptions?: string[];
  technologies: string[];
};
const experiences: ExperienceType[] = [
  {
    position: "Software Engineer",
    company: "NeoSoft",
    location: "Mumbai",
    start: "2024-02",
    end: "2026-07",
    technologies: [
  "Java",
  "Spring Boot",
  "REST APIs",
  "JPA/Hibernate",
  "Socket.IO",
  "WebRTC",
  "LiveKit",
  "RAG",
  "OpenAI",
  "Groq",
],
    descriptions: [
      "Designed a modular SDK encapsulating device communication, audio processing, and API integrations, with defined interfaces between application components and external services.",
"Integrated LiveKit/WebRTC streaming into an AI-enabled workflow, supporting real-time video interactions and backend request monitoring",
"Built AI proofs of concept using OpenAI and Groq APIs for translation, voice interaction, summarization, and intent detection.",
"Prototyped reliable WebRTC file transfer with NACK-based retransmission and RSA/AES encryption.",
"Authored high-level and software architecture documents covering components, data flows, and system integrations.",
    ]
    ,
  },
  {
    position: "Senior Software Developer",
    company: "SuperUs Systems Pvt Ltd",
    location: "Mumbai",
    start: "2022-12",
    end: "2023-11",
    technologies: [
  "Java",
  "Spring Boot",
  "REST APIs",
  "JPA/Hibernate",
  "WebSockets",
  "ReactJS",
  "Fabric.js",
  "BLE",
  "Serial Communication",
],
    descriptions: [
      "Built an end-to-end ESL template platform: a Spring Boot backend and REST APIs (create, edit, import, export, persist) with a ReactJS + Fabric.js canvas editor. Added tag-based dynamic templates, where designers tag text fields once and the Android app fills them at runtime, so one template serves every user instead of a separate design per person.",
"Developed a Java middleware for real-time UPI payments: generated dynamic QR codes from transaction data (UPI ID, amount), pushed them to QR devices over serial communication, and managed device states across initiation, success, failure and idle.",
"Built REST APIs and backend workflows for a meeting-room solution (availability, scheduling) and a digital-signage content platform (scheduling and delivery of images, videos, web content).",
"As part of a small startup team also worked on: Android/BLE ESL apps (20% faster image transfer), a battery-analytics app for ESL tags, and a Java-to-Kotlin migration of a legacy app; presented the products at a 3-day showcase in BKC, Mumbai.",
    ],
  },
  {
    position: "Assistant System Engineer",
    company: "Tata Consultancy Services",
    location: "Mumbai",
    start: "2021-01",
    end: "2022-12",
    technologies: [
      "Java",
  "Python",
  "Apache Airflow",
  "Apache Spark",
  "Hive",
  "HDFS",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "CI/CD",
],
    descriptions: [
      "Built and ran PySpark jobs with Hive queries on HDFS for large-scale data processing; validated new model versions, verified outputs and promoted them to higher environments.",
"Developed a Flask + Jinja2 web portal to streamline and automate model-testing workflows, reducing repetitive manual effort, minimizing unintended errors, and saving approximately CAD 1,000 annually.",
"Maintained a production reporting platform generating 200+ reports daily: monitored scheduled jobs, debugged production issues, ensured reliable delivery.",
"Built a Flask + Jinja2 portal automating model-testing workflows; supported Docker, Kubernetes and Jenkins CI/CD deployments. Three process improvements saved CAD 3,000 annually.",
    ],
  },
];

function Project({ project }: { project: ProjectType }) {
  return (
    <div className="mt-2">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <ul className="opacity-90 text-slate-400 font-light list-disc list-inside space-y-1 mt-2">
        {project.descriptions.map((desc, idx) => (
          <li key={idx}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}
function Experience({ experience }: { experience: ExperienceType }) {
  const {
    position,
    company,
    location,
    start,
    end,
    projects,
    descriptions,
    technologies,
  } = experience;

  return (
    <div className="max-md:flex max-md:flex-col-reverse max-md:space-y-1 max-md:space-y-reverse md:flex md:space-x-4 md:items-baseline max-md:p-4 max-md:rounded-lg max-md:hover:bg-app-dark max-md:hover:bg-opacity-20">
      <p className="hidden md:block font-light text-slate-400 text-sm md:w-40 flex-shrink-0">
        {`${getMonthYear(start)} - ${getMonthYear(end)}`}
      </p>

      <div className="md:flex-1 md:px-8 md:rounded-lg md:hover:bg-app-dark md:hover:bg-opacity-20">
        <h1 className="text-2xl">{position}</h1>
        <p className="mt-2">
          <span className="text-lg text-[var(--app-green)]">{company}</span>{" "}
          {" - "}
          <span className="italic text-slate-400">{location}</span>
        </p>

        {projects && (
          <div className="space-y-4 mt-4">
            {projects.map((project, idx) => (
              <Project key={idx} project={project} />
            ))}
          </div>
        )}

        {descriptions && (
          <ul className="opacity-90 text-slate-400 font-light list-disc list-inside space-y-1 mt-4">
            {descriptions.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        )}

        {technologies && technologies.length > 0 && (
          <p className="mt-4 text-slate-400">
            <span className="font-medium text-white">Technologies:</span>{" "}
            <span>{technologies.join(", ")}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default function Experiences() {
  return (
    <div className="space-y-4 md:space-y-16">
      <h1 className="text-4xl underline decoration-[var(--app-green)] underline-offset-8">
        Experiences
      </h1>
      <div className="md:flex md:space-x-8">
        <div className="hidden md:block w-px rounded-lg bg-slate-500" />
        <div className="flex-1 space-y-16">
          {experiences.map((experience, idx) => (
            <Experience key={idx} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
