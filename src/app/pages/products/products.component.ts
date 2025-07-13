import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, ElementRef, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';

interface CategoryWithProducts {
  name: string;
  products: Product[];
  isExpanded: boolean;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {
  categories: CategoryWithProducts[] = [];
  selectedCategory: string | null = null;
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
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.initializeCategories();
    this.products = this.productService.getProducts();
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

  private initializeCategories() {
    const categoryNames = this.productService.getCategories();
    this.categories = categoryNames.map(categoryName => ({
      name: categoryName,
      products: this.productService.getProducts(categoryName),
      isExpanded: false
    }));
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

  scrollToProducts() {
    if (isPlatformBrowser(this.platformId) && window.innerWidth <= 900) {
      setTimeout(() => {
        const productsGrid = this.elementRef.nativeElement.querySelector('.product-grid');
        if (productsGrid) {
          productsGrid.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }

  selectCategory(category: CategoryWithProducts) {
    this.selectedCategory = category.name;
    this.products = category.products;
    this.scrollToProducts();
    
    // Expand the selected category and close others
    this.categories.forEach(cat => {
      if (cat.name === category.name) {
        cat.isExpanded = true; // Expand the selected category
      } else {
        cat.isExpanded = false; // Close other categories
      }
    });
  }

  showAllProducts() {
    this.selectedCategory = null;
    this.products = this.productService.getProducts();
    this.scrollToProducts();
    
    // Close all expanded categories
    this.categories.forEach(cat => {
      cat.isExpanded = false;
    });
  }

  toggleCategoryExpansion(category: CategoryWithProducts, event: Event) {
    event.stopPropagation();
    category.isExpanded = !category.isExpanded;
    
    // Close other categories when one is expanded
    this.categories.forEach(cat => {
      if (cat.name !== category.name) {
        cat.isExpanded = false;
      }
    });
  }

  selectProductFromDropdown(product: Product, category: CategoryWithProducts, event: Event) {
    event.stopPropagation();
    this.selectedProduct = product;
    this.selectedImageIndex = 0;
    this.showModal = true;
    category.isExpanded = false;
    
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

  openModal(product: Product) {
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
