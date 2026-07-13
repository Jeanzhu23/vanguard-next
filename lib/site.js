// ─────────────────────────────────────────────────────────────
// EDIT YOUR SITE-WIDE INFO HERE. Changing a link here updates it
// everywhere on the site automatically.
// ─────────────────────────────────────────────────────────────

export const WHOOSH = {
  book: "https://app.whoosh.io/patron/club/vanguard-golf-club/agenda/vanguard-golf-club/today",
  login: "https://app.whoosh.io/patron/club/vanguard-golf-club/agenda/vanguard-golf-club/today",
  store: "https://app.whoosh.io/patron/club/vanguard-golf-club/store",
  memberships: "https://app.whoosh.io/patron/club/vanguard-golf-club/store/memberships",
  lessons: "https://app.whoosh.io/patron/club/vanguard-golf-club/lessons/vanguard-golf-club",
  tour: "https://app.whoosh.io/patron/club/vanguard-golf-club/lessons/vanguard-golf-club",
};

export const GIFT_CARDS = "https://app.squareup.com/gift/ML4A6MF6GTKQZ/order";
export const INSTAGRAM = "https://www.instagram.com/vanguardgolfclub";
export const APP_IOS = "https://apps.apple.com/us/app/whoosh-member-app/id1610151814";
export const APP_ANDROID =
  "https://play.google.com/store/apps/details?id=com.whoosh.whooshpatronapp&hl=en_US";

export const FORMS = {
  contact: "https://formspree.io/f/xeebydqn",
  event: "https://formspree.io/f/xgojgqeb",
  junior: "https://formspree.io/f/xrengjev",
};

export const CLUB = {
  name: "Vanguard Golf Club",
  address: "110 Stergis Way, Dedham, MA 02026",
  phone: "(781) 818-0666",
  email: "info@vanguardgolfclub.com",
  hours: "Open 24/7",
  tagline: "Great golf, no off-season. A year-round indoor golf club in Dedham, MA.",
};

