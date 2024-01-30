import React from "react";
import { getMonthYear } from "../utils/dateFormatter";
const experiences = [
  {
    position: "Senior software developer",
    company: "SuperUs Systems Pvt Ltd",
    location: "Mumbai, Bharat",
    start: "2022-12-27",
    end: "2023-11-24",
    descriptions: [
      "Developed and implemented Android apps for managing and updating ESL tags using BLE protocol,enabling dynamic template customization, single or bulk updates, and optimized performance andefficiency, ensuring seamless data transfer.",
      "Powered digital signage displays by creating android applications to seamlessly play online and offline content, including image and video display in specific sequences and direct integration of website content using URLs.",
      "Worked with backend team and developed in-house ReactJS based Canvas web solution using Fabric.Js, featuring seamless object addition such as Text, Image, Barcode, QRcode and manipulation, undo/redo functionality, and user-friendly keyboard shortcuts, enhancing user experience and digital template creation for Electronic shelf label (ESL) tags display.",
      "Collaborated with the firmware team and developed a Java-based DynamicQR Middleware service on Windows, enabling communication between DynamicQR devices and Websocket clients for real-time payment processing and dynamic QR code display.",
    ],
    technologies: [
      "Android SDK",
      "Jetpack components",
      "MVVM",
      "Bluetooth low energy",
      "Coroutines",
      "ReactJS",
      "FabricJs",
    ],
  },

  {
    position: "Assistant System Engineer",
    company: "Tata Consultancy Services",
    location: "Mumbai, Bharat",
    start: "2021-01-07",
    end: "2022-12-23",
    descriptions: [
      "Designed and optimized internal Android applications with Jetpack components and Retrofit,ensuring exceptional user experience and achieving a 20% performance enhancement.",
      "Developed Apache Airflow DAGs to seamlessly incorporate new models into the pipeline, ensuring efficient data processing and workflow management.",
      "Utilized Spark to create and execute data processing jobs, leveraging Hive queries, HDFS for data loading, and PySpark for efficient data manipulation.",
      "Lead and maintained a project pivotal for generating 200+ daily reports. Debugged and resolved issues to ensure seamless functionality",
      "Communicated with a team to develop a Flask-based web portal, streamlined and automated the testing process leveraging Jinja2 template, significantly reducing manual efforts and minimizing errors, resulting in annual cost savings of $1000 CAD.",
      "Conducted unit tests and integration tests for new features and enhancements, identifying and documenting any issues or bugs using JIRA for effective tracking and resolution.",
      "Identified and implemented two process improvements, resulting in significant time and effort savings, with each improvement yielding annual cost savings of $1000 CAD.",
    ],
    technologies: [
      "Android SDK",
      "Jetpack components",
      "MVVM",
      "Python",
      "Apache airflow",
      "Flask",
      "ReactJs",
    ],
  },

  {
    position: "Android Developer Intern",
    company: "Kalpataru Computer Services",
    location: "Mumbai, Bharat",
    start: "2019-07-07",
    end: "2019-09-30",
    descriptions: [
      "Created smooth, responsive, user-friendly UI with XML following material design.",
      "Integrated social media authentications such as Google, Facebook as well OTP authentication.",
      "Integrated firebase and firebase services such as firebase database, firebase storage, firebase cloud function, and firebase authentication.Added Google Maps, and Admob.",
    ],
    technologies: [
      "Android SDK",
      "Jetpack components",
      "MVVM",
      "Google maps",
      "Admob",
      "Firebase",
      "Facebook SDK",
    ],
  },

  {
    position: "Frontend Developer Intern",
    company: "E-Cell (IIT-H)",
    location: "Remote",
    start: "2019-01-01",
    end: "2019-02-01",
    descriptions: [
      "Worked on front end development of a Flutter based app.",
      "Developed smooth, user-friendly responsive UI as per design/prototype.",
    ],
    technologies: ["Flutter", "UI/UX design"],
  },
];

function Experience({ experience }) {
  const {
    position,
    company,
    location,
    start,
    end,
    descriptions,
    technologies,
  } = experience;
  return (
    <div className="md:flex md:space-x-4  md:items-baseline p-4 max-md:rounded-lg max-md:hover:bg-app-dark max-md:hover:bg-opacity-20">
      <p className="hidden md:block font-light text-slate-400 text-sm">{`${getMonthYear(
        start
      )} - ${getMonthYear(end)}`}</p>
      <div className="flex-1  md:px-8 md:py-8 md:rounded-lg md:hover:bg-app-dark md:hover:bg-opacity-20">
        <h1 className="text-2xl">{position}</h1>
        <p className="mb-2">
          <span className="text-lg text-app-green ">{company}</span> {" - "}
          <span className="italic text-slate-400">{location}</span>{" "}
        </p>
        <p className="mb-4 md:hidden font-light text-slate-400 text-sm">{`${getMonthYear(
          start
        )} - ${getMonthYear(end)}`}</p>

        <ul className="opacity-90 text-slate-400 font-light space-y-2 ">
          {descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
        <p className="mt-4">
          <span className="">Technologies worked:</span>
          <span className="text-lg  opacity-80">
            {" "}
            {technologies.join(", ")}
          </span>
        </p>
      </div>
    </div>
  );
}

export default function Experiences() {
  return (
    <div  className="space-y-4 md:space-y-16">
      <h1 className="text-4xl underline decoration-app-green underline-offset-8">
        Experiences
      </h1>
      <div className="md:flex md:space-x-8">
        <div className="hidden md:block w-px rounded-lg bg-slate-500" />
        <div className="flex-1 space-y-8">
          {experiences.map((experience, index) => (
            <Experience key={index} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
