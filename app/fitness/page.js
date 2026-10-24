import { FITNESS } from "@/lib/site";

export const metadata = {
  title: "Fitness & Golf Performance",
  description:
    "Golf performance training at Vanguard Golf Club with Tour Physio & Performance — small-group strength, speed, and mobility programs for juniors, high school players, and adults in Dedham, MA.",
};

const cell = { padding: "12px 0", borderTop: "1px solid rgba(15,31,24,.12)", verticalAlign: "top" };
const head = {
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: ".14em",
  textTransform: "uppercase",
  color: "var(--ink-soft)",
  paddingBottom: 8,
  borderBottom: "2px solid var(--gold)",
  textAlign: "left",
};

export default function Fitness() {
  const F = FITNESS;
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <img className="bg" src="/img/strength-feature.jpg" alt="" />
        <div className="wrap">
          <span className="eyebrow">{F.hero.eyebrow}</span>
          <h1>{F.hero.title}</h1>
          <p>{F.hero.copy}</p>
          <div className="hero-actions">
            <a href={F.bookUrl} target="_blank" rel="noopener" className="btn btn-primary">
              Book your assessment →
            </a>
            <a href={F.partnerUrl} target="_blank" rel="noopener" className="btn btn-ghost">
              Visit Tour Physio
            </a>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT */}
      <section className="section section-green">
        <div className="wrap grid-2 feature">
          <div className="feature-img" style={{ aspectRatio: "4/5", maxWidth: 460, margin: "0 auto" }}>
            <img src="/img/strength-feature.jpg" alt="Golf performance training at Vanguard" />
          </div>
          <div>
            <span className="tag">{F.announcement.tag}</span>
            <h3 style={{ marginTop: 14 }}>{F.announcement.title}</h3>
            <p style={{ color: "var(--bone-dim)" }}>{F.announcement.copy}</p>
            <ul>
              {F.whoFor.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            <a href={F.bookUrl} target="_blank" rel="noopener" className="btn btn-primary" style={{ marginTop: 12 }}>
              Book your assessment →
            </a>
          </div>
        </div>
      </section>

      {/* ASSESSMENTS */}
      <section className="section section-bone">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Member offer · 50% off</span>
            <h2>Start with an assessment.</h2>
            <p>{F.assessments.intro}</p>
          </div>
          <div className="tiers-2">
            {F.assessments.items.map((a) => (
              <div key={a.name} className="tier">
                <span className="eyebrow">{a.length}</span>
                <h3>{a.name}</h3>
                <div className="price">
                  {a.price}{" "}
                  <span style={{ textDecoration: "line-through" }}>{a.was}</span>
                </div>
                <ul>
                  <li>{a.who}</li>
                </ul>
                <a href={F.bookUrl} target="_blank" rel="noopener" className="btn btn-dark">
                  Book now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section section-cream">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Small group training</span>
            <h2>Pick your pace.</h2>
            <p>{F.pricing.intro}</p>
          </div>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div className="card" style={{ padding: "22px 26px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
                <thead>
                  <tr>
                    <th style={head}>Frequency</th>
                    <th style={{ ...head, textAlign: "right" }}>No commitment</th>
                    <th style={{ ...head, textAlign: "right", color: "var(--green-900)" }}>12-week+</th>
                  </tr>
                </thead>
                <tbody>
                  {F.pricing.rows.map((r) => (
                    <tr key={r.freq}>
                      <td style={cell}>
                        <b style={{ color: "var(--green-900)" }}>{r.freq}</b>
                        <br />
                        <span style={{ fontSize: 13.5, color: "var(--ink-soft)" }}>{r.sessions}</span>
                      </td>
                      <td style={{ ...cell, textAlign: "right", color: "var(--ink-soft)" }}>{r.open}</td>
                      <td style={{ ...cell, textAlign: "right", fontWeight: 700, color: "var(--green-900)", fontSize: 18 }}>
                        {r.commit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ margin: "14px 0 0", fontSize: 13.5, color: "var(--ink-soft)" }}>
                Billed every 4 weeks. Prices shown per 4-week package.
              </p>
            </div>
            <div className="card" style={{ borderLeft: "3px solid var(--gold)" }}>
              <span className="eyebrow">Ages 8–12</span>
              <h3 style={{ margin: "12px 0 8px" }}>{F.pricing.juniorMovers.title}</h3>
              <p>{F.pricing.juniorMovers.copy}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0" }}>
                {F.pricing.juniorMovers.prices.map((p) => (
                  <li
                    key={p}
                    style={{ padding: "8px 0", borderTop: "1px solid rgba(15,31,24,.1)", fontSize: 15, color: "var(--green-900)", fontWeight: 600 }}
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="section section-dark">
        <div className="wrap grid-2" style={{ alignItems: "start" }}>
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Schedule</span>
            <h2>Opening group times.</h2>
            <p>{F.schedule.intro}</p>
            <p style={{ fontSize: 15, color: "var(--slate)" }}>{F.schedule.note}</p>
          </div>
          <div className="lb" style={{ background: "var(--green-800)", borderColor: "rgba(246,242,234,.12)" }}>
            {F.schedule.rows.map((r, i) => (
              <div
                key={i}
                className="lb-row"
                style={{ gridTemplateColumns: "110px 90px 1fr", background: "transparent", borderColor: "rgba(246,242,234,.1)" }}
              >
                <span style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--bone)" }}>{r.day}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--gold-bright)" }}>{r.time}</span>
                <span style={{ fontSize: 14.5, color: "var(--bone-dim)" }}>{r.group}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section className="section section-bone">
        <div className="wrap">
          <div className="sec-head center">
            <span className="eyebrow">How to get started · Ages 12+</span>
            <h2>Three steps to your first session.</h2>
          </div>
          <div className="grid-3">
            {F.steps.map((s, i) => (
              <div key={s.title} className="card">
                <span className="num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <a href={F.bookUrl} target="_blank" rel="noopener" className="btn btn-primary">
              Book your assessment →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-green">
        <div className="wrap grid-2" style={{ alignItems: "start" }}>
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Quick FAQs</span>
            <h2>Good to know.</h2>
            <p>
              Pricing, assessment details, the full schedule, and more are on the{" "}
              <a href={F.partnerUrl} target="_blank" rel="noopener" style={{ color: "var(--gold-bright)", textDecoration: "underline" }}>
                Tour Physio Vanguard page
              </a>
              .
            </p>
            <a href={F.discoveryCallUrl} target="_blank" rel="noopener" className="btn btn-ghost" style={{ marginTop: 20 }}>
              Book a discovery call with Joe →
            </a>
          </div>
          <div className="faq">
            {F.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
