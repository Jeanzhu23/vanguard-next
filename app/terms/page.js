import Link from "next/link";
import { CLUB } from "@/lib/site";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for membership, bookings, packages, and use of Vanguard Golf Club, Dedham MA.",
};

export default function Terms() {
  return (
    <section className="section section-bone">
      <div className="wrap narrow">
        <span className="eyebrow">Legal</span>
        <h1 style={{ fontSize: "clamp(32px,4.4vw,48px)", margin: "14px 0 10px" }}>
          Terms &amp; conditions.
        </h1>
        <p className="lead" style={{ marginBottom: 40 }}>
          These terms govern membership, bookings, and use of Vanguard Golf Club.
          Last updated {new Date().toLocaleString("en-US", { month: "long", year: "numeric" })}.
        </p>

        <div className="legal">
          <h2>1. Agreement</h2>
          <p>By booking, purchasing a membership or package, or using the facility, you agree to these
          Terms &amp; Conditions and to our{" "}
          <Link href="/policies">Club Policies</Link>. If you do not agree, please do not use the
          facility. These terms apply to members, guests, and all visitors.</p>

          <h2>2. Bookings &amp; payment</h2>
          <p>Bay time, lessons, and programs are booked through our booking system. Payment is
          processed at the time of booking or purchase. Prices are as displayed at the time of
          purchase and may change from time to time. You are responsible for arriving on time; your
          session ends at its scheduled end time regardless of when you arrive.</p>

          <h2>3. Membership</h2>
          <p>Memberships are personal and non-transferable. Monthly memberships renew automatically
          until canceled. Annual memberships require a 12-month commitment and then continue
          month-to-month unless canceled. Full cancellation terms — including the 50% buyout of the
          remaining balance for early cancellation of an annual membership, and the exceptions we
          consider — are set out on our{" "}
          <Link href="/membership#cancellation">Membership page</Link> and form part of these terms.</p>
          <p>Membership benefits, hours included, and pricing may be adjusted with reasonable notice.</p>

          <h2>4. Simulator packages &amp; gift cards</h2>
          <p>Prepaid simulator packages are non-refundable and valid for one year from the date of
          purchase. Unused hours expire at the end of that period and are not redeemable for cash.
          Gift cards are non-refundable and not redeemable for cash except where required by law.</p>

          <h2>5. Cancellations &amp; refunds</h2>
          <p>Please cancel or reschedule bookings in advance so the time can be released to others.
          Fees for missed sessions or late cancellations may apply. Membership refunds are governed by
          the cancellation terms referenced above.</p>

          <h2>6. Assumption of risk</h2>
          <p><strong>Golf involves inherent risk of injury.</strong> Clubs are swung at speed, balls
          travel at high velocity, and the performance gym involves physical exertion and weighted
          equipment. By using the facility you acknowledge these risks and accept them voluntarily.
          You confirm that you are physically able to participate and that you will use reasonable
          care for your own safety and the safety of others.</p>

          <h2>7. Liability</h2>
          <p>To the fullest extent permitted by law, Vanguard Golf Club, its owners, employees, and
          contractors are not liable for injury, loss, or damage arising from use of the facility,
          except where caused by our negligence. You are responsible for damage you or your guests
          cause to the facility or equipment through misuse or negligence.</p>
          <p>We are not responsible for lost, stolen, or damaged personal property.</p>

          <h2>8. Minors</h2>
          <p>A parent or legal guardian must register and accept these terms on behalf of any
          participant under 18, and is responsible for that minor&rsquo;s conduct at the facility.
          Minors may not use the performance gym unless supervised by a parent, guardian, or Vanguard
          coach.</p>

          <h2>9. Conduct &amp; removal</h2>
          <p>We may refuse entry, end a session, or terminate a membership without refund for unsafe
          conduct, harassment, abusive behavior, intoxication, damage to property, or repeated breach
          of our Club Policies.</p>

          <h2>10. Facility availability</h2>
          <p>Equipment occasionally requires maintenance, and the facility may close in whole or in
          part for maintenance, private events, or circumstances beyond our control. We will make
          reasonable efforts to give notice and, where appropriate, to reschedule affected bookings.</p>

          <h2>11. Media</h2>
          <p>We may photograph or record at the facility and use those images for promotional purposes.
          Tell a staff member if you prefer not to be included.</p>

          <h2>12. Changes to these terms</h2>
          <p>We may update these terms from time to time. Continued use of the facility after an
          update constitutes acceptance of the revised terms.</p>

          <h2>13. Governing law</h2>
          <p>These terms are governed by the laws of the Commonwealth of Massachusetts.</p>

          <h2>14. Contact</h2>
          <p>Vanguard Golf Club, {CLUB.address}.{" "}
          <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a> · {CLUB.phone}</p>
        </div>

        <p style={{ marginTop: 40 }}>
          <Link href="/policies" style={{ color: "var(--gold)", fontWeight: 600 }}>
            Read our Club Policies →
          </Link>
        </p>
      </div>
    </section>
  );
}
