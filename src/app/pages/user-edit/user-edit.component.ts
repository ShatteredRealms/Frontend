import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../_services/authentication.service";
import {MdbNotificationService} from "mdb-angular-ui-kit/notification";
import {ReCaptchaV3Service} from "ngx-captcha";
import {environment} from "../../../environments/environment";
import {AlertComponent} from "../../_components/alert/alert.component";
import {User} from "../../models/user.model";
import {UsersService} from "../../_services/users.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  updateDetailsForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
    lastName: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
    email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(100)]),
    username: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.max(25)]),
  });

  updatePasswordForm: FormGroup = new FormGroup({
    currentPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(64)]),
    newPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(64)]),
    confirmNewPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(64)]),
  });

  siteKey: string;
  loadingUser = true;
  loadingDetails = false;
  loadingPassword = false;
  id: number;

  constructor(protected route: ActivatedRoute,
              protected router: Router,
              protected authService: AuthenticationService,
              protected notificationService: MdbNotificationService,
              protected reCaptchaV3Service: ReCaptchaV3Service,
              protected usersService: UsersService) {
  }

  ngOnInit(): void {
    this.siteKey = environment.recaptcha.siteKey;
    this.id = Number(this.route.snapshot.paramMap.get('user'));
    this.usersService.getUser(this.id).subscribe((user: User) => {
      this.updateDetailsForm.setValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
      })
      this.loadingUser = false;
    }, (error) => {
      this.router.navigate(['/']).then(() => {
        if (error.status == 404) {
          this.notificationService.open(AlertComponent, {
            data: {
              message: 'User not found',
              color: 'danger',
            },
            stacking: true
          })
        } else if (error.status == 401) {
          this.notificationService.open(AlertComponent, {
            data: {
              message: 'Unauthorized',
              color: 'danger',
            },
            stacking: true
          })
        } else {
          this.notificationService.open(AlertComponent, {
            data: {
              message: 'Unknown server error. Please try again later.',
              color: 'danger',
            },
            stacking: true
          })
        }
      })
    })
  }

  onSubmitDetails() {
    if (!this.updateDetailsForm.valid) {
      this.notificationService.open(AlertComponent, {
        data: {
          message: 'Please fill out all forms correctly',
          color: 'warning',
          fade: true,
        },
        stacking: true,
        position: "top-center",
      })
      return;
    }

    if (this.updateDetailsForm.value.password !== this.updateDetailsForm.value.confirmPassword) {
      this.notificationService.open(AlertComponent, {
        data: {
          message: 'Passwords do not match',
          color: 'warning',
          fade: true,
        },
        stacking: true,
        position: "top-center",
      })
      return;
    }

    this.loadingDetails = true;

    this.usersService.updateUserDetails(
      this.id,
      this.updateDetailsForm.get('username')?.value,
      this.updateDetailsForm.get('email')?.value,
      this.updateDetailsForm.get('firstName')?.value,
      this.updateDetailsForm.get('lastName')?.value,
    ).subscribe((success) => {
      if (success.errors) {
        for (const e of success.errors) {
          this.notificationService.open(AlertComponent, {
            data: {
              message: `${e.text}: ${e.info}`,
              color: 'warning',
            },
            stacking: true,
            position: "top-center",
          })
        }
      } else {
        this.notificationService.open(AlertComponent, {
          data: {
            message: 'Account details updated!',
            color: 'success',
          },
          stacking: true,
          position: "top-center",
        })
      }
    }, (error) => {
      this.notificationService.open(AlertComponent, {
        data: {
          message: error.error.message,
          color: 'danger',
        },
        stacking: true,
        position: "top-center",
      })
    }).add(() => {
      this.loadingDetails = false;
    });
  }

  onSubmitPassword() {
    this.loadingPassword = true;


    if (!this.updatePasswordForm.valid) {
      this.notificationService.open(AlertComponent, {
        data: {
          message: 'Please fill out all forms correctly',
          color: 'warning',
          fade: true,
        },
        stacking: true,
        position: "top-center",
      })
      return;
    }

    if (this.updatePasswordForm.value.password !== this.updatePasswordForm.value.confirmPassword) {
      this.notificationService.open(AlertComponent, {
        data: {
          message: 'Passwords do not match',
          color: 'warning',
          fade: true,
        },
        stacking: true,
        position: "top-center",
      })
      return;
    }

    this.loadingDetails = true;

    this.usersService.updateUserPassword(
      this.id,
      this.updateDetailsForm.value.password,
    ).subscribe((success) => {
      if (success.errors) {
        for (const e of success.errors) {
          this.notificationService.open(AlertComponent, {
            data: {
              message: `${e.text}: ${e.info}`,
              color: 'warning',
            },
            stacking: true,
            position: "top-center",
          })
        }
      } else {
        this.notificationService.open(AlertComponent, {
          data: {
            message: 'Account password!',
            color: 'success',
          },
          stacking: true,
          position: "top-center",
        })
      }
    }, (error) => {
      this.notificationService.open(AlertComponent, {
        data: {
          message: error.error.message,
          color: 'danger',
        },
        stacking: true,
        position: "top-center",
      })
    }).add(() => {
      this.loadingPassword = false;
    });
  }
}