import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent, PopularTagsComponent} from './components';
import {NavigationPanelRoutingModule} from './home-page-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';


@NgModule({
  declarations: [HomePageComponent, PopularTagsComponent, PostsComponent, PostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NavigationPanelRoutingModule
  ]
})
export class HomePageModule {
}
