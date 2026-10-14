import {
  projectsConfig,
  type ProjectOverride,
} from "@/data/projects.config";

export type Project = {
  name: string;
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  url: string;
  demo?: string;
  language?: string;
  stars: number;
  pushedAt?: string; // ISO date
  /** false when GitHub could not be reached and we rendered from config only */
  live: boolean;
};

type GhRepo = {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  private?: boolean;
};

const API = process.env.GITHUB_API_URL ?? "https://api.github.com";

async function gh<T>(path: string): Promise<T | null> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  // In GitHub Actions, GITHUB_TOKEN lifts the rate limit from 60 to 1000+/hour.
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const res = await fetch(`${API}${path}`, {
      headers,
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.warn(`[github] ${path} -> HTTP ${res.status}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.warn(`[github] ${path} failed:`, (err as Error).message);
    return null;
  }
}

const lower = (s: string) => s.toLowerCase();

function build(
  repo: GhRepo | null,
  fallbackName: string,
  o: ProjectOverride = {},
): Project {
  const user = projectsConfig.githubUser;
  const name = repo?.name ?? fallbackName;
  return {
    name,
    title: o.title ?? name,
    description:
      o.description ?? repo?.description ?? "No description yet.",
    highlights: o.highlights ?? [],
    tags: o.tags ?? repo?.topics?.filter((t) => t !== projectsConfig.includeTopic) ?? [],
    url: repo?.html_url ?? `https://github.com/${user}/${fallbackName}`,
    demo: o.demo ?? (repo?.homepage || undefined),
    language: repo?.language ?? undefined,
    stars: repo?.stargazers_count ?? 0,
    pushedAt: repo?.pushed_at,
    live: repo !== null,
  };
}

export async function getProjects(): Promise<Project[]> {
  const { githubUser, featured, includeTopic, exclude, maxProjects } =
    projectsConfig;
  const excluded = new Set(exclude.map(lower));
  const result: Project[] = [];
  const seen = new Set<string>();

  // 1. Featured repos, in the order listed.
  const featuredRepos = await Promise.all(
    featured
      .filter((f) => !excluded.has(lower(f.repo)))
      .map(async (f) => ({
        f,
        repo: await gh<GhRepo>(`/repos/${githubUser}/${f.repo}`),
      })),
  );
  for (const { f, repo } of featuredRepos) {
    if (repo?.private) continue;
    const p = build(repo, f.repo, f.overrides);
    result.push(p);
    seen.add(lower(p.name));
  }

  // 2. Anything tagged with the include topic.
  if (includeTopic) {
    const q = encodeURIComponent(`user:${githubUser} topic:${includeTopic}`);
    const found = await gh<{ items: GhRepo[] }>(
      `/search/repositories?q=${q}&sort=updated&per_page=30`,
    );
    for (const repo of found?.items ?? []) {
      if (repo.fork || repo.archived) continue;
      if (excluded.has(lower(repo.name)) || seen.has(lower(repo.name))) continue;
      result.push(build(repo, repo.name));
      seen.add(lower(repo.name));
    }
  }

  return result.slice(0, maxProjects);
}
