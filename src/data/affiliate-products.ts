export interface Product {
  slug: string;
  title: string;
  description: string;
  asin: string;
  imageUrl: string;
  price: string;
  rating: number;
  features: string[];
  category: string;
}

export const AMAZON_TAG = 'turftechhq-20';

export function getAffiliateUrl(asin: string, title?: string): string {
  if (title) {
    return `https://www.amazon.com/s?k=${encodeURIComponent(title)}&tag=${AMAZON_TAG}`;
  }
  return `https://www.amazon.com/dp/${asin}/?tag=${AMAZON_TAG}`;
}

export function getGoUrl(slug: string): string {
  return `/go/${slug}`;
}

export const products: Product[] = [
  {
    slug: 'greenworks-40v-string-trimmer',
    title: 'Greenworks 40V Cordless String Trimmer',
    description: 'Powerful 40V cordless string trimmer with a 13-inch cutting path. Lightweight design with variable speed trigger for tackling tough grass and weeds without the hassle of gas.',
    asin: 'B084MYM1RT',
    imageUrl: 'https://m.media-amazon.com/images/I/61-wBXsKDXL._AC_SL250_.jpg',
    price: '$$',
    rating: 4.6,
    features: ['40V lithium-ion battery', '13-inch cutting path', 'Variable speed trigger', 'Lightweight at 7.3 lbs'],
    category: 'Trimmers',
  },
  {
    slug: 'scotts-turf-builder-lawn-food',
    title: 'Scotts Turf Builder Lawn Food',
    description: 'Feed your lawn and build thick, green grass. Scotts Turf Builder is designed to strengthen your lawn against future problems by building strong, deep roots.',
    asin: 'B003TQR0EE',
    imageUrl: 'https://m.media-amazon.com/images/I/81+mCv+mFTL._AC_SL250_.jpg',
    price: '$',
    rating: 4.7,
    features: ['Covers 5,000 sq ft', 'Builds strong roots', 'Apply to any grass type', 'Feeds for up to 6 weeks'],
    category: 'Lawn Care',
  },
  {
    slug: 'dewalt-20v-hedge-trimmer',
    title: 'DeWalt 20V MAX Hedge Trimmer',
    description: 'Professional-grade cordless hedge trimmer with 22-inch dual-action blades. The 20V MAX battery system provides consistent power for clean cuts on hedges and shrubs.',
    asin: 'B07DW38YKF',
    imageUrl: 'https://m.media-amazon.com/images/I/61vSxRhz1YL._AC_SL250_.jpg',
    price: '$$$',
    rating: 4.8,
    features: ['22-inch dual-action blades', '20V MAX battery system', 'Soft grip handle', 'Lightweight design'],
    category: 'Trimmers',
  },
  {
    slug: 'worx-wg163-grass-trimmer',
    title: 'Worx WG163 GT 3.0 Grass Trimmer',
    description: '3-in-1 convertible tool that works as a grass trimmer, wheeled edger, and mini mower. CommandFeed technology advances line instantly with the push of a button.',
    asin: 'B07BFT5K3Y',
    imageUrl: 'https://m.media-amazon.com/images/I/81bD3Nh9HhL._AC_SL250_.jpg',
    price: '$$',
    rating: 4.4,
    features: ['3-in-1 convertible design', 'CommandFeed line advance', 'Adjustable handle', 'Spool single-line feed'],
    category: 'Trimmers',
  },
  {
    slug: 'fiskars-bypass-pruning-shears',
    title: 'Fiskars Bypass Pruning Shears',
    description: 'Premium bypass pruning shears with precision-ground steel blades. Low-friction coating resists sap buildup and the ergonomic handle reduces hand fatigue during extended use.',
    asin: 'B004MU2X4A',
    imageUrl: 'https://m.media-amazon.com/images/I/61f1ltDbGhL._AC_SL250_.jpg',
    price: '$',
    rating: 4.7,
    features: ['Precision-ground steel blades', 'Low-friction coating', 'Ergonomic handle', 'Cutting capacity up to 5/8 inch'],
    category: 'Hand Tools',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
