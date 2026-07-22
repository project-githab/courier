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
    path: 'couriers',
    loadComponent: () =>
      import('./private/couriers/pw-couriers-main/pw-couriers-main').then((m) => m.PwCouriersMain),
    children: [
      {
        path: 'free',
        loadComponent: () => import('./private/couriers/pw-free/pw-free').then((m) => m.PwFree),
        pathMatch: 'full',
      },
      {
        path: 'delivery',
        loadComponent: () =>
          import('./private/couriers/pw-delivery/pw-delivery').then((m) => m.PwDelivery),
        pathMatch: 'full',
      },
      {
        path: 'line',
        loadComponent: () => import('./private/couriers/pw-line/pw-line').then((m) => m.PwLine),
        pathMatch: 'full',
      },
    ],
  },

  {
    path: 'transport',
    loadComponent: () => import('./private/pw-transport/pw-transport').then((m) => m.PwTransport),
    pathMatch: 'full',
  },
  {
    path: 'finance',
    loadComponent: () => import('./private/pw-finance/pw-finance').then((m) => m.PwFinance),
    pathMatch: 'full',
  },
  {
    path: 'company',
    loadComponent: () => import('./private/pw-company/pw-company').then((m) => m.PwCompany),
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('./pub/w-error/w-error').then((m) => m.WError),
    pathMatch: 'full',
  },
];
