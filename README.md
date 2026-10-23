# Sandap Softwares

A world-class marketing site for **Sandap Softwares** — a custom software studio building systems for schools, hospitals, and businesses.

Built with Next.js 16 (App Router), React 19, Tailwind CSS 4, Motion, and Lucide.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit contact details

All contact details, the domain, and availability copy live in one file:

```text
src/lib/site.ts
```

Update `email`, `phone`, `phoneHref`, `domain`, and `availability`. The header, footer, contact page, CTA band, metadata, and structured data all read from there.

The current phone/email are placeholders — replace them before launch.

## Pages

- `/` — home, interactive product previews, solutions, concept work, process, principles
- `/solutions/schools` — school operations
- `/solutions/hospitals` — hospital management
- `/solutions/businesses` — business operations
- `/work` — three concept builds with detail pages
- `/about` — studio story and principles
- `/contact` — enquiry form and FAQ

Content for solutions and concept projects lives in `src/lib/data.ts`.

## Contact form

The form posts to `src/app/api/contact/route.ts`.

- **With `RESEND_API_KEY` set**, enquiries are emailed via Resend.
- **Without it**, the form gracefully opens the visitor's email app with the message prefilled.

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

`CONTACT_FROM_EMAIL` must be a verified sender in Resend. For testing, Resend's `onboarding@resend.dev` sender works for the account owner.

## Design system

- **Palette** — paper `#f5f0e6`, ink `#14120f`, clay `#b4552b`, pine `#17342c`
- **Type** — Inter Tight (UI), Instrument Serif (editorial italics), Geist Mono (labels)
- **Logo** — the "Fit" mark: an S with a clay dot, inline SVG in `src/components/logo.tsx`
- **Motion** — subtle reveals and tab transitions; respects `prefers-reduced-motion`

## Build & deploy

```bash
npm run build
npm run start
```

Deploy to Vercel and point `sandapsoftwares.com` at it. Set the environment variables from `.env.example` in the project settings if you want email delivery.

## Notes

- The three projects (Vidya, Arogya, Gati) are clearly labelled **concept builds**, not client engagements. Replace them with real case studies when available.
- No fake testimonials, client logos, or metrics are used on the site.
- The site ships with SEO metadata, Organization JSON-LD, sitemap, robots, and a generated Open Graph image.
