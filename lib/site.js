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
  tour: "https://formspree.io/f/xjyblwpr",
};

export const CLUB = {
  name: "Vanguard Golf Club",
  address: "110 Stergis Way, Dedham, MA 02026",
  phone: "(781) 818-0666",
  email: "info@vanguardgolfclub.com",
  hours: "Open 24/7",
  tagline: "Great golf, no off‑season. A year-round indoor golf club in Dedham, MA.",
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
    tag: "Performance · Monthly", name: "The Regular", price: "$375", per: "/mo", featured: false,
    url: WHOOSH.memberships + "?membershipId=MembershipPackage%3A1c676933-ca7e-4f93-b9cd-dac9270f7d26",
    features: ["Unlimited gym, short-game area & putting green", "8 TrackMan bay hours every month",
      "Priority booking — reserve bays up to 7 days ahead", "Extra sim hours at $35/hr + member rate on lessons",
      "Locker room, showers & beverages", "3 guest passes + member-only events"],
  },
  {
    tag: "Family · Monthly", name: "The Family", price: "$499", per: "/mo", featured: true, badge: "Most popular",
    url: WHOOSH.memberships + "?membershipId=MembershipPackage%3A04fa5a40-0282-476f-a711-f6e8f22778dc",
    features: ["Two parents + up to two juniors on one membership", "10 TrackMan hours per month, shared as a family",
      "Extra sim hours at $35/hr + member rate on lessons", "First access to junior program registration",
      "Locker room, showers & beverages", "3 guest passes + member-only events"],
  },
  {
    tag: "Junior · Monthly", name: "The Junior", price: "$325", per: "/mo", featured: false,
    url: WHOOSH.memberships + "?membershipId=MembershipPackage%3A0c5fb259-0ee3-44c5-87be-bef952161970",
    features: ["Unlimited short-game area & putting green", "8 TrackMan bay hours every month",
      "Priority booking — reserve bays up to 7 days ahead", "Extra sim hours at $35/hr + member rate on lessons",
      "Locker room access & beverages", "First access to junior program registration"],
  },
];

export const ANNUAL = [
  {
    tag: "Performance · Annual", name: "Annual Performance", price: "$4,188", per: "/yr", featured: false,
    url: WHOOSH.memberships + "?membershipId=MembershipPackage%3A61c291ff-f3bc-414f-92a6-b9ee022b50d4",
    features: ["Everything in The Regular", "Unlimited TrackMan hours — no monthly cap",
      "12 months of access", "Member rate on lessons",
      "Locker room, showers & beverages", "Guest passes + member-only events"],
  },
  {
    tag: "Family · Annual", name: "Annual Family Founding", price: "$6,000", per: "/yr", featured: true, badge: "Founding offer",
    url: WHOOSH.memberships + "?membershipId=MembershipPackage%3A9fec61ee-8c21-4228-bb94-75066977c14c",
    features: ["Two parents + up to two juniors on one membership", "Everything in Annual Performance, for the whole family",
      "Unlimited TrackMan hours — no monthly cap", "12 months of access",
      "Locker room, showers & beverages", "Founding-member pricing — limited availability"],
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
    name: "Shawn Hester", role: "Golf Coach", image: "/img/coaches/shawn.jpg",
    bio: "Golf Digest #1 Teacher in Massachusetts and GOLF Magazine Top Teacher. 3× New England PGA Teacher of the Year, PGA since 1995, Titleist advisory staff. Has coached PGA TOUR players and guided two amateurs to the Masters.",
    cta: "Book with Shawn",
  },
  {
    name: "Jonah Dupuis", role: "Golf Coach", image: "/img/coaches/jonah.jpg",
    bio: "Eastern Connecticut State golfer, PING All-Region 1, and part of the program's first NCAA Championship appearance. Assistant Golf Professional at TPC Boston. Uses TrackMan and data-driven coaching across full swing, short game, and on-course play.",
    cta: "Book with Jonah",
  },
  {
    name: "Rick McCready", role: "Golf Coach", image: "/img/coaches/rick.jpg",
    bio: "30+ years coaching, former Division I golfer at Colgate, Head Coach at Milton High School, and a Lead Coach with First Tee of Massachusetts. Specializes in short game and building strong fundamentals for new and recreational golfers.",
    cta: "Book with Rick",
  },
  {
    name: "James Ashcroft, DPT", role: "Gym & Performance Training", image: "/img/coaches/james.jpg",
    bio: "Founder of Tour Physio & Performance; licensed PT with 12+ years' experience. Board Certified in Orthopedic PT, CSCS, TPI Medical Level 2, TPI Power Level 3. Golf-specific training that adds distance and keeps you pain-free.",
    cta: "Book gym training",
  },
];

