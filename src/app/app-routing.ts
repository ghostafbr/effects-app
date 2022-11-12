import { Routes } from '@angular/router';

export const AppRouting: Routes = [

  {
    path: 'home',
    loadComponent: () => import('./users/list/list.component').then(mod => mod.ListComponent)
  },
  {
    path: 'user/:id',
    loadComponent: () => import('./users/user/user.component').then(mod => mod.UserComponent)
  },
  {path: '**', redirectTo: '' },


  /*{
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then(mod => mod.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.component').then(mod => mod.RegisterComponent)
  },
  {
    path: '',
    canLoad: [AuthGuard],
    loadComponent: () => import('./dashboard/dashboard.component').then(mod => mod.DashboardComponent),
    loadChildren: () => import('./dashboard/dashboard.routing').then(mod => mod.DashboardRouting),
    providers: [
      importProvidersFrom(
        StoreModule.forFeature('incomeExpense', incomeExpenseReducer)
      ),
    ],
  },*/
];

