import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
// import { AlertComponent } from "../../_components/alert/alert.component";
import { getRoleBadgeClasses } from "../../models/role.model";
import { KeycloakProfile } from 'keycloak-js';
import { MdbNotificationService } from 'mdb-angular-ui-kit/notification';
import { KeycloakService } from 'src/app/_services/keycloak.service';

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
    // const username = this.route.snapshot.paramMap.get('user')!;
    // this.keycloakAdmin.getUser(username).subscribe({
    //   next: (user: KeycloakProfile) => {
    //     this.user = user;
    //   },
    //   error: (error: any) => {
    //     console.log('error:', error);
    //     this.router.navigate(['/']).then(() => {
    //       if (error.status == 404) {
    //         this.notificationService.open(AlertComponent, {
    //           data: {
    //             message: 'User not found',
    //             color: 'danger',
    //           },
    //           stacking: true
    //         })
    //       } else if (error.status == 401) {
    //         this.notificationService.open(AlertComponent, {
    //           data: {
    //             message: 'Unauthorized',
    //             color: 'danger',
    //           },
    //           stacking: true
    //         })
    //       } else {
    //         this.notificationService.open(AlertComponent, {
    //           data: {
    //             message: 'Unknown server error. Please try again later.',
    //             color: 'danger',
    //           },
    //           stacking: true
    //         })
    //       }
    //     })
    //   },
    //   complete: () => { }
    // })
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
    return [];
  }
}
