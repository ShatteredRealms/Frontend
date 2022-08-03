import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {UsersService} from "../../_services/users.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  loading: boolean = true;
  users: Observable<User[]>;

  constructor(
    private _usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.users = this._usersService.getAllUsers().pipe(map(resp => {
      console.log('a')
      this.loading = false;
      return resp.users;
    }));
  }
}
