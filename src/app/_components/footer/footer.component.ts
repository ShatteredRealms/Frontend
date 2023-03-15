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
    return this.keycloak.getUserRoles().some(r => ["SUPER ADMIN", "ADMIN"].includes(r))
  }

  userProfile() {
    this.keycloak.loadUserProfile().then(profile => {
      this.router.navigate(['/users', profile.username]);
    });
  }

  isUserSignedIn(): boolean {
    return !!this.keycloak.instance.authenticated;
  }
}
