import { getProjects, type Project } from "@/lib/github";
import { projectsConfig } from "@/data/projects.config";
import { formatPushed } from "@/lib/dates";
import { ArrowUpRightIcon, GithubIcon, StarIcon } from "./Icons";

const LANG_COLORS: Record<string, string> = {
  Java: "#e0884a",
  TypeScript: "#5b8def",
  JavaScript: "#e6d24f",
  Python: "#4f8bbf",
  Kotlin: "#a97bff",
  Go: "#4fc3d9",
  HTML: "#e46a45",
  CSS: "#8f6bd6",
  Shell: "#7bc47f",
};

function Card({ p }: { p: Project }) {
  const pushed = formatPushed(p.pushedAt);
  return (
    <li className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong">
      <h3 className="font-display text-xl font-semibold tracking-tight">
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="after:absolute after:inset-0 hover:text-accent"
        >
          {p.title}
        </a>
      </h3>
      <p className="mt-2 text-muted">{p.description}</p>

      {p.highlights.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-muted">
          {p.highlights.map((h) => (
            <li key={h} className="relative pl-4 leading-relaxed">
              <span aria-hidden className="absolute left-0 top-[0.65em] size-1 rounded-full bg-accent-dim" />
              {h}
            </li>
          ))}
        </ul>
      )}

      {p.tags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {p.tags.map((t) => (
            <li key={t} className="rounded-md border border-line bg-bg px-2 py-0.5 text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 text-sm text-muted">
        {p.language && (
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden
              className="size-2.5 rounded-full"
              style={{ background: LANG_COLORS[p.language] ?? "var(--color-faint)" }}
            />
            {p.language}
          </span>
        )}
        {p.live && (
          <span className="inline-flex items-center gap-1" title="Stars on GitHub">
            <StarIcon className="size-4" />
            <span className="sr-only">Stars:</span>
            {p.stars}
          </span>
        )}
        {pushed && <span className="text-faint">Updated {pushed}</span>}
        <span className="ml-auto inline-flex items-center gap-3">
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1 text-accent hover:underline"
            >
              Live demo <ArrowUpRightIcon className="size-4" />
            </a>
          )}
          <GithubIcon className="size-4 text-faint transition-colors group-hover:text-text" />
        </span>
      </div>
    </li>
  );
}

export default async function Projects() {
  const projects = await getProjects();

  if (projects.length === 0) {
    return (
      <p className="text-muted">
        No projects configured. Add repositories to{" "}
        <code className="font-mono text-sm">src/data/projects.config.ts</code>.
      </p>
    );
  }

  return (
    <div>
      <ul className="grid gap-5 md:grid-cols-2 [&>li]:relative">
        {projects.map((p) => (
          <Card key={p.name} p={p} />
        ))}
      </ul>
      <a
        href={`https://github.com/${projectsConfig.githubUser}?tab=repositories`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
      >
        All repositories on GitHub <ArrowUpRightIcon className="size-4" />
      </a>
    </div>
  );
}
