# Vanguard Golf Club — Next.js site

A multi-page site (like KOHR/Five Iron) where the header, footer, and nav are written
**once** and reused everywhere. Deploys to Vercel.

## Pages
```
/                          Home (hero, short game, video, explore)
/the-club                  Facility: short game, TrackMan, strength, mental, pillars
/membership                5 tiers + simulator packages + cancellation policy
/lessons                   Swing Evaluation + 3 coaches
/leagues                   League play
/junior-golf               Junior Pathway + Performance Academy
/junior-golf/evaluation    Junior evaluation request form
/events                    The experience + upcoming calendar + 3 packages
/events/inquiry            Event inquiry form
/contact                   Contact form + info + FAQ + partners
```

## First-time setup (one time only)

```bash
cd vanguard-next
npm install
```
This downloads the dependencies (takes a minute; creates a `node_modules` folder).

## Preview it locally

```bash
npm run dev
```
Then open **http://localhost:3000** in your browser. Edit a file, save, and the
browser updates instantly. Press `Ctrl + C` in Terminal to stop.

---

## ⭐ How to edit content

### Prices, links, coaches, FAQ, EVENTS → `lib/site.js`
This one file holds your **membership tiers, annual plans, simulator packages,
coach bios, FAQ, upcoming events, and every Whoosh/Square link**. Change a price
here and it updates on the page automatically. This is the file you'll use most.

**Adding an event to the calendar:** find `EVENTS` in `lib/site.js` and add a
block (a commented-out template is right there). Delete events once they've
passed — a stale calendar looks worse than an empty one. While the list is
empty, the page shows a friendly "check back soon" message.

### Page wording → `app/<page-name>/page.js`
e.g. `app/membership/page.js` for the membership page's headings and copy.

### Header / footer / nav → `components/Header.js`, `components/Footer.js`
Edit once — it applies to **every page**. (This is the big win over plain HTML.)

### Colors, fonts, spacing → `app/globals.css`
The design tokens are the CSS variables at the top.

### Photos → `public/img/`
Drop a new image in, then reference it as `/img/yourfile.jpg`.

---

## Publish changes

```bash
git add .
git commit -m "what I changed"
git push
```
Vercel rebuilds and deploys automatically (~1 minute).

---

## Deploying the first time

1. Push this folder to a **new GitHub repo** (e.g. `vanguard-next`).
2. In Vercel: **Add New → Project** → import that repo.
3. Framework preset: **Next.js** (auto-detected). No settings to change. **Deploy.**
4. Test the `.vercel.app` URL thoroughly.
5. Only when you're happy: move the `vanguardgolfclub.com` domain from the old
   project to this one (Vercel → old project → Settings → Domains → remove;
   then add it to the new project). DNS at Porkbun stays exactly as-is.

Your current HTML site keeps running until you make that switch — zero downtime.

## Notes
- Forms post to Formspree (already wired), 3 endpoints in `lib/site.js`:
  contact, event inquiry, and junior evaluation.
- First submission of a NEW form triggers a one-time "confirm your email" link
  from Formspree — click it once and that form is live for good.
- The intro video is ~17 MB in `public/video/`. Consider hosting on Vimeo/YouTube later.
