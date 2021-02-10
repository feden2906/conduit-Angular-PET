import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {
  FooterComponent,
  HeaderComponent,
  HomePageComponent,
  LoginFormComponent,
  PopularTagsComponent,
  PostComponent,
  PostsComponent,
  RegisterFormComponent
} from './components';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    PopularTagsComponent,
    PostComponent,
    PostsComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