export const NAV = [
  { href: "/the-club", label: "The Club" },
  { href: "/membership", label: "Membership" },
  { href: "/lessons", label: "Lessons" },
  { href: "/leagues", label: "Leagues" },
  { href: "/junior-golf", label: "Junior Golf" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

// Membership tiers — edit prices/features here, they update on the page.
export const TIERS = [
  {
    tag: "Performance · Monthly", name: "The Regular", price: "$349", per: "/mo", featured: false,
    url: WHOOSH.memberships + "?membershipId=MembershipPackage%3A1c676933-ca7e-4f93-b9cd-dac9270f7d26",
    features: ["Unlimited gym, short-game & putting", "8 TrackMan hours / month",
      "Priority booking (7 days ahead)", "Complimentary 45-min TPI screen",
      "Locker & shower + beverages", "3 guest passes + member events"],
  },
  {
    tag: "Family · Monthly", name: "The Family", price: "$499", per: "/mo", featured: true, badge: "Most popular",
    url: WHOOSH.memberships + "?membershipId=MembershipPackage%3A04fa5a40-0282-476f-a711-f6e8f22778dc",
    features: ["2 parents + up to 2 juniors", "10 shared TrackMan hours / month",
      "Complimentary TPI screen", "Priority junior program booking",
      "Locker & shower + beverages", "3 guest passes + member events"],
  },
  {
    tag: "Junior · Monthly", name: "The Academy", price: "$279", per: "/mo", featured: false,
    url: WHOOSH.memberships + "?membershipId=MembershipPackage%3A0c5fb259-0ee3-44c5-87be-bef952161970",
    features: ["Unlimited short-game & putting", "8 TrackMan hours / month",
      "Priority booking (7 days ahead)", "Junior TPI performance screen",
      "Locker facilities + beverages", "Priority junior program booking"],
  },
];

export const ANNUAL = [
  {
    tag: "Performance · Annual", name: "Annual Performance", price: "$4,188", per: "/yr", featured: false,
    url: WHOOSH.memberships + "?membershipId=MembershipPackage%3A61c291ff-f3bc-414f-92a6-b9ee022b50d4",
    features: ["Everything in The Regular", "Unlimited TrackMan hours", "12 months of access",
      "Complimentary TPI screen", "Locker & shower + beverages", "Guest passes + member events"],
  },
  {
    tag: "Family · Annual", name: "Annual Family Founding", price: "$6,000", per: "/yr", featured: true, badge: "Founding offer",
    url: WHOOSH.memberships + "?membershipId=MembershipPackage%3A9fec61ee-8c21-4228-bb94-75066977c14c",
    features: ["2 parents + up to 2 junior golfers", "All Performance benefits included",
      "Unlimited TrackMan hours", "12 months of access", "Locker & shower + beverages",
      "Limited founding-member pricing"],
  },
];

export const PACKAGES = [
  {
    name: "Par · 5-Pack", price: "$300", note: "5 sim hours · $60/hr", best: false,
    url: "https://app.whoosh.io/patron/club/vanguard-golf-club/store/packages?packageId=StandardPackage%3A370a8683-7293-43cf-ad64-b5cc8b3f99b7",
  },
  {
    name: "Birdie · 10-Pack", price: "$600", note: "10 sim hours · $60/hr", best: false,
    url: "https://app.whoosh.io/patron/club/vanguard-golf-club/store/packages?packageId=StandardPackage%3A826dbedb-5368-4a64-ba1e-ad071c7941a0",
  },
  {
    name: "Eagle · 20-Pack", price: "$1,100", note: "20 sim hours · $55/hr", best: true, badge: "Best value",
    url: "https://app.whoosh.io/patron/club/vanguard-golf-club/store/packages?packageId=StandardPackage%3A2754de5a-7cba-432f-ae34-adae029be11c",
  },
];

export const COACHES = [
  {
    name: "Shawn Hester", role: "Golf Coach",
    bio: "Golf Digest #1 Teacher in Massachusetts & GOLF Magazine Top Teacher. 3× New England PGA Teacher of the Year, PGA since 1995, Titleist advisory staff. Coached PGA TOUR players, guided two amateurs to the Masters, and is Director of Instruction at TPC Boston.",
    cta: "Book with Shawn",
  },
  {
    name: "Rick McCready", role: "Director of Ladies & Junior Programs",
    bio: "30+ years coaching, former Division I golfer at Colgate, Head Coach at Milton High School, and a Lead Coach with First Tee of Massachusetts. Specializes in short game and building strong fundamentals for new and recreational golfers.",
    cta: "Book with Rick",
  },
  {
    name: "James Ashcroft, DPT", role: "Gym & Performance Training",
    bio: "Founder of Tour Physio & Performance; licensed PT with 12+ years' experience. Board Certified in Orthopedic PT, CSCS, TPI Medical Level 2, TPI Power Level 3. Golf-specific training that adds distance and keeps you pain-free.",
    cta: "Book gym training",
  },
];

export const FAQ = [
  ["When are you open?", "Always. Vanguard is open 24/7 — book online and play at 6am or midnight."],
  ["Do I have to be a member to play?", "No. Anyone can book a bay online; members get better rates, priority booking, and discounts."],
  ["What's a Swing Evaluation?", "A $99 session with a coach and TrackMan to measure your swing and build a plan — the best first step."],
  ["Do you allow outside food for events?", "Yes — outside catering is welcome for private events."],
  ["What ages do you coach?", "Ages 5 and up, from first-timers to college-bound competitors."],
];

// ─────────────────────────────────────────────────────────────
// UPCOMING EVENTS — edit this list to update the calendar.
// Delete past events so the page never looks stale.
// date: use YYYY-MM-DD so they sort correctly.
// tag:  League | Tournament | Social | Junior | Clinic | Corporate
// ─────────────────────────────────────────────────────────────
export const EVENTS = [
  // No events yet — the page shows a friendly "check back soon" message while this is empty.
  // To add one, copy this format (delete the // marks):
  // {
  //   date: "2026-08-06",              // YYYY-MM-DD
  //   time: "6:30 PM",
  //   title: "Thursday Night League",
  //   tag: "League",                   // League | Tournament | Social | Junior | Clinic | Corporate
  //   desc: "2-person teams, handicap-adjusted. Sign up solo and we'll match you.",
  // },
];
