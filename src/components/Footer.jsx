import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "../assets/icons/Icons";

const routes = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/projects",
    title: "Projects",
  },
  {
    path: "/contact",
    title: "Contact",
  },
  // {
  //   path: "/blogs",
  //   title: "Blogs",
  // },
];

export default function Footer() {
  const { pathname } = useLocation();

  const showRoutes = routes.filter((route) => route.path !== pathname);
  return (
    <div className="pt-4 md:pt-16">
      <div className="mb-8 rounded-lg bg-slate-500 h-px" />
      <div className="flex justify-between ">
        <div>
          <Link to="/" className="text-app-green text-2xl font-medium">
            AJIT GOUD
          </Link>
          <div className="flex space-x-2">
            <Link
              to="https://twitter.com/ImAjit27"
              target="_blank"
              className="rounded-full p-2  outline outline-1"
            >
              <TwitterIcon className="w-4 h-4 fill-slate-300 hover:fill-slate-100 " />
            </Link>

            <Link
              to="https://www.linkedin.com/in/ajit-goud/"
              target="_blank"
              className="rounded-full p-2  outline outline-1"
            >
              <LinkedInIcon className="w-4 h-4 fill-slate-300 hover:fill-slate-100 " />
            </Link>

            <Link
              to="https://github.com/ajitgoud"
              target="_blank"
              className="rounded-full p-2  outline outline-1"
            >
              <GithubIcon className="w-4 h-4 fill-slate-300 hover:fill-slate-100 " />
            </Link>
          </div>
        </div>
        <div>
          <ul className="md:flex md:space-x-12 md:items-center text-end">
            {showRoutes.map((route) => (
              <li
                key={route.title}
                className="text-slate-400 hover:text-slate-300"
              >
                <Link to={route.path}>{route.title}</Link>
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
