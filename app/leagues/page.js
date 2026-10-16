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
          <div className="feature-img" style={{ aspectRatio: "4/5", maxWidth: 460, margin: "0 auto" }}>
            <img src="/img/events/womens-league-photo.jpg" alt="Women's league night in a Vanguard TrackMan bay" />
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

      {/* MEN'S LEAGUE — COMING SOON */}
      <section className="section section-dark">
        <div className="wrap grid-2 feature">
          <div className="feature-img" style={{ aspectRatio: "4/5", maxWidth: 460, margin: "0 auto" }}>
            <img src="/img/events/mens-league.jpg" alt="Men's league night in a Vanguard TrackMan bay" />
          </div>
          <div>
            <span className="tag">Coming soon · Launching this season</span>
            <h3 style={{ marginTop: 14 }}>Men&rsquo;s League. Bragging rights, every week.</h3>
            <p style={{ color: "var(--bone-dim)" }}>
              Pick your teammate, pick your night, and go to war on TrackMan. Handicaps level the field,
              so the scratch player and the weekend hack both have a real shot at the top of the board.
              Weekly prizes, a live leaderboard, and a season-ending championship with your name on
              the line. Cold drinks, loud bays, and a lot of trash talk.
            </p>
            <ul>
              <li>2-person teams &mdash; two members, or a member and a guest</li>
              <li>Net &amp; Gross leaderboards: your best weeks count</li>
              <li>Weekly prizes, plus the Vanguard Championship to close the season</li>
              <li>Open 24/7, so make-up rounds fit your schedule</li>
            </ul>
            <Link href="/leagues/signup" className="btn btn-primary" style={{ marginTop: 12 }}>
              Sign up your team →
            </Link>
          </div>
        </div>
      </section>

      {/* PGA JR. LEAGUE */}
      <section className="section section-cream">
        <div className="wrap grid-2 feature rev">
          <div className="feature-img" style={{ aspectRatio: "4/5", maxWidth: 460, margin: "0 auto" }}>
            <img src="/img/events/pga-jr-league.jpg" alt="PGA Jr. League players in a Vanguard TrackMan bay" />
          </div>
          <div>
            <span className="tag">Now registering · Ages 13 &amp; under · Space is limited</span>
            <h3 style={{ marginTop: 14 }}>PGA Jr. League at Vanguard.</h3>
            <p style={{ color: "var(--ink-soft)" }}>
              Team golf for kids, the way it should be. Players wear numbered jerseys, compete in a
              relaxed two-person scramble format, and play a season of matches as a team &mdash; so
              every kid contributes and no one plays alone. Open to boys and girls of all skill
              levels; no golf experience required. Coached by <b>Preston Renfrow, PGA</b>.
            </p>
            <ul>
              <li>12 practices and 6 matches</li>
              <li>Two custom team jerseys (home and away) with your player&rsquo;s name and number</li>
              <li>Hat or visor, bag tag, sticker, and drawstring bag</li>
              <li>Program fee: $570 per player</li>
            </ul>
            <a href="https://www.pgajrleague.com/junior-league-events/366d47a1-4be6-4027-b4ce-5f6aa7735e4c"
               target="_blank" rel="noopener" className="btn btn-dark" style={{ marginTop: 12 }}>
              Register on PGAJrLeague.com →
            </a>
            <p style={{ marginTop: 14, fontSize: 14, color: "var(--ink-soft)" }}>
              Questions? Email Coach Preston at{" "}
              <a href="mailto:p4pargolf@gmail.com" style={{ color: "var(--green-900)", fontWeight: 600 }}>
                p4pargolf@gmail.com
              </a>
              {" "}&middot;{" "}
              <a href="https://www.youtube.com/watch?v=2hKDFY6Ssr4" target="_blank" rel="noopener"
                 style={{ color: "var(--green-900)", fontWeight: 600 }}>
                Watch what PGA Jr. League is all about →
              </a>
            </p>
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
