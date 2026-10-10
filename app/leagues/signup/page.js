import Link from "next/link";
import { FORMS } from "@/lib/site";

export const metadata = {
  title: "League Sign-Up",
  description:
    "Sign up for league play at Vanguard Golf Club, Dedham MA. Tell us which league you're interested in and we'll be in touch with details and start dates.",
};

export default function LeagueSignup() {
  return (
    <section className="section section-dark">
      <div className="wrap narrow">
        <div className="sec-head center">
          <span className="eyebrow">Leagues</span>
          <h2>Join the next league.</h2>
          <p>
            Tell us a little about yourself and which league you&rsquo;re interested in. We&rsquo;ll
            reach out with start dates, pricing, and how to lock in your spot. Sign up solo and
            we&rsquo;ll match you with a partner.
          </p>
        </div>

        <form className="form" action={FORMS.contact} method="POST" style={{ margin: "0 auto" }}>
          <div className="row">
            <div><label htmlFor="lname">Your name</label><input id="lname" type="text" name="name" required /></div>
            <div><label htmlFor="lemail">Email</label><input id="lemail" type="email" name="email" required /></div>
          </div>
          <div className="row">
            <div><label htmlFor="lphone">Phone</label><input id="lphone" type="tel" name="phone" required /></div>
            <div>
              <label htmlFor="lleague">League</label>
              <select id="lleague" name="league">
                <option>Men&rsquo;s league</option>
                <option>Women&rsquo;s league</option>
                <option>Junior league</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div>
              <label htmlFor="lskill">Skill level</label>
              <select id="lskill" name="skill_level">
                <option>Beginner</option>
                <option>Casual / recreational</option>
                <option>Regular player</option>
                <option>Low handicap / competitive</option>
              </select>
            </div>
            <div>
              <label htmlFor="lteam">Team</label>
              <select id="lteam" name="team">
                <option>Sign me up solo &mdash; match me with a partner</option>
                <option>I have a partner</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="lmsg">Partner name, preferred nights, or anything else</label>
            <textarea id="lmsg" name="message" placeholder="Optional"></textarea>
          </div>

          <input type="hidden" name="interested_in" value="Leagues" />
          <input type="hidden" name="_subject" value="New LEAGUE sign-up — Vanguard Golf Club" />
          <input type="text" name="_gotcha" className="hp" tabIndex={-1} autoComplete="off" />
          <button type="submit" className="btn btn-primary">Sign me up</button>
        </form>

        <p style={{ textAlign: "center", marginTop: 28 }}>
          <Link href="/leagues" style={{ color: "var(--gold-bright)" }}>← Back to Leagues</Link>
        </p>
      </div>
    </section>
  );
}
