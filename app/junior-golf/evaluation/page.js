import Link from "next/link";
import { FORMS } from "@/lib/site";

export const metadata = {
  title: "Request a Junior Evaluation",
  description:
    "Request an evaluation for your junior golfer at Vanguard Golf Club, Dedham MA. Tell us about your player and our coaching team will contact you to schedule.",
};

export default function Evaluation() {
  return (
    <section className="section section-dark">
      <div className="wrap narrow">
        <div className="sec-head center">
          <span className="eyebrow">Junior Golf</span>
          <h2>Request an evaluation.</h2>
          <p>
            Every junior starts with an evaluation so they join at exactly the right level —
            challenged, but never lost. Tell us about your golfer and our coaching team will be in
            touch to schedule a time.
          </p>
        </div>

        <form className="form" action={FORMS.junior} method="POST" style={{ margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".14em",
                      textTransform: "uppercase", color: "var(--gold)", margin: "0 0 2px" }}>
            Parent / guardian
          </p>
          <div className="row">
            <div><label htmlFor="pname">Your name</label><input id="pname" type="text" name="parent_name" required /></div>
            <div><label htmlFor="pemail">Email</label><input id="pemail" type="email" name="parent_email" required /></div>
          </div>
          <div><label htmlFor="pphone">Phone</label><input id="pphone" type="tel" name="parent_phone" required /></div>

          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".14em",
                      textTransform: "uppercase", color: "var(--gold)", margin: "18px 0 2px" }}>
            The golfer
          </p>
          <div className="row">
            <div><label htmlFor="jname">Golfer&rsquo;s name</label><input id="jname" type="text" name="golfer_name" required /></div>
            <div><label htmlFor="jage">Age</label><input id="jage" type="number" name="golfer_age" min="4" max="18" required /></div>
          </div>
          <div className="row">
            <div>
              <label htmlFor="jexp">Experience level</label>
              <select id="jexp" name="experience">
                <option>Brand new to golf</option>
                <option>Beginner — some lessons or range time</option>
                <option>Plays occasionally on course</option>
                <option>Plays regularly</option>
                <option>Competitive / tournament player</option>
              </select>
            </div>
            <div>
              <label htmlFor="jyears">Years playing</label>
              <select id="jyears" name="years_playing">
                <option>Less than 1</option><option>1–2</option><option>3–5</option><option>5+</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div>
              <label htmlFor="jcomp">Plays school or tournament golf?</label>
              <select id="jcomp" name="competitive">
                <option>No</option><option>School team</option>
                <option>Local tournaments</option><option>Regional / national tournaments</option>
              </select>
            </div>
            <div>
              <label htmlFor="jscore">Handicap or typical score (optional)</label>
              <input id="jscore" type="text" name="handicap" placeholder="e.g. 12, or shoots ~95" />
            </div>
          </div>

          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".14em",
                      textTransform: "uppercase", color: "var(--gold)", margin: "18px 0 2px" }}>
            Program &amp; availability
          </p>
          <div className="row">
            <div>
              <label htmlFor="jprog">Program of interest</label>
              <select id="jprog" name="program">
                <option>Not sure — please advise</option>
                <option>Vanguard Foundations</option>
                <option>Vanguard Rising Players</option>
                <option>Performance Academy — Development</option>
                <option>Performance Academy — Elite</option>
              </select>
            </div>
            <div>
              <label htmlFor="javail">Best days / times</label>
              <input id="javail" type="text" name="availability" placeholder="e.g. weekday evenings, weekends" />
            </div>
          </div>
          <div>
            <label htmlFor="jgoals">Goals &amp; anything else we should know</label>
            <textarea id="jgoals" name="message" placeholder="What would you like your golfer to get out of the program?"></textarea>
          </div>

          <input type="hidden" name="_subject" value="New JUNIOR EVALUATION request — Vanguard Golf Club" />
          <input type="text" name="_gotcha" className="hp" tabIndex={-1} autoComplete="off" />
          <button type="submit" className="btn btn-primary">Request evaluation</button>
        </form>

        <p style={{ textAlign: "center", marginTop: 28 }}>
          <Link href="/junior-golf" style={{ color: "var(--gold-bright)" }}>← Back to Junior Golf</Link>
        </p>
      </div>
    </section>
  );
}
