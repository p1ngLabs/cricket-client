import Category from '@interfaces/Category';

const categories: Category[] = [
  {
    id: 1,
    parent_id: 2,
    name: 'Retaining Wall and Brick Pavers',
    slug: 'installation',
    active: false,
  },
  {
    id: 2,
    parent_id: 6,
    name: 'Exterior Signage',
    slug: 'Public-key',
    active: false,
  },
  {
    id: 3,
    parent_id: 6,
    name: 'Termite Control',
    slug: 'Vision-oriented',
    active: false,
  },
  {
    id: 4,
    parent_id: 5,
    name: 'Waterproofing & Caulking',
    slug: 'scalable',
    active: false,
  },
  {
    id: 5,
    parent_id: 0,
    name: 'Science Fiction',
    slug: 'leverage',
    active: false,
  },
  {
    id: 6,
    parent_id: 0,
    name: 'Rebar & Wire Mesh Install',
    slug: 'Public-key',
    active: true,
  },
  {
    id: 7,
    parent_id: 6,
    name: 'Soft Flooring and Base',
    slug: 'portal',
    active: false,
  },
  {
    id: 8,
    parent_id: 6,
    name: 'Plumbing & Medical Gas',
    slug: 'bifurcated',
    active: true,
  },
  {
    id: 9,
    parent_id: 3,
    name: 'Roofing (Asphalt)',
    slug: 'utilisation',
    active: false,
  },
  {
    id: 10,
    parent_id: 5,
    name: 'Glass & Glazing',
    slug: 'needs-based',
    active: true,
  },
];

export default categories;
