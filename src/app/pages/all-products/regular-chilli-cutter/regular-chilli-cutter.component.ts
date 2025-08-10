import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { ProductService, Product } from '../../../services/product.service';

@Component({
  selector: 'app-regular-chilli-cutter',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './regular-chilli-cutter.component.html',
  styleUrl: './regular-chilli-cutter.component.scss'
})
export class RegularChilliCutterComponent implements OnInit {
  product: Product | undefined;
  selectedImageIndex = 0;
  relatedProducts: Product[] = [];
  isBrowser: boolean;

  constructor(
    private productService: ProductService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Get the product data
    const productId = 'regular-chilli-cutter'; // Use a unique identifier
    this.product = this.productService.getProductById(productId);
    
    // Get related products (other chilli cutters or kitchen tools)
    this.relatedProducts = this.productService.getRelatedProducts(productId, 3);
    
    // Set SEO metadata
    if (this.product) {
      this.setMetaTags();
    } else {
      console.error('Product not found: Regular Chilli Cutter');
    }
  }

  selectImage(index: number) {
    if (this.product && index >= 0 && index < this.product.images.length) {
      this.selectedImageIndex = index;
    }
  }

  private setMetaTags() {
    if (!this.product) return;

    this.title.setTitle(`Regular Chilli Cutter - Premium Kitchen Tool | Shivholic Kitchenware`);
    
    // Set meta description
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Buy premium quality Regular Chilli Cutter from Shivholic Kitchenware. Made from durable plastic/PET material with ergonomic design and sharp blades for efficient cutting of green chilies. Perfect for everyday kitchen use.'
    });
    
    // Set keywords
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'chilli cutter, green chilli cutter, kitchen tools, plastic chilli cutter, regular chilli cutter, Shivholic Kitchenware, kitchen gadgets, vegetable cutter, cooking tools, Indian kitchen tools'
    });
    
    // Set canonical URL
    this.meta.updateTag({ 
      property: 'og:url', 
      content: 'https://www.shivholicindia.com/products/chilli-cutter/regular-chilli-cutter'
    });
    
    // Set Open Graph tags for social sharing
    this.meta.updateTag({ property: 'og:title', content: 'Regular Chilli Cutter - Premium Kitchen Tool | Shivholic Kitchenware' });
    this.meta.updateTag({ property: 'og:description', content: this.product.description });
    this.meta.updateTag({ property: 'og:image', content: this.product.images[0] });
    this.meta.updateTag({ property: 'og:type', content: 'product' });
    
    // Set Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Regular Chilli Cutter - Premium Kitchen Tool | Shivholic Kitchenware' });
    this.meta.updateTag({ name: 'twitter:description', content: this.product.description });
    this.meta.updateTag({ name: 'twitter:image', content: this.product.images[0] });
    
    // Add structured data for SEO
    this.addStructuredData();
  }
  
  private addStructuredData() {
    if (!this.product || !this.isBrowser) return;
    
    // Create the structured data script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    // Create the structured data object
    const structuredData = {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: this.product.name,
      image: this.product.images,
      description: this.product.description,
      brand: {
        '@type': 'Brand',
        name: 'Shivholic Kitchenware'
      },
      offers: {
        '@type': 'Offer',
        url: 'https://www.shivholicindia.com/products/chilli-cutter/regular-chilli-cutter',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock'
      }
    };
    
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
}
