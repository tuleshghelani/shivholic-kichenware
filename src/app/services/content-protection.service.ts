import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ContentProtectionService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  /**
   * Initialize content protection features
   */
  initialize(): void {
    // Only run browser-specific code when in browser environment
    if (this.isBrowser) {
      this.disableKeyboardShortcuts();
      this.detectDevTools();
    }
  }

  /**
   * Disable keyboard shortcuts that could be used to copy content or open developer tools
   */
  private disableKeyboardShortcuts(): void {
    if (!this.isBrowser) return;
    
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      // Disable F12 key (developer tools)
      if (event.key === 'F12') {
        event.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+I (developer tools)
      if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+J (developer tools)
      if (event.ctrlKey && event.shiftKey && event.key === 'J') {
        event.preventDefault();
        return false;
      }

      // Disable Ctrl+U (view source)
      if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        return false;
      }

      // Disable Ctrl+S (save page)
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        return false;
      }

      // Disable Ctrl+A (select all)
      if (event.ctrlKey && event.key === 'a') {
        // Allow Ctrl+A in input fields and textareas
        const target = event.target as HTMLElement;
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
          event.preventDefault();
          return false;
        }
      }

      return true;
    });
  }

  /**
   * Detect and disable developer tools
   */
  private detectDevTools(): void {
    if (!this.isBrowser) return;
    
    const checkDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      if (widthThreshold || heightThreshold) {
        document.body.innerHTML = '<h1 style="text-align:center;margin-top:50px;">Developer tools detected. Please close developer tools to continue.</h1>';
      }
    };

    // Check periodically
    setInterval(checkDevTools, 1000);
  }
}