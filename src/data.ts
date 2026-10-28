export interface Product {
  id: string;
  name: string;
  category: 'Tees' | 'Shirts' | 'Trousers';
  price: number;
  description: string;
  colors: string[];
  colorNames: string[];
  tag?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Everyday Cotton Tee',
    category: 'Tees',
    price: 48,
    description: 'Crafted from mid-weight organic cotton jersey with a relaxed drape and reinforced collar that holds its shape wash after wash.',
    colors: ['#2C2622', '#A65D37', '#D4C5B9'],
    colorNames: ['Charcoal', 'Rust', 'Oatmeal'],
    tag: 'Bestseller'
  },
  {
    id: '2',
    name: 'Relaxed Weekend Striped Tee',
    category: 'Tees',
    price: 54,
    description: 'Classic yarn-dyed stripes on soft combed cotton. Features a slightly dropped shoulder for an effortless silhouette.',
    colors: ['#2C2622', '#FDFBF7'],
    colorNames: ['Ink Stripe', 'Natural Stripe']
  },
  {
    id: '3',
    name: 'The Utility Poplin Shirt',
    category: 'Shirts',
    price: 98,
    description: 'Woven from breathable cotton poplin with natural texture. Designed with double chest pockets and genuine corozo buttons.',
    colors: ['#796E65', '#D4C5B9', '#FDFBF7'],
    colorNames: ['Olive Mud', 'Sandstone', 'Washed White'],
    tag: 'New'
  },
  {
    id: '4',
    name: 'The Heritage Oxford Shirt',
    category: 'Shirts',
    price: 110,
    description: 'A timeless button-down in heavy-gauge cotton oxford. Softened through special garment washing for an instant vintage feel.',
    colors: ['#A65D37', '#2C2622', '#796E65'],
    colorNames: ['Terracotta', 'Midnight', 'Sage']
  },
  {
    id: '5',
    name: 'Wide-Leg Cotton Trousers',
    category: 'Trousers',
    price: 145,
    description: 'Tailored yet relaxed trousers cut from durable cotton twill. Features a mid-rise fit, pleated front, and deep side pockets.',
    colors: ['#2C2622', '#796E65', '#D4C5B9'],
    colorNames: ['Black', 'Taupe', 'Stone']
  },
  {
    id: '6',
    name: 'Easy Drawstring Lounge Pant',
    category: 'Trousers',
    price: 125,
    description: 'The ultimate comfort pant in breathable slub cotton. Includes an elastic waistband with internal cotton drawcord and clean finished hems.',
    colors: ['#A65D37', '#796E65', '#2C2622'],
    colorNames: ['Clay', 'Mushroom', 'Espresso']
  }
];
