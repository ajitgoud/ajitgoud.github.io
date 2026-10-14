# Ajit Goud: Portfolio

Personal portfolio for a Java backend engineer. It is a single dark page: hero, experience timeline, projects pulled from GitHub, skills, education and contact.

Built with Next.js (static export), React, TypeScript and Tailwind CSS 4. There is no backend and no runtime API call, so it can be hosted anywhere that serves static files.

## Features

- **Career timeline:** each role is a bar on a shared time axis. Click a role to see what I built and the stack.
- **GitHub-driven projects:** repo name, description, language, stars and last update are fetched at build time. A daily rebuild keeps them fresh.
- **Project curation:** choose exactly which repositories appear (see below).
- **Content in data files:** change text without touching components.
- **Accessible and responsive:** keyboard focus styles, skip link, reduced-motion support, tested down to phone width.

## Quick start

Requires Node.js 20 or later.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
npm run typecheck
```

## Project structure

```
src/
  app/
    layout.tsx             fonts, metadata
    page.tsx               page composition
    globals.css            design tokens (@theme), motion
  components/              Hero, Experience, Projects, Skills, Education, Contact...
  data/
    profile.ts             name, tagline, summary, roles, skills, education, links
    projects.config.ts     which GitHub projects appear
  lib/
    github.ts              build-time GitHub fetch with fallback
    dates.ts               date helpers
public/assets/             profile photo, resume PDF
.github/workflows/deploy.yml
```

## Editing content

| To change | Edit |
| --- | --- |
| Tagline, summary, email, links, open-to-work badge | `src/data/profile.ts` |
| Roles, bullets, tech stack | `experience` in `src/data/profile.ts` |
| Skills and education | `skillGroups` and `education` in `src/data/profile.ts` |
| Colours | `@theme` in `src/app/globals.css` |
| Resume | replace `public/assets/pdf/AjitGoud-resume.pdf` |
| Profile photo | replace `public/assets/images/profile_pic.jpeg` |

## Choosing which GitHub projects appear

Open `src/data/projects.config.ts`. There are three controls:

1. **`featured`** lists repos that always show, in the order written. Use `overrides` to set the title, description, highlight bullets, tech tags or a live-demo link.
2. **`includeTopic`** (default `"portfolio"`): any public repo of mine with that GitHub topic appears automatically after the featured ones. Add the topic on GitHub to show a repo and remove it to hide it. No code change is needed.
3. **`exclude`** lists repo names that never appear.

Forks and archived repos are skipped unless they are listed in `featured`. `maxProjects` caps the total.

Example:

```ts
featured: [
  {
    repo: "paywallet",
    overrides: {
      title: "PayWallet",
      description: "Wallet and payments backend with an idempotent ledger.",
      highlights: ["Duplicate requests move money only once."],
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "Kafka"],
    },
  },
],
includeTopic: "portfolio",
exclude: ["FinTrade"],
```

If GitHub cannot be reached during a build, featured projects still render from the text in the config. Stars and dates are left out.

## How the GitHub data works

`src/lib/github.ts` runs on the server during `next build`:

1. Fetch each featured repo, then search `user:<name> topic:<topic>`.
2. Merge, de-duplicate, apply `exclude`, cap at `maxProjects`.
3. Write the result into static HTML.

Environment variables (both optional):

| Variable | Purpose |
| --- | --- |
| `GITHUB_TOKEN` | Raises the API rate limit. The deploy workflow sets it automatically. |
| `GITHUB_API_URL` | Points the build at a mock server for testing. |

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys on every push to `master`, once a day at 03:00 UTC, and on manual trigger.

One-time setup: in the repository go to **Settings > Pages > Build and deployment** and set **Source** to **GitHub Actions**.

Any static host also works: run `npm run build` and upload the `out/` folder.

## Design notes

- One accent colour on a blue-tinted dark surface, with a muted text colour that passes AA contrast.
- The experience timeline is the one memorable element. Everything else stays quiet.
- Motion is limited to a short hero entrance and the timeline bars drawing in on scroll. Both are disabled for reduced-motion users.