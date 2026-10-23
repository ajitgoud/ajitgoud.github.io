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
    "Java Backend Engineer with 5.6+ years of software engineering experience across enterprise applications, backend services, data processing, and real-time systems. Experienced in building Spring Boot REST APIs, payment middleware, and data-processing pipelines, with expertise in Java, Spring Security, JPA/Hibernate, PostgreSQL, and distributed systems. Hands-on experience with Kafka, Redis, Docker, and Kubernetes, alongside developing GenAI solutions including voice-to-voice assistants with tool calling and agentic RAG systems using OpenAI, Groq, Spring AI, pgvector.",

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
    context: "Java backend services, AI integration and real-time streaming",
    highlights: [
      "Implemented API authentication using Spring Security and JWT, securing backend endpoints with token-based authentication.",
      "Implemented Redis-based API rate limiting to control request traffic and integrated Swagger/OpenAPI for REST API documentation and testing.",
      "Containerized backend services using Docker and deployed applications on AWS.",
      "Built voice-to-voice AI workflows using OpenAI and Groq APIs, implementing end-of-speech detection with amplitude-based audio analysis before integrating Silero VAD for more reliable speech detection.",
      "Integrated LiveKit/WebRTC for real-time video streaming and configured backend services to generate JWT-based access tokens for secure streaming sessions.",
      "Developed an AI-powered visual question-answering workflow that combined camera screenshots with voice input and returned AI-generated audio responses."
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "JPA/Hibernate",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
      "LiveKit",
      "OpenAI",
      "Groq",
      "Swagger/OpenAPI"
    ],
  },
  {
    company: "SuperUs Systems",
    role: "Senior Software Developer",
    place: "Mumbai",
    start: "2022-12",
    end: "2023-11",
    context: "Java backend development, payment middleware and REST APIs",
    highlights: [
      "Developed Java middleware for real-time UPI payments, generating dynamic QR codes from transaction details, transmitting them to QR devices over serial communication, and managing transaction states across initiation, success, and failure.",
      "Built an end-to-end Electronic Shelf Label (ESL) template platform using Spring Boot and REST APIs for template creation, editing, import, export, and persistence, integrated with a React and Fabric.js canvas editor. Implemented reusable, tag-based templates that allowed a single design to serve multiple users through runtime data binding.",
      "Developed REST APIs and backend workflows for ESL management and digital-signage platforms, supporting content management, scheduling, and delivery of images, videos, and web content across devices."
    ],
    stack: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "JPA/Hibernate",
      "PostgreSQL",
      "ReactJs",
      "Fabric.js",
      "Serial Communication"
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
      "Developed and maintained PySpark jobs and Hive queries on HDFS for large-scale data processing, validating model outputs before promoting new model versions to higher environments.",
      "Owned and maintained a production reporting platform generating 200+ reports daily, taking responsibility for job monitoring, production issue resolution, and reliable, on-time report delivery.",
      "Built a Flask and Jinja2 portal to automate model-testing workflows, reducing manual effort and delivering process improvements that saved approximately CAD 3,000 annually.",
      "Used Docker to containerize application components and supported deployments in Kubernetes environments.",
      "Worked with Jenkins CI/CD pipelines to streamline build and deployment workflows and supported application deployments in AWS environments."
    ],
    stack: [
      "Java",
      "Python",
      "Flask",
      "Apache Airflow",
      "PySpark",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "AWS",
      "CI/CD"
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
    items: ["WebRTC", "LiveKit", "OpenAI / Groq APIs", "RAG", "Tool calling"],
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
