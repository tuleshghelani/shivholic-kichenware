import { Component, OnInit, HostListener, ElementRef, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { ProductService, Product } from '../../../services/product.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-jug',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jug.component.html',
  styleUrl: './jug.component.scss'
})
export class JugComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  showModal = false;
  selectedProduct: Product | null = null;
  selectedImageIndex = 0;
  isLoading = true;
  showBackToTop = false;
  private scrollListener: any;

  constructor(
    public productService: ProductService,
    private elementRef: ElementRef,
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Set SEO metadata
    this.titleService.setTitle('Premium Jug Collection | Shivholic Kitchenware');
    this.metaService.updateTag({ name: 'description', content: 'Explore our premium range of jugs. Elegant, durable, and stylish jugs for your kitchen and dining needs.' });
    this.metaService.updateTag({ name: 'keywords', content: 'jug products, premium jugs, kitchen jugs, water jugs, serving jugs, Shivholic Kitchenware' });
    
    // Get only Jug products
    this.products = this.productService.getProducts('Jug');
    this.isLoading = false;

    if (isPlatformBrowser(this.platformId)) {
      this.scrollListener = () => this.checkScrollPosition();
      window.addEventListener('scroll', this.scrollListener);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  checkScrollPosition() {
    if (isPlatformBrowser(this.platformId)) {
      this.showBackToTop = window.scrollY > 300;
    }
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  openModal(product: Product) {
    // If product has a URL, redirect to it instead of opening the modal
    // Otherwise, open the modal as usual
    this.selectedProduct = product;
    this.selectedImageIndex = 0;
    this.showModal = true;
    
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
      
      setTimeout(() => {
        const closeButton = this.elementRef.nativeElement.querySelector('.close-btn');
        if (closeButton) {
          closeButton.focus();
        }
      }, 100);
    }
  }

  closeModal() {
    this.showModal = false;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  selectImage(index: number) {
    if (this.selectedProduct && index >= 0 && index < this.selectedProduct.images.length) {
      this.selectedImageIndex = index;
    }
  }
}
