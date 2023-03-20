import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'src/app/_services/keycloak.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    protected keycloak: KeycloakService,
    protected router: Router,
  ) { }

  ngOnInit(): void {
  }

  isAdmin(): boolean {
    const roles = this.keycloak.getUserRealmRoles();
    return roles.some(r => ["SUPER ADMIN", "ADMIN"].includes(r.toUpperCase()))
  }

  isUserSignedIn(): boolean {
    return !!this.keycloak.instance.authenticated;
  }
}
