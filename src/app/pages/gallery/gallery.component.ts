import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  images: GalleryImage[] = [];
  showModal = false;
  currentImageIndex = 0;
  
  ngOnInit(): void {
    // Initialize gallery images
    this.images = [
      { id: 1, src: '/assets/gallery/1.jpg', alt: 'Gallery Image 1' },
      { id: 2, src: '/assets/gallery/2.jpg', alt: 'Gallery Image 2' },
      { id: 3, src: '/assets/gallery/3.jpg', alt: 'Gallery Image 3' },
      { id: 4, src: '/assets/gallery/4.jpg', alt: 'Gallery Image 4' },
      { id: 5, src: '/assets/gallery/5.jpg', alt: 'Gallery Image 5' },
      { id: 6, src: '/assets/gallery/6.jpg', alt: 'Gallery Image 6' }
    ];
  }

  openModal(index: number): void {
    this.currentImageIndex = index;
    this.showModal = true;
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.showModal = false;
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = 'auto';
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  // Close modal when clicking outside the image
  onModalClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }
}
