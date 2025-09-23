import { Routes } from '@angular/router';
import { Panel } from './components/authentication-flow/panel/panel';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/authentication-flow/auth/auth.routes').then((c) => c.authRoute),
  },
  {
    path: 'R-management',
    loadComponent: () =>
      import('./components/resource-management/resource-management').then(
        (c) => c.ResourceManagement
      ),
  },
  {
    path: 'Z-event',
    loadComponent: () =>
      import('./components/zanjan-event/zanjan-event').then((c) => c.ZanjanEvent),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
