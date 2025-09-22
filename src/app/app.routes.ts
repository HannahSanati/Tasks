import { Routes } from '@angular/router';
import { Panel } from './components/authentication-flow/panel/panel';
import { AuthGuard } from './components/authentication-flow/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./components/authentication-flow/auth/auth.routes').then((c) => c.authRoute),
  },
  {
    path: 'panel',
    component: Panel,
  },

];
