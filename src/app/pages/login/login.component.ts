import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../_services/authentication.service";
import {AlertService} from "../../_services/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(protected authService: AuthenticationService,
              public alertService: AlertService,
              public router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void { }

  /**
   * Attempt to sign in the user with the given credentials.
   *
   * @return false if the login form has invalid data, otherwise true
   */
  onLogin(): boolean {
    if (!this.loginForm.valid) {
      return false;
    }

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((success) => {
      this.router.navigate(['/']).then(() => {
        this.alertService.success('Successfully logged in');
      });
    }, (error) => {
      this.alertService.error(error.message);
    });

    return true;
  }
}
