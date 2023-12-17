import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/main/main.component').then((m) => m.MainComponent),
  },
  {
    path: 'under-construction',
    loadComponent: () =>
      import('./pages/under-construction/under-construction.component').then(
        (m) => m.UnderConstructionComponent
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'under-construction',
  },
];
