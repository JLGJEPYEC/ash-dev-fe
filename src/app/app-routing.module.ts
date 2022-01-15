import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
    import('./pages/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'login',
    loadChildren: () =>
    import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
    import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
    import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'especializacion',
    loadChildren: () =>
    import('./pages/especializacion/especializacion.module').then((m) => m.EspecializacionModule),
  },
  {
    path: 'user',
    loadChildren: () =>
    import('./pages/user/user.module').then((m) => m.UserModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}