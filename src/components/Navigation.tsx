"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Home", exact: true },
    { href: "/about", label: "About", exact: true },
    { href: "/projects", label: "Projects", exact: false }
  ];

  const isActive = (href: string, exact = true) => {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="p-8 md:p-16 text-slate-400 relative z-50 bg-app-dark">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/home_icon.jpeg"
            alt="Home Icon"
            width={48}
            height={48}
            className="rounded-full border-2 p-px"
            style={{ borderColor: "var(--app-green)" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12 items-center">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    isActive(link.href, link.exact)
                      ? "font-semibold text-[var(--app-green)] underline underline-offset-4"
                      : "hover:text-[var(--app-green)] transition-colors"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setIsMobileOpen(true)}
          className="md:hidden w-12 h-12 p-2 rounded-full fill-slate-400 hover:fill-slate-200 hover:bg-app-dark"
          aria-label="Open menu"
        >
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path
              fill="currentColor"
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-app-dark bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 z-50">
          <button
            onClick={() => setIsMobileOpen(false)}
            className="absolute top-6 right-6 text-slate-300 hover:text-[var(--app-green)] text-3xl"
            aria-label="Close menu"
          >
            &times;
          </button>
          <nav>
            <ul className="flex flex-col items-center space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={
                      isActive(link.href)
                        ? "text-lg font-semibold text-app-dark underline underline-offset-4 bg-gradient-to-br from-app-snow-100 to-app-snow-500 px-4 py-2 rounded"
                        : "text-lg text-slate-300 hover:text-app-snow-100 transition-colors"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
