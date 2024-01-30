import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "../assets/home_icon.jpeg";
import { useRef, useState } from "react";
import { HamburgerIcon } from "../assets/icons/Icons";
import Modal from "./Modal";

export default function Navigation() {
  const dialog = useRef();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const classNameActive =
    "font-semibold text-slate-300 underline underline-offset-4 ";
  const classNameActiveMobile =
    "text-lg font-semibold text-app-dark underline underline-offset-4 ";
  const classNameInActive = "";

  const handleMobileNavigation = (isNavigate, to = "") => {
    if (isNavigate) {
      dialog.current.close();
      navigate(to);
    } else {
      dialog.current.open();
    }
  };
  return (
    <header className="p-8 md:p-16 text-slate-400">
      <Modal
        ref={dialog}
        className="w-full p-4 rounded-md bg-gradient-to-br from-app-snow-100 to-app-snow-500 backdrop:bg-app-dark backdrop:opacity-80"
      >
        <nav className="py-4">
          <ul className="text-center space-y-4">
            <li>
              <button
                onClick={() => handleMobileNavigation(true, "/")}
                className={
                  pathname === "/" ? classNameActiveMobile : classNameInActive
                }
              >
                Home
              </button>
            </li>

            <li>
              <button
                onClick={() => handleMobileNavigation(true, "/about")}
                className={
                  pathname === "/about" ? classNameActiveMobile : classNameInActive
                }
              >
                About
              </button>
            </li>

            <li>
              <button
                onClick={() => handleMobileNavigation(true, "/projects")}
                className={
                  pathname === "/projects" ? classNameActiveMobile : classNameInActive
                }
              >
                Projects
              </button>
            </li>

            <li>
              <button
                onClick={() => handleMobileNavigation(true, "/contact")}
                className={
                  pathname === "/contact" ? classNameActiveMobile : classNameInActive
                }
              >
                Contact
              </button>
            </li>

          </ul>
        </nav>
      </Modal>
      <div className="flex justify-between items-center">
        <Link to="/" className="">
          <img
            src={HomeIcon}
            className="w-12 h-12 rounded-full p-px border-app-green border-2 "
            alt="Home icon"
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-12 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classNameActive : classNameInActive
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? classNameActive : classNameInActive
                }
                end
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? classNameActive : classNameInActive
                }
                end
              >
                Projects
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? classNameActive : classNameInActive
                }
                end
              >
                Blogs
              </NavLink>
            </li> */}

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? classNameActive : classNameInActive
                }
                end
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => handleMobileNavigation(false)}
          className="md:hidden w-12 h-12 p-2 rounded-full fill-slate-400 hover:fill-slate-200 hover:bg-app-dark"
        >
          <HamburgerIcon className="" />
        </button>
      </div>
    </header>
  );
}
