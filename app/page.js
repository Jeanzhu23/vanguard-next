import Link from "next/link";
import { WHOOSH, GIFT_CARDS } from "@/lib/site";

const EXPLORE = [
  { href: "/the-club", title: "The Club", copy: "Ten TrackMan bays, the region's best indoor short game, and a performance gym." },
  { href: "/membership", title: "Membership", copy: "Year-round access, better rates, priority booking." },
  { href: "/lessons", title: "Lessons", copy: "One-on-one with the top-ranked coach in the state." },
  { href: "/leagues", title: "Leagues", copy: "Weekly, handicap-adjusted competition for every level." },
  { href: "/junior-golf", title: "Junior Golf", copy: "A structured pathway from first swings to college-bound." },
  { href: "/events", title: "Events", copy: "Team outings, birthdays, and corporate nights." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--gold-bright)" }}>
            Indoor Golf Club · Greater Boston, MA
          </span>
          <h1>Great golf shouldn&rsquo;t have an <em>off-season.</em></h1>
          <p>
            Ten TrackMan bays open around the clock, the region&rsquo;s best complete indoor short
            game, and coaching from the best in the state — a training home for players who want to
            get better every month of the year.
          </p>
          <div className="hero-actions">
            <a href={WHOOSH.tour} target="_blank" rel="noopener" className="btn btn-primary">
              Book a tour →
            </a>
            <Link href="/membership" className="btn btn-ghost">Explore membership</Link>
          </div>
          <p className="note">
            New to Vanguard? Start with a tour — meet a coach, hit on TrackMan, and see the bays.
            Open 24/7, so any hour works.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="wrap">
          <div className="stat"><div className="n">10</div><div className="l">TrackMan bays</div></div>
          <div className="stat"><div className="n">#1</div><div className="l">Short game in New England</div></div>
          <div className="stat"><div className="n">24/7</div><div className="l">Always open</div></div>
          <div className="stat"><div className="n">5&amp;up</div><div className="l">Ages we coach</div></div>
        </div>
      </section>

      <div className="cred">
        The complete golfer, trained under one roof — <b>Golf Digest</b>&rsquo;s #1 teacher in
        Massachusetts, a TPI-certified performance team, and SP+R mental coaching. A proud{" "}
        <b>Mass Golf</b> &amp; <b>USGA</b> member club.
      </div>

      {/* SHORT GAME */}
      <section className="section section-green">
        <div className="wrap">
          <div className="grid-2 feature">
            <div className="feature-img">
              <img src="/img/shortgame-hero.jpg" alt="Vanguard indoor championship putting green" />
            </div>
            <div>
              <span className="tag">The crown jewel</span>
              <h3 style={{ marginTop: 14 }}>New England&rsquo;s most complete indoor short game.</h3>
              <p style={{ color: "var(--bone-dim)" }}>
                Scoring is won inside 100 yards — and nowhere in New England can you train it
                indoors like this. Most clubs give you a screen and a mat. We give you a complete
                short-game home.
              </p>
              <ul>
                <li>Championship contoured putting green</li>
                <li>PuttView augmented reality</li>
                <li>The Putting Lab — Full Swing + SAM PuttStudio 8</li>
                <li>Dedicated chipping &amp; bunker area</li>
              </ul>
              <Link href="/the-club" className="btn btn-primary" style={{ marginTop: 16 }}>
                Explore the facility →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section section-cream">
        <div className="wrap">
          <div className="sec-head center">
            <span className="eyebrow">Take a look inside</span>
            <h2>Welcome to Vanguard.</h2>
            <p>A year-round indoor golf home in Greater Boston — see the bays, the short game, and the space in a minute.</p>
          </div>
          <div className="videobox">
            <video controls playsInline preload="metadata" poster="/img/video-poster.jpg">
              <source src="/video/vanguard-intro.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* EXPLORE */}
      <section className="section section-bone">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Where would you like to start?</span>
            <h2>One home for every part of your game.</h2>
          </div>
          <div className="grid-3">
            {EXPLORE.map((e) => (
              <Link key={e.href} href={e.href} className="card">
                <h3>{e.title}</h3>
                <p>{e.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BAND */}
      <section className="band">
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--gold-bright)" }}>Never off-season</span>
          <h2>Your best golf, every month of the year.</h2>
          <p>Start with a tour, or give the game as a gift — Vanguard gift cards and simulator packages make it easy to share.</p>
          <div className="btns">
            <a href={WHOOSH.tour} target="_blank" rel="noopener" className="btn btn-primary">Book a tour →</a>
            <a href={GIFT_CARDS} target="_blank" rel="noopener" className="btn btn-ghost">Buy a gift card →</a>
          </div>
        </div>
      </section>
    </>
  );
}
