import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

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

  isUserSignedIn(): Promise<boolean> {
    return this.keycloak.isLoggedIn();
  }

  isAdmin(): boolean {
    return this.keycloak.getUserRoles().some(r => ["SUPER ADMIN", "ADMIN"].includes(r))
  }

  userProfile() {
    this.keycloak.loadUserProfile().then(profile => {
      this.router.navigate(['/users', profile.username]);
    });
  }
}