export const FAQ = [
  ["When are you open?", "Always. Vanguard is open 24/7 — book online and play at 6am or midnight."],
  ["Do I have to be a member to play?", "No. Anyone can book a bay online; members get better rates, priority booking, and discounts."],
  ["How do I book a lesson?", "Pick a coach on the Lessons page and book directly through Whoosh — members get a discounted rate."],
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
  

  // To add a future event, copy this format (delete the // marks):
  // {
  //   date: "2026-10-01",              // YYYY-MM-DD
  //   time: "6:30 PM",
  //   title: "Thursday Night League",
  //   tag: "League",                   // League | Tournament | Social | Junior | Clinic | Corporate
  //   desc: "2-person teams. Sign up solo and we'll match you.",
  //   link: "/contact",                // optional — adds a gold link to the row
  //   linkLabel: "Sign up →",          // optional — link text
  // },
];

// ─────────────────────────────────────────────────────────────
// LEAGUE LEADERBOARD — update weekly during the season.
// Set `active: false` in the off-season and the page will show
// a "season starting soon" message instead of stale standings.
// standingsUrl: paste your TrackMan/Whoosh public standings link.
// ─────────────────────────────────────────────────────────────
export const LEAGUE = {
  active: false,
  season: "Fall 2026",
  week: "Week 4 of 10",
  updated: "Updated weekly",
  standingsUrl: "", // ← paste the TrackMan/Whoosh standings link here
  teams: [
    // { pos: 1, name: "Team name", pts: 42 },
    // { pos: 2, name: "Team name", pts: 39 },
  ],
};
// ─────────────────────────────────────────────────────────────
// JUNIOR GOLF — everything on /junior-golf lives here.
// Three programs: Beginner, Intermediate, Elite (by invitation).
// Set a program's `price` to "" to hide the price.
// ─────────────────────────────────────────────────────────────

export const juniorHero = {
  eyebrow: "Junior Golf",
  headline: "Where junior golfers grow, in every season.",
  subhead:
    "Three levels. One clear pathway. From a child's very first swing to college-bound competition.",
  intro:
    "Golf shouldn't stop when the weather turns. Inside our Dedham facility, juniors train year-round with the best technology in the game and coaches who care about every player, not just every swing. Each lesson comes with follow-up and a practice plan, so your child always knows what to work on next. Whether they're picking up a club for the first time or chasing a college roster spot, there is a place for them here and a clear next step when they're ready for more.",
  cta: { label: "Request an evaluation →", href: "/junior-golf/evaluation" },
};

export const juniorPathway = {
  eyebrow: "The Junior Pathway",
  headline: "Three levels. One pathway. Every junior placed by a coach.",
  intro:
    "No one guesses where a child belongs. Every junior starts with a short, coach-led evaluation, and our staff recommends the level that fits. As players progress, they move up.",
  footnote:
    "Beginners who progress move up to Intermediate. Top-performing Intermediate players may be invited to join Elite.",
};

