import { Component } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { KeycloakService } from './_services/keycloak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    protected router: Router,
    protected keycloak: KeycloakService,
  ) {
    console.log('app-root');
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (this.keycloak.instance.isTokenExpired()) {
          this.keycloak.logout()
        }
      }
    })
  }

}
