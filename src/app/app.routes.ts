import { Routes } from '@angular/router';
import { Login } from './components/authentication-flow/login/login';
import { Panel } from './components/authentication-flow/panel/panel';
import { AuthGuard } from './components/authentication-flow/auth/auth.guard';

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
    children: [
      { path: 'login', component: Login },
      { path: 'panel', component: Panel, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    redirectTo: 'authentication-flow',
    pathMatch: 'full'
  }
];