export const juniorPrograms = [
  {
    id: "beginner",
    level: 1,
    name: "Beginner Program",
    tagline: "Skills · Confidence · Love of the game",
    summary: "Two group sessions a week for juniors new to golf. No experience needed.",
    price: "$400",
    per: "/ month",
    headline: "Learn the game the right way, from the very first swing.",
    subtagline: "Real skills, real confidence, and a lasting love for the game.",
    intro:
      "The Beginner Program is for juniors who are brand new to golf or still early in their development. In a small, friendly group, players learn the basics the right way: grip, setup, posture, alignment, and a swing they can repeat, plus the short game skills that turn practice into scores. It is structured, it is fun, and no experience is needed.",
    weekly: [
      ["Group golf lesson (60 minutes)", "Swing fundamentals in our TrackMan bays, with instant feedback on every shot."],
      ["Group short game lesson (60 minutes)", "Chipping and putting on PuttView and in the short game area."],
    ],
    schedule: {
      title: "Schedule — choose any two",
      rows: [["Mondays", "5:00 PM"], ["Thursdays", "4:00 PM"], ["Sundays", "10:00 AM"]],
    },
    facts: [["Price", "$400 / month"], ["Schedule", "2× per week"], ["Session", "60 minutes"], ["Coach to players", "1:4"]],
    gainsTitle: "What your junior will gain",
    gains: [
      "A confident, repeatable swing built on sound fundamentals",
      "Short game skills to chip and putt with purpose",
      "On-course readiness: the basics of rules, etiquette, and pace of play",
      "A clear next step toward the Intermediate Program when ready",
    ],
    note: "Junior membership is not included in the program fee, but highly recommended for practice between lessons.",
    cta: { label: "Enroll in Beginner →", href: "/junior-golf/evaluation" },
  },
  {
    id: "intermediate",
    level: 2,
    name: "Intermediate Program",
    tagline: "Consistency · Strategy · Strength",
    summary: "A weekly private lesson plus golf fitness for players ready for more structure and feedback.",
    price: "$960",
    per: "/ month",
    headline: "Sharpen the game. Build the player.",
    subtagline: "More structure, more feedback, more consistent training.",
    intro:
      "The Intermediate Program is our advanced junior development program for players who have the fundamentals and are ready for the next step. Every week pairs a one-on-one lesson with a senior-level teaching professional with golf-specific fitness, building consistency, course strategy, and the strength behind a faster, more stable swing. It is designed for committed juniors preparing for tournament play or advancement into the Elite Program.",
    whoFor: [
      "Juniors with demonstrated skill and a commitment to improving",
      "Players who have progressed through the Beginner Program, or show equivalent ability",
      "Families committed to structured, high-performance development",
    ],
    weekly: [
      ["Private lesson (60 minutes)", "One-on-one coaching with Shawn or Jonah, built around your junior's individual goals."],
      ["Group fitness training (60 minutes)", "Strength, mobility, and movement on TPI principles, Saturdays at 9:00 AM."],
    ],
    facts: [["Price", "$960 / month"], ["Schedule", "2× per week"], ["Session", "60 minutes"], ["Coaching", "1:1 private lesson"]],
    experience: [
      "Full swing mechanics and shot shaping",
      "Precision short game with putting analytics",
      "Course management and decision-making",
      "Pre-shot routines and handling pressure",
      "Tournament preparation and competitive simulation",
    ],
    gainsTitle: "Desired outcomes",
    gains: [
      "A tournament-ready competitive skill set",
      "Self-directed practice habits and goal-setting discipline",
      "A strong mental game and competitive temperament",
      "Readiness for advancement into the Elite Program by invitation",
    ],
    note: "Private lesson times are arranged with your coach. Junior membership is not included in the program fee, but highly recommended for practice between sessions.",
    cta: { label: "Request an evaluation →", href: "/junior-golf/evaluation" },
  },
  {
    id: "elite",
    level: 3,
    name: "Elite Program",
    label: "By invitation only",
    tagline: "Train · Measure · Compete · Develop",
    summary: "Year-round competitive training for tournament and college-bound juniors. By invitation only.",
    price: "",
    priceNote: "Quoted at evaluation",
    headline: "The training home for New England's elite juniors.",
    subtagline: "Train · Measure · Compete · Develop",
    intro:
      "The Elite Program is a year-round training environment for serious juniors competing in tournaments and high school golf, and preparing for college recruiting. While other players wait for spring, Elite players train through the winter at Vanguard, so they start the season ahead of the field. Every candidate completes an evaluation; the coaching staff extends invitations based on results, work ethic, and competitive readiness.",
    whoFor: [
      "Juniors committed to year-round competitive development",
      "Players pursuing college golf recruitment and placement",
      "Athletes who have shown excellence through the Intermediate Program or equivalent competitive play",
      "Families ready to invest in a comprehensive, long-term development program",
    ],
    structureTitle: "How it's structured",
    structure: [
      "12-week training blocks, four times a year, with TrackMan baseline testing and re-testing every block",
      "Two 90-minute team sessions a week: Player Development, and Performance & Competition",
      "A weekly private lesson with a senior-level teaching professional",
      "Weekly golf fitness on TPI principles",
      "On-course training in season at some of the region's most prestigious private clubs and championship-caliber venues",
      "Groups capped at six players per coach",
    ],
    nextBlock: {
      title: "Next block begins November 1, 2026",
      rows: [
        ["Team sessions", "Tue & Thu, 6:00–7:30 PM"],
        ["Fitness", "Sat, 10:00 AM"],
      ],
    },
    experienceTitle: "Beyond the swing",
    experience: [
      "Mental performance and nutrition",
      "Tournament planning and post-event review",
      "The monthly Elite Order of Merit",
      "An end-of-block Player Card for every athlete",
      "College recruiting workshops",
    ],
    gainsTitle: "Desired outcomes",
    gains: [
      "A tournament-proven skill set at the regional level and beyond",
      "College recruitment readiness, with a clear plan through commitment",
      "Self-directed training habits and professional-level discipline",
      "A strong mental game and competitive resilience",
    ],
    note: "Full junior membership and the end-of-block Player Card are included.",
    cta: { label: "Request an Elite evaluation →", href: "/junior-golf/evaluation" },
  },
];

export const juniorMembership = {
  eyebrow: "Junior membership",
  headline: "Practice between lessons. That's where the progress happens.",
  intro:
    "A junior membership gives your child the run of the club between coaching sessions, so what they learn on Monday is still there on Thursday. It is included with the Elite Program and highly recommended for Beginner and Intermediate players.",
  perks: [
    { label: "24/7 club access", caption: "Train before school, after practice, or any hour in between" },
    { label: "8 complimentary TrackMan sessions every month", caption: "Simulator time to sharpen what they learn in lessons" },
    { label: "Unlimited chipping and putting", caption: "Open access to the short game area and putting studio, every day" },
    { label: "Unlimited gym access", caption: "The full TPI performance training space, whenever they need it" },
  ],
  cta: { label: "Ask about junior membership →", href: "/contact" },
};

export const juniorGetStarted = {
  eyebrow: "How to get started",
  headline: "Every junior begins with an evaluation.",
  intro:
    "A coach spends time with your child on TrackMan, the short game area, and the putting studio, then recommends the program that fits. Evaluations are available weekdays and weekends, and a tour of the facility is always welcome.",
  steps: [
    ["Request an evaluation", "Tell us a little about your junior and when you're generally available."],
    ["Get placed", "Our coaches recommend the level that fits your child's game and goals."],
    ["Start training", "Weekly coaching, measurable progress, and a clear path to the next level."],
  ],
  cta: { label: "Request an evaluation →", href: "/junior-golf/evaluation" },
};
