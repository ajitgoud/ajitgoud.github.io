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
            Hi, I am Ajit Goud a passionate Software Engineer with 3+ years of
            experience developing user-centric applications. During this period,
            I have accumulated extensive industry experience in designing
            cutting-edge applications that deliver awesome experiences for users
          </p>

          <p className={`${aboutMeParaClasses} `}>
            At SuperUs Systems, I worked on developing solutions to communicate
            with BLE devices. I developed ReactJs based Canvas webapps and apps
            to provide users with a canvas experience where they can craft
            custom templates and also worked with digital signages.
          </p>
          <p className={`${aboutMeParaClasses} `}>
            At Tata Consultancy Services, I focused on developing internal
            applications and optimizing them, resulting in a 20% improvement.
            Also submitted process improvement twice saving more than $1000 CAD.
          </p>

          <p className={`${aboutMeParaClasses}`}>
            Thank you for stopping by my portfolio! Let's connect and embark on
            a journey of innovation together.
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
