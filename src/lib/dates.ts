/** Months since year 0 for a "YYYY-MM" string. */
export function monthIndex(ym: string): number {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export function formatMonth(ym: string): string {
  if (ym.toLowerCase() === "present") return "Present";
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

/** "2 yrs 6 mos" style duration, inclusive of both end months. */
export function duration(start: string, end: string): string {
  const total = monthIndex(end) - monthIndex(start) + 1;
  const y = Math.floor(total / 12);
  const m = total % 12;
  const parts = [];
  if (y) parts.push(`${y} yr${y > 1 ? "s" : ""}`);
  if (m) parts.push(`${m} mo${m > 1 ? "s" : ""}`);
  return parts.join(" ");
}

export function formatPushed(iso?: string): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** Whole years of experience since `start` (floor, so it never overstates). */
export function yearsSince(start: string, now = new Date()): number {
  const nowIdx = now.getFullYear() * 12 + now.getMonth();
  return Math.floor((nowIdx - monthIndex(start)) / 12);
}
