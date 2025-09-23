import { Routes } from '@angular/router';

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
    path: 'S-form',
    loadComponent: () =>
      import('./components/submission-form/submission-form').then((c) => c.SubmissionForm),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
