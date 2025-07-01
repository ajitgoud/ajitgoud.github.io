"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubIcon, TwitterIcon, LinkedInIcon } from "@/components/Icons";


const routes = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/projects", title: "Projects" }
];

export default function Footer() {
  const pathname = usePathname();
  const showRoutes = routes.filter((route) => route.path !== pathname);

  return (
    <div className="pt-4 md:pt-16">
      <div className="mb-8 rounded-lg bg-slate-500 h-px" />
      <div className="flex justify-between flex-col md:flex-row md:items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-[var(--app-green)] text-2xl font-medium">
            AJIT GOUD
          </Link>
          <div className="flex space-x-2 mt-2">
            <Link href="https://twitter.com/ImAjit27" target="_blank" className="rounded-full p-2 outline">
              <TwitterIcon className="w-4 h-4 fill-slate-300 hover:fill-slate-100" />
            </Link>
            <Link href="https://www.linkedin.com/in/ajit-goud/" target="_blank" className="rounded-full p-2 outline">
              <LinkedInIcon className="w-4 h-4 fill-slate-300 hover:fill-slate-100" />
            </Link>
            <Link href="https://github.com/ajitgoud" target="_blank" className="rounded-full p-2 outline">
              <GithubIcon className="w-4 h-4 fill-slate-300 hover:fill-slate-100" />
            </Link>
          </div>
        </div>
        <div>
          <ul className="flex flex-wrap md:space-x-12 md:items-center text-end space-y-2 md:space-y-0">
            {showRoutes.map((route) => (
              <li key={route.title} className="text-slate-400 hover:text-slate-300">
                <Link href={route.path}>{route.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-end mt-4 md:mt-0">
        &copy; {new Date().getFullYear()} - All rights reserved
      </p>
    </div>
  );
}
