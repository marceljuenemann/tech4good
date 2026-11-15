# AGENTS.md — Tech for Good Community London website

Guidance for AI coding agents (and humans) working in this repo.

## What this is

A simple, fast, mostly static website for a volunteer-run London community. Its jobs, in priority order:

1. Send people to our events on Luma (`https://luma.com/tech-for-good`).
2. Route visitors through "How can we help?" to resources and the right people.
3. Make our resource directory browsable.
4. Grow the community (WhatsApp, newsletter, LinkedIn) and take donations (Open Collective).

**Status:** planning. Nothing is built yet. The design is a first draft, and more changes are expected.

## Design references

- `design.html` is the exported design canvas: a self-unpacking bundle of eight page mockups (Home, Careers, Build, Funding, Community, Contact, Resources, About). Open it in a browser to view it.
- `DESIGN_BRIEF.md` has the full page list, visual system, behaviours and placeholders.
- The mockups are **references, not code**. Match their layout, copy and styling, but don't port the `sc-for` / `DCLogic` templating; build the pages properly in the stack below.
- Keep the design easy to change: colours, type and spacing go in CSS custom properties, and each page section is its own component. The logo appears through a single component, so it can be swapped later.

## Decisions made

| Topic | Decision |
|---|---|
| Rendering | Static multi-page site. No SPA and no client-side routing. Optional cross-document view transitions in CSS. |
| Generator | **Astro**, outputting plain HTML. Ship JavaScript only where needed: hero carousel, header that shrinks on scroll, resource search. These are small standalone scripts, not framework islands. |
| Hosting | **GitHub Pages**, built and deployed by **GitHub Actions**. |
| Scheduled rebuild | A GitHub Actions schedule (daily) rebuilds and redeploys with no commit, so the next-meetup card stays current. Also allow manual runs (`workflow_dispatch`). |
| Resource data | `London.md` is being retired. A **YAML file is the single source of truth** for the resources page and the help-page lists. |
| Events | Next-meetup card generated **at build time from Luma's public iCal feed**. No Luma API (it needs a paid plan). |
| Forms | Plain HTML `<form method="post">` to a **small PHP script on Marcel's existing web host**. It emails Marcel, then redirects to a thank-you or error page. Works without JavaScript. |
| Spam | Hidden spam-trap (honeypot) field on every form. Add Cloudflare Turnstile only if spam gets through. |
| Newsletter | The provider's **public embedded-form signup address**, posted to directly from HTML. No API key in the site. The provider handles double opt-in. Provider not chosen yet (e.g. Buttondown, Mailchimp, Brevo). |
| Fonts | **Self-hosted** (e.g. Fontsource): Quicksand 600/700 and Inter 400–700. No Google Fonts CDN, for privacy and speed. |
| Analytics | None for now. If added, use something cookie-free (e.g. Plausible). |
| Form handling | Marcel answers every form himself for now. Don't build routing, queues or a CRM; optimise only if volume grows. |

## Planned layout

Proposed structure, not yet created:

```
src/
  data/resources.yaml      # single source of truth for resources
  components/              # Logo, Header, Footer, HelpCard, ResourceCard, FormCard, NextMeetup, Carousel…
  layouts/                 # BaseLayout (head, header, footer), HelpPageLayout
  pages/                   # index, careers, build, funding, community, contact, resources, about, thanks, privacy
  styles/tokens.css        # colour, type and spacing tokens
public/                    # optimised images, self-hosted fonts
backend/forms.php          # deployed separately to the PHP host, not to GitHub Pages
.github/workflows/         # build + deploy on push, daily scheduled rebuild
```

## Resource data (`resources.yaml`)

The suggested schema is below; adjust it if needed, but keep it simple to edit by hand and through GitHub pull requests.

