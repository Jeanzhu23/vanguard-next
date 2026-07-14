import Link from "next/link";
import { CLUB } from "@/lib/site";

export const metadata = {
  title: "Club Policies",
  description: "Club policies for Vanguard Golf Club, Dedham MA — access, guests, juniors, gym use, food and beverage, and facility conduct.",
};

export default function Policies() {
  return (
    <section className="section section-bone">
      <div className="wrap narrow">
        <span className="eyebrow">Club Policies</span>
        <h1 style={{ fontSize: "clamp(32px,4.4vw,48px)", margin: "14px 0 10px" }}>
          Club policies.
        </h1>
        <p className="lead" style={{ marginBottom: 40 }}>
          House rules that keep Vanguard safe, welcoming, and in great shape for everyone.
          Last updated {new Date().toLocaleString("en-US", { month: "long", year: "numeric" })}.
        </p>

        <div className="legal">
          <h2>Access &amp; hours</h2>
          <p>Vanguard is open 24 hours a day, 7 days a week. Members may access the facility at any
          hour using their assigned access method. Access credentials are personal and must not be
          shared, loaned, or transferred. Members are responsible for anyone who enters using their
          credentials.</p>

          <h2>Booking &amp; cancellations</h2>
          <p>All bay time, lessons, and programs are booked through our booking system. Members
          receive priority booking windows as described in their membership tier. Please cancel or
          reschedule bookings in advance so the bay can be released to other players. Repeated
          no-shows may result in booking restrictions.</p>
          <p>Membership cancellation terms are set out on our{" "}
          <Link href="/membership#cancellation">Membership page</Link>.</p>

          <h2>Guests</h2>
          <p>Members receive guest passes as part of their membership. Guests must be accompanied by
          the member who invited them, and the member is responsible for their guest&rsquo;s conduct
          and for any damage caused. Non-members may also book bay time directly.</p>

          <h2>Juniors &amp; minors</h2>
          <p>Junior golfers are welcome throughout the golf areas of the facility. <strong>Minors are
          not permitted in the performance gym unless accompanied and directly supervised by a
          parent, guardian, or a Vanguard coach.</strong> Gym equipment carries real injury risk and
          is not for unsupervised use by minors.</p>
          <p>A parent or guardian must complete registration and any required waivers on behalf of
          any participant under 18.</p>

          <h2>Gym &amp; performance area</h2>
          <p>Use the gym at your own risk and within your ability. Return weights and equipment to
          their proper place, wipe down equipment after use, and wear appropriate athletic footwear.
          If you are unsure how to use a piece of equipment, ask a member of our performance team
          rather than guessing.</p>

          <h2>Food &amp; beverage</h2>
          <p>Outside food and drink are <strong>not permitted</strong> for standard bay bookings.
          Outside catering <strong>is welcome for private and corporate events</strong> — arrange
          this with our events team when booking. Please keep food and drink off the hitting turf,
          putting green, and away from equipment. No glass on the golf surfaces.</p>

          <h2>Safety &amp; conduct</h2>
          <p>Golf clubs are swung at speed indoors. Stay clear of hitting areas, remain behind the
          player at all times, and never swing a club outside a designated hitting bay. Follow all
          posted signage and any instruction from Vanguard staff.</p>
          <p>We expect all members and guests to treat staff, other players, and the facility with
          respect. Harassment, abusive behavior, intoxication, or unsafe conduct may result in
          removal from the facility and termination of membership without refund.</p>

          <h2>Equipment &amp; facility care</h2>
          <p>Loaner clubs are available and must be returned in the condition provided. Do not adjust,
          reposition, or attempt to service simulator, TrackMan, PuttView, or projection equipment.
          Report any damage or malfunction to staff immediately. Members and guests may be held
          responsible for damage caused by misuse or negligence.</p>

          <h2>Personal belongings</h2>
          <p>Lockers are available for use during your visit. Vanguard is not responsible for lost,
          stolen, or damaged personal property. Please do not leave valuables unattended.</p>

          <h2>Photography</h2>
          <p>We may take photographs or video at the club, including during events and programs, and
          may use them for promotional purposes. If you prefer not to appear, please let a staff
          member know.</p>

          <h2>Changes</h2>
          <p>We may update these policies from time to time. The current version is always available
          on this page.</p>

          <h2>Questions</h2>
          <p>Contact us at <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a> or {CLUB.phone}, or visit
          us at {CLUB.address}.</p>
        </div>

        <p style={{ marginTop: 40 }}>
          <Link href="/terms" style={{ color: "var(--gold)", fontWeight: 600 }}>
            Read our Terms &amp; Conditions →
          </Link>
        </p>
      </div>
    </section>
  );
}
