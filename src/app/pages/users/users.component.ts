import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {Permission} from "../../models/permission.model";
import {Role} from "../../models/role.model";
import {ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "../../_services/authentication.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User;

  constructor(protected route: ActivatedRoute,
              protected authService: AuthenticationService) { }

  ngOnInit(): void {
    this.user = {
      email: "user@example.com",
      first_name: "Furstlee",
      id: 9001,
      last_name: "Lastinson",
      permissions: [Permission.TEST_PERMISSION],
      role: Role.USER,
      token: "",
      username: "username"
    };

    this.route.params.subscribe((params) => {
      this.user.id = params['user'];
      this.user.email
    });
  }
}
