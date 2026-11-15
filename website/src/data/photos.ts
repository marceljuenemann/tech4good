// Hero carousel photos. Add as many as you like; the first one loads eagerly.
import type { ImageMetadata } from 'astro';
import group from '../assets/photos/meetup-group.jpg';
import mingling from '../assets/photos/meetup-mingling.jpg';

export interface HeroPhoto {
  src: ImageMetadata;
  alt: string;
  /** CSS object-position, to keep faces in frame. */
  position?: string;
}

export const heroPhotos: HeroPhoto[] = [
  {
    src: group,
    alt: 'Around thirty community members smiling for a group photo in a red-panelled London pub',
    position: 'center 40%',
  },
  {
    src: mingling,
    alt: 'Members chatting in small groups and around a table at an evening meetup',
    position: 'center 45%',
  },
];
