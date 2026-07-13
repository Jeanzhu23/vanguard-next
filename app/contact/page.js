import { FORMS, CLUB, WHOOSH, FAQ } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Vanguard Golf Club in Dedham, MA — membership, lessons, junior programs, and getting started.",
};

export default function Contact() {
  return (
    <section className="section section-dark">
      <div className="wrap">
        <div className="sec-head center">
          <span className="eyebrow">Contact</span>
          <h2>Get in touch.</h2>
          <p>Questions about membership, lessons, junior programs, or just getting started? Send us a message — we&rsquo;re quick to reply, and always open.</p>
        </div>

        <div className="contact-grid">
          <form className="form" action={FORMS.contact} method="POST">
            <div className="row">
              <div><label htmlFor="cname">Name</label><input id="cname" type="text" name="name" required /></div>
              <div><label htmlFor="cemail">Email</label><input id="cemail" type="email" name="email" required /></div>
            </div>
            <div className="row">
              <div><label htmlFor="cphone">Phone</label><input id="cphone" type="tel" name="phone" /></div>
              <div>
                <label htmlFor="interested">I&rsquo;m interested in</label>
                <select id="interested" name="interested_in">
                  <option>General question</option><option>Membership</option>
                  <option>Lessons / Swing Evaluation</option><option>Junior Golf</option>
                  <option>Leagues</option><option>Events</option>
                </select>
              </div>
            </div>
            <div><label htmlFor="cmsg">Message</label><textarea id="cmsg" name="message" required></textarea></div>
            <input type="hidden" name="_subject" value="New website contact — Vanguard Golf Club" />
            <input type="text" name="_gotcha" className="hp" tabIndex={-1} autoComplete="off" />
            <button type="submit" className="btn btn-primary">Send message</button>
          </form>

          <div className="info">
            <p><b>Address</b><br />{CLUB.address}</p>
            <p><b>Hours</b><br />Open 24/7 — members book any hour, any day.</p>
            <p><b>Phone</b><br />{CLUB.phone}</p>
            <p><b>Email</b><br />{CLUB.email}</p>
            <div style={{ marginTop: 20 }}>
              <a href={WHOOSH.book} target="_blank" rel="noopener" className="btn btn-primary">Book Now</a>{" "}
              <a href={WHOOSH.memberships} target="_blank" rel="noopener" className="btn btn-ghost">Become a member</a>
            </div>
          </div>
        </div>

        <div className="faq" style={{ maxWidth: 760, margin: "48px auto 0" }}>
          {FAQ.map(([q, a], i) => (
            <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: "center" }}>
          <span className="eyebrow">Affiliations &amp; partners</span>
          <div className="affil">
            <span>Mass Golf</span><span>USGA</span>
            <span><img src="/img/logo-trackman.png" alt="TrackMan" /></span>
            <span><img src="/img/logo-fullswing.png" alt="Full Swing" /></span>
            <span><img src="/img/logo-puttview.png" alt="PuttView" /></span>
          </div>
        </div>
      </div>
    </section>
  );
}
