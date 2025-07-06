import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  categories: string[] = [];
  selectedCategory: string | null = null;
  products: Product[] = [];
  showModal = false;
  selectedProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.products = this.productService.getProducts(category);
  }

  showAllProducts() {
    this.selectedCategory = null;
    this.products = this.productService.getProducts();
  }

  openProduct(product: Product) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedProduct = null;
  }
}
