import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../_services/authentication.service";
import {AlertService} from "../../_services/alert.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading: boolean;

  constructor(protected router: Router,
              protected authService: AuthenticationService,
              protected alertService: AlertService) {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.max(25)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(64)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(64)]),
    });
  }

  ngOnInit(): void {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']).then(() => {
        this.alertService.warn('You are already signed in.')
      });

      return;
    }
  }

  onRegister(): void {
    if (!this.registerForm.valid) {
      this.alertService.warn('Please fill out all forms correctly', {id: 'register-alert', autoClose: 'true'});
      return;
    }

    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.alertService.warn('Passwords do not match', {id: 'register-alert', autoClose: 'true'});
      return;
    }

    this.authService.requestRegister({
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      first_name: this.registerForm.value.firstName,
      last_name: this.registerForm.value.lastName,
      username: this.registerForm.value.username,
    }).subscribe((success) => {
      if (success.errors) {
        for (const e of success.errors) {
          this.alertService.error(`${e.text}: ${e.info}`);
        }
      } else {
        this.router.navigate(['/']).then(() => {
          this.alertService.success('Account created!');
        });
      }
    }, (error) => {
      this.alertService.error(error.error.message);
    }).add(() => {
      this.loading = false;
    });
  }
}
