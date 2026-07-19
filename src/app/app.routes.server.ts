import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'dashboard', renderMode: RenderMode.Client },
  { path: 'orders', renderMode: RenderMode.Client },
  { path: 'orders/active', renderMode: RenderMode.Client },
  { path: 'orders/story', renderMode: RenderMode.Client },
  { path: 'income', renderMode: RenderMode.Client },
  { path: 'schedule', renderMode: RenderMode.Client },
  { path: 'profile', renderMode: RenderMode.Client },
  { path: '**', renderMode: RenderMode.Prerender },
];
