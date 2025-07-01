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
    start: "2023-02",
    end: "Present",
    technologies: [
      "Android",
      "Kotlin",
      "Bluetooth Classic",
      "BLE",
      "WebRTC",
      "React Native",
      "TurboModules",
      "LiveKit",
      "Picovoice",
      "Sensory",
      "Google Fit",
      "Expo",
    ],
    projects: [
      {
        title: "Jio Tesseract",
        descriptions: [
          "Development of a modular Android SDK for smart glasses, aiming to encapsulate core components like device communication, audio handling, settings, and APIs to support scalable feature integration.",
          "Integrated the native Android SDK with a React Native app using TurboModules, enabling high-performance cross-platform interaction.",
          "Implemented audio streaming via Bluetooth RFCOMM as part of a PoC to emulate smart glass behavior for mock devices.",
          "Designed and built voice-driven workflows, where user prompts were captured via mic, with Silero VAD detecting silence (end of prompt), and routed to AI for real-time interaction.",
          "Enabled contextual voice features such as music control (Spotify), assistant responses, navigation, calls, and notifications—driven by natural language prompts.",
          "Spearheaded feature readiness and delivery for the IMC 2024 showcase, demonstrating cutting-edge capabilities like voice AI, visual search, multi-language support, and live video streaming—contributing to a highly successful product demo.",
          "Implemented wake word detection using Picovoice, later enhanced with Sensory SDK, enabling passive, hands-free voice activation.",
          "Developed Bluetooth Classic and BLE-based pairing for seamless connectivity between glasses and the companion app.",
          "Built custom camera features for image/video capture, and integrated LiveKit for low-latency video streaming.",
          "Conducted a WebRTC-based PoC for reliable data transfer using negative acknowledgments (NACK), ensuring lossless transmission of large files.",
          "Authored key architecture documents (HLD, SBS) and conducted internal knowledge sharing sessions on Bluetooth, audio processing, wake word logic, and native-module integration.",
          "Contributed to competitor analysis by reverse-engineering key app flows to inform internal product decisions.",
        ],
      },
      {
        title: "Alyve Health",
        descriptions: [
          "Built an Android-native library integrated via Expo + React Native to enable Google Fit features across platforms.",
          "Delivered smooth integration into health tracking app, improving fitness data accuracy and user experience.",
        ],
      },
    ],
  },
  {
    position: "Senior Software Developer",
    company: "SuperUs Systems Pvt Ltd",
    location: "Mumbai",
    start: "2022-12",
    end: "2023-11",
    technologies: [
      "Android",
      "Kotlin",
      "BLE",
      "ReactJS",
      "Fabric.js",
      "WebSocket",
      "Java",
    ],
    descriptions: [
      "Built Android apps for managing ESL tags via Bluetooth Low Energy, supporting dynamic templates, bulk updates, and reliable data transfer.",
      "Developed Android-based digital signage solutions for displaying online/offline content (images, videos, URLs) in defined sequences.",
      "Created an in-house ReactJS + Fabric.js canvas editor, enabling drag-and-drop of text, images, barcodes/QRs with undo/redo and shortcut support for ESL template design.",
      "Engineered a Java-based middleware for DynamicQR devices to communicate with WebSocket clients, enabling real-time payment processing and QR code updates.",
    ],
  },
  {
    position: "Assistant System Engineer",
    company: "Tata Consultancy Services",
    location: "Mumbai",
    start: "2021-01",
    end: "2022-12",
    technologies: [
      "Android",
      "Kotlin",
      "Apache Airflow",
      "PySpark",
      "Hive",
      "Flask",
      "Jinja2",
      "SQL",
      "Python",
    ],
    descriptions: [
      "Developed and optimized Android apps using Jetpack components and Retrofit, improving performance by 20%and enhancing user experience.",
      "Built Apache Airflow DAGs for model integration and automated data workflows.",
      "Designed scalable Spark jobs using Hive, HDFS, and PySpark for large-scale data processing.",
      "Led and maintained a reporting system generating 200+ daily reports, ensuring stability through proactive debugging.",
      "Co-developed a Flask + Jinja2 web portal to automate testing, reducing manual effort and saving $1,000 CAD annually.",
      "Conducted unit and integration testing, and tracked issues using§ JIRA to ensure feature stability.",
      "Delivered 2 process improvements saving over $2,000 CAD/year, optimizing team efficiency and throughput.",
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
