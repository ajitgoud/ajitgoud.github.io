export function getMonthYear(dateStr: string): string {
  if (dateStr.toLowerCase() === "present") return "Present";
  const date = new Date(dateStr);
  return date.toLocaleString("default", { month: "short", year: "numeric" });
}

export const getExperienceYears = () => {
  const startDate = new Date(2021, 0);
  const now = new Date();
  const diff = now.getTime() - startDate.getTime();
  const years = diff / (1000 * 60 * 60 * 24 * 365.25);
  return years.toFixed(1);
};
