import { AndroidIcon, Unity3dIcon, PythonIcon } from "@/components/Icons";
import { FC, SVGProps } from "react";

export type ProjectType = {
  name: string;
  descriptions: string[];
  link?: {
    github?: string;
    youtube?: string;
  };
  techstack: string[];
  Icon: FC<SVGProps<SVGSVGElement>>;
};

const projects: ProjectType[] = [
  {
    name: "Fintrade",
    descriptions: [
      "Python automation tool that fetches NSE data and generates daily stock reports.",
      "Uses Pandas, web scraping, and configurable settings for customized insights.",
    ],
    link: { github: "https://github.com/ajitgoud/FinTrade" },
    techstack: ["Python", "Pandas", "Web scraping"],
    Icon: PythonIcon,
  },
  {
    name: "Vernin",
    descriptions: [
      "Android app to connect disabled students with scribes.",
      "Real-time chat, Firebase notifications, built with Jetpack libraries.",
    ],
    techstack: [
      "Android SDK",
      "Retrofit",
      "Firebase",
      "Cloud Functions",
      "Google Maps",
      "Figma",
    ],
    Icon: AndroidIcon,
  },
  {
    name: "Wall HD",
    descriptions: [
      "Wallpaper app fetching Unsplash images.",
      "Bookmark, download, and set wallpapers with Material Design UI.",
    ],
    link: {
      github: "https://github.com/ajitgoud/WallHD",
      youtube: "https://www.youtube.com/watch?v=jfgTQTQAblc",
    },
    techstack: [
      "Android SDK",
      "Retrofit",
      "Unsplash API",
      "Firebase",
      "Material Design",
    ],
    Icon: AndroidIcon,
  },
  {
    name: "Todo Notes",
    descriptions: [
      "Android note-taking app with Room DB, MVVM architecture.",
      "Create, edit, and organize notes with local persistence.",
    ],
    link: { github: "https://github.com/ajitgoud/TodoNotes" },
    techstack: ["Android SDK", "Room", "MVVM"],
    Icon: AndroidIcon,
  },
  {
    name: "GpayListener",
    descriptions: [
      "Android service to listen for Google Pay notifications.",
      "Triggers API calls to streamline payment tracking.",
    ],
    link: { github: "https://github.com/ajitgoud/GpayNotificationListener" },
    techstack: ["Android SDK", "Retrofit", "Services"],
    Icon: AndroidIcon,
  },
  {
    name: "Treasure Hunt",
    descriptions: [
      "3D Unity game where players find a hidden castle.",
      "Built with Unity3D engine and C# for immersive gameplay.",
    ],
    techstack: ["Unity3D", "3D Modelling"],
    Icon: Unity3dIcon,
  },
];

export default projects;
