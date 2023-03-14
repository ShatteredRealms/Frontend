import { Component } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { MdbNotificationService } from "mdb-angular-ui-kit/notification";
import { AlertComponent } from "./_components/alert/alert.component";
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    protected router: Router,
    protected keycloak: KeycloakService,
    protected notificationService: MdbNotificationService,
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (this.keycloak.isTokenExpired()) {
          this.keycloak.logout()
        }
      }
    })
  }
}
