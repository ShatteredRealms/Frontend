import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {UsersService} from "../../_services/users.service";
import {Role} from "../../models/role.model";
import {AuthorizationService} from "../../_services/authorization.service";
import {ChatChannel} from "../../models/chat-channel.model";
import {ChatChannelService} from "../../_services/chat-channel.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  loadingUsers = true;
  loadingRoles = true;
  loadingPermissions = true;
  loadingChatChannels = true;

  users: User[] = [];
  roles: Role[] = [];
  chatChannels: ChatChannel[] = [];

  constructor(
    private _usersService: UsersService,
    private _authorizationService: AuthorizationService,
    private _chatChannelService: ChatChannelService,
  ) {
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllRoles();
    this.getAllChatChannels();
  }

  getAllUsers() {
    this._usersService.getAllUsers().subscribe(resp => {
      this.loadingUsers = false;
      this.users = resp;
    });
  }

  getAllRoles() {
    this._authorizationService.getAllRoles().subscribe((resp) => {
      this.loadingRoles = false;
      this.roles = resp;
    });
  }

  getAllChatChannels() {
    this._chatChannelService.getAllChatChannels().subscribe((resp) => {
      this.loadingChatChannels = false;
      this.chatChannels = resp;
    })
  }
}
