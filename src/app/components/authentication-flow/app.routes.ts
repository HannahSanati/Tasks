import { AuthGuard } from './auth/auth.guard';
import { Panel } from './panel/panel';
import { Login } from './login/login';
import { Routes } from '@angular/router';

const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'panel', component: Panel, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  ];