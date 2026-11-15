# Website design brief — Tech for Good Community London

This brief goes with the exported design canvas (`design/`). The `.dc.html` files are **design references, not production code**: match their layout, copy and styling, but build the site properly in the chosen stack.

## Goal

A simple, fast, mostly static website for a volunteer-run London community. Its main jobs:

1. Send people to our events on Luma (the main thing we do).
2. Route visitors through **"How can we help?"** to resources and the right people.
3. Make our resource list (`London.md` in this repo) browsable.
4. Grow the community (WhatsApp group, newsletter, LinkedIn) and take donations (Open Collective).

## Pages

| Design file | Route | Purpose |
|---|---|---|
| `Main.dc.html` | `/` | Homepage |
| `Careers.dc.html` | `/careers` | Careers in Tech for Good — resources + career coaching request form |
| `Build.dc.html` | `/build` | Software development & consulting for charities / non-profits / impact founders — project form |
| `Funding.dc.html` | `/funding` | Funding resources + "intro to impact investors" form |
| `Community.dc.html` | `/community` | Meetups, WhatsApp group join form, other communities |
| `Contact.dc.html` | `/contact` | "Something else" — general contact form |
| `Resources.dc.html` | `/resources` | Full resource directory with search, filters, and "propose an edit" form |
| `About.dc.html` | `/about` | Founding story, what we do, organisers, Open Collective, partners |

### Homepage sections (in order)

1. **Sticky header** (see Behaviours).
2. **Hero:** Big Ben logo, H1 "Tech for Good Community **London**" ("London" in yellow), one-line intro, CTAs "See upcoming events" (→ Luma) and "How can we help?" (→ `#help`). A photo carousel fills the right ~62% of the hero, fading into the navy background.
3. **Next meetup card** overlapping the bottom of the hero: date badge, event name, time/venue, "Register on Luma". Should come from Luma, not be hard-coded (see Integrations).
4. **"How can we help?"** (`#help`): six cards linking to Careers, Build your idea, Funding, Community, Resources, Something else. Each has an inline stroke icon in a navy square.
5. **Newsletter band** (navy): "One email a month", email field + Subscribe.
6. **About teaser:** founding-story snippet + "Read our story", and a "Support the community" card with an Open Collective button.
7. **Footer.**

## Visual system

**Colours** (from the logo)

| Token | Hex | Use |
|---|---|---|
| navy | `#10204A` | Header, hero, footer, primary buttons |
| navy-border | `#24366A` | Borders on navy |
| yellow | `#F5C542` | Accent, CTA buttons on navy, headings on navy |
| ink | `#0E1A38` | Body text on white |
| muted | `#4A5573` | Secondary text |
| link | `#23408E` | Links on white (hover → navy) |
| on-navy-muted | `#D5DBEA` | Secondary text on navy |
| surface | `#F4F6FB` | Card / band background |
| line | `#DCE1EC` | Card borders, dividers |
| input-border | `#8C96AF` | Form field borders |
| soft-yellow | `#FFF8E1` | Callouts |
| verified-bg / verified-text | `#E3F1E7` / `#1D5B33` | "Checked by us" badge |

**Type:** Google Fonts. **Quicksand 700** for headings and the wordmark (it matches the logo lettering); **Inter 400–700** for body and UI.
Sizes: H1 64px (44px on mobile), page H1 52px, section H2 36–44px, card titles 22–24px, body 16–20px.

**Shape:** cards 16–20px radius, large panels/forms 24px, buttons and pills fully rounded (999px). Content max-width 1200px with 32px side padding.

**Buttons:**
- Primary on white: navy background, white text.
- Primary on navy: yellow background, navy text.
- Secondary on navy: 1.5px light outline.

**Accessibility:** keep text contrast at 4.5:1 or better, touch targets at least 44px, a real `<label>` on every input, `aria-label` on icon-only buttons, and decorative SVGs `aria-hidden`.

## Assets

- **Logo (icon only):** Big Ben with network nodes on navy — used in the header, hero and footer. Ideally recreate it as an SVG later; the JPG is fine for now.
- **Logo (with wordmark):** used on the About page.
- **Meetup photos (2):** group photo and mingling shot, used in the hero carousel. More to come; the carousel should take any number of photos.

The original files are in the design export (or ask Marcel for the originals). Optimise them: responsive sizes, WebP/AVIF, `loading="lazy"` except the first hero photo.

## Behaviours

### Sticky header that shrinks on scroll (homepage)

- At the top of the page, the header shows only the nav; the brand is hidden because the hero carries the big logo.
- After about 140px of scroll: padding shrinks (18px → 10px vertical), a shadow appears, and the brand (56px logo + "Tech for Good" in yellow Quicksand) fades and slides in.
- Other pages always show the brand.
- **Nav:** Events (→ Luma), How we help, Resources, About, plus a yellow pill CTA "Join the community" (→ `/community`). Mark the current page with `aria-current`.
- On mobile the nav should collapse into a menu (not designed yet — keep it simple).

