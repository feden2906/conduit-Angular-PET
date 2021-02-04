import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterRoutingModule} from './register-routing.module';
import {RegisterFormComponent} from './components';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [RegisterFormComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class RegisterModule { }
