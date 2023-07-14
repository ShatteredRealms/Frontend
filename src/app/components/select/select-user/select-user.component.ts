import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { MdbNotificationService } from 'mdb-angular-ui-kit/notification';
import { KeycloakService } from 'src/app/_services/keycloak.service';
import { AlertComponent } from '../../alert/alert.component';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.scss']
})
export class SelectUserComponent implements OnInit {
  users: KeycloakProfile[] = [];
  loading = true;
  failed = false;

  @Input() selectedUser: string;
  @Output() selectedUserChange = new EventEmitter<string>();

  constructor(
    protected _keycloakService: KeycloakService,
    protected _notificationService: MdbNotificationService,
  ) {  }

  ngOnInit(): void {
    this._keycloakService.getAllUsers().subscribe({
      next: (users: KeycloakProfile[]) => {
        this.users = users;
        this.loading = false;
        const user = users.find(u => u.id == this.selectedUser)
        if (user) {
          this.selectedUser = user.id!;
        }
      },
      error: (error) => {
        this.failed = true;
        this.loading = false;
        this._notificationService.open(AlertComponent, {
          data: {
            message: 'Error: '+error,
            color: 'danger',
          },
          stacking: true,
          autohide: true,
        });
      }
    })
  }
}
