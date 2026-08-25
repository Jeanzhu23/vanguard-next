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
          padding:40px 32px;
          position:relative;overflow:hidden;
          text-align:center;
        }
        .jrp-banner::before,
        .jrp-banner::after{
          content:"\\25E4";position:absolute;
          font-size:150px;line-height:1;color:rgba(255,255,255,.05);pointer-events:none;
        }
        .jrp-banner::before{left:-14px;top:-44px;transform:rotate(180deg)}
        .jrp-banner::after{right:-14px;bottom:-44px}
        .jrp-banner h2{margin:12px auto 0;line-height:1.12;font-size:clamp(24px,3.4vw,38px)}
        .jrp-banner > p{margin:14px auto 0;color:var(--bone-dim);max-width:62ch}

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
        .jrp-desc{margin-top:8px;font-size:14.5px;color:var(--bone-dim);line-height:1.55}
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

        /* Membership perks */
        .jrp-strip{
          margin-top:24px;background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.10);
          border-radius:14px;padding:26px 28px;
        }
        .jrp-strip-head{
          text-align:center;font-weight:700;color:var(--gold);
          letter-spacing:.1em;text-transform:uppercase;font-size:12px;
        }
        .jrp-perks{
          display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));
          gap:20px;margin-top:20px;text-align:center;
        }
        .jrp-perk-label{font-weight:700;font-size:15px}
        .jrp-perk-caption{
          margin-top:4px;font-size:13px;color:var(--bone-dim);line-height:1.5;
        }
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
            {program.description && (
              <p className="jrp-desc">{program.description}</p>
            )}
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
        <div className="jrp-strip-head">Every Junior Pathway membership includes</div>
        <div className="jrp-perks">
          {juniorMembershipPerks.map((perk) => (
            <div className="jrp-perk" key={perk.label}>
              <div className="jrp-perk-label">{perk.label}</div>
              <div className="jrp-perk-caption">{perk.caption}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="jrp-footnote">{juniorProgramsFootnote}</p>
    </div>
  );
}
