// Site-wide links and settings. Placeholders are marked TODO and listed in AGENTS.md.

export const site = {
  name: 'Tech for Good Community London',
  shortName: 'Tech for Good',
  description:
    'A volunteer-run community for people using technology to make life better — in London and beyond.',
  contactEmail: '[CONTACT EMAIL]', // TODO
};

export const links = {
  luma: 'https://luma.com/tech-for-good',
  openCollective: '#todo-open-collective', // TODO
  linkedIn: '#todo-linkedin', // TODO
  codeOfConduct: '#todo-code-of-conduct', // TODO
  privacy: '#todo-privacy', // TODO: privacy policy page
  github: 'https://github.com/marceljuenemann/tech4good',
  // TODO: point at the resources YAML once it exists.
  resourcesSource: 'https://github.com/marceljuenemann/tech4good/blob/main/London.md',
};

// TODO: the PHP form endpoint. Until it exists, forms post nowhere useful.
export const formEndpoint = '#todo-form-endpoint';

// TODO: the newsletter provider's embedded-form signup address.
export const newsletterEndpoint = '#todo-newsletter';

/**
 * Next meetup. Will come from Luma's iCal feed at build time.
 * Set to null to see the "nothing scheduled" fallback.
 * TODO: replace this sample with the iCal integration.
 */
export const nextMeetup: null | {
  start: Date;
  name: string;
  venue: string;
  url: string;
} = {
  start: new Date('2026-12-10T18:30:00Z'),
  name: '[EVENT NAME]',
  venue: '[VENUE]',
  url: 'https://luma.com/tech-for-good',
};

/** Prefix an in-site path with the configured base (needed if hosted under a sub-path). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
