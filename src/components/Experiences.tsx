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
  "Google Cloud",
  "BLE",
],
    descriptions: [
      "Developed API and data-layer components for a UPI payment SDK, handling service integration, request/response processing, validation, and payment-state management across the payment lifecycle.",
"Deployed and configured LiveKit for low-latency video streaming, and developed a WebRTC-based PoC for reliable large-file transfer using NACK-based retransmission with RSA key exchange and AES encryption.",
"Developed backend AI workflows integrating OpenAI, Groq, and Google Cloud services, and exposed AI capabilities through WebSocket/Socket.IO endpoints to enable real-time, bidirectional communication with frontend clients.",
"Developed REST APIs for persisting and retrieving dynamic UI configurations as JSON, enabling server-driven UI updates and centralized configuration management.",
"Developed demo for showcase at IMC 2024, integrating LiveKit-based video streaming, WebRTC communication, wake-word/VAD pipelines, and connected-device interactions into a unified smart-glass experience and making it a huge success.",
"Developed Bluetooth Classic and BLE communication workflows for connected-device platforms, handling device pairing, data exchange, and asynchronous communication between devices and application services.",
"Created and maintained HLD & SBS documentation for application and SDK architecture, documenting system components, flows, integrations, and key technical decisions to support development and cross-team alignment.",
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
      "Developed backend services and REST APIs for a digital signage platform, enabling content management, scheduling, and delivery of online/offline images and videos, along with dynamic website content through URL-based integration.",
"Built an end-to-end ESL template management platform, developing the Spring Boot backend and REST APIs alongside a ReactJS + Fabric.js canvas editor for creating, editing, importing, exporting, and persisting templates, with seamless integration into ESL device workflows.",
"Developed and enhanced a Java-based DynamicQR middleware for real-time payment processing, generating dynamic QR codes from transaction data such as UPI ID and amount, transmitting them to physical QR devices over serial communication, and managing device states across payment initiation, success, failure, and idle conditions.",
"Developed a meeting-room management solution, implementing REST APIs and backend workflows for room availability, scheduling, and meeting management.",
"Developed android applications for managing and updating Electronic Shelf Labels (ESL) over Bluetooth Low Energy (BLE), supporting dynamic template customization, single and bulk updates, and reliable image/data transfer.",
"Improved BLE-based image transfer for ESL devices, achieving a 20% reduction in average update time while maintaining reliable bulk updates across multiple tags."
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
      "Built and executed Apache Spark/PySpark jobs for large-scale data processing, leveraging Hive queries for data analysis and HDFS for data loading and distributed storage.",
"Performed quality assurance and validation of data-processing models by testing new model versions, verifying outputs, identifying issues, and deploying validated changes to higher environments.",
"Developed a Flask + Jinja2 web portal to streamline and automate model-testing workflows, reducing repetitive manual effort, minimizing unintended errors, and saving approximately CAD 1,000 annually.",
"Maintained and enhanced a production reporting platform generating 200+ reports daily, monitoring scheduled jobs, debugging production issues, and ensuring reliable report generation and delivery.",
"Worked with Docker, Kubernetes, Jenkins, and CI/CD pipelines to support application deployment, environment management, and continuous integration workflows; assisted team members with production troubleshooting and operational issues.",
"Proposed and implemented two process improvements that reduced operational effort and improved team efficiency, with each improvement delivering approximately CAD 1,000 in annual savings."
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