### Hero carousel

- Photos crossfade (1s) every 5s. Prev/next buttons and dots sit bottom-right on the photo. Clicking either resets the timer.
- **Desktop:** photos fill the right ~62% of the hero, full height, `object-fit: cover`. Layered gradients:
  - left edge: solid navy, fading out by about 36% of the photo width, so the middle of the photo stays clear;
  - bottom: navy fading out by about 38%, blending into the next-meetup card;
  - top: a light navy fade under the header.
- **Mobile (under ~760px):** photos become a full-width ~320px banner on top with the text below on navy. The logo shrinks to 72px and overlaps the bottom of the photo.
- Respect `prefers-reduced-motion`: no auto-advance and no fades.
- Add a pause control if possible (auto-rotating carousels should be pausable).

### Resources page

- Search (name, description, category) plus category filter chips: All, Communities, Causes, Job boards, Volunteering, Funding, Spaces, Beyond London.
- Live count ("N resources") and an empty state.
- Grouped by section → subgroup → cards (name link, description, optional "Checked by us" badge).
- **Single source of truth:** generate this page from `London.md` at build time; don't duplicate the data.
  - 🟢 items → "Checked by us" badge.
  - 🟡 items → no badge.
  - Skip the "No longer active" entries.
  - Items with no link render as plain text.
- **"Propose an edit" form:** add / update / remove, name, URL, category, notes, optional email. Also link to the GitHub file for people who'd rather open a pull request.

### Help pages (Careers, Build, Funding, Community, Contact)

- Common layout: header → light band with breadcrumb ("How can we help? / X"), H1 and intro → two columns (resources list + form card with navy border) → footer. Stacks on mobile.
- The resource lists on these pages are hand-picked subsets of `London.md`. Pull them from the same data by name or tag if practical.
- Forms and their fields:
  - **Careers** (coaching request): name, email, LinkedIn (optional), "Where are you now?" (select), what they'd like help with.
  - **Build:** name, email, organisation, type (select), stage (select), budget (select), needs (checkbox chips: Advice, Design, Website or app, Data or AI, Not sure yet), problem description.
  - **Funding** (investor intro): name, email, venture name + website, stage (select), what they're looking for.
  - **Community** (WhatsApp join): name, mobile number, LinkedIn URL, what brings them (optional), consent checkbox linking to the code of conduct.
  - **Contact:** name, email, reason (select), message.
  - **Resources:** see "Propose an edit" above.

### Footer (all pages)

- Logo plus a one-line description.
- **Get involved:** Events on Luma, Join the WhatsApp group, Follow us on LinkedIn, Contact us.
- **Explore:** How we help, Resources, About us.
- **Support:** Open Collective, Contribute on GitHub, Code of conduct, Privacy policy.
- Bottom line: © year + contact email.

## Integrations (not in the design — needs deciding)

- **Forms:** a static-friendly backend (e.g. Formspree, Tally, Netlify Forms, or a small serverless function emailing the organisers). Each form needs a success and an error state, plus spam protection (honeypot or Turnstile).
- **Newsletter:** a mailing-list provider still needs setting up (e.g. Buttondown, Mailchimp, Substack). Use double opt-in.
- **Events:** Luma calendar `https://luma.com/tech-for-good`. Use Luma's embed or API for the next-meetup card so it never goes stale. Fallback: a static card plus a link.
- **Privacy:** the forms collect phone numbers and LinkedIn profiles, so the site needs a privacy policy and the consent wording shown in the Community form. Avoid tracking cookies, or add a cookie notice if analytics are added (privacy-friendly analytics such as Plausible avoid this).

## Placeholders to fill in

- `[OPEN COLLECTIVE URL]`
- `[LINKEDIN URL]`
- `[CODE OF CONDUCT URL]`
- `[PRIVACY POLICY URL]`
- `[CONTACT EMAIL]`
- Next meetup `[MON]`, `[DD]`, `[EVENT NAME]`, `[TIME]`, `[VENUE]` (should come from Luma instead)
- Homepage founding-story teaser, and the About page story (3 paragraphs)
- About page: what donations pay for; organiser names, roles and photos; partner and venue-host logos
- WhatsApp group invite process (manual approval assumed)

## Open decisions

- **Stack:** suggest a static site generator (e.g. Astro or Eleventy) so `London.md` can be parsed at build time; host on GitHub Pages, Netlify or Vercel.
- **Domain.**
- **Build page:** decide whether to offer pay-what-you-can development publicly or "on request".
- **Contact form:** it still has an "Offer to help" option. Keep it or remove it (offers of help are mainly handled within the community).
- **Logo:** may be refreshed later. Keep logo usage in one component so it's easy to swap.
