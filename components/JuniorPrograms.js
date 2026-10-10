// components/JuniorPrograms.js
//
// Everything below the hero on /junior-golf. Renders inside the page's
// dark section and reuses the site's own classes (.card, .eyebrow,
// .btn btn-primary). All copy, prices, and schedules live in lib/site.js
// — edit there, not here.

import Link from "next/link";
import {
  CLUB,
  juniorPathway,
  juniorPrograms,
  juniorMembership,
  juniorGetStarted,
} from "@/lib/site";

function Facts({ facts }) {
  return (
    <div className="jr-facts">
      {facts.map(([k, v]) => (
        <div className="jr-fact" key={k}>
          <div className="jr-fact-k">{k}</div>
          <div className="jr-fact-v">{v}</div>
        </div>
      ))}
    </div>
  );
}

function Table({ title, rows }) {
  return (
    <div className="jr-table">
      <div className="jr-sub">{title}</div>
      {rows.map(([a, b]) => (
        <div className="jr-row" key={a}>
          <span>{a}</span>
          <strong>{b}</strong>
        </div>
      ))}
    </div>
  );
}

function List({ title, items }) {
  return (
    <div>
      {title && <div className="jr-sub">{title}</div>}
      <ul className="jr-list">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function Program({ p }) {
  return (
    <article className="jr-program" id={p.id}>
      <div className="jr-program-head">
        <span className="eyebrow">
          Level {p.level} · {p.name}
          {p.label ? ` · ${p.label}` : ""}
        </span>
        <h2>{p.headline}</h2>
        <p className="jr-tagline">{p.subtagline}</p>
        <p className="jr-intro">{p.intro}</p>
      </div>

      <div className="jr-program-body">
        <div className="jr-main">
          {p.whoFor && <List title="Who this is for" items={p.whoFor} />}

          {p.weekly && (
            <div>
              <div className="jr-sub">Every week</div>
              <ul className="jr-list jr-weekly">
                {p.weekly.map(([t, d]) => (
                  <li key={t}>
                    <strong>{t}</strong> — {d}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {p.structure && <List title={p.structureTitle} items={p.structure} />}

          {p.experience && (
            <List title={p.experienceTitle || "What players experience"} items={p.experience} />
          )}

          <List title={p.gainsTitle} items={p.gains} />
        </div>

        <aside className="jr-side">
          {p.facts && <Facts facts={p.facts} />}
          {p.schedule && <Table title={p.schedule.title} rows={p.schedule.rows} />}
          {p.nextBlock && <Table title={p.nextBlock.title} rows={p.nextBlock.rows} />}
          {p.note && <p className="jr-note">{p.note}</p>}
          <Link href={p.cta.href} className="btn btn-primary">
            {p.cta.label}
          </Link>
        </aside>
      </div>
    </article>
  );
}

export default function JuniorPrograms() {
  return (
    <div className="jr">
      <style>{`
        .jr .jr-sub{
          font-family:var(--font-mono);font-size:11.5px;letter-spacing:.18em;
          text-transform:uppercase;color:var(--gold-bright);margin:0 0 10px;
        }
        .jr-main > div + div{margin-top:30px}

        /* ── Pathway overview cards ── */
        .jr-cards{
          display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:8px;
        }
        .jr-card{display:flex;flex-direction:column;position:relative}
        .jr-level{
          font-family:var(--font-mono);font-size:11px;letter-spacing:.18em;
          text-transform:uppercase;color:var(--bone-dim);
        }
        .jr-card h3{margin-top:8px}
        .jr-card .jr-tag{
          margin-top:6px;font-size:13px;letter-spacing:.04em;color:var(--gold-bright);
        }
        .jr-card .jr-desc{margin-top:12px;font-size:15px;color:var(--bone-dim);line-height:1.55}
        .jr-card .jr-price{
          margin-top:18px;padding-top:16px;border-top:1px solid rgba(255,255,255,.12);
        }
        .jr-card .jr-amt{font-size:32px;font-weight:700;line-height:1.1}
        .jr-card .jr-per{font-size:15px;font-weight:400;color:var(--bone-dim)}
        .jr-card .jr-quote{font-size:17px;font-weight:600;color:var(--bone)}
        .jr-grow{flex:1}
        .jr-card .btn{margin-top:20px;text-align:center}
        .jr-pathnote{
          margin-top:18px;font-size:14px;color:var(--bone-dim);text-align:center;
        }

        /* ── Program detail sections ── */
        .jr-program{
          margin-top:72px;padding-top:56px;border-top:1px solid rgba(255,255,255,.12);
        }
        .jr-program-head{max-width:820px}
        .jr-program-head h2{font-size:clamp(28px,4vw,44px);margin-top:14px}
        .jr-tagline{margin-top:10px;font-size:17px;color:var(--gold-bright);font-style:italic}
        .jr-intro{margin-top:16px;font-size:17px;color:var(--bone-dim)}
        .jr-program-body{
          display:grid;grid-template-columns:minmax(0,1.5fr) minmax(300px,1fr);
          gap:clamp(28px,4vw,56px);margin-top:36px;align-items:start;
        }
        .jr-list{list-style:none;margin:0;padding:0}
        .jr-list li{
          padding:9px 0 9px 24px;position:relative;line-height:1.55;font-size:15.5px;
          border-top:1px solid rgba(255,255,255,.08);
        }
        .jr-list li:first-child{border-top:none;padding-top:0}
        .jr-list li::before{
          content:"\\25E4";position:absolute;left:0;top:14px;font-size:9px;color:var(--gold);
        }
        .jr-list li:first-child::before{top:5px}
        .jr-weekly li strong{color:var(--bone)}
        .jr-weekly li{color:var(--bone-dim)}

        .jr-side{
          background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);
          border-radius:14px;padding:26px;position:sticky;top:96px;
        }
        .jr-facts{
          display:grid;grid-template-columns:1fr 1fr;gap:14px 18px;
        }
        .jr-fact-k{
          font-family:var(--font-mono);font-size:10.5px;letter-spacing:.16em;
          text-transform:uppercase;color:var(--bone-dim);
        }
        .jr-fact-v{font-weight:700;font-size:17px;margin-top:3px}
        .jr-table{margin-top:4px}
        .jr-row{
          display:flex;justify-content:space-between;gap:12px;padding:9px 0;
          border-top:1px solid rgba(255,255,255,.1);font-size:15px;
        }
        .jr-row span{color:var(--bone-dim)}
        .jr-note{margin-top:22px;font-size:13.5px;color:var(--bone-dim);line-height:1.5}
        .jr-side .btn{margin-top:20px;width:100%;justify-content:center}

        /* ── Membership ── */
        .jr-membership{
          margin-top:72px;padding:40px 36px;border-radius:16px;
          border:1px solid var(--gold);background:rgba(255,255,255,.04);
        }
        .jr-membership h2{font-size:clamp(26px,3.4vw,38px);margin-top:12px}
        .jr-membership > p{margin-top:14px;color:var(--bone-dim);max-width:70ch}
        .jr-perks{
          display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:28px;
        }
        .jr-perk-label{font-weight:700;font-size:15.5px}
        .jr-perk-caption{margin-top:4px;font-size:13.5px;color:var(--bone-dim);line-height:1.5}
        .jr-membership .btn{margin-top:28px}

        /* ── Get started ── */
        .jr-start{margin-top:72px}
        .jr-steps{
          display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:8px;
        }
        .jr-step{padding:24px}
        .jr-step-n{
          font-family:var(--font-mono);font-size:30px;color:var(--gold);line-height:1;
        }
        .jr-step h3{margin-top:12px;font-size:21px}
        .jr-step p{margin-top:8px;font-size:15px;color:var(--bone-dim)}
        .jr-contact{
          margin-top:28px;display:flex;flex-wrap:wrap;gap:10px 28px;align-items:center;
          font-size:15px;color:var(--bone-dim);
        }
        .jr-contact a{color:var(--bone)}

        @media(max-width:960px){
          .jr-cards,.jr-steps{grid-template-columns:1fr;max-width:520px;margin-inline:auto}
          .jr-program-body{grid-template-columns:1fr}
          .jr-side{position:static}
          .jr-perks{grid-template-columns:1fr 1fr}
        }
        @media(max-width:520px){
          .jr-perks{grid-template-columns:1fr}
          .jr-membership{padding:30px 22px}
        }
      `}</style>

      {/* ── Pathway overview ── */}
      <div className="sec-head">
        <span className="eyebrow">{juniorPathway.eyebrow}</span>
        <h2>{juniorPathway.headline}</h2>
        <p>{juniorPathway.intro}</p>
      </div>

      <div className="jr-cards">
        {juniorPrograms.map((p) => (
          <div className="card jr-card" key={p.id}>
            <span className="jr-level">Level {p.level}</span>
            <h3>{p.name}</h3>
            <div className="jr-tag">{p.tagline}</div>
            <p className="jr-desc">{p.summary}</p>
            <div className="jr-price">
              {p.price ? (
                <div className="jr-amt">
                  {p.price}
                  <span className="jr-per"> {p.per}</span>
                </div>
              ) : (
                <div className="jr-quote">{p.priceNote}</div>
              )}
            </div>
            <div className="jr-grow" />
            <a href={`#${p.id}`} className="btn btn-ghost">
              Learn more →
            </a>
          </div>
        ))}
      </div>
      <p className="jr-pathnote">{juniorPathway.footnote}</p>

      {/* ── Program details ── */}
      {juniorPrograms.map((p) => (
        <Program p={p} key={p.id} />
      ))}

      {/* ── Junior membership ── */}
      <div className="jr-membership" id="membership">
        <span className="eyebrow">{juniorMembership.eyebrow}</span>
        <h2>{juniorMembership.headline}</h2>
        <p>{juniorMembership.intro}</p>
        <div className="jr-perks">
          {juniorMembership.perks.map((perk) => (
            <div key={perk.label}>
              <div className="jr-perk-label">{perk.label}</div>
              <div className="jr-perk-caption">{perk.caption}</div>
            </div>
          ))}
        </div>
        <Link href={juniorMembership.cta.href} className="btn btn-primary">
          {juniorMembership.cta.label}
        </Link>
      </div>

      {/* ── How to get started ── */}
      <div className="jr-start" id="get-started">
        <div className="sec-head">
          <span className="eyebrow">{juniorGetStarted.eyebrow}</span>
          <h2>{juniorGetStarted.headline}</h2>
          <p>{juniorGetStarted.intro}</p>
        </div>
        <div className="jr-steps">
          {juniorGetStarted.steps.map(([t, d], i) => (
            <div className="card jr-step" key={t}>
              <div className="jr-step-n">0{i + 1}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <div className="jr-contact">
          <a href={`tel:${CLUB.phone.replace(/[^\d+]/g, "")}`}>{CLUB.phone}</a>
          <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
          <span>{CLUB.address}</span>
          <span>{CLUB.hours}</span>
        </div>
        <Link href={juniorGetStarted.cta.href} className="btn btn-primary" style={{ marginTop: 24 }}>
          {juniorGetStarted.cta.label}
        </Link>
      </div>
    </div>
  );
}
