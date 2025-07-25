import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent)
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent)
  },
  {
    path: 'group-of-companies',
    loadComponent: () => import('./pages/group-of-companies/group-of-companies.component').then(m => m.GroupOfCompaniesComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'product/chilli-cutter/regular-chilli-cutter',
    loadComponent: () => import('./pages/all-products/regular-chilli-cutter/regular-chilli-cutter.component').then(m => m.RegularChilliCutterComponent)
  },
  // ... other routes
];
