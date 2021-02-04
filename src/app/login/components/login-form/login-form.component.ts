import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  errors2: string[];

  constructor(private loginService: LoginService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  clickSignIn(): void {
    const user = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    };

    this.loginService.loginUser(user).subscribe((data) => {
        localStorage.setItem('jwtToken', data.user.token);
        // this.setUser(data.user);
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
