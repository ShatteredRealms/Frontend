import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../_services/authentication.service";
import {AlertService} from "../../../_services/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;

  constructor(protected authService: AuthenticationService,
              public alertService: AlertService,
              public router: Router) { }

  ngOnInit(): void {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']).then(() => {
        this.alertService.warn('You are already signed in.')
      });
    }

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  /**
   * Attempt to sign in the user with the given credentials.
   *
   * @return false if the login form has invalid data, otherwise true
   */
  onLogin(): boolean {
    if (!this.loginForm.valid) {
      this.alertService.warn('Invalid email or password fields', {id: 'login-alert', autoClose: true})
      return false;
    }
    this.loading = true;

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((success) => {
      this.router.navigate(['/']).then(() => {
        this.alertService.success('Successfully logged in', {autoClose: true});
      });
    }, (error) => {
      if(error.status == 401) {
        this.alertService.warn('Invalid email or password', {id: 'login-alert', autoClose: true})
      } else {
        this.alertService.error('Error communicating with the server. Please try again later.');
      }
    }).add(() => {
      this.loading = false;
    });

    return true;
  }
}
