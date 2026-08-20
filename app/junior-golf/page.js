import Link from "next/link";

export const metadata = {
  title: "Junior Golf & Performance Academy",
  description:
    "A structured junior pathway from first swings to a college-bound Performance Academy — TrackMan, TPI strength, and mental coaching in Dedham, MA.",
};

export default function Junior() {
  return (
    <>
      <section className="page-hero">
        <img className="bg" src="/img/hero-junior.jpg" alt="" />
        <div className="wrap">
          <span className="eyebrow">Junior Golf</span>
          <h1>Where junior dreams get a year-round home.</h1>
          <p>
            A structured, long-term development model — as encouraging as it is serious. Every
            athlete is placed by evaluation, so they&rsquo;re always with the right peers and never lost.
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The Junior Pathway</span>
            <h2>Where it begins.</h2>
            <p>A structured, supportive environment that builds skill, athleticism, and confidence together.</p>
          </div>

          <div className="grid-2 feature" style={{ marginBottom: 44 }}>
            <div className="feature-img" style={{ aspectRatio: "3/4" }}>
              <img src="/img/junior-coaching.jpg" alt="A junior golfer training with a Vanguard coach on TrackMan" />
            </div>
            <div>
              <span className="tag">Real coaching, real data</span>
              <h3 style={{ marginTop: 14 }}>Small groups. Real attention.</h3>
              <p style={{ color: "var(--bone-dim)" }}>
                Every session is led by a coach who knows your golfer by name — with TrackMan
                measuring every swing, so progress is something you can actually see, not just hope
                for. Swing, body, and mind, developed together, indoors, all year.
              </p>
              <ul>
                <li>Coach-led sessions in small groups</li>
                <li>TrackMan feedback on every swing</li>
                <li>TPI strength &amp; movement training</li>
                <li>SP+R mental performance coaching</li>
              </ul>
            </div>
          </div>

          <div className="ladder">
            <div className="rung">
              <h4>Vanguard Foundations</h4>
              <p>Foundational tier. Fundamentals, coordination, and a love of the game — a flexible 1–2 day weekly schedule. The result: a confident, disciplined base for long-term growth.</p>
            </div>
            <div className="rung">
              <h4>Vanguard Rising Players</h4>
              <p>Pre-performance tier. Consistency, scoring awareness, course strategy, and progressive strength — 1–2 days a week. The result: readiness for higher standards and first competition.</p>
            </div>
          </div>

          <div className="sec-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">The Performance Academy</span>
            <h2>Year-round high performance.</h2>
            <p>A selective, standards-driven environment for athletes pursuing competitive excellence and collegiate opportunities. Advancement is earned through performance and coaching evaluation.</p>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Development Team</h3>
              <p>Building competitive structure — technical refinement, performance-based scoring, on-course decision-making, and the beginnings of a true competitive mindset.</p>
            </div>
            <div className="card">
              <h3>Elite Team</h3>
              <p>Established tournament players — swing analysis, performance analytics, competitive simulations under pressure, strength &amp; conditioning, and collegiate pathway planning.</p>
            </div>
            <div className="card">
              <h3>Invitational Team</h3>
              <p>By invitation only — reserved for athletes demonstrating sustained excellence and preparing for national competition and the transition to college golf.</p>
            </div>
          </div>

          <div className="card" style={{ marginTop: 40, borderLeft: "3px solid var(--gold)" }}>
            <h3>For parents</h3>
            <p>
              Small groups mean real attention. TrackMan means you can actually see the progress. And
              because we&rsquo;re open 24/7 year-round, development never takes a winter off. Not sure
              where your child fits? Request an evaluation and we&rsquo;ll place them.
            </p>
          </div>

          <Link href="/junior-golf/evaluation" className="btn btn-primary" style={{ marginTop: 28 }}>
            Request an evaluation →
          </Link>
        </div>
      </section>
    </>
  );
}
