import Image from "next/image";
import { profile } from "@/data/profile";
import { yearsSince } from "@/lib/dates";
import { DownloadIcon, GithubIcon, LinkedInIcon } from "./Icons";
import avatar from "../../public/assets/images/profile_pic.jpeg";

const btn =
  "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors";

export default function Hero() {
  const years = yearsSince(profile.careerStart);

  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-5 pb-8 pt-16 sm:px-8 md:pb-16 md:pt-28"
    >
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
        <div className="hero-in">
          {profile.openToWork && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted">
              <span className="size-2 rounded-full bg-ok" aria-hidden />
              {profile.openToWorkText}
            </p>
          )}

          <h1 className="font-display text-[clamp(2.75rem,8.5vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.035em]">
            {profile.name}
          </h1>

          <p className="mt-4 font-display text-xl font-medium text-accent sm:text-2xl">
            {profile.title}, {years}+ years
          </p>

          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-text">
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-[34rem] leading-relaxed text-muted">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className={`${btn} bg-accent text-bg hover:bg-white`}>
              View projects
            </a>
            <a
              href={profile.resume}
              download
              className={`${btn} border border-line-strong text-text hover:border-accent hover:text-accent`}
            >
              <DownloadIcon /> Download resume
            </a>
            <span className="mx-1 hidden h-5 w-px bg-line-strong sm:block" aria-hidden />
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-lg p-2.5 text-muted transition-colors hover:text-text"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-lg p-2.5 text-muted transition-colors hover:text-text"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="hero-in order-first md:order-none">
          <Image
            src={avatar}
            alt={`Portrait of ${profile.name}`}
            priority
            placeholder="blur"
            className="size-24 rounded-full object-cover ring-1 ring-line-strong sm:size-32 md:size-56 md:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
