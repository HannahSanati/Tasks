import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Panel } from '../panel/panel';
import { Login } from './login/login';
import { AuthenticationFlow } from '../authentication-flow';

export const authRoute: Routes = [
  {
    path: '',
    component: AuthenticationFlow,
    children: [
      {
        path: '',
        component: Login,
      },
      {
        path: 'panel',
        component: Panel,
        canActivate: [AuthGuard],
      },
    ],
  },
];
