import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { KeycloakService } from '../_services/keycloak.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    protected readonly router: Router,
    protected readonly keycloak: KeycloakService,
  ) {
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    // Force the user to log in if currently unauthenticated.
    if (!this.keycloak.instance.authenticated) {
      this.keycloak.login({
        redirectUri: window.location.origin + state.url
      });

      return false;
    }

    // Get the roles required from the route.
    const requiredRoles = route.data.roles;

    // Allow the user to proceed if no additional roles are required to access the route.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    const roles = this.keycloak.getUserRoles();

    // Allow the user to proceed if all the required roles are present.
    return requiredRoles.every((role) => roles.includes(role));
  }
}
