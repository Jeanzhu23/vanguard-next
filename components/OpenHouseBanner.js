import Link from "next/link";

export default function OpenHouseBanner() {
  return (
    <section
      style={{
        background: "var(--green-950)",
        borderBottom: "1px solid var(--gold)",
        padding: "2.5rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p className="eyebrow" style={{ color: "var(--gold-bright)", marginBottom: "0.5rem" }}>
        Open House · Sunday, September 27 · 11 AM – 2 PM
      </p>
      <h2
        style={{
          fontFamily: "Fraunces, serif",
          fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
          color: "#fff",
          margin: "0 0 0.75rem",
        }}
      >
        Bring your clubs. Try the sims. See what we&rsquo;re building.
      </h2>
      <p style={{ color: "rgba(255,255,255,0.8)", maxWidth: "36rem", margin: "0 auto 1.5rem" }}>
        Come see Vanguard Golf Club in person — hit a few balls on the simulators, meet the coaches,
        and tour the facility. This is the last chance to lock in a founding membership before the
        offer closes.
      </p>
      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/tour" className="btn btn-primary">
          RSVP for the Open House
        </Link>
        <Link href="/membership" className="btn btn-ghost">
        Founding memberships →
        </Link>
      </div>
    </section>
  );
}