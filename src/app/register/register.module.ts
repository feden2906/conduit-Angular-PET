import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterRoutingModule} from './register-routing.module';
import {RegisterFormComponent} from './components';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [RegisterFormComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
