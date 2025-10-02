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
    path: 'process',
    loadComponent: () => import('./pages/process/process.component').then(m => m.ProcessComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent)
  },
  {
    path: 'product/chilli-cutter',
    loadComponent: () => import('./pages/category-wise-products/chilli-cutter/chilli-cutter.component').then(m => m.ChilliCutterComponent)
  },
  {
    path: 'product/glass',
    loadComponent: () => import('./pages/category-wise-products/glass/glass.component').then(m => m.GlassComponent)
  },
  {
    path: 'product/jug',
    loadComponent: () => import('./pages/category-wise-products/jug/jug.component').then(m => m.JugComponent)
  },
  {
    path: 'home-decor',
    loadComponent: () => import('./pages/home-decor/home-decor.component').then(m => m.HomeDecorComponent)
  },


  // ... other routes
];
