import {Component, OnInit, TemplateRef} from '@angular/core';
import {User} from "../../../models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../_services/authentication.service";
import {UsersService} from "../../../_services/users.service";
import {MdbNotificationService} from "mdb-angular-ui-kit/notification";
import {AlertComponent} from "../../../_components/alert/alert.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User = {
    createdAt: new Date(Date.now()),
    email: "email",
    first_name: "firstname",
    id: 0,
    last_name: "lastname",
    roles: [{name: 'role'}],
    token: "token",
    username: "username"
  };
  loading: boolean = true;

  constructor(protected route: ActivatedRoute,
              protected router: Router,
              protected notificationService: MdbNotificationService,
              protected authService: AuthenticationService,
              protected usersService: UsersService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('user'));
    if (this.authService.currentUserValue != null && this.authService.currentUserValue.id == id) {
      this.user = this.authService.currentUserValue;
    } else {
      this.usersService.getUser(id).subscribe((success) => {
        this.user = success.data;
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
  }
}
