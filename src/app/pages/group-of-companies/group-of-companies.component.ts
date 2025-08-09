import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-group-of-companies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-of-companies.component.html',
  styleUrl: './group-of-companies.component.scss'
})
export class GroupOfCompaniesComponent implements OnInit {
  yearsExperience: number = 0;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit(): void {
    // Set a default value for SSR
    this.yearsExperience = 25;
    
    // Only calculate the actual value in the browser
    if (isPlatformBrowser(this.platformId)) {
      // Use setTimeout to ensure this runs after the component is rendered in the browser
      setTimeout(() => {
        const currentYear = new Date().getFullYear();
        this.yearsExperience = currentYear - 2000;
        console.log('Years of Experience:', this.yearsExperience);
      }, 0);
    }
  }
}
