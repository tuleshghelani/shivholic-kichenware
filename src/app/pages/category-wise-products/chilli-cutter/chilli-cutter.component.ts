import { Component, OnInit, HostListener, ElementRef, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { ProductService, Product } from '../../../services/product.service';

@Component({
  selector: 'app-chilli-cutter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chilli-cutter.component.html',
  styleUrl: './chilli-cutter.component.scss'
})
export class ChilliCutterComponent implements OnInit, OnDestroy {
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
    // Get only Chilli Cutter products
    this.products = this.productService.getProducts('Chilli Cutter');
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
    // if (product.url && isPlatformBrowser(this.platformId)) {
    //   window.location.href = product.url;
    //   return;
    // }
    
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