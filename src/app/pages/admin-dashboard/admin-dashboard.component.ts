import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {UsersService} from "../../_services/users.service";
import {Role} from "../../models/role.model";
import {AuthorizationService} from "../../_services/authorization.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  loadingUsers = true;
  loadingRoles = true;
  loadingPermissions = true;

  users: Observable<User[]>;
  roles: Observable<Role[]>;

  constructor(
    private _usersService: UsersService,
    private _authorizationService: AuthorizationService,
  ) {
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllRoles();
  }

  getAllUsers() {
    this.users = this._usersService.getAllUsers().pipe(map(resp => {
      this.loadingUsers = false;
      return resp.users;
    }));
  }

  getAllRoles() {
    this.roles = this._authorizationService.getAllRoles();
    this.roles.subscribe(() => {
      this.loadingRoles = false;
    });
  }
}
