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
      name: 'Regular Chilli Cutter',
      images: [
        'assets/products/Chilly-cutter/Regular-chilli-cutter/regular-chilli-cutter-1.jpg',
        'assets/products/Chilly-cutter/Regular-chilli-cutter/regular-chilli-cutter-2.jpg',
        'assets/products/Chilly-cutter/Regular-chilli-cutter/regular-chilli-cutter-3.jpg',
        'assets/products/Chilly-cutter/Regular-chilli-cutter/regular-chilli-cutter-4.jpg',
        'assets/products/Chilly-cutter/Regular-chilli-cutter/regular-chilli-cutter-5.jpg',
        'assets/products/Chilly-cutter/Regular-chilli-cutter/regular-chilli-cutter-6.jpg'
      ],
      description: 'High-quality plastic/PET chilli cutter designed for efficient and precise cutting of green chilies. Perfect for everyday kitchen use.',
      details: 'Material: Premium Plastic/PET\nDimensions: Standard Size\nFeatures: Sharp Cutting Blades, Ergonomic Design, Easy to Clean\nDurability: Long-lasting, Lightweight\nUsage: Ideal for cutting green chilies for cooking\nMaintenance: Hand wash recommended\nManufactured by: Shivholic Kitchenware',
      category: 'Chilli Cutter'
    },
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

  getProductById(id: string): Product | undefined {
    // Convert product name to ID format (lowercase, hyphenated)
    return this.products.find(p => this.convertToId(p.name) === id);
  }

  getRelatedProducts(productId: string, limit: number = 3): Product[] {
    const product = this.getProductById(productId);
    if (!product) return [];
    
    return this.products
      .filter(p => p.category === product.category && this.convertToId(p.name) !== productId)
      .slice(0, limit);
  }

  private convertToId(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}
