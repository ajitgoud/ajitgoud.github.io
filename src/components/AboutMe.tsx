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
            Hi, I’m Ajit Goud, an Android Engineer with{" "}
            {`${getExperienceYears()}`}+ years of experience building
            high-performance, scalable apps and modular SDKs. I specialize in
            Kotlin/Java, Bluetooth communication (Classic & BLE), voice AI (VAD,
            wake word), and React Native integrations via TurboModules.
          </p>
          <p className={aboutMeParaClasses}>
            At Jio Tesseract, I led development for smart glasses features:
          </p>
          <ul className="list-disc list-inside text-slate-400 text-lg space-y-2">
            <li>
              Audio streaming (RFCOMM), WebRTC PoCs, wake word detection
              (Picovoice, Sensory)
            </li>
            <li>
              AI assistant integration, real-time translation, visual search
            </li>
            <li>
              IMC 2024 demo delivery with seamless voice-controlled workflows
            </li>
            <li>
              SDKs and companion apps with BLE pairing, media sync, AI
              interactions
            </li>
          </ul>
          <p className={aboutMeParaClasses}>
            Previously at SuperUs Systems, I delivered Android + BLE solutions
            for ESL systems and signage, and built a ReactJS/Fabric.js canvas
            tool for template design.
          </p>
          <p className={aboutMeParaClasses}>
            I'm passionate about crafting intuitive, future-ready experiences
            through clean architecture, robust communication stacks, and
            AI-driven workflows. Skilled in Agile environments with JIRA, Git,
            and Confluence.
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
