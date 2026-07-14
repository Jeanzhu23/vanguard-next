import { WHOOSH, LEAGUE } from "@/lib/site";

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
          <div className="feature-img"><img src="/img/leagues-photo.jpg" alt="League play at Vanguard" /></div>
          <div>
            <h3>Play the season, not just the round.</h3>
            <p style={{ color: "var(--bone-dim)" }}>
              Handicaps level the field, so every team has a real shot — and with 24/7 access, you
              play on your schedule.
            </p>
            <ul>
              <li>2-person teams — sign up solo and we&rsquo;ll match you</li>
              <li>Net &amp; Gross leaderboards, your best weeks count</li>
              <li>Open, Women&rsquo;s, and Junior divisions</li>
              <li>Weekly prizes and a season-ending Vanguard Championship</li>
            </ul>
            <a href={WHOOSH.store} target="_blank" rel="noopener" className="btn btn-primary" style={{ marginTop: 12 }}>
              Join a league →
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
              <p>No active season right now.</p>
              <a href={WHOOSH.store} target="_blank" rel="noopener" className="btn btn-dark">
                Join the next league →
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
