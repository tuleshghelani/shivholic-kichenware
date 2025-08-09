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
    {
      name: 'Product 1',
      description: 'Experience the best in class with Product 1, crafted for durability and elegance.',
      isNew: true,
    },
    {
      name: 'Product 2',
      description: 'Product 2 combines modern design with unmatched performance for your kitchen.',
      isNew: false,
    },
    {
      name: 'Product 3',
      description: 'Elevate your cooking with Product 3, a perfect blend of style and functionality.',
      isNew: true,
    },
    {
      name: 'Product 4',
      description: 'Discover the premium quality of Product 4, designed for professional results.',
      isNew: false,
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
