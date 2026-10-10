import Link from "next/link";
import { LEAGUE } from "@/lib/site";

export const metadata = {
  title: "Leagues",
  description: "Weekly, handicap-adjusted TrackMan league play for every level at Vanguard Golf Club, Dedham MA.",
};

export default function Leagues() {
  return (
    <>
      <section className="page-hero">
        <img className="bg" src="/img/leagues-photo.jpg" alt="" />
        <div className="wrap">
          <span className="eyebrow">Leagues</span>
          <h1>Grab a partner. Play the season.</h1>
          <p>Team up, play a weekly round on TrackMan, and climb the leaderboard toward the season finale.</p>
        </div>
      </section>

      <section className="section section-green">
        <div className="wrap grid-2 feature">
          <div className="feature-img" style={{ aspectRatio: "2/3", maxWidth: 460, margin: "0 auto" }}>
            <img src="/img/events/womens-league.jpg" alt="Women's Simulator Golf League — Girls' Night Out" />
          </div>
          <div>
            <span className="tag">Now enrolling · Starts Monday, Oct 26</span>
            <h3 style={{ marginTop: 14 }}>Women&rsquo;s Simulator Golf League.</h3>
            <p style={{ color: "var(--bone-dim)" }}>
              Girls&rsquo; night out, with golf. Four Monday evenings of fun, social play on TrackMan
              with Coach Rick McCready &mdash; great golf, cold drinks, new friends, and lots of laughs.
              All levels welcome.
            </p>
            <ul>
              <li>Mondays, Oct 26 &ndash; Nov 16 &middot; 6:00 &ndash; 7:30 PM</li>
              <li>$25 per person, per week</li>
              <li>BYO &mdash; bring your favorite beverages</li>
              <li>Play &middot; Connect &middot; Compete</li>
            </ul>
            <a href="mailto:rick@vanguardgolfclub.com?subject=Women%27s%20Simulator%20Golf%20League%20sign-up"
               className="btn btn-primary" style={{ marginTop: 12 }}>
              Email Rick to sign up →
            </a>
          </div>
        </div>
      </section>

      {/* LEADERBOARD */}
      <section className="section section-bone">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Standings</span>
            <h2>The leaderboard.</h2>
            <p>
              {LEAGUE.active
                ? `${LEAGUE.season} · ${LEAGUE.week}. Handicap-adjusted, so every team has a real shot.`
                : "Standings appear here once the season is underway. Sign up and get your name on the board."}
            </p>
          </div>

          {LEAGUE.active && LEAGUE.teams.length > 0 ? (
            <>
              <div className="lb">
                {LEAGUE.teams.map((t) => (
                  <div key={t.pos} className={`lb-row${t.pos === 1 ? " lead" : ""}`}>
                    <span className="lb-pos">{t.pos}</span>
                    <span className="lb-name">{t.name}</span>
                    <span className="lb-pts">{t.pts} pts</span>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 20, fontSize: 14, color: "var(--ink-soft)" }}>
                {LEAGUE.updated}
                {LEAGUE.standingsUrl && (
                  <>
                    {" · "}
                    <a href={LEAGUE.standingsUrl} target="_blank" rel="noopener"
                       style={{ color: "var(--gold)", fontWeight: 600 }}>
                      View full standings →
                    </a>
                  </>
                )}
              </p>
            </>
          ) : (
            <div className="lb-empty">
              <p>
                <b>Between seasons.</b>
                Sign up now and you&rsquo;ll be on the board when the next league tees off.
              </p>
              <Link href="/leagues/signup" className="btn btn-dark">
                Join the next league →
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
