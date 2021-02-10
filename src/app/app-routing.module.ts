import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './components';
import {LoginFormComponent} from './components';
import {RegisterFormComponent} from './components';




const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
