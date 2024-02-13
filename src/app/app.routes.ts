import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'level1',
    loadComponent: () => import('./level1/level1.page').then( m => m.Level1Page)
  },
  {
    path: 'level2',
    loadComponent: () => import('./level2/level2.page').then( m => m.Level2Page)
  },
  {
    path: 'level3',
    loadComponent: () => import('./level3/level3.page').then( m => m.Level3Page)
  },
  {
    path: 'level3/:id',
    loadComponent: () => import('./level3/level3.page').then( m => m.Level3Page)
  },
];
