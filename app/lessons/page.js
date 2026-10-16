import Link from "next/link";
import { WHOOSH, COACHES, EVENTS } from "@/lib/site";

export const metadata = {
  title: "Lessons & Coaching",
  description:
    "Learn from Golf Digest's #1 teacher in Massachusetts. Private lessons with TrackMan feedback at Vanguard Golf Club, Dedham MA.",
};

export default function Lessons() {
  return (
    <>
      <section className="page-hero">
        <img className="bg" src="/img/hero-lessons.jpg" alt="" />
        <div className="wrap">
          <span className="eyebrow">Lessons</span>
          <h1>Learn from the best team in the state.</h1>
          <p>Private lessons with Massachusetts&rsquo; top-ranked coaches. Every session is measured on TrackMan, so you leave with real numbers and a clear plan.</p>
        </div>
      </section>

      {/* GROUP LESSONS — events marked lesson: true in EVENTS, past dates hidden */}
      {(() => {
        const today = new Date().toISOString().slice(0, 10);
        const clinics = EVENTS.filter((e) => e.lesson && (e.endDate || e.date) >= today)
          .sort((a, b) => a.date.localeCompare(b.date)).slice(0, 4);
        if (clinics.length === 0) return null;
        return (
          <section className="section section-cream">
            <div className="wrap">
              <div className="sec-head">
                <span className="eyebrow">Clinics</span>
                <h2>One focus. One evening. Small group.</h2>
                <p>Small-group coaching on one part of the game, for adults and juniors. A great first step before private lessons.</p>
              </div>
              <div className="ev-grid">
                {clinics.map((e) => {
                  const d = new Date(e.date + "T00:00:00");
                  const external = e.link && e.link.startsWith("http");
                  return (
                    <article key={e.date + e.title} className="ev-card">
                      <div className="ev-body">
                        <div className="ev-when">
                          <div className="ev-date">
                            <span className="ev-mon">{d.toLocaleString("en-US", { month: "short" })}</span>
                            <span className="ev-day">{d.getDate()}</span>
                          </div>
                          <div className="ev-time">{e.time}</div>
                        </div>
                        <h3>{e.title}</h3>
                        <p>{e.desc}</p>
                        {e.link && (
                          <Link href={e.link} className="ev-link"
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener" : undefined}>
                            {e.linkLabel || "Register →"}
                          </Link>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
              <p style={{ marginTop: 28, fontSize: 15, color: "var(--ink-soft)" }}>
                <Link href="/events" style={{ color: "var(--gold)", fontWeight: 600 }}>See all upcoming events →</Link>
              </p>
            </div>
          </section>
        );
      })()}

      <section className="section section-dark">
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Our coaches</span><h2>Coaching, backed by data.</h2></div>
          <div className="coaches">
            {COACHES.map((c) => (
              <div key={c.name} className="coach">
                <img className="photo" src={c.image} alt={c.name} />
                <h3>{c.name}</h3>
                <div className="role">{c.role}</div>
                <p>{c.bio}</p>
                <a href={WHOOSH.lessons} target="_blank" rel="noopener" className="btn btn-dark">{c.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
