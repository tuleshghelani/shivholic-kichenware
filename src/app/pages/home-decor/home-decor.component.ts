import { Component, OnInit, HostListener, ElementRef, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-decor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-decor.component.html',
  styleUrl: './home-decor.component.scss'
})
export class HomeDecorComponent implements OnInit, OnDestroy {
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
    this.titleService.setTitle('Premium Home Decor Products | Shivholic Kitchenware');
    this.metaService.updateTag({ name: 'description', content: 'Explore our premium range of home decor products. Sacred Shivlings and spiritual items crafted with precision for your home temple and meditation spaces.' });
    this.metaService.updateTag({ name: 'keywords', content: 'home decor, shivling, spiritual items, home temple, meditation decor, zinc metal, Shivholic Kitchenware' });
    
    // Get only Home Decor products
    this.products = this.productService.getHomeDecorProducts();
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
