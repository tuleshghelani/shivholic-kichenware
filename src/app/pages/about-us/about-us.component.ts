import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.setSEO();
  }

  private setSEO(): void {
    this.titleService.setTitle('About Shivholic - Premium Kitchenware & Custom Die Manufacturing | Since 2020');
    
    this.metaService.updateTag({ name: 'description', content: 'Discover Shivholic\'s journey in premium kitchenware manufacturing. Specializing in custom die design, advanced molding, and professional kitchenware solutions since 2020.' });
    this.metaService.updateTag({ name: 'keywords', content: 'kitchenware manufacturer, custom die design, molding solutions, premium kitchenware, Shivholic, kitchen tools, professional kitchen equipment' });
    this.metaService.updateTag({ name: 'author', content: 'Shivholic Kitchenware' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    
    // Open Graph tags
    this.metaService.updateTag({ property: 'og:title', content: 'About Shivholic - Premium Kitchenware & Custom Die Manufacturing' });
    this.metaService.updateTag({ property: 'og:description', content: 'Leading manufacturer of premium kitchenware and custom die solutions. Quality, innovation, and excellence since 2020.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://shivholic.com/about-us' });
    
    // Twitter Card tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'About Shivholic - Premium Kitchenware & Custom Die Manufacturing' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Leading manufacturer of premium kitchenware and custom die solutions. Quality, innovation, and excellence since 2020.' });
  }
}
