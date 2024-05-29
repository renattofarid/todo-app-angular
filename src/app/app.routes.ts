import { Routes } from '@angular/router';
import { LoginComponent } from './views';

export const lazyRoutes: Routes = [
  {
    path: 'auth',
    component: LoginComponent
  },
  {
    path: 'tasks',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  { path: '',   redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth', pathMatch: 'full' }
];

export const routes: Routes = lazyRoutes;
