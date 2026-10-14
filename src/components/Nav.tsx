import { profile } from "@/data/profile";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="font-display text-base font-semibold tracking-tight">
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="sm:hidden" aria-label={profile.name}>AG</span>
        </a>
        <ul className="flex items-center gap-4 text-sm text-muted sm:gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-text">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
