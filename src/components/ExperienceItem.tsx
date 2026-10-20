import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Experience } from "../content";

export function ExperienceItem({ item }: { item: Experience }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-l border-border pl-4 sm:pl-5">
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="font-semibold">
          {item.company}, <span className="font-normal italic">{item.role}</span>
        </h3>
        <span className="shrink-0 text-xs tabular-nums text-muted-foreground sm:text-sm">
          {item.period}
        </span>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-foreground/85 sm:text-base">{item.summary}</p>

      {item.details.length > 0 && (
        <>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {open ? "less" : "more"}
            <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>

          {open && (
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-foreground/85">
              {item.details.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-muted-foreground">—</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </li>
  );
}
