import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customize-die-popup',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './customize-die-popup.component.html',
  styleUrl: './customize-die-popup.component.scss'
})
export class CustomizeDiePopupComponent {
  @Output() close = new EventEmitter<void>();
  
  closePopup(): void {
    this.close.emit();
  }
}