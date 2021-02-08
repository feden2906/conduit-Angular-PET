import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent, PopularTagsComponent} from './components';
import {NavigationPanelRoutingModule} from './home-page-routing.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [HomePageComponent, PopularTagsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NavigationPanelRoutingModule
  ]
})
export class HomePageModule {
}
