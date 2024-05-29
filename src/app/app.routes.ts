import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards';

export const lazyRoutes: Routes = [
  {
    path: 'auth',
    component: LoginComponent
  },
  {
    path: 'tasks',
    canLoad: [AuthGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  { path: '',   redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth', pathMatch: 'full' }
];

export const routes: Routes = lazyRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
