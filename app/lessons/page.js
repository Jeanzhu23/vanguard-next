import Link from "next/link";
import { WHOOSH, COACHES } from "@/lib/site";

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
