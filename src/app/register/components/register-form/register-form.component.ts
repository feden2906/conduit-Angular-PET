import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterForm} from '../../models';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  formValue: RegisterForm;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  clickSignUp(): void {
    console.log(this.registerForm);
  }

}
