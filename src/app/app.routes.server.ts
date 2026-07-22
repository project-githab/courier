import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'dashboard', renderMode: RenderMode.Client },
  { path: 'orders', renderMode: RenderMode.Client },
  { path: 'orders/active', renderMode: RenderMode.Client },
  { path: 'orders/story', renderMode: RenderMode.Client },

  { path: 'couriers', renderMode: RenderMode.Client },
  { path: 'couriers/free', renderMode: RenderMode.Client },
  { path: 'couriers/delivery', renderMode: RenderMode.Client },
  { path: 'couriers/line', renderMode: RenderMode.Client },

  { path: 'transport', renderMode: RenderMode.Client },
  { path: 'finance', renderMode: RenderMode.Client },
  { path: 'company', renderMode: RenderMode.Client },
  { path: '**', renderMode: RenderMode.Prerender },
];
