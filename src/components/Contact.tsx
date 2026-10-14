import { profile } from "@/data/profile";
import CopyEmail from "./CopyEmail";
import { GithubIcon, LinkedInIcon, MailIcon } from "./Icons";

const link =
  "inline-flex items-center gap-2 text-muted transition-colors hover:text-text";

export default function Contact() {
  return (
    <div>
      <p className="max-w-[32rem] text-2xl font-medium leading-snug tracking-tight text-text sm:text-3xl font-display">
        Hiring for a backend role, or want to talk about a system you are building?
      </p>
      <p className="mt-4 text-muted">Email is the fastest way to reach me.</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-white"
        >
          <MailIcon /> {profile.email}
        </a>
        <CopyEmail email={profile.email} />
      </div>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className={link}>
          <GithubIcon className="size-4" /> GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
          <LinkedInIcon className="size-4" /> LinkedIn
        </a>
      </div>
    </div>
  );
}
