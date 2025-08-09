import { Component, OnInit, inject, PLATFORM_ID, Output, EventEmitter } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-floating-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-buttons.component.html',
  styleUrl: './floating-buttons.component.scss'
})
export class FloatingButtonsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  @Output() customizeDieClick = new EventEmitter<void>();
  
  constructor() {}

  ngOnInit() {}

  openCustomizeDiePopup(): void {
    this.customizeDieClick.emit();
  }

  openWhatsApp(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.open('https://api.whatsapp.com/send?phone=917046999936&text=Hello', '_blank');
    }
  }
}