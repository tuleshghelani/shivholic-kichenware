import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import Aos from 'aos';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  constructor(
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title
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
      this.initSlider();
    }
  }

  private initSlider() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let current = 0;

    function showSlide(idx: number) {
      slides.forEach((slide, i) => {
        (slide as HTMLElement).classList.toggle('active', i === idx);
      });
    }

    prevBtn?.addEventListener('click', () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });

    nextBtn?.addEventListener('click', () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });

    showSlide(current);
  }

}
