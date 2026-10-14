/**
 * HOW TO CONTROL WHICH GITHUB PROJECTS APPEAR
 * ------------------------------------------
 * Three levers, use any combination:
 *
 * 1. `featured`  – repos you list here always show, in this order.
 *                  Add `overrides` to replace the title, description,
 *                  add highlight bullets, tags or a live-demo link.
 * 2. `includeTopic` – any of your public repos tagged with this GitHub topic
 *                  shows up automatically (after the featured ones).
 *                  Add/remove the topic on GitHub; no code change needed.
 *                  Set to null to turn this off.
 * 3. `exclude`   – repo names that never show, even if tagged.
 *
 * Forks and archived repos are skipped unless listed in `featured`.
 * Data (stars, language, last push) is fetched at build time. If GitHub can't
 * be reached, featured projects still render from the text below.
 */

export type ProjectOverride = {
  title?: string;
  description?: string;
  /** Short bullets shown on the card. Great for the "what did you build" story. */
  highlights?: string[];
  /** Replaces the auto-detected GitHub topics. */
  tags?: string[];
  /** Live demo URL. Defaults to the repo's "Website" field on GitHub. */
  demo?: string;
};

export type FeaturedRepo = {
  /** Repository name exactly as on GitHub (case-insensitive). */
  repo: string;
  overrides?: ProjectOverride;
};

export const projectsConfig = {
  githubUser: "ajitgoud",
  includeTopic: "portfolio" as string | null,
  maxProjects: 8,

  featured: [
    {
      repo: "paywallet",
      overrides: {
        title: "PayWallet",
        description: "Wallet and payments backend with an idempotent double-entry ledger.",
        highlights: [
          "Concurrent tests prove that duplicate requests move money only once.",
          "Card/UPI top-ups, refunds and payouts with signed webhooks and Kafka outbox events.",
          "JWT auth and rate limiting.",
        ],
        tags: ["Java 21", "Spring Boot 4", "PostgreSQL", "Kafka", "Razorpay"],
      },
    },
    {
      repo: "drawspace",
      overrides: {
        title: "Drawspace",
        description: "Canvas editor backed by a multi-service Spring architecture.",
        highlights: [
          "Auth, canvas and asset services behind Spring Cloud Gateway, which handles JWT validation and rate limiting.",
          "Canvas CRUD with ownership checks, Flyway migrations and public read-only share links.",
          "Next.js and Fabric.js editor for saving, exporting (image and JSON) and sharing canvases.",
        ],
        tags: ["Spring Cloud Gateway", "Spring Security", "PostgreSQL", "Flyway", "Docker", "Next.js"],
      },
    },
  ] as FeaturedRepo[],

  // Example: hide the old Python project even if it carries the topic.
  exclude: ["FinTrade", "ajitgoud.github.io"] as string[],
};
