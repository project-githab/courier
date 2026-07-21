import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pub/w-home/w-home').then((m) => m.WHome),
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./private/pw-dashboard/pw-dashboard').then((m) => m.PwDashboard),
    pathMatch: 'full',
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./private/orders/pw-order-main/pw-order-main').then((m) => m.PwOrderMain),
    children: [
      {
        path: 'active',
        loadComponent: () =>
          import('./private/orders/pw-active/pws-active').then((m) => m.PwsActive),
        pathMatch: 'full',
      },
      {
        path: 'story',
        loadComponent: () => import('./private/orders/pw-story/pws-story').then((m) => m.PwsStory),
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'income',
    loadComponent: () => import('./private/pw-income/pw-income').then((m) => m.PwIncome),
    pathMatch: 'full',
  },
  {
    path: 'schedule',
    loadComponent: () => import('./private/pw-schedule/pw-schedule').then((m) => m.PwSchedule),
    pathMatch: 'full',
  },
  {
    path: 'profile',
    loadComponent: () => import('./private/pw-profile/pw-profile').then((m) => m.PwProfile),
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('./pub/w-error/w-error').then((m) => m.WError),
    pathMatch: 'full',
  },
];
