import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'main',
    loadComponent: () =>
      import('./components/main/main.component').then((m) => m.MainComponent),
  },
];
