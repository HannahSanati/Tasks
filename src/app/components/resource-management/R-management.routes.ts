import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Table } from './table/table';

export const Rmanagement : Routes = [
    {
        path: 'table',
        component: Table,
        outlet: 'main'
      },
      {
        path: 'header',
        component: Header,
        outlet: 'header'
      }
];
