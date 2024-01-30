import React from "react";
import profile_pic from "../assets/profile_pic.jpeg";

export default function AboutMe() {
  const aboutMeParaClasses = "text-lg text-slate-400";
  return (
    <div className="space-y-16">
      <h1 className="text-4xl underline decoration-app-green underline-offset-8">
        About me
      </h1>
      <div className="flex flex-col-reverse space-y-8 space-y-reverse  md:flex md:flex-row md:space-x-4 lg:space-x-8">
        <div className="flex-1 space-y-8">
          <p className={`${aboutMeParaClasses} `}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            velit obcaecati a officiis culpa enim consequatur fugit quibusdam
            commodi impedit. Eveniet, ex similique. Necessitatibus, repudiandae
            voluptatem. Architecto iste blanditiis quisquam.
          </p>

          <p className={`${aboutMeParaClasses} `}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            velit obcaecati a officiis culpa enim consequatur fugit quibusdam
            commodi impedit. Eveniet, ex similique. Necessitatibus, repudiandae
            voluptatem. Architecto iste blanditiis quisquam.
          </p>

          <p className={`${aboutMeParaClasses}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            velit obcaecati a officiis culpa enim consequatur fugit quibusdam
            commodi impedit. Eveniet, ex similique. Necessitatibus, repudiandae
            voluptatem. Architecto iste blanditiis quisquam.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={profile_pic}
            alt="Ajit Goud"
            className=" rounded mx-auto  w-full lg:w-[80%] aspect-square"
          />
        </div>
      </div>
    </div>
  );
}
