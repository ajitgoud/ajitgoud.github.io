import { education } from "@/data/profile";

export default function Education() {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {education.map((e) => (
        <li
          key={e.degree}
          className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4"
        >
          <div>
            <p className="font-display text-lg font-semibold">{e.degree}</p>
            <p className="text-muted">
              {e.school}, {e.place}
            </p>
          </div>
          <p className="font-mono text-xs text-muted">
            {e.start} to {e.end}
          </p>
        </li>
      ))}
    </ul>
  );
}
