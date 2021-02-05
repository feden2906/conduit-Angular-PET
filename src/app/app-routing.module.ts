import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CheckTokenResolveService} from './services';

const routes: Routes = [
  {
    path: 'home',
    resolve: {userData: CheckTokenResolveService},
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
  },
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
