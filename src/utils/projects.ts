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
];

export default projects;
