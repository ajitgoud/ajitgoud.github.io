import { experience } from "@/data/profile";
import { duration, formatMonth, monthIndex } from "@/lib/dates";
import { ChevronIcon } from "./Icons";

/**
 * Career as a trace: every role is a span on one shared time axis.
 * Click a row to open the details.
 */
export default function Experience() {
  const starts = experience.map((r) => monthIndex(r.start));
  const ends = experience.map((r) => monthIndex(r.end) + 1);
  const firstYear = Math.floor(Math.min(...starts) / 12);
  const axisStart = firstYear * 12;
  const axisEnd = (Math.floor((Math.max(...ends) - 1) / 12) + 1) * 12;
  const span = axisEnd - axisStart;
  const pct = (m: number) => ((m - axisStart) / span) * 100;
  const years: number[] = [];
  for (let y = firstYear; y <= axisEnd / 12; y++) years.push(y);

  const ticks = (
    <>
      {years.map((y) => (
        <span
          key={y}
          aria-hidden
          className="absolute inset-y-0 w-px bg-line"
          style={{ left: `${pct(y * 12)}%` }}
        />
      ))}
    </>
  );

  return (
    <div>
      {/* Axis (desktop only; each row carries its own date text for mobile) */}
      <div className="mb-2 hidden grid-cols-[13rem_minmax(0,1fr)] gap-6 md:grid" aria-hidden>
        <span />
        <div className="relative h-5 font-mono text-xs text-faint">
          {years.slice(0, -1).map((y) => (
            <span key={y} className="absolute" style={{ left: `${pct(y * 12)}%` }}>
              {y}
            </span>
          ))}
        </div>
      </div>

      <div className="divide-y divide-line border-y border-line">
        {experience.map((r, i) => {
          const left = pct(monthIndex(r.start));
          const width = pct(monthIndex(r.end) + 1) - left;
          return (
            <details key={r.company} open={i === 0} className="group">
              <summary className="grid cursor-pointer items-center gap-x-6 gap-y-3 py-5 md:grid-cols-[13rem_minmax(0,1fr)]">
                <div className="flex items-start gap-2">
                  <ChevronIcon
                    className="chev mt-1 size-4 shrink-0 text-faint transition-transform group-hover:text-accent"
                  />
                  <div>
                    <p className="font-display text-lg font-semibold leading-snug">
                      {r.company}
                    </p>
                    <p className="text-sm text-muted">{r.role}</p>
                  </div>
                </div>

                <div>
                  <div className="relative h-6">
                    {ticks}
                    <span
                      className="trace-bar absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full bg-accent"
                      style={{ left: `${left}%`, width: `${width}%` }}
                    />
                  </div>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {formatMonth(r.start)} to {formatMonth(r.end)}
                    <span className="text-faint"> ({duration(r.start, r.end)})</span>
                  </p>
                </div>
              </summary>

              <div className="pb-8 md:pl-6">
                <div className="md:grid md:grid-cols-[13rem_minmax(0,1fr)] md:gap-6">
                  <div className="hidden md:block" />
                  <div>
                    {r.context && (
                      <p className="mb-3 text-sm text-accent">{r.context}</p>
                    )}
                    <ul className="max-w-[40rem] space-y-3 text-muted">
                      {r.highlights.map((h) => (
                        <li key={h} className="relative pl-5 leading-relaxed">
                          <span
                            aria-hidden
                            className="absolute left-0 top-[0.7em] h-px w-3 bg-line-strong"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                      {r.stack.map((t) => (
                        <li
                          key={t}
                          className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs text-muted"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
