import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import Aos from 'aos';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { Inject } from '@angular/core';
import { CustomizeDiePopupComponent } from '../../components/customize-die-popup/customize-die-popup.component';
import { FloatingButtonsComponent } from '../../components/floating-buttons/floating-buttons.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CustomizeDiePopupComponent, FloatingButtonsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  // private platformId = inject(PLATFORM_ID);
  private sliderInterval: any;
  private currentIndex = 0;
  showCustomizeDiePopup = false;

  constructor(
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title,
    private productService: ProductService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.setupSEO();
    this.setupStructuredData();
  }

  private setupSEO() {
    // Example SEO setup
    this.title.setTitle('Home | Shivholic');
    this.meta.updateTag({ name: 'description', content: 'Premium, professional, and scalable solutions for your business. Discover our unique approach and get started today.' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

  private setupStructuredData() {
    // Example structured data (JSON-LD)
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Shivholic',
      'url': 'https://shivholic.com',
      'description': 'Premium, professional, and scalable solutions for your business.'
    };
    this.meta.addTag({
      name: 'application/ld+json',
      content: JSON.stringify(jsonLd)
    }, true);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({
        duration: 1000,
        once: true
      });
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.showSlide(this.currentIndex);
      this.attachButtonListeners();
      this.attachIndicatorListeners();
      this.startAutoSlide();
      if (!(window as any).googleTranslateElementInit) {
        (window as any).googleTranslateElementInit = function() {
          // Desktop
          if (document.getElementById('google_translate_element')) {
            new (window as any).google.translate.TranslateElement(
              {
                pageLanguage: 'en',
                layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              },
              'google_translate_element'
            );
          }
          // Mobile
          if (document.getElementById('google_translate_element_mobile')) {
            new (window as any).google.translate.TranslateElement(
              {
                pageLanguage: 'en',
                layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              },
              'google_translate_element_mobile'
            );
          }
        };
        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(script);
      }
    }
  }

  ngOnDestroy() {
    this.clearAutoSlide();
  }

  private get slides(): NodeListOf<Element> {
    return document.querySelectorAll('.slide');
  }

  private get indicators(): NodeListOf<Element> {
    return document.querySelectorAll('.indicator');
  }

  private startAutoSlide() {
    this.clearAutoSlide();
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  private clearAutoSlide() {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }

  private showSlide(index: number) {
    this.slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    this.indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
    this.currentIndex = index;
  }

  private nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide(nextIndex);
  }

  private prevSlide() {
    const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.showSlide(prevIndex);
  }

  private attachButtonListeners() {
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.prevSlide();
        this.startAutoSlide();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.nextSlide();
        this.startAutoSlide();
      });
    }
  }

  private attachIndicatorListeners() {
    this.indicators.forEach((indicator, i) => {
      indicator.addEventListener('click', () => {
        this.showSlide(i);
        this.startAutoSlide();
      });
    });
  }

  premiumProducts = [
    // One product from Chilli Cutter category
    {
      name: 'Premium Chilli Cutter',
      description: 'Top-tier plastic chilli cutter with advanced design and superior cutting performance. The ultimate kitchen tool for chilli lovers.',
      isNew: true,
      image: 'assets/products/Chilly-cutter/Premium-chilli-cutter/premium-chilli-cutter-1.jpg'
    },
    // One product from Masala Box category
    {
      name: 'Kitchen Ware Masala Box',
      description: 'Premium quality masala box for your kitchen. Keeps your spices fresh and organized.',
      isNew: false,
      image: 'assets/products/masala-box/masala-box-1.jpg'
    },
    // One product from Jug category
    {
      name: 'Kitchenware Jug',
      description: 'Elegant jug for serving water and beverages. Perfect for home and parties.',
      isNew: true,
      image: 'assets/products/jug/jug-1.jpg'
    },
    // One product from Glass category
    {
      name: 'Crystal Glass',
      description: 'Luxurious crystal glass with exceptional clarity and brilliance. Elevate your dining experience with this premium glassware.',
      isNew: false,
      image: 'assets/products/Glass/Crystal-glass/crystal-glass-1.jpg'
    },
  ];

  openCustomizeDiePopup(): void {
    this.showCustomizeDiePopup = true;
    // Prevent scrolling when popup is open
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeCustomizeDiePopup(): void {
    this.showCustomizeDiePopup = false;
    // Re-enable scrolling when popup is closed
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }
}
