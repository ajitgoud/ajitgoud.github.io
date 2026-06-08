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
            Android Engineer with {`${getExperienceYears()}`}+ years of experience
            building scalable mobile applications and modular SDKs across IoT,
            fintech, media streaming, and health-tech domains. At NeoSoft, I work
            across multiple product-driven clients, developing real-time Android
            solutions and device-integrated applications.
          </p>

          <p className={aboutMeParaClasses}>
            For a Smart Glasses platform (Jio Tesseract), I led development of the
            Android companion application and contributed to a modular Android SDK
            powering device communication and media workflows. My work involved
            Bluetooth (Classic & BLE) connectivity, RFCOMM-based audio streaming,
            real-time voice interaction pipelines using Silero VAD, wake-word
            detection with Picovoice and Sensory SDK, and WebRTC-based data transfer
            with NACK handling. I also integrated LiveKit for low-latency video
            streaming and enabled seamless React Native integration through
            TurboModules.
          </p>

          <p className={aboutMeParaClasses}>
            For a fintech client (BHIM UPI Plugin), I contributed to the development
            of a modular Android payment SDK enabling direct UPI transactions. I built
            Jetpack Compose-based payment flows, implemented API and data layers using
            Ktor, integrated dependency injection with Koin, and enhanced transaction
            security through SSL pinning and code obfuscation.
          </p>

          <p className={aboutMeParaClasses}>
            For a media streaming client (Audiaa), I optimized live FM playback using
            ExoPlayer, improved Room database performance, resolved memory leaks and
            lifecycle-related issues, and improved analytics reliability.
          </p>

          <p className={aboutMeParaClasses}>
            Previously at SuperUs Systems, I developed Android applications using BLE
            for ESL tag management and built digital signage solutions. I also
            engineered real-time QR communication systems using WebSockets and
            contributed to a ReactJS-based template editor for device content design.
          </p>

          <p className={aboutMeParaClasses}>
            My core expertise includes Kotlin, Jetpack Compose, MVVM, Clean
            Architecture, Coroutines, Flow, Bluetooth (BLE & Classic), WebRTC, and SDK
            development. I work comfortably in Agile environments using Git, JIRA,
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
