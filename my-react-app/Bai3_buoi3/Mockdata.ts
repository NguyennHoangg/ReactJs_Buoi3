export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export const mockProducts: Product[] = Array.from({ length: 5000 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 1000) + 1,
  category: ['Electronics', 'Accessories', 'Gadgets'][Math.floor(Math.random() * 3)],
}));
