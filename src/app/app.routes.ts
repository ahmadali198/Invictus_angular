import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about',            loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'services',         loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'portfolio',        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'careers',          loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'training-program', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'contact',          loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'blog',             loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: '**', redirectTo: '' }
];
