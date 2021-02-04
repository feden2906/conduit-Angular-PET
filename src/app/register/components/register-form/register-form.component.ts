import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {RegisterService} from '../../services/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  errors: object[];
  errorKeys: string[];

  constructor(private registerService: RegisterService, private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: new FormControl(''),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  clickSignUp(): void {
    const user = {
      username: this.registerForm.controls.username.value,
      email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value
    };

    this.registerService.registerUser(user).subscribe(data => {
        console.log(data);
      },
      e => {
        this.errors = e.error.errors;
        this.errorKeys = Object.keys(e.error.errors);
      }
    );

  }

}
