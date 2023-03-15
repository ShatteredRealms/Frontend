import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Keycloak, { KeycloakLoginOptions, KeycloakProfile } from 'keycloak-js';
import { map, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  instance: Keycloak;
  profile: KeycloakProfile | undefined;

  constructor(
    protected http: HttpClient,
  ) {
    this.instance = new Keycloak({
      url: environment.KEYCLOAK_DOMAIN,
      realm: environment.KEYCLOAK_REALM,
      clientId: environment.KEYCLOAK_CLIENT,
    });
  }

  async init(): Promise<boolean> {
    const authenticated = await this.instance.init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
      scope: 'openid profile',
    });

    if (authenticated) {
      try {
        this.profile = await this.instance.loadUserProfile();

      } catch (err) {
        console.log('err', err);
      }
    }

    return authenticated;
  }

  async login(options: KeycloakLoginOptions = {}) {
    await this.instance.login(options);
    this.profile = await this.instance.loadUserProfile();
  }

  async logout(redirectUri?: string) {
    await this.instance.logout({ redirectUri });
    this.profile = undefined;
  }

  async register(options: KeycloakLoginOptions = { action: 'register' }) {
    await this.instance.register(options);
  }

  isLoggedIn() {
    if (!this.instance) {
      return false;
    }

    return this.instance.authenticated;
  }

  async loadUserProfile(forceReload: boolean = false) {
    if (this.profile && !forceReload) {
      return this.profile;
    }

    if (!this.instance.authenticated) {
      throw new Error('Not authenticated')
    }

    return (this.profile = await this.instance.loadUserProfile())
  }

  /**
  * Return the roles of the logged user. The allRoles parameter, with default value
  * true, will return the clientId and realm roles associated with the logged user. If set to false
  * it will only return the user roles associated with the clientId.
  *
  * @param allRoles
  * Flag to set if all roles should be returned.(Optional: default value is true)
  * @returns
  * Array of Roles associated with the logged user.
  */
  getUserRoles(allRoles: boolean = true): string[] {
    let roles: string[] = [];
    if (this.instance.resourceAccess) {
      for (const key in this.instance.resourceAccess) {
        if (this.instance.resourceAccess.hasOwnProperty(key)) {
          const resourceAccess = this.instance.resourceAccess[key];
          const clientRoles = resourceAccess['roles'].map(role => `${key}:${role}`) || [];
          roles = roles.concat(clientRoles);
        }
      }
    }
    if (allRoles) {
      const realmRoles = this.getUserRealmRoles();
      roles.push(...realmRoles);
    }
    return roles;
  }

  getUserRealmRoles(): string[] {
    if (this.instance.realmAccess) {
      return this.instance.realmAccess['roles'] || [];
    }

    return [];
  }

  async getUser(username: string): Promise<any> {
    await this.requireAuthentication();

    return this.http.get<KeycloakProfile[]>(`${this.baseUrl()}/users?exact=true&username=${username}&max=1`).pipe(map((resp: KeycloakProfile[]) => {
      if (!(resp instanceof Array) || resp.length != 1) {
        throw new Error('no user found')
      }

      return resp[0];
    }));
  }

  private baseUrl(): string {
    return `${environment.KEYCLOAK_DOMAIN}/admin/realms/${environment.KEYCLOAK_REALM}`;
  }

  private async requireAuthentication() {
    if (!this.instance.authenticated) {
      await this.instance.login();
    }
  }
}
