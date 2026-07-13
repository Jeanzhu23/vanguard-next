import Link from "next/link";
import { WHOOSH } from "@/lib/site";

export const metadata = {
  title: "The Club — State-of-the-Art Facilities",
  description:
    "New England's most complete indoor short-game complex, ten TrackMan bays, 3D Motion Analysis, and a TPI performance gym in Dedham, MA.",
};

export default function TheClub() {
  return (
    <>
      <section className="page-hero">
        <img className="bg" src="/img/hero-club.jpg" alt="" />
        <div className="wrap">
          <span className="eyebrow">Inside our state-of-the-art facilities</span>
          <h1>World-class amenities, with heart.</h1>
          <p>
            Vanguard was built by a family, for families — which is why it feels as welcoming as it
            is world-class. Every amenity is best-in-class. What you&rsquo;ll remember is the care.
          </p>
        </div>
      </section>

      {/* SHORT GAME */}
      <section className="section section-green">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The crown jewel</span>
            <h2>New England&rsquo;s most complete indoor short game.</h2>
            <p>
              Scoring is won inside 100 yards — and nowhere in New England can you train it indoors
              like this. The green, the sand, and the data, all year round.
            </p>
          </div>
          <div className="grid-2 feature">
            <div className="feature-img">
              <img src="/img/shortgame-hero.jpg" alt="Championship indoor putting green" />
            </div>
            <div>
              <h3>A complete short-game home — not a screen and a mat.</h3>
              <ul>
                <li><b>Championship putting green</b> — large, contoured, with real break and slope.</li>
                <li><b>PuttView augmented reality</b> — aim lines and ball paths projected on the green.</li>
                <li><b>The Putting Lab</b> — Full Swing Virtual Green + SAM PuttStudio 8.</li>
                <li><b>Dedicated chipping &amp; bunker area</b> — real sand and varied lies.</li>
              </ul>
            </div>
          </div>
          <div className="gallery" style={{ marginTop: 26 }}>
            <img src="/img/gallery-1.jpg" alt="TrackMan bays with putting green" />
            <img src="/img/gallery-2.jpg" alt="Indoor putting green" />
            <img src="/img/gallery-3.jpg" alt="Vanguard facility" />
            <img src="/img/gallery-4.jpg" alt="Putting studio" />
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="section section-dark">
        <div className="wrap grid-2 feature rev">
          <div className="feature-img" style={{ aspectRatio: "3/4" }}>
            <img src="/img/tech-photo.jpg" alt="TrackMan simulator bay" />
          </div>
          <div>
            <span className="eyebrow">Technology — TrackMan</span>
            <h3 style={{ marginTop: 14 }}>Ten TrackMan bays. Zero excuses.</h3>
            <p style={{ color: "var(--bone-dim)" }}>
              TrackMan is the launch monitor tour pros and elite coaches trust. Every ball is
              measured for speed, spin, launch, and carry — turning vague &ldquo;that felt
              off&rdquo; into clear, fixable numbers.
            </p>
            <ul>
              <li>TrackMan 4 &amp; TrackMan iO — tour-proven accuracy</li>
              <li>100+ championship courses to play</li>
              <li>Full ball &amp; club data on every shot</li>
              <li>Video capture and side-by-side review</li>
              <li>3D Motion Analysis — unlocking the body–ball connection</li>
              <li>Comfortable and climate-controlled, 24/7</li>
            </ul>
          </div>
        </div>
      </section>

      {/* STRENGTH + MENTAL */}
      <section className="section section-bone">
        <div className="wrap grid-2 feature">
          <div className="feature-img">
            <img src="/img/strength-feature.jpg" alt="Golf-specific performance gym" />
          </div>
          <div>
            <span className="eyebrow">Strength &amp; Fitness · Tour Physio &amp; Performance</span>
            <h3 style={{ marginTop: 14 }}>A better swing starts with a stronger body.</h3>
            <p style={{ color: "var(--ink-soft)" }}>
              Our official golf performance partner, Tour Physio &amp; Performance, bridges the gap
              between the gym and the course — TPI-certified training that adds distance, improves
              mobility, and keeps you playing pain-free.
            </p>
            <ul>
              <li>Golf-specific movement screening</li>
              <li>Speed &amp; power to add distance</li>
              <li>Mobility for a fuller rotation</li>
              <li>Programs for juniors and adults alike</li>
            </ul>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: 56 }}>
          <div className="card" style={{ borderLeft: "3px solid var(--gold)" }}>
            <span className="eyebrow">Mental Performance · SP+R GOLF</span>
            <h3 style={{ margin: "12px 0 8px" }}>Train the mind like the rest of your game.</h3>
            <p>
              Through SP+R GOLF, in partnership with Riser+Tread, the sport-psychology methods once
              reserved for the PGA TOUR are accessible to every golfer — motivation and resilience,
              routine and course management, emotional regulation and focus. Swing, body, and mind,
              trained as one.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section section-green">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">How we train</span>
            <h2>Four pillars behind every better round.</h2>
          </div>
          <div className="pillars">
            <div className="pillar"><h3>Fundamentals</h3><p>Sound mechanics built to last.</p></div>
            <div className="pillar"><h3>Data-driven coaching</h3><p>TrackMan turns &ldquo;feels&rdquo; into facts.</p></div>
            <div className="pillar"><h3>Physical training</h3><p>Strength, speed, and mobility behind the swing.</p></div>
            <div className="pillar"><h3>Mindset &amp; community</h3><p>Mental performance through SP+R, plus a community that keeps you showing up.</p></div>
          </div>
          <div style={{ marginTop: 40 }}>
            <a href={WHOOSH.tour} target="_blank" rel="noopener" className="btn btn-primary">Book a tour →</a>{" "}
            <Link href="/membership" className="btn btn-ghost">Explore membership</Link>
          </div>
        </div>
      </section>
    </>
  );
}