```yaml
- section: Communities          # top-level section; also a filter chip on /resources
  id: communities
  intro: Optional short paragraph shown under the heading
  groups:
    - title: Tech for good        # empty or missing = no subheading
      intro: Optional ("Best for: …" notes on Funding)
      items:
        - name: Good Tech
          url: https://www.goodtech.ventures/   # optional; no url → plain text
          description: Community for early-stage tech-for-good startups.
          verified: true                         # true → "Checked by us" badge
          inactive: false                        # true → skip on the site
          tags: [careers]                        # optional; used to pick items for help pages
```

Rules:

- Validate the file at build time against a schema (e.g. Zod in Astro content collections). An unknown key, a missing name or a malformed URL fails the build.
- Help-page lists (Careers, Build, Funding, Community) are hand-picked subsets. Select them by name or tag from the YAML, and fail the build if a referenced name doesn't exist. Don't copy entries into page files.
- An item may appear in more than one place (e.g. Newspeak House under Civic tech and Spaces). Count unique items in the "N resources" label.
- Links to private individuals (e.g. personal LinkedIn profiles) don't belong in descriptions.
- The Resources page's "open a pull request" link points to this YAML file on GitHub.
- Migration: convert `London.md` into the YAML once, then delete `London.md`. The design's Resources mockup contains shortened descriptions that are a useful starting point.

## Behaviours to implement

These come from the design; details are in `DESIGN_BRIEF.md`.

- **Header:** sticky. On the homepage the brand is hidden at the top and fades in after about 140px of scroll, while the padding shrinks and a shadow appears. Other pages always show the brand. Mark the current page with `aria-current="page"`. On mobile, collapse the nav into a simple menu (e.g. `<details>`).
- **Hero carousel:** crossfade every 5s, previous/next buttons and dots, and clicking any of them resets the timer. It needs a **pause button** (accessibility requirement WCAG 2.2.2) and pauses on hover or focus. With `prefers-reduced-motion`, no auto-advance and no fades. It takes any number of photos. The first image loads eagerly; the rest use `loading="lazy"`. Check text contrast over the photo at tablet widths (about 760–1200px), where the text overlaps the photo more.
- **Next-meetup card:** filled from iCal at build time. Fallback when no upcoming event: "No meetup scheduled yet" plus a link to Luma.
- **Resources page:** all items rendered in the static HTML. Search (name, description, category) and the category chips filter the rendered list with a small script. The page still works without JavaScript. Show a live count and an empty state.
- **Links:** in-site links to "How can we help?" go to `/#help`, not to the top of the homepage. Compute the footer © year at build time.

## Forms backend (`backend/forms.php`)

- One endpoint handles all forms (careers, build, funding, community, contact, resources), told apart by a hidden `form` field.
- Honeypot field (e.g. `website`), visually hidden, `tabindex="-1"`, `autocomplete="off"`. If it's filled in, redirect to the success page and drop the submission.
- Validate required fields on the server too. Send the email through SMTP, not bare `mail()`, so it doesn't land in spam. Then redirect with 303 to `/thanks/` or `/form-error/`.
- Keep the SMTP credentials and recipient address in server config outside the web root. Never commit secrets.
- The Community form collects phone numbers and LinkedIn URLs. Keep only what's needed, and describe it in the privacy policy.

## Accessibility and performance

- Text contrast 4.5:1 or better, touch targets 44px or larger, a real `<label>` on every input, `aria-label` on icon-only buttons, and `aria-hidden` on decorative SVGs.
- Yellow (`#F5C542`) is only used on navy, never as text on white.
- Images: responsive sizes, AVIF/WebP (Astro's image pipeline), explicit width and height.
- Keep page JavaScript minimal, with no framework runtime in the browser.

## Still open

- Domain.
- Newsletter provider.
- Build page: offer pay-what-you-can development publicly or "on request". The homepage Build card copy depends on this.
- Contact form "Offer to help" option. Current recommendation: keep it, because coaching and investor intros depend on volunteers.
- Placeholders: Open Collective URL, LinkedIn URL, code of conduct, privacy policy, contact email, founding story, About page story, organisers, partner logos.
- WhatsApp: the form (current plan) or an invite link that needs admin approval. The invite link avoids collecting phone numbers.
- Logo refresh, possibly as an SVG.
