import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'panel',
  },
  {
    path: 'panel',
    loadComponent: () =>
      import('./modules/panel/panel.component').then((m) => m.PanelComponent),
  },
];
