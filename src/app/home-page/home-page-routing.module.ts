import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './components';
import {PopularTagsResolveService} from './services';

const routes: Routes = [
  {path: '', component: HomePageComponent, resolve: {tagsData: PopularTagsResolveService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationPanelRoutingModule { }
