import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {RegisterService} from '../../services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  errors2: string[];

  constructor(private registerService: RegisterService, private formBuilder: FormBuilder, private router: Router) {
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
        localStorage.setItem('jwtToken', data.user.token);

        this.router.navigate(['home'], {state: data.user});
      },
      e => {
        const errors = e.error.errors;
        const errorKeys = Object.keys(errors);
        const arr = [];
        errorKeys.map(key => errors[key].map(value => arr.push(`${key} ${value}`)));
        this.errors2 = arr;
      }
    );
  }

}
