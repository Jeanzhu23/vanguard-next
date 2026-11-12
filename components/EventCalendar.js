"use client";
import { useMemo, useState } from "react";

// Month-grid calendar driven by the EVENTS list in lib/site.js.
// An event appears on its `date`, or on every entry in `dates: [...]`
// when a series runs on several days. Click a day to see details.

const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const TAG_CLASS = {
  League: "cal-league", Tournament: "cal-tourn", Social: "cal-social",
  Junior: "cal-junior", Clinic: "cal-clinic", Corporate: "cal-corp",
};

function ymd(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function parse(s) { return new Date(s + "T00:00:00"); }

export default function EventCalendar({ events }) {
  const today = ymd(new Date());

  // Expand every event into { day, ev } occurrences.
  const byDay = useMemo(() => {
    const map = new Map();
    for (const ev of events) {
      const days = ev.dates && ev.dates.length ? ev.dates : [ev.date];
      for (const day of days) {
        if (!map.has(day)) map.set(day, []);
        map.get(day).push(ev);
      }
    }
    return map;
  }, [events]);

  const allDays = [...byDay.keys()].sort();
  const firstUpcoming = allDays.find((d) => d >= today) || allDays[allDays.length - 1] || today;
  const [cursor, setCursor] = useState(() => {
    const d = parse(firstUpcoming); return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [selected, setSelected] = useState(firstUpcoming);

  const y = cursor.getFullYear(), m = cursor.getMonth();
  const monthLabel = cursor.toLocaleString("en-US", { month: "long", year: "numeric" });
  const firstDow = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();

  // Build the grid (leading/trailing days from adjacent months), only as many rows as needed.
  const rows = Math.ceil((firstDow + daysInMonth) / 7);
  const cells = [];
  for (let i = 0; i < rows * 7; i++) {
    const d = new Date(y, m, 1 - firstDow + i);
    cells.push({ date: d, key: ymd(d), inMonth: d.getMonth() === m });
  }

  const minMonth = allDays[0] ? allDays[0].slice(0, 7) : today.slice(0, 7);
  const maxMonth = allDays.length ? allDays[allDays.length - 1].slice(0, 7) : today.slice(0, 7);
  const curMonth = `${y}-${String(m + 1).padStart(2, "0")}`;
  const canPrev = curMonth > (today.slice(0, 7) < minMonth ? today.slice(0, 7) : minMonth);
  const canNext = curMonth < maxMonth;

  const go = (delta) => {
    const next = new Date(y, m + delta, 1);
    setCursor(next);
    const nm = ymd(next).slice(0, 7);
    const firstInMonth = allDays.find((d) => d.startsWith(nm));
    setSelected(firstInMonth || ymd(next));
  };

  const selectedEvents = byDay.get(selected) || [];
  const selectedLabel = parse(selected).toLocaleString("en-US", { weekday: "long", month: "long", day: "numeric" });

  return (
    <div className="cal">
      <div className="cal-head">
        <button type="button" className="cal-nav" onClick={() => go(-1)} disabled={!canPrev} aria-label="Previous month">‹</button>
        <h3 className="cal-month">{monthLabel}</h3>
        <button type="button" className="cal-nav" onClick={() => go(1)} disabled={!canNext} aria-label="Next month">›</button>
      </div>

      <div className="cal-grid" role="grid">
        {DOW.map((d) => <div key={d} className="cal-dow">{d}</div>)}
        {cells.map(({ key, date, inMonth }) => {
          const evs = byDay.get(key) || [];
          const cls = ["cal-day", inMonth ? "" : "out", key === today ? "today" : "",
                       key === selected ? "sel" : "", evs.length ? "has" : ""].join(" ");
          return (
            <button type="button" key={key} className={cls} onClick={() => setSelected(key)}
                    aria-label={`${date.toLocaleDateString("en-US", { month: "long", day: "numeric" })}${evs.length ? `, ${evs.length} event${evs.length > 1 ? "s" : ""}` : ""}`}>
              <span className="cal-num">{date.getDate()}</span>
              <span className="cal-chips">
                {evs.map((ev) => (
                  <span key={ev.title} className={`cal-chip ${TAG_CLASS[ev.tag] || ""}`} title={ev.title}>
                    <span className="cal-chip-text">{ev.shortTitle || ev.title}</span>
                  </span>
                ))}
              </span>
            </button>
          );
        })}
      </div>

      <div className="cal-detail">
        <div className="cal-detail-date">{selectedLabel}</div>
        {selectedEvents.length === 0 ? (
          <p className="cal-detail-empty">Nothing scheduled — pick a highlighted day.</p>
        ) : selectedEvents.map((ev) => {
          const session = ev.sessions && ev.sessions.find((s) => s.date === selected);
          const link = session ? session.link : ev.link;
          const external = link && link.startsWith("http");
          return (
            <div key={ev.title} className="cal-detail-item">
              <span className={`cal-dot ${TAG_CLASS[ev.tag] || ""}`} />
              <div>
                <div className="cal-detail-title">{ev.title}</div>
                <div className="cal-detail-time">{ev.dayTime || ev.time}</div>
                {link && (
                  <a href={link} className="ev-link" target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined}>
                    {ev.linkLabel || "Register →"}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="cal-legend">
        {Object.entries(TAG_CLASS).filter(([tag]) => events.some((e) => e.tag === tag)).map(([tag, c]) => (
          <span key={tag}><span className={`cal-dot ${c}`} />{tag}</span>
        ))}
      </div>
    </div>
  );
}
