// app/junior-golf/page.js
// Hero + "For parents" live here; everything else is in
// components/JuniorPrograms.js, with all copy in lib/site.js.

import Link from "next/link";
import JuniorPrograms from "@/components/JuniorPrograms";
import { juniorHero } from "@/lib/site";

export const metadata = {
  title: "Junior Golf — Beginner, Intermediate & Elite Programs",
  description:
    "Three levels, one clear pathway. Year-round junior golf coaching in Dedham, MA — small groups, TrackMan feedback, and a plan built around every player.",
};

export default function Junior() {
  return (
    <>
      <section className="page-hero">
        <img className="bg" src="/img/hero-junior.jpg" alt="" />
        <div className="wrap">
          <span className="eyebrow">{juniorHero.eyebrow}</span>
          <h1>{juniorHero.headline}</h1>
          <p>{juniorHero.subhead}</p>
          <Link href={juniorHero.cta.href} className="btn btn-primary" style={{ marginTop: 26 }}>
            {juniorHero.cta.label}
          </Link>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <div className="grid-2 feature" style={{ marginBottom: 64 }}>
            <div className="feature-img" style={{ aspectRatio: "3/4" }}>
              <img src="/img/junior-coaching.jpg" alt="A junior golfer training with a Vanguard coach on TrackMan" />
            </div>
            <div>
              <span className="tag">Year-round, indoors, in Dedham</span>
              <h3 style={{ marginTop: 14 }}>Small groups. Real attention.</h3>
              <p style={{ color: "var(--bone-dim)" }}>{juniorHero.intro}</p>
              <ul>
                <li>Coach-led sessions in small groups</li>
                <li>TrackMan feedback on every swing</li>
                <li>PuttView and SAM PuttStudio short-game training</li>
                <li>TPI strength &amp; movement training</li>
              </ul>
            </div>
          </div>

          <JuniorPrograms />

          <div className="card" style={{ marginTop: 56, borderLeft: "3px solid var(--gold)" }}>
            <h3>For parents</h3>
            <p>
              Small groups mean real attention. TrackMan means you can actually see the progress. And
              because we&rsquo;re open 24/7 year-round, development never takes a winter off. Not sure
              where your child fits? Request an evaluation and we&rsquo;ll place them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
