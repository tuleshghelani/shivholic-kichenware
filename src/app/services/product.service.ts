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
      name: 'Jumbo Chilli Cutter',
      images: [
        'assets/products/Chilly-cutter/Jumbo-chilli-cutter/jumbo-chilli-cutter-1.jpg'
      ],
      description: 'Extra-large plastic chilli cutter with enhanced capacity for bulk preparation. Perfect for restaurants and large family meals.',
      details: 'Material: Premium Plastic/PET\nDimensions: Oversized for Bulk Cutting\nFeatures: Extra-Large Capacity, Reinforced Cutting Mechanism, Comfortable Grip\nDurability: Heavy-Duty Construction, Impact-Resistant\nUsage: Ideal for bulk preparation of green chilies\nMaintenance: Easy to disassemble and clean\nManufactured by: Shivholic Kitchenware',
      category: 'Chilli Cutter'
    },
    {
      name: 'Premium Chilli Cutter',
      images: [
        'assets/products/Chilly-cutter/Premium-chilli-cutter/premium-chilli-cutter-1.jpg',
        'assets/products/Chilly-cutter/Premium-chilli-cutter/premium-chilli-cutter-2.jpg',
        'assets/products/Chilly-cutter/Premium-chilli-cutter/premium-chilli-cutter-3.jpg'
      ],
      description: 'Top-tier plastic chilli cutter with advanced design and superior cutting performance. The ultimate kitchen tool for chilli lovers.',
      details: 'Material: High-Grade Plastic/PET\nDimensions: Optimized Size for Maximum Efficiency\nFeatures: Ultra-Sharp Blades, Precision Engineering, Non-Slip Base, Finger Guard\nDurability: Premium Construction, Dishwasher-Safe Components\nUsage: Perfect for fine and consistent chilli cutting\nMaintenance: Dishwasher safe, easy to clean\nManufactured by: Shivholic Kitchenware',
      category: 'Chilli Cutter'
    },
    {
      name: 'Round Chilli Cutter',
      images: [
        'assets/products/Chilly-cutter/Round-chilli-cutter/round-chilli-cutter-1.jpg',
        'assets/products/Chilly-cutter/Round-chilli-cutter/round-chilli-cutter-2.jpg',
        'assets/products/Chilly-cutter/Round-chilli-cutter/round-chilli-cutter-3.jpg'
      ],
      description: 'Innovative circular design plastic chilli cutter for uniform slicing. Creates perfect round chilli pieces for garnishing and cooking.',
      details: 'Material: Premium Plastic/PET\nDimensions: Compact Circular Design\nFeatures: 360° Cutting Pattern, Uniform Slice Thickness, Transparent Body\nDurability: Sturdy Construction, Resistant to Stains\nUsage: Specialized for creating round chilli slices\nMaintenance: Hand wash recommended\nManufactured by: Shivholic Kitchenware',
      category: 'Chilli Cutter'
    },
    {
      name: 'SS Chilli Cutter',
      images: [
        'assets/products/Chilly-cutter/SS-chilli-cutter/SS-chilli-cutter-1.jpg',
        'assets/products/Chilly-cutter/SS-chilli-cutter/SS-chilli-cutter-2.jpg'
      ],
      description: 'Premium stainless steel chilli cutter offering exceptional durability and cutting precision. The professional choice for serious home cooks.',
      details: 'Material: High-Quality Stainless Steel\nDimensions: Professional Grade Size\nFeatures: Rust-Resistant Blades, Enhanced Durability, Precision Cutting, Ergonomic Handle\nDurability: Corrosion-Resistant, Lifetime Quality\nUsage: Ideal for daily use with superior cutting performance\nMaintenance: Dishwasher safe, rust-resistant\nManufactured by: Shivholic Kitchenware',
      category: 'Chilli Cutter'
    },
    {
      name: 'Wooden Chilli Cutter',
      images: [
        'assets/products/Chilly-cutter/Wooden-chilli-cutter/wooden-chilli-cutter-1.jpg'
      ],
      description: 'Eco-friendly plastic chilli cutter with elegant wooden handle. Combines traditional aesthetics with modern cutting efficiency.',
      details: 'Material: Premium Plastic/PET with Wooden Handle\nDimensions: Classic Design with Modern Functionality\nFeatures: Wooden Grip for Enhanced Comfort, Eco-Friendly Materials, Artisanal Finish\nDurability: Sustainable Construction, Natural Wood Grain\nUsage: Perfect for eco-conscious kitchens\nMaintenance: Hand wash only, occasional wood conditioning recommended\nManufactured by: Shivholic Kitchenware',
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
