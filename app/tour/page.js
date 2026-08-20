import Link from "next/link";
import { FORMS } from "@/lib/site";

export const metadata = {
  title: "Book a Tour",
  description: "Book a tour of Vanguard Golf Club in Dedham, MA — meet a coach, hit on TrackMan, and see the bays. Open 24/7.",
};

export default function Tour() {
  return (
    <section className="section section-dark">
      <div className="wrap narrow">
        <div className="sec-head center">
          <span className="eyebrow">Visit us</span>
          <h2>Book a tour.</h2>
          <p>
            The best way to get a feel for Vanguard — meet a coach, hit a few on TrackMan, and see
            the bays and short-game area for yourself. Tell us when works and we&rsquo;ll be in touch
            to set it up. We&rsquo;re open 24/7, so almost any time works.
          </p>
        </div>

        <form className="form" action={FORMS.tour} method="POST" style={{ margin: "0 auto" }}>
          <div className="row">
            <div><label htmlFor="name">Name</label><input id="name" type="text" name="name" required /></div>
            <div><label htmlFor="email">Email</label><input id="email" type="email" name="email" required /></div>
          </div>
          <div className="row">
            <div><label htmlFor="phone">Phone</label><input id="phone" type="tel" name="phone" required /></div>
            <div>
              <label htmlFor="interest">What brings you in?</label>
              <select id="interest" name="interest">
                <option>Just exploring</option>
                <option>Membership</option>
                <option>Lessons / getting better</option>
                <option>Junior golf for my child</option>
                <option>Leagues</option>
                <option>A corporate or private event</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div><label htmlFor="pref_day">Preferred day</label><input id="pref_day" type="date" name="preferred_day" /></div>
            <div><label htmlFor="pref_time">Preferred time</label><input id="pref_time" type="time" name="preferred_time" /></div>
          </div>
          <div>
            <label htmlFor="message">Anything else? (optional)</label>
            <textarea id="message" name="message" placeholder="Tell us anything that helps us prepare for your visit"></textarea>
          </div>
          <input type="hidden" name="_subject" value="New TOUR request — Vanguard Golf Club" />
          <input type="text" name="_gotcha" className="hp" tabIndex={-1} autoComplete="off" />
          <button type="submit" className="btn btn-primary">Request my tour</button>
        </form>

        <p style={{ textAlign: "center", marginTop: 28 }}>
          <Link href="/" style={{ color: "var(--gold-bright)" }}>← Back to home</Link>
        </p>
      </div>
    </section>
  );
}
