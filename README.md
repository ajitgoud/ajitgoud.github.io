# ajitgoud.github.io

Personal portfolio. Next.js (static export) + Tailwind CSS 4. Dark, one page.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static site in ./out
```

## Where to edit things

| What | File |
| --- | --- |
| Name, summary, links, experience, skills, education | `src/data/profile.ts` |
| Which GitHub projects show | `src/data/projects.config.ts` |
| Colours and fonts | `src/app/globals.css` (`@theme`) |
| Resume PDF | `public/assets/pdf/AjitGoud-resume.pdf` |

## Choosing which GitHub projects appear

Projects are fetched from GitHub **at build time** (no API calls in the visitor's browser).
You control the list three ways, in `src/data/projects.config.ts`:

1. **`featured`**: repos that always show, in the order listed. Use `overrides` to set a
   title, description, highlight bullets, tech tags or a live-demo link.
2. **`includeTopic`** (default `"portfolio"`): any public repo of yours with that GitHub topic
   appears automatically. To show a repo, add the topic on GitHub; to hide it, remove it.
   No code change, the next daily rebuild picks it up.
3. **`exclude`**: repo names that never show.

Forks and archived repos are skipped unless listed in `featured`.
If GitHub is unreachable during a build, `featured` projects still render from the config text.

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys on every push to `master` and once a day.
In the repo: **Settings > Pages > Build and deployment > Source: GitHub Actions**.

Useful env vars for local builds: `GITHUB_TOKEN` (higher API rate limit),
`GITHUB_API_URL` (point at a mock server for testing).
