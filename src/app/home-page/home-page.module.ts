import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from './components';
import {NavigationPanelRoutingModule} from './home-page-routing.module';




@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    NavigationPanelRoutingModule
  ]
})
export class HomePageModule { }
