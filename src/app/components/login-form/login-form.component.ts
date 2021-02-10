import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  errors2: string[];

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
  }

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

    this.authService.loginUser(user).subscribe((data) => {
        this.authService.setJwtToken(data.user.token);
        // this.router.navigate(['home'], {state: data.user});
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
