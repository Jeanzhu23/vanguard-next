import { WHOOSH, COACHES } from "@/lib/site";

export const metadata = {
  title: "Lessons & Coaching",
  description:
    "Learn from Golf Digest's #1 teacher in Massachusetts. Start with a $99 Swing Evaluation on TrackMan at Vanguard Golf Club, Dedham MA.",
};

export default function Lessons() {
  return (
    <>
      <section className="page-hero">
        <img className="bg" src="/img/hero-lessons.jpg" alt="" />
        <div className="wrap">
          <span className="eyebrow">Lessons</span>
          <h1>Learn from the best team in the state.</h1>
          <p>Start with a full Swing Evaluation — $99. Sit down with a coach and TrackMan to measure your swing and build a clear plan.</p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <div className="grid-2 feature" style={{ marginBottom: 56 }}>
            <div className="feature-img"><img src="/img/lesson-01.jpg" alt="Coaching session" /></div>
            <div>
              <span className="tag">Start here</span>
              <h3 style={{ marginTop: 14 }}>Swing Evaluation · $99</h3>
              <p style={{ color: "var(--bone-dim)" }}>
                The best first step, whether you&rsquo;re new to the game or chasing lower scores.
                Measure exactly what your swing is doing today, pinpoint your biggest opportunities,
                and leave with a plan.
              </p>
              <a href={WHOOSH.lessons} target="_blank" rel="noopener" className="btn btn-primary" style={{ marginTop: 8 }}>
                Book a Swing Evaluation →
              </a>
            </div>
          </div>

          <div className="sec-head"><span className="eyebrow">Our coaches</span><h2>Coaching, backed by data.</h2></div>
          <div className="coaches">
            {COACHES.map((c) => (
              <div key={c.name} className="coach">
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
