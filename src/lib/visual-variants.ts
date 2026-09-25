export const SITE_STYLES = [
  {
    value: 'current',
    label: 'Current',
    description: 'The existing navy and cyan portfolio treatment.',
  },
  {
    value: 'refined',
    label: 'Refined',
    description: 'A quieter, more spacious version of the current system.',
  },
  {
    value: 'editorial',
    label: 'Editorial',
    description: 'A more expressive, gallery-like reading experience.',
  },
  {
    value: 'technical',
    label: 'Technical',
    description: 'A precise developer-tooling language without a fake terminal.',
  },
  {
    value: 'dark',
    label: 'Dark',
    description: 'A restrained, atmospheric dark portfolio direction.',
  },
] as const;

export const PROJECTS_LAYOUTS = [
  {
    value: 'carousel',
    label: 'Carousel (current)',
    description: 'The existing Projects presentation.',
  },
  {
    value: 'expanded',
    label: 'Expanded horizontal',
    description: 'A wide multi-column gallery that uses more of the viewport.',
  },
  {
    value: 'editorial',
    label: 'Editorial asymmetric',
    description: 'An offset collection with varied widths and visual rhythm.',
  },
  {
    value: 'showcase',
    label: 'Full-width showcase',
    description: 'A fast-scanning sequence of large project bands.',
  },
] as const;
