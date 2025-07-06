import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  images: string[];
  description: string;
  details: string;
  category: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    {
      name: 'Kitchen Ware Masala Box',
      images: [
        'assets/products/masala-box/masala-box-1.jpg',
        'assets/products/masala-box/masala-box-2.jpg',
        'assets/products/masala-box/masala-box-3.jpg',
        'assets/products/masala-box/masala-box-4.jpg'
      ],
      description: 'Premium quality masala box for your kitchen. Keeps your spices fresh and organized.',
      details: 'Material: Stainless Steel\nCapacity: 7 containers\nFinish: Mirror Polish\nDishwasher Safe: Yes',
      category: 'Masala Box'
    },
    {
      name: 'Kitchen Ware Masala Box 2',
      images: [
        'assets/products/masala-box/masala-box-1.jpg',
        'assets/products/masala-box/masala-box-2.jpg',
        'assets/products/masala-box/masala-box-3.jpg',
        'assets/products/masala-box/masala-box-4.jpg'
      ],
      description: 'Premium quality masala box for your kitchen. Keeps your spices fresh and organized.',
      details: 'Material: Stainless Steel\nCapacity: 7 containers\nFinish: Mirror Polish\nDishwasher Safe: Yes',
      category: 'Masala Box'
    },
    {
      name: 'Kitchenware Jug',
      images: [
        'assets/products/jug/jug-1.jpg',
        'assets/products/jug/jug-2.jpg',
        'assets/products/jug/jug-3.jpg',
        'assets/products/jug/jug-4.jpg'
      ],
      description: 'Elegant jug for serving water and beverages. Perfect for home and parties.',
      details: 'Material: Stainless Steel\nCapacity: 1.5L\nFinish: Glossy\nDishwasher Safe: Yes',
      category: 'Jug'
    },
    {
      name: 'Kitchenware Jug 2',
      images: [
        'assets/products/jug/jug-1.jpg',
        'assets/products/jug/jug-2.jpg',
        'assets/products/jug/jug-3.jpg',
        'assets/products/jug/jug-4.jpg'
      ],
      description: 'Elegant jug for serving water and beverages. Perfect for home and parties.',
      details: 'Material: Stainless Steel\nCapacity: 1.5L\nFinish: Glossy\nDishwasher Safe: Yes',
      category: 'Jug'
    },
    // Add more products here, with their respective categories
  ];

  getCategories(): string[] {
    // Unique category names
    return Array.from(new Set(this.products.map(p => p.category)));
  }

  getProducts(category?: string) {
    if (!category) return this.products;
    return this.products.filter(p => p.category === category);
  }
}
