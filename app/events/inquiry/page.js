import Link from "next/link";
import { FORMS } from "@/lib/site";

export const metadata = {
  title: "Plan an Event",
  description: "Tell us about your event at Vanguard Golf Club — corporate outings, team building, parties, and private groups in Dedham, MA.",
};

export default function EventInquiry() {
  return (
    <section className="section section-green">
      <div className="wrap narrow">
        <div className="sec-head center">
          <span className="eyebrow">Corporate &amp; private events</span>
          <h2>Tell us about your event.</h2>
          <p>
            Ten TrackMan bays, pro-led competitions, a polished private space, and outside catering
            welcome. Send us a few details and our team will design your event around you.
          </p>
        </div>

        <form className="form" action={FORMS.event} method="POST" style={{ margin: "0 auto" }}>
          <div className="row">
            <div><label htmlFor="name">Name</label><input id="name" type="text" name="name" required /></div>
            <div><label htmlFor="email">Email</label><input id="email" type="email" name="email" required /></div>
          </div>
          <div className="row">
            <div><label htmlFor="phone">Phone</label><input id="phone" type="tel" name="phone" required /></div>
            <div><label htmlFor="company">Company / organization</label><input id="company" type="text" name="company" /></div>
          </div>
          <div className="row">
            <div>
              <label htmlFor="event_type">Type of event</label>
              <select id="event_type" name="event_type">
                <option>Corporate outing</option><option>Networking</option>
                <option>Team building</option><option>Holiday party</option>
                <option>Fundraiser</option><option>Family gathering</option>
                <option>Birthday party</option><option>Client entertaining</option>
                <option>Other</option>
              </select>
            </div>
            <div><label htmlFor="group_size">Estimated guests</label><input id="group_size" type="number" name="group_size" min="1" placeholder="e.g. 20" /></div>
          </div>
          <div className="row">
            <div><label htmlFor="preferred_date">Preferred date</label><input id="preferred_date" type="date" name="preferred_date" required /></div>
            <div><label htmlFor="preferred_time">Preferred time</label><input id="preferred_time" type="time" name="preferred_time" /></div>
          </div>
          <div className="row">
            <div>
              <label htmlFor="food">Interested in food?</label>
              <select id="food" name="food"><option>Not sure yet</option><option>Yes</option><option>No</option></select>
            </div>
            <div>
              <label htmlFor="drinks">Interested in drinks?</label>
              <select id="drinks" name="drinks"><option>Not sure yet</option><option>Yes</option><option>No</option></select>
            </div>
          </div>
          <div>
            <label htmlFor="instruction">Add golf instruction?</label>
            <select id="instruction" name="instruction">
              <option>Not sure yet</option><option>Yes, add a coach</option><option>No</option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Additional comments or special requests</label>
            <textarea id="message" name="message" placeholder="Tell us what you have in mind"></textarea>
          </div>
          <input type="hidden" name="_subject" value="New EVENT inquiry — Vanguard Golf Club" />
          <input type="text" name="_gotcha" className="hp" tabIndex={-1} autoComplete="off" />
          <button type="submit" className="btn btn-primary">Request event info</button>
        </form>

        <p style={{ textAlign: "center", marginTop: 28 }}>
          <Link href="/events" style={{ color: "var(--gold-bright)" }}>← Back to events</Link>
        </p>
      </div>
    </section>
  );
}
