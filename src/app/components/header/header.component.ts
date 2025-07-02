import { Component, OnInit, HostListener, inject, PLATFORM_ID, AfterViewInit, Inject } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser, DOCUMENT, ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  // private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);
  private viewportScroller = inject(ViewportScroller);
  private lastScrollPosition = 0;
  cartCount = 0; // TODO: Replace with real cart count from your cart service
  
  isMobileMenuOpen = false;
  isSticky = false;
  hideTopBar = false;

  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Subscribe to router events and scroll to top on navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    // Close mobile menu on route change
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeMobileMenu();
      }
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const currentScroll = window.scrollY;
      this.isSticky = currentScroll > 100;
      this.hideTopBar = currentScroll > 50 && currentScroll > this.lastScrollPosition;
      this.lastScrollPosition = currentScroll;
    }
  }

  toggleMobileMenu(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      this.document.body.classList.toggle('no-scroll', this.isMobileMenuOpen);
    }
  }

  closeMobileMenu(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileMenuOpen = false;
      this.document.body.classList.remove('no-scroll');
    }
  }

  // Close mobile menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const target = event.target as HTMLElement;
    if (this.isMobileMenuOpen && 
        !target.closest('.mobile-nav') && 
        !target.closest('.menu-toggle')) {
      this.closeMobileMenu();
    }
  }

  ngAfterViewInit() {
    // Only run this code in the browser, never on the server!
    if (isPlatformBrowser(this.platformId)) {
      if (!(window as any).googleTranslateElementInit) {
        (window as any).googleTranslateElementInit = function() {
          // Desktop widget
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
          // Mobile widget
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
}
