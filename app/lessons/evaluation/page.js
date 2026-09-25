import Link from "next/link";
import { FORMS } from "@/lib/site";

export const metadata = {
  title: "Request a Swing Evaluation",
  description:
    "Request a $99 Swing Evaluation at Vanguard Golf Club, Dedham MA. Tell us about your game and our coaching team will contact you to schedule your TrackMan session.",
};

export default function SwingEvaluation() {
  return (
    <section className="section section-dark">
      <div className="wrap narrow">
        <div className="sec-head center">
          <span className="eyebrow">Swing Evaluation · $99</span>
          <h2>Request a Swing Evaluation.</h2>
          <p>
            The Swing Evaluation

cd ~/Desktop/vanguard-next
cat > app/lessons/evaluation/page.js << 'EOF'
import Link from "next/link";
import { FORMS } from "@/lib/site";

export const metadata = {
  title: "Request a Swing Evaluation",
  description:
    "Request a $99 Swing Evaluation at Vanguard Golf Club, Dedham MA. Tell us about your game and our coaching team will contact you to schedule your TrackMan session.",
};

export default function SwingEvaluation() {
  return (
    <section className="section section-dark">
      <div className="wrap narrow">
        <div className="sec-head center">
          <span className="eyebrow">Swing Evaluation · $99</span>
          <h2>Request a Swing Evaluation.</h2>
          <p>
            The Swing Evaluation is a $99, one-time session with a coach and TrackMan. We measure
            what your swing is doing today, pinpoint your biggest opportunities, and build a clear
            plan. Tell us a little about your game and we&rsquo;ll be in touch to schedule a time.
          </p>
        </div>

        <form className="form" action={FORMS.evaluation} method="POST" style={{ margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".14em",
                      textTransform: "uppercase", color: "var(--gold)", margin: "0 0 2px" }}>
            About you
          </p>
          <div className="row">
            <div><label htmlFor="ename">Your name</label><input id="ename" type="text" name="name" required /></div>
            <div><label htmlFor="eemail">Email</label><input id="eemail" type="email" name="email" required /></div>
          </div>
          <div><label htmlFor="ephone">Phone</label><input id="ephone" type="tel" name="phone" required /></div>

          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".14em",
                      textTransform: "uppercase", color: "var(--gold)", margin: "18px 0 2px" }}>
            Your game
          </p>
          <div className="row">
            <div>
              <label htmlFor="eexp">Experience level</label>
              <select id="eexp" name="experience">
                <option>Brand new to golf</option>
                <option>Beginner — some lessons or range time</option>
                <option>Plays occasionally on course</option>
                <option>Plays regularly</option>
                <option>Competitive / tournament player</option>
              </select>
            </div>
            <div>
              <label htmlFor="escore">Handicap or typical score (optional)</label>
              <input id="escore" type="text" name="handicap" placeholder="e.g. 12, or shoots ~95" />
            </div>
          </div>
          <div>
            <label htmlFor="eavail">Best days / times</label>
            <input id="eavail" type="text" name="availability" placeholder="e.g. weekday evenings, weekends" />
          </div>
          <div>
            <label htmlFor="egoals">Goals &amp; anything else we should know</label>
            <textarea id="egoals" name="message" placeholder="What would you like to get out of your evaluation?"></textarea>
          </div>

          <input type="hidden" name="_subject" value="New SWING EVALUATION request — Vanguard Golf Club" />
          <input type="text" name="_gotcha" className="hp" tabIndex={-1} autoComplete="off" />
          <button type="submit" className="btn btn-primary">Request evaluation</button>
        </form>

        <p style={{ textAlign: "center", marginTop: 28 }}>
          <Link href="/lessons" style={{ color: "var(--gold-bright)" }}>← Back to Lessons</Link>
        </p>
      </div>
    </section>
  );
}
