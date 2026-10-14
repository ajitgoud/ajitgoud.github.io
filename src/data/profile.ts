/**
 * All personal content lives here (plus projects.config.ts for GitHub projects).
 * Edit this file to update the site; no component changes needed.
 */

export const profile = {
  name: "Ajit Goud",
  title: "Java Backend Engineer",
  location: "Mumbai, India",

  openToWork: true,
  openToWorkText: "Open to Senior Backend Engineer roles",

  tagline:
    "Backend engineering by day, building and experimenting with AI systems along the way..",

  summary:
    "Java Backend Engineer with 5.6+ years of software engineering experience across enterprise applications, backend services, data processing, and real-time systems. Experienced in building Spring Boot REST APIs, payment middleware, and data-processing pipelines, with expertise in Java, Spring Security, JPA/Hibernate, PostgreSQL, and distributed systems. Hands-on experience with Kafka, Redis, Docker, and Kubernetes, alongside developing GenAI solutions including voice-to-voice assistants with tool calling and agentic RAG systems using OpenAI, Groq, Spring AI, pgvector, and MCP.",

  email: "ajitgoud.career@gmail.com",
  github: "https://github.com/ajitgoud",
  linkedin: "https://www.linkedin.com/in/ajit-goud/",
  resume: "/assets/pdf/AjitGoud-resume.pdf",
  careerStart: "2021-01",
};

export type Role = {
  company: string;
  role: string;
  place: string;
  start: string; // YYYY-MM
  end: string; // YYYY-MM or "present"
  context?: string;
  highlights: string[];
  stack: string[];
};

// Newest first.
export const experience: Role[] = [
  {
    company: "NeoSoft",
    role: "Software Engineer",
    place: "Mumbai",
    start: "2024-02",
    end: "2026-07",
    context: "Jio Tesseract, a smart-glasses platform",
    highlights: [
      "Designed a modular SDK that encapsulates device communication, audio processing and API integrations, with defined interfaces between application components and external services.",
      "Integrated LiveKit/WebRTC streaming into an AI-enabled workflow, supporting real-time video interactions and backend request monitoring.",
      "Built AI proofs of concept on OpenAI and Groq APIs for translation, voice interaction, summarization and intent detection.",
      "Prototyped reliable WebRTC file transfer with NACK-based retransmission and RSA/AES encryption.",
      "Wrote the high-level and software architecture documents covering components, data flows and system integrations.",
    ],
    stack: [
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
  },
  {
    company: "SuperUs Systems",
    role: "Senior Software Developer",
    place: "Mumbai",
    start: "2022-12",
    end: "2023-11",
    context: "Connected-device and payments products",
    highlights: [
      "Built a Java middleware for real-time UPI payments: generated dynamic QR codes from transaction data, pushed them to QR devices over serial communication, and managed device states across initiation, success, failure and idle.",
      "Built an end-to-end ESL template platform: Spring Boot backend and REST APIs (create, edit, import, export, persist) with a React + Fabric.js canvas editor. Tag-based dynamic templates let one template serve every user.",
      "Built REST APIs and backend workflows for a meeting-room solution (availability, scheduling) and a digital-signage platform (scheduling and delivery of images, video and web content).",
      "In a small startup team, also shipped Android/BLE ESL apps (20% faster image transfer), a battery-analytics app, and a Java-to-Kotlin migration of a legacy app.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "JPA/Hibernate",
      "WebSockets",
      "React",
      "BLE",
      "Serial communication",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Assistant System Engineer",
    place: "Mumbai",
    start: "2021-01",
    end: "2022-12",
    context: "Data processing and reporting platform",
    highlights: [
      "Built and ran PySpark jobs with Hive queries on HDFS for large-scale data processing; validated new model versions, verified outputs and promoted them to higher environments.",
      "Maintained a production reporting platform generating 200+ reports daily: monitored scheduled jobs, debugged production issues and kept delivery reliable.",
      "Built a Flask + Jinja2 portal that automated model-testing workflows; supported Docker, Kubernetes and Jenkins CI/CD deployments. Three process improvements saved CAD 3,000 a year.",
    ],
    stack: [
      "Java",
      "Python",
      "Apache Airflow",
      "Spark",
      "Hive",
      "HDFS",
      "Docker",
      "Kubernetes",
      "Jenkins",
    ],
  },
];

export const skillGroups: { name: string; items: string[] }[] = [
  {
    name: "Backend",
    items: [
      "Java 21",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "JPA / Hibernate",
      "REST APIs",
      "Microservices",
      "WebSockets",
    ],
  },
  {
    name: "Data and messaging",
    items: ["PostgreSQL", "SQL", "Redis", "Kafka", "RabbitMQ", "Flyway"],
  },
  {
    name: "Distributed systems",
    items: [
      "System design",
      "Idempotency",
      "Outbox pattern",
      "Concurrency",
      "Rate limiting",
      "Event-driven design",
    ],
  },
  {
    name: "Infrastructure",
    items: [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "AWS (basic)",
    ],
  },
  {
    name: "Testing",
    items: [
      "JUnit 5",
      "Mockito",
      "Testcontainers",
      "Integration tests",
      "Concurrency tests",
    ],
  },
  {
    name: "Real-time and AI",
    items: ["WebRTC", "LiveKit", "OpenAI / Groq APIs", "RAG", "Tool calling", "MCP"],
  },
  {
    name: "Also",
    items: ["Python", "Kotlin", "React", "Next.js", "Git"],
  },
];

export const education = [
  {
    degree: "B.E. in Computer Science",
    school: "University of Mumbai",
    place: "Mumbai",
    start: "2016",
    end: "2020",
  },
];
