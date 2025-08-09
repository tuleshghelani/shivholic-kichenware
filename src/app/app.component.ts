import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingButtonsComponent } from './components/floating-buttons/floating-buttons.component';
import { CustomizeDiePopupComponent } from './components/customize-die-popup/customize-die-popup.component';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FloatingButtonsComponent, CustomizeDiePopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'shivholic';
  showCustomizeDiePopup = false;

  ngOnInit() {
    // Initialize AOS or other global libraries if needed
  }

  openCustomizeDiePopup(): void {
    this.showCustomizeDiePopup = true;
    document.body.style.overflow = 'hidden';
  }

  closeCustomizeDiePopup(): void {
    this.showCustomizeDiePopup = false;
    document.body.style.overflow = '';
  }
}
