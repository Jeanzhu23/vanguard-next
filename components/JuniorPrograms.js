// SAVE AS: components/JuniorPrograms.js
// (replaces the earlier version I gave you)
//
// This renders INSIDE your existing dark section on /junior-golf,
// replacing the old .ladder block. It reuses your site's own classes
// (.card, .eyebrow, .btn btn-primary) so it matches the rest of the
// page exactly. All text, prices, and perks live in lib/site.js.

import Link from "next/link";
import {
  juniorEnrollment,
  juniorPrograms,
  juniorMembershipPerks,
  juniorProgramsFootnote,
} from "@/lib/site";

export default function JuniorPrograms() {
  return (
    <div className="jrp-block">
      <style>{`
        .jrp-block{margin-top:44px}

        /* Back-to-school banner */
        .jrp-banner{
          border:1px solid var(--gold);
          background:rgba(255,255,255,.04);
          border-radius:16px;
          padding:32px 30px;
          position:relative;overflow:hidden;
        }
        .jrp-banner::after{
          content:"\\25E4";position:absolute;right:-16px;bottom:-48px;
          font-size:170px;line-height:1;color:rgba(255,255,255,.05);pointer-events:none;
        }
        .jrp-banner h2{margin-top:12px;max-width:22ch;line-height:1.12}
        .jrp-banner > p{margin-top:12px;color:var(--bone-dim);max-width:58ch}

        /* Program cards */
        .jrp-cards{
          display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:20px;margin-top:24px;
        }
        .jrp-card{position:relative;display:flex;flex-direction:column}
        .jrp-card.jrp-featured{
          border-color:var(--gold);
          box-shadow:0 0 0 1px var(--gold);
        }
        .jrp-badge{
          position:absolute;top:-12px;left:22px;
          font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          background:var(--gold);color:var(--green-950,#0e241a);
          border-radius:999px;padding:4px 12px;
        }
        .jrp-pathway{
          font-size:11px;font-weight:700;letter-spacing:.18em;
          text-transform:uppercase;color:var(--bone-dim);
        }
        .jrp-card h3{margin-top:6px}
        .jrp-price{margin-top:12px}
        .jrp-price .jrp-from{
          font-size:12px;color:var(--bone-dim);
          text-transform:uppercase;letter-spacing:.08em;
        }
        .jrp-price .jrp-amt{font-size:36px;font-weight:700;line-height:1.15}
        .jrp-price .jrp-per{font-size:15px;font-weight:400;color:var(--bone-dim)}
        .jrp-price .jrp-cond{font-size:13px;color:var(--bone-dim);margin-top:4px}
        .jrp-card ul{
          list-style:none;margin:16px 0 0;padding:14px 0 0;
          border-top:1px solid rgba(255,255,255,.12);
        }
        .jrp-card li{padding:5px 0 5px 22px;position:relative;font-size:15px}
        .jrp-card li::before{
          content:"\\25E4";position:absolute;left:0;top:6px;
          font-size:10px;color:var(--gold);
        }
        .jrp-grow{flex:1}
        .jrp-card .btn{margin-top:20px;text-align:center}

        /* Membership strip */
        .jrp-strip{
          margin-top:24px;background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.10);
          border-radius:14px;padding:18px 24px;
          display:flex;flex-wrap:wrap;align-items:center;gap:8px 24px;font-size:14.5px;
        }
        .jrp-strip .jrp-lead{
          font-weight:700;color:var(--gold);letter-spacing:.08em;
          text-transform:uppercase;font-size:12px;
        }
        .jrp-strip span{color:var(--bone-dim)}
        .jrp-strip b{color:inherit;filter:brightness(1.35)}
        .jrp-footnote{
          margin-top:14px;font-size:13px;color:var(--bone-dim);text-align:center;
        }
      `}</style>

      <div className="jrp-banner">
        <span className="eyebrow">{juniorEnrollment.eyebrow}</span>
        <h2>{juniorEnrollment.headline}</h2>
        <p>{juniorEnrollment.blurb}</p>
      </div>

      <div className="jrp-cards">
        {juniorPrograms.map((program) => (
          <div
            key={program.id}
            className={`card jrp-card${program.featured ? " jrp-featured" : ""}`}
          >
            {program.featured && program.badge && (
              <div className="jrp-badge">{program.badge}</div>
            )}
            <span className="jrp-pathway">{program.pathway}</span>
            <h3>{program.name}</h3>
            <div className="jrp-price">
              <div className="jrp-from">{program.priceLabel}</div>
              <div className="jrp-amt">
                {program.price}
                <span className="jrp-per"> {program.per}</span>
              </div>
              <div className="jrp-cond">{program.condition}</div>
            </div>
            <ul>
              {program.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="jrp-grow" />
            <Link href={program.cta.href} className="btn btn-primary">
              {program.cta.label}
            </Link>
          </div>
        ))}
      </div>

      <div className="jrp-strip">
        <span className="jrp-lead">◤ Junior membership includes</span>
        {juniorMembershipPerks.map((perk) => (
          <span key={perk}>
            <b>{perk}</b>
          </span>
        ))}
      </div>

      <p className="jrp-footnote">{juniorProgramsFootnote}</p>
    </div>
  );
}
