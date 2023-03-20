import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MdbTableDirective } from "mdb-angular-ui-kit/table";
import { getRoleBadgeClasses } from "../../models/role.model";
import { advancedFilterFn } from "../../_helpers/filter.table";
import { AlertComponent } from "../alert/alert.component";
import { MdbNotificationService } from "mdb-angular-ui-kit/notification";
import { Router } from "@angular/router";
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  @ViewChild('table') table!: MdbTableDirective<KeycloakProfile>;

  @Input() dataSource: KeycloakProfile[];
  @Input() loading = true;
  @Input() userSelectable = true;

  constructor(
    private notificationService: MdbNotificationService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  advancedSearch(value: string): void {
    this.table.search(value);
  }

  filterFn(data: any, searchTerm: string): boolean {
    return advancedFilterFn(data, searchTerm);
  }

  getRoleHTMLClasses(role: string): string {
    return getRoleBadgeClasses(role);
  }

  banUser(id: any) {
    // this.usersService.banUser(id).subscribe({
    //   next: () => {
    //     this.notificationService.open(AlertComponent, {
    //       data: {
    //         message: "User banned",
    //         color: 'info',
    //       },
    //       stacking: true,
    //       position: "top-center",
    //     });
    //     let user = this.dataSource.find(u => u.id == id);
    //     if (user) {
    //       user.bannedAt = new Date();
    //       this.dataSource = [...this.dataSource];
    //     }
    //   },
    //   error: (err) => {
    //     this.notificationService.open(AlertComponent, {
    //       data: {
    //         message: `ERROR: ${err.error.message}`,
    //         color: 'danger',
    //       },
    //       stacking: true,
    //       position: "top-center",
    //     });
    //   }
    // })
  }

  unbanUser(id: any) {
    // this.usersService.unBanUser(id).subscribe({
    //   next: () => {
    //     this.notificationService.open(AlertComponent, {
    //       data: {
    //         message: "User unbanned",
    //         color: 'success',
    //       },
    //       stacking: true,
    //       position: "top-center",
    //     });
    //     let user = this.dataSource.find(u => u.id == id);
    //     if (user) {
    //       user.bannedAt = null;
    //       this.dataSource = [...this.dataSource];
    //     }
    //   },
    //   error: (err) => {
    //     this.notificationService.open(AlertComponent, {
    //       data: {
    //         message: `ERROR: ${err.error.message}`,
    //         color: 'danger',
    //       },
    //       stacking: true,
    //       position: "top-center",
    //     });
    //   }
    // })
  }

  isNaN(input: any): boolean {
    return isNaN(input);
  }

  onUserClick(user: KeycloakProfile) {
    if (this.userSelectable) {
      this.router.navigate(['/users', user.username]);
    }
  }

  onUserEditClick(user: KeycloakProfile) {
    this.router.navigate(['/users', user.username, 'edit']);
  }
}

