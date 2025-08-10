import { Component, OnInit, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingButtonsComponent } from './components/floating-buttons/floating-buttons.component';
import { CustomizeDiePopupComponent } from './components/customize-die-popup/customize-die-popup.component';
import { ContentProtectionService } from './services/content-protection.service';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, FloatingButtonsComponent, CustomizeDiePopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'shivholic';
  showCustomizeDiePopup = false;
  isBrowser: boolean;

  constructor(
    private contentProtectionService: ContentProtectionService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Only run browser-specific code when in browser environment
    if (this.isBrowser) {
      // Initialize AOS or other global libraries if needed
      AOS.init();
      
      // Disable text selection across the website
      this.disableTextSelection();
      
      // Initialize content protection features
      this.contentProtectionService.initialize();
    }
  }

  openCustomizeDiePopup(): void {
    this.showCustomizeDiePopup = true;
    if (this.isBrowser) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeCustomizeDiePopup(): void {
    this.showCustomizeDiePopup = false;
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }

  // Prevent right-click on the entire website
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    if (this.isBrowser) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  // Prevent copy operations
  @HostListener('copy', ['$event'])
  onCopy(event: ClipboardEvent) {
    if (this.isBrowser) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  // Prevent cut operations
  @HostListener('cut', ['$event'])
  onCut(event: ClipboardEvent) {
    if (this.isBrowser) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  // Prevent paste operations
  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    if (this.isBrowser) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  // Disable text selection across the website
  private disableTextSelection() {
    if (this.isBrowser) {
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
      // document.body.style.msUserSelect = 'none';
      // document.body.style.mozUserSelect = 'none';
    }
  }
}
