import { skillGroups } from "@/data/profile";

export default function Skills() {
  return (
    <div>
      <dl className="divide-y divide-line border-y border-line">
        {skillGroups.map((g) => (
          <div
            key={g.name}
            className="grid gap-2 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6"
          >
            <dt className="text-sm font-medium text-text">{g.name}</dt>
            <dd className="text-muted">{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>

    </div>
  );
}
