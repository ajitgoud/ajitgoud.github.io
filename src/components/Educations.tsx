"use client";

import { getMonthYear } from "@/utils/dateFormatter";

type EducationType = {
  name: string;
  start: string;
  end: string;
  school: string;
  location: string;
  board: string;
};

const educations: EducationType[] = [
  {
    name: "Bachelor of Engineering (Computer)",
    start: "2016-08-01",
    end: "2020-10-01",
    school: "Atharva College of Engineering",
    location: "Mumbai, Bharat",
    board: "University of Mumbai",
  },
  {
    name: "HSC",
    start: "2014-08-01",
    end: "2016-05-01",
    school: "B.N.N College",
    location: "Mumbai, Bharat",
    board: "State Board of Maharashtra",
  },
];

function Education({ education }: { education: EducationType }) {
  const { name, start, end, school, location, board } = education;

  return (
    <div className="max-md:flex max-md:flex-col-reverse max-md:space-y-1 max-md:space-y-reverse md:flex md:space-x-4 md:items-baseline max-md:p-4 max-md:rounded-lg max-md:hover:bg-app-dark max-md:hover:bg-opacity-20">
       <p className="hidden md:block font-light text-slate-400 text-sm md:w-40 flex-shrink-0">
        {`${getMonthYear(start)} - ${getMonthYear(end)}`}
      </p>
      <div className="md:flex-1 md:px-8 md:rounded-lg md:hover:bg-app-dark md:hover:bg-opacity-20">
        <h1 className="text-2xl">{name}</h1>
        <p className="mt-2">
          <span className="text-lg text-[var(--app-green)]">{school}</span> {" - "}
          <span className="italic text-slate-400">{location}</span>
        </p>
        <p className="font-light opacity-85">{board}</p>
      </div>
    </div>
  );
}

export default function Educations() {
  return (
    <div className="space-y-4 md:space-y-16">
      <h1 className="text-4xl underline decoration-[var(--app-green)] underline-offset-8">Educations</h1>
      <div className="md:flex md:space-x-8">
        <div className="hidden md:block w-px rounded-lg bg-slate-500" />
        <div className="flex-1 space-y-16">
          {educations.map((education, index) => (
            <Education key={index} education={education} />
          ))}
        </div>
      </div>
    </div>
  );
}
