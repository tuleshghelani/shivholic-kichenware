import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  images: string[];
  description: string;
  details: string;
  category: string;
  url?: string;

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
      category: 'Chilli Cutter',
      url: 'product/chilli-cutter'
    },
    {
      name: 'Jumbo Chilli Cutter',
      images: [
        'assets/products/Chilly-cutter/Jumbo-chilli-cutter/jumbo-chilli-cutter-1.jpg'
      ],
      description: 'Extra-large plastic chilli cutter with enhanced capacity for bulk preparation. Perfect for restaurants and large family meals.',
      details: 'Material: Premium Plastic/PET\nDimensions: Oversized for Bulk Cutting\nFeatures: Extra-Large Capacity, Reinforced Cutting Mechanism, Comfortable Grip\nDurability: Heavy-Duty Construction, Impact-Resistant\nUsage: Ideal for bulk preparation of green chilies\nMaintenance: Easy to disassemble and clean\nManufactured by: Shivholic Kitchenware',
      category: 'Chilli Cutter',
      url: 'product/chilli-cutter'
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
      category: 'Chilli Cutter',
      url: 'product/chilli-cutter'
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
      category: 'Chilli Cutter',
      url: 'product/chilli-cutter'
    },
    {
      name: 'SS Chilli Cutter',
      images: [
        'assets/products/Chilly-cutter/SS-chilli-cutter/SS-chilli-cutter-1.jpg',
        'assets/products/Chilly-cutter/SS-chilli-cutter/SS-chilli-cutter-2.jpg'
      ],
      description: 'Premium stainless steel chilli cutter offering exceptional durability and cutting precision. The professional choice for serious home cooks.',
      details: 'Material: High-Quality Stainless Steel\nDimensions: Professional Grade Size\nFeatures: Rust-Resistant Blades, Enhanced Durability, Precision Cutting, Ergonomic Handle\nDurability: Corrosion-Resistant, Lifetime Quality\nUsage: Ideal for daily use with superior cutting performance\nMaintenance: Dishwasher safe, rust-resistant\nManufactured by: Shivholic Kitchenware',
      category: 'Chilli Cutter',
      url: 'product/chilli-cutter'
    },
    {
      name: 'Wooden Chilli Cutter',
      images: [
        'assets/products/Chilly-cutter/Wooden-chilli-cutter/wooden-chilli-cutter-1.jpg'
      ],
      description: 'Eco-friendly plastic chilli cutter with elegant wooden handle. Combines traditional aesthetics with modern cutting efficiency.',
      details: 'Material: Premium Plastic/PET with Wooden Handle\nDimensions: Classic Design with Modern Functionality\nFeatures: Wooden Grip for Enhanced Comfort, Eco-Friendly Materials, Artisanal Finish\nDurability: Sustainable Construction, Natural Wood Grain\nUsage: Perfect for eco-conscious kitchens\nMaintenance: Hand wash only, occasional wood conditioning recommended\nManufactured by: Shivholic Kitchenware',
      category: 'Chilli Cutter',
      url: 'product/chilli-cutter'
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
      name: 'Kitchenware Jug',
      images: [
        'assets/products/jug/jug-1.jpg',
        'assets/products/jug/jug-2.jpg',
        'assets/products/jug/jug-3.jpg',
        'assets/products/jug/jug-4.jpg'
      ],
      description: 'Elegant jug for serving water and beverages. Perfect for home and parties.',
      details: 'Material: Plastic\nCapacity: 1.5L\nFinish: Glossy\nDishwasher Safe: Yes',
      category: 'Jug',
      url: 'product/jug'
    },
    // Glass Category Products
    {
      name: 'Capture Glass',
      images: [
        'assets/products/glass/capture-glass/capture-glass-1.jpg',
        'assets/products/glass/capture-glass/capture-glass-2.jpg',
        'assets/products/glass/capture-glass/capture-glass-3.jpg'
      ],
      description: 'Elegant capture glass with crystal-clear transparency. Perfect for capturing the essence of your favorite beverages with style and sophistication.',
      details: 'Material: Premium Crystal Glass\nCapacity: 300ml\nFeatures: Ergonomic Design, Chip-Resistant Rim, Dishwasher Safe\nDurability: Thermal Shock Resistant\nUsage: Ideal for cocktails, whiskey, and premium beverages\nMaintenance: Dishwasher safe, hand wash recommended for longevity\nManufactured by: Shivholic Kitchenware',
      category: 'Glass',
      url: 'product/glass'
    },
    {
      name: 'Crystal Glass',
      images: [
        'assets/products/glass/crystal-glass/crystal-glass-1.jpg',
        'assets/products/glass/crystal-glass/crystal-glass-2.jpg'
      ],
      description: 'Luxurious crystal glass with exceptional clarity and brilliance. Elevate your dining experience with this premium glassware that combines elegance with durability.',
      details: 'Material: Fine Crystal\nCapacity: 250ml\nFeatures: Brilliant Clarity, Fine Rim, Elegant Design\nDurability: Lead-Free Crystal, Scratch Resistant\nUsage: Perfect for wine, champagne, and special occasions\nMaintenance: Hand wash recommended\nManufactured by: Shivholic Kitchenware',
      category: 'Glass',
      url: 'product/glass'
    },
    {
      name: 'Diamond Glass',
      images: [
        'assets/products/glass/diamond-glass/diamond-glass-1.jpg'
      ],
      description: 'Stunning diamond-cut glass that reflects light beautifully. The geometric patterns create a mesmerizing display that enhances any beverage presentation.',
      details: 'Material: Premium Cut Glass\nCapacity: 320ml\nFeatures: Diamond-Cut Pattern, Heavy Base, Refraction Design\nDurability: Chip-Resistant, High-Quality Construction\nUsage: Ideal for whiskey, bourbon, and premium spirits\nMaintenance: Hand wash only\nManufactured by: Shivholic Kitchenware',
      category: 'Glass',
      url: 'product/glass'
    },
    {
      name: 'Faluda Glass',
      images: [
        'assets/products/glass/faluda-glass/faluda-glass-1.jpg'
      ],
      description: 'Specialized faluda glass designed specifically for serving traditional faluda and dessert beverages. The tall, elegant design showcases layered desserts beautifully.',
      details: 'Material: High-Quality Glass\nCapacity: 400ml\nFeatures: Tall Design, Wide Mouth, Stable Base\nDurability: Thermal Resistant, Everyday Use\nUsage: Perfect for faluda, milkshakes, and layered desserts\nMaintenance: Dishwasher safe\nManufactured by: Shivholic Kitchenware',
      category: 'Glass',
      url: 'product/glass'
    },
    {
      name: 'Martin Glass',
      images: [
        'assets/products/glass/martin-glass/martin-glass-1.jpg',
        'assets/products/glass/martin-glass/martin-glass-2.jpg',
        'assets/products/glass/martin-glass/martin-glass-3.jpg'
      ],
      description: 'Classic martini glass with a contemporary twist. The iconic V-shaped bowl and slender stem create an elegant silhouette for sophisticated cocktail service.',
      details: 'Material: Crystal-Clear Glass\nCapacity: 200ml\nFeatures: V-Shaped Bowl, Slender Stem, Stable Base\nDurability: Reinforced Stem Connection, Break-Resistant\nUsage: Ideal for martinis, cosmopolitans, and cocktails\nMaintenance: Hand wash recommended\nManufactured by: Shivholic Kitchenware',
      category: 'Glass',
      url: 'product/glass'
    },
    {
      name: 'Matt Glass',
      images: [
        'assets/products/glass/matt-glass/matt-glass-1.jpg',
        'assets/products/glass/matt-glass/matt-glass-2.jpg'
      ],
      description: 'Sophisticated matte-finished glass with a modern aesthetic. The frosted exterior provides an elegant tactile experience while maintaining crystal clarity inside.',
      details: 'Material: Frosted Glass\nCapacity: 350ml\nFeatures: Matte Exterior, Smooth Interior, Contemporary Design\nDurability: Scratch-Resistant Finish, Sturdy Construction\nUsage: Perfect for water, juice, and everyday beverages\nMaintenance: Dishwasher safe\nManufactured by: Shivholic Kitchenware',
      category: 'Glass',
      url: 'product/glass'
    },
    {
      name: 'Merito Glass',
      images: [
        'assets/products/glass/merito-glass/merito-glass-1.jpg',
        'assets/products/glass/merito-glass/merito-glass-2.jpg',
        'assets/products/glass/merito-glass/merito-glass-3.jpg',
        'assets/products/glass/merito-glass/merito-glass-4.jpg'
      ],
      description: 'Premium merito glass with exceptional craftsmanship and elegant detailing. The balanced proportions and refined design make it perfect for upscale dining settings.',
      details: 'Material: Premium Glass\nCapacity: 280ml\nFeatures: Balanced Weight, Smooth Rim, Elegant Silhouette\nDurability: High-Quality Construction, Chip-Resistant\nUsage: Ideal for wine, water, and fine dining\nMaintenance: Hand wash recommended\nManufactured by: Shivholic Kitchenware',
      category: 'Glass',
      url: 'product/glass'
    },
    {
      name: 'Metro Ring Glass',
      images: [
        'assets/products/glass/metro-ring-glass/metro-ring-glass-1.jpg',
        'assets/products/glass/metro-ring-glass/metro-ring-glass-2.jpg'
      ],
      description: 'Contemporary metro ring glass featuring a distinctive ringed pattern. The modern design combines urban aesthetics with practical functionality.',
      details: 'Material: High-Quality Glass\nCapacity: 330ml\nFeatures: Ringed Texture, Ergonomic Grip, Modern Design\nDurability: Everyday Use, Impact Resistant\nUsage: Perfect for water, cocktails, and casual beverages\nMaintenance: Dishwasher safe\nManufactured by: Shivholic Kitchenware',
      category: 'Glass',
      url: 'product/glass'
    },
    {
      name: 'Ring Glass',
      images: [
        'assets/products/glass/ring-glass/ring-glass-1.jpg',
        'assets/products/glass/ring-glass/ring-glass-2.jpg'
      ],
      description: 'Elegant ring glass with decorative circular bands that enhance grip and visual appeal. The classic design with modern elements suits both casual and formal settings.',
      details: 'Material: Crystal-Clear Glass\nCapacity: 310ml\nFeatures: Decorative Rings, Comfortable Grip, Versatile Design\nDurability: Reinforced Construction, Daily Use\nUsage: Ideal for water, juice, and everyday beverages\nMaintenance: Dishwasher safe\nManufactured by: Shivholic Kitchenware',
      category: 'Glass',
      url: 'product/glass'
    },
    {
      name: 'Stylish Glass',
      images: [
        'assets/products/glass/stylish-glass/stylish-glass-1.jpg',
        'assets/products/glass/stylish-glass/stylish-glass-2.jpg',
        'assets/products/glass/stylish-glass/stylish-glass-3.jpg'
      ],
      description: 'Fashion-forward stylish glass with contemporary design elements. The sleek silhouette and premium finish make it a statement piece for modern dining tables.',
      details: 'Material: Premium Glass\nCapacity: 290ml\nFeatures: Unique Shape, Balanced Weight, Designer Aesthetics\nDurability: High-Quality Construction, Resistant to Chipping\nUsage: Perfect for cocktails, spirits, and entertaining\nMaintenance: Hand wash recommended\nManufactured by: Shivholic Kitchenware',
      category: 'Glass',
      url: 'product/glass'
    },
    {
      name: 'Glass With Straw',
      images: [
        'assets/products/glass-with-straw/glass-with-straw-1.jpg',
        'assets/products/glass-with-straw/glass-with-straw-2.jpg'
      ],
      description: 'Premium glass with integrated straw design for convenient sipping. The innovative combination offers a stylish and eco-friendly alternative to disposable straws while enhancing your beverage experience.',
      details: 'Material: High-Quality Borosilicate Glass\nCapacity: 350ml\nFeatures: Built-in Glass Straw, Leak-Proof Design, Wide Mouth, Ergonomic Grip\nDurability: Heat-Resistant, Thermal Shock Proof, Dishwasher Safe\nUsage: Perfect for smoothies, juices, iced coffee, cocktails, and cold beverages\nMaintenance: Dishwasher safe, includes specialized cleaning brush\nManufactured by: Shivholic Kitchenware',
      category: 'Glass',
      url: 'product/glass'
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
