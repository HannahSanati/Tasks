import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'resource-management',
    loadComponent: () =>
      import('./components/resource-management/resource-management')
        .then(c => c.ResourceManagement),
  },
  {
    path: 'zanjan-event',
    loadComponent: () =>
      import('./components/zanjan-event/zanjan-event')
        .then(c => c.ZanjanEvent),
  },
  {
    path: 'authentication-flow',
    loadComponent: () =>
      import('./components/authentication-flow/authentication-flow')
        .then(c => c.AuthenticationFlow),
  },
  {
    path: '',
    redirectTo: 'authentication-flow',
    pathMatch: 'full'
  }
];