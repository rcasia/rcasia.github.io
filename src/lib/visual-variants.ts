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
    value: 'current',
    label: 'Current cards',
    description: 'The existing featured card followed by a three-column grid.',
  },
  {
    value: 'v2',
    label: 'Featured grid',
    description: 'A larger lead project with a tighter supporting grid.',
  },
] as const;
