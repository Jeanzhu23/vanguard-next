import Link from "next/link";
import { EVENTS } from "@/lib/site";

export const metadata = {
  title: "Corporate Events & Private Parties",
  description:
    "Host corporate outings, team building, birthdays, and private groups on TrackMan simulators in Dedham, MA. Outside catering welcome.",
};

const PKGS = [
  { name: "Executive Networking", guests: "10–15 guests", price: "$750",
    items: ["3–4 TrackMan bays", "2 hours of simulator access", "Putting competition setup", "Event staff support", "Basic scoring & leaderboard"] },
  { name: "Team Building", guests: "20–30 guests", price: "$1,500", feat: true, badge: "Most popular",
    items: ["5–6 TrackMan bays", "2.5 hours of event time", "Multiple competition stations", "Digital leaderboard", "Event host & scoring support", "Putting & chipping challenges"] },
  { name: "Premium Facility Buyout", guests: "35–50 guests", price: "$3,000",
    items: ["Full facility access", "All 10 TrackMan bays", "3 hours of event time", "Full tournament setup", "Live leaderboard management", "Dedicated event staff", "Presentation / awards area"] },
];

export default function Events() {
  return (
    <>
      <section className="page-hero">
        <img className="bg" src="/img/hero-events.jpg" alt="" />
        <div className="wrap">
          <span className="eyebrow">Corporate events &amp; private groups</span>
          <h1>The best team outing your group has never had.</h1>
          <p>
            Ten TrackMan bays, a striking modern space, and golf that&rsquo;s genuinely fun for
            everyone — from first-timers to low handicaps. Play. Connect. Elevate.
          </p>
          <p style={{ marginTop: 24 }}>
            <Link href="/events/inquiry" className="btn btn-primary">Plan an event →</Link>
          </p>
        </div>
      </section>

      <section className="section section-bone">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The experience</span>
            <h2>Turn any group into golfers.</h2>
            <p>
              No experience needed. TrackMan makes the game approachable and genuinely fun for
              everyone, so your whole team is engaged from the first swing.
            </p>
          </div>
          <div className="grid-3">
            <div className="card"><h3>Corporate outings</h3><p>Break the ice and build camaraderie over friendly competition.</p></div>
            <div className="card"><h3>Client entertaining</h3><p>Impress clients in a premium, private setting.</p></div>
            <div className="card"><h3>Holiday &amp; office parties</h3><p>A memorable seasonal celebration for the whole team.</p></div>
            <div className="card"><h3>Birthdays &amp; private groups</h3><p>A night out that&rsquo;s a world away from the usual venue.</p></div>
            <div className="card"><h3>Fundraisers</h3><p>A relaxed, social format that gets people talking — and giving.</p></div>
            <div className="card"><h3>Group lessons &amp; clinics</h3><p>Add a coach and everyone leaves a better golfer.</p></div>
          </div>
        </div>
      </section>

      {/* CALENDAR */}
      <section className="section section-cream">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">What&rsquo;s on</span>
            <h2>Upcoming at Vanguard.</h2>
            <p>Leagues, tournaments, clinics, and member socials — there&rsquo;s always something happening. Members get first access.</p>
          </div>

          {EVENTS.length === 0 ? (
            <p style={{ color: "var(--ink-soft)" }}>
              No events on the calendar right now — check back soon, or{" "}
              <Link href="/contact" style={{ color: "var(--gold)" }}>get in touch</Link> to plan your own.
            </p>
          ) : (
            <div className="cal">
              {EVENTS.map((e) => {
                const d = new Date(e.date + "T00:00:00");
                const month = d.toLocaleString("en-US", { month: "short" });
                const day = d.getDate();
                return (
                  <div key={e.date + e.title} className="cal-row">
                    <div className="cal-date">
                      <span className="cal-mon">{month}</span>
                      <span className="cal-day">{day}</span>
                    </div>
                    <div className="cal-body">
                      <span className="cal-tag">{e.tag}</span>
                      <h3>{e.title}</h3>
                      <p>{e.desc}</p>
                    </div>
                    <div className="cal-time">{e.time}</div>
                  </div>
                );
              })}
            </div>
          )}

          <p style={{ marginTop: 32, color: "var(--ink-soft)", fontSize: 15 }}>
            Want to host your own?{" "}
            <Link href="/events/inquiry" style={{ color: "var(--gold)", fontWeight: 600 }}>
              Plan an event →
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-green">
        <div className="wrap">
          <div className="sec-head center">
            <span className="eyebrow">Event packages</span>
            <h2>Choose your package.</h2>
            <p>Each fully managed, from setup to final leaderboard. Starting prices — every event is tailored to your group.</p>
          </div>
          <div className="tiers">
            {PKGS.map((p) => (
              <Link key={p.name} href="/events/inquiry" data-badge={p.badge}
                    className={`tier tier-link${p.feat ? " feat" : ""}`}>
                <span className="tag">{p.guests}</span>
                <h3>{p.name}</h3>
                <div className="price">{p.price}<span> starting</span></div>
                <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
                <span className={`btn ${p.feat ? "btn-primary" : "btn-dark"}`}>Request info →</span>
              </Link>
            ))}
          </div>
          <div className="sec-head center" style={{ marginTop: 56, marginBottom: 0 }}>
            <p style={{ color: "var(--bone-dim)" }}>
              Add-ons available: coach-led instruction, company branding, trophies &amp; prizes,
              extra hours, and food &amp; beverage packages. Outside catering is always welcome.
            </p>
            <p style={{ marginTop: 22 }}>
              <Link href="/events/inquiry" className="btn btn-primary">Plan your event →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
