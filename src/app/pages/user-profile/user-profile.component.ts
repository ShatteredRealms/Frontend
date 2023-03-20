import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { getRoleBadgeClasses } from "../../models/role.model";
import { KeycloakProfile } from 'keycloak-js';
import { MdbNotificationService } from 'mdb-angular-ui-kit/notification';
import { KeycloakService } from 'src/app/_services/keycloak.service';
import { AlertComponent } from 'src/app/components/alert/alert.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: KeycloakProfile | null;
  loading: boolean = true;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected notificationService: MdbNotificationService,
    protected keycloak: KeycloakService,
  ) {
  }

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('user')!;
    if (username == this.keycloak.profile?.username) {
      this.user = this.keycloak.profile;
      console.log('profile:', this.user);
    } else {
      this.keycloak.getUser(username).subscribe({
        next: (user: KeycloakProfile) => {
          this.user = user;
        },
        error: (error: any) => {
          console.log('error:', error, typeof (error));
          this.router.navigate(['/']).then(() => {
            if (typeof (error) == 'string' || error instanceof Error) {
              this.notificationService.open(AlertComponent, {
                data: {
                  message: error,
                  color: 'danger',
                },
                stacking: true
              })
            } else if (error.status == 403) {
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
              });
            }
          })
        },
      });
    }
  }

  getRoleHTMLClass(role: string): string {
    return getRoleBadgeClasses(role);
  }

  createdDate(): Date | null {
    if (this.user) {
      return new Date(this.user.createdTimestamp!);
    }
    return new Date();
  }

  getRoles(): string[] {
    return this.keycloak.getUserRealmRoles();
  }
}
