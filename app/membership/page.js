import { TIERS, ANNUAL, PACKAGES, GIFT_CARDS } from "@/lib/site";

export const metadata = {
  title: "Membership & Simulator Packages",
  description:
    "Year-round indoor golf membership and prepaid TrackMan simulator packages in Dedham, MA — priority booking, TPI screening, and member events.",
};

function Tier({ t }) {
  return (
    <a href={t.url} target="_blank" rel="noopener"
       data-badge={t.badge}
       className={`tier tier-link${t.featured ? " feat" : ""}`}>
      <span className="tag">{t.tag}</span>
      <h3>{t.name}</h3>
      <div className="price">{t.price}<span>{t.per}</span></div>
      <ul>{t.features.map((f) => <li key={f}>{f}</li>)}</ul>
      <span className={`btn ${t.featured ? "btn-primary" : "btn-dark"}`}>Join →</span>
    </a>
  );
}

export default function Membership() {
  return (
    <>
      <section className="page-hero">
        <img className="bg" src="/img/putting-green-01.jpg" alt="" />
        <div className="wrap">
          <span className="eyebrow">Membership</span>
          <h1>Make Vanguard your home course.</h1>
          <p>Membership is for players who don&rsquo;t want golf to be seasonal. Ten TrackMan bays, the region&rsquo;s best indoor short game, and a performance gym — with priority booking, better rates, and a training home that&rsquo;s open whenever you are.</p>
        </div>
      </section>

      <section className="section section-bone">
        <div className="wrap">
          <div className="tiers">{TIERS.map((t) => <Tier key={t.name} t={t} />)}</div>

          <div className="subhead">Annual memberships · unlimited TrackMan hours</div>
          <div className="tiers-2">{ANNUAL.map((t) => <Tier key={t.name} t={t} />)}</div>
          <p style={{ textAlign: "center", marginTop: 18, color: "var(--ink-soft)", fontSize: 14 }}>
            Sibling add-ons available from $100/mo per child.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section section-green">
        <div className="wrap">
          <div className="sec-head center">
            <span className="eyebrow">Simulator packages</span>
            <h2>Prefer to buy hours?</h2>
            <p>Flexibility without a monthly commitment — book any open bay and draw from your hours. Valid one year.</p>
          </div>
          <div className="packs">
            {PACKAGES.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener"
                 data-badge={p.badge}
                 className={`pack pack-link${p.best ? " best" : ""}`}>
                <h4>{p.name}</h4>
                <div className="p">{p.price}</div>
                <small>{p.note}</small>
                <span className={`btn ${p.best ? "btn-primary" : "btn-ghost"}`}
                      style={{ marginTop: 16 }}>
                  Purchase →
                </span>
              </a>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 22 }}>
            <a href={GIFT_CARDS} target="_blank" rel="noopener" className="btn btn-ghost">Buy a gift card →</a>
          </p>
        </div>
      </section>

      {/* CANCELLATION */}
      <section className="section section-dark" id="cancellation">
        <div className="wrap narrow">
          <div className="sec-head center">
            <span className="eyebrow">Membership terms</span>
            <h2>Cancellation policy.</h2>
          </div>
          <div className="faq">
            <details><summary>Annual memberships (12-month commitment)</summary><p>Annual memberships require a 12-month commitment, then continue month-to-month automatically unless canceled. To cancel once your commitment is complete, email info@vanguardgolfclub.com before your next billing date.</p></details>
            <details><summary>Early cancellation of an annual membership</summary><p>To cancel before the 12 months are complete, you may buy out the remainder of your term by paying 50% of the remaining balance (e.g. $349/mo × 4 months remaining ÷ 2). Once paid, your commitment is fulfilled and your membership is canceled.</p></details>
            <details><summary>Exceptions</summary><p>Exceptions may be considered for a medical injury or condition preventing golf, military deployment or active-duty orders, relocation out of state, or pregnancy and postpartum recovery. Documentation may be required.</p></details>
            <details><summary>Month-to-month memberships</summary><p>Monthly memberships renew automatically and may be canceled at any time — email info@vanguardgolfclub.com before your next billing date to avoid the following charge.</p></details>
            <details><summary>Simulator packages</summary><p>Prepaid Par, Birdie, and Eagle packages are non-refundable and valid for one year from the date of purchase.</p></details>
          </div>
        </div>
      </section>
    </>
  );
}
