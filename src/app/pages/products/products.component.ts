import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, ElementRef, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {
  categories: string[] = [];
  selectedCategory: string | null = null;
  products: Product[] = [];
  showModal = false;
  selectedProduct: Product | null = null;
  selectedImageIndex = 0; // Track the currently selected image
  isLoading = true;
  showBackToTop = false;
  private scrollListener: any;

  constructor(
    private productService: ProductService, 
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
    this.isLoading = false;

    // Add scroll event listener for back to top button only in browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.scrollListener = () => this.checkScrollPosition();
      window.addEventListener('scroll', this.scrollListener);
    }
  }

  ngOnDestroy() {
    // Remove scroll event listener when component is destroyed (browser only)
    if (isPlatformBrowser(this.platformId) && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  // Check scroll position to show/hide back to top button
  checkScrollPosition() {
    if (isPlatformBrowser(this.platformId)) {
      this.showBackToTop = window.scrollY > 300;
    }
  }

  // Scroll to top of the page
  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Scroll to products section for mobile view
  scrollToProducts() {
    if (isPlatformBrowser(this.platformId) && window.innerWidth <= 900) {
      setTimeout(() => {
        const productsGrid = this.elementRef.nativeElement.querySelector('.products-grid');
        if (productsGrid) {
          productsGrid.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.products = this.productService.getProducts(category);
    this.scrollToProducts();
  }

  showAllProducts() {
    this.selectedCategory = null;
    this.products = this.productService.getProducts();
    this.scrollToProducts();
  }

  openModal(product: Product) {
    this.selectedProduct = product;
    this.selectedImageIndex = 0; // Reset to first image when opening modal
    this.showModal = true;
    
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      
      // Set focus to the close button for accessibility
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
      document.body.style.overflow = ''; // Restore scrolling
    }
  }

  // Method to handle thumbnail selection
  selectImage(index: number) {
    if (this.selectedProduct && index >= 0 && index < this.selectedProduct.images.length) {
      this.selectedImageIndex = index;
    }
  }
}
