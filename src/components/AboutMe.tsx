"use client";

import Image from "next/image";
import profile_pic from "../../public/assets/images/profile_pic.jpeg";
import { getExperienceYears } from "@/utils/dateFormatter";

export default function AboutMe() {
  const aboutMeParaClasses = "text-lg text-slate-400";

  return (
    <div className="space-y-16">
      <h1 className="text-4xl underline decoration-[var(--app-green)] underline-offset-8">
        About me
      </h1>
      <div className="flex flex-col-reverse space-y-reverse space-y-8 md:space-y-0 md:flex-row md:space-x-4 lg:space-x-8 md:items-start">
        <div className="flex-1 space-y-8">
          <p className={aboutMeParaClasses}>
            Software Engineer with {`${getExperienceYears()}`}+ years of
            experience building applications, backend integrations, and
            real-time systems across financial services, connected devices,
            media, and enterprise platforms. My work spans API development,
            system integrations, data processing, and communication between
            distributed components.
            </p>

          <p className={aboutMeParaClasses}>
            At Tata Consultancy Services, I worked on production applications,
    automation workflows, and data-processing systems using Python, Apache
    Airflow, PySpark, Hive, and HDFS. I helped automate repetitive workflows,
    validate and promote data-processing models, and maintain a reporting
    platform generating 200+ reports daily. I also contributed process
    improvements that reduced operational effort and delivered over CAD
    $2,000 in annual savings.
          </p>

          <p className={aboutMeParaClasses}>
            At SuperUs Systems, I worked across backend and connected-device
    solutions. I developed Java middleware for DynamicQR devices, Spring Boot
    services and REST APIs for web platforms, and BLE-based systems for
    Electronic Shelf Labels. These systems connected web applications with
    physical devices, enabling real-time QR updates and reliable bulk ESL
    updates, while the BLE transfer improvements reduced average tag update
    time by 20%.
          </p>

          <p className={aboutMeParaClasses}>
            At NeoSoft, I have worked across multiple client platforms spanning
    financial services, media, and smart-glass systems. My work includes API
    and data-layer development, backend AI integrations, WebSocket and
    Socket.IO communication, WebRTC, and LiveKit. These efforts enabled
    real-time AI interactions, low-latency video streaming, dynamic
    configuration delivery, and connected-device experiences showcased at
    IMC 2024.
          </p>

          <p className={aboutMeParaClasses}>
            I'm currently focused on backend engineering and distributed
            systems, with particular interest in scalable services,
            event-driven architectures, real-time applications, cloud
            infrastructure, and AI-powered systems.
          </p>

        </div>
        <div className="flex-1">
          <Image
            src={profile_pic}
            alt="Ajit Goud"
            width={profile_pic.width}
            height={profile_pic.height}
            className="rounded aspect-square mx-auto w-full lg:w-[80%]"
            placeholder="blur"
            priority
          />
        </div>
      </div>
    </div>
  );
}
