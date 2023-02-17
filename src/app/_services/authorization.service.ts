import {Injectable, SecurityContext} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Role} from "../models/role.model";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {UserPermission} from "../models/user-permission.model";
import {DomSanitizer} from "@angular/platform-browser";

const ROLES_KEY = 'roles';
const PERMISSIONS_KEY = 'permission';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(protected http: HttpClient,
              private _sanitizer: DomSanitizer) { }

  public getAllRoles(forceRefresh: boolean = true): Observable<Role[]> {
    if (!forceRefresh) {
      let rolesString = localStorage.getItem(ROLES_KEY);
      if (rolesString) {
        return of(JSON.parse(rolesString));
      }
    }

    return this.http.get<any>(`${environment.ACCOUNT_API_URL}/authorization/roles`)
      .pipe(map(resp => {
        localStorage.setItem(ROLES_KEY, JSON.stringify(resp.roles));
        return resp.roles;
      }));
  }

  public getAllPermissions(forceRefresh: boolean = true): Observable<UserPermission[]> {
    if (!forceRefresh) {
      let permissionsString = localStorage.getItem(PERMISSIONS_KEY);
      if (permissionsString) {
        return of(JSON.parse(permissionsString));
      }
    }

    return this.http.get<any>(`${environment.ACCOUNT_API_URL}/authorization/permissions`)
      .pipe(map(resp => {
        localStorage.setItem(PERMISSIONS_KEY, JSON.stringify(resp.permissions));
        return resp.permissions;
      }));
  }

  public addRoles(roles: Role[], username: string) {
    return this.http.post(
      this.safeUrl(`${environment.ACCOUNT_API_URL}/users/${username}/authorization/add`),
      {
        roles: roles.map(role => ({name: role.name})),
      }
    );
  }

  public remRoles(roles: Role[], username: string) {
    return this.http.post(
      this.safeUrl(`${environment.ACCOUNT_API_URL}/users/${username}/authorization/remove`),
      {
        roles: roles.map(role => ({name: role.name})),
      }
    );
  }

  public getRole(name: string): Observable<Role> {
    return this.http.get<Role>(this.safeUrl(`${environment.ACCOUNT_API_URL}/authorization/roles/${name}`)).pipe(
      map(resp => {
        return resp
      })
    );
  }

  public updateRoleName(name: string, newName: string) {
    return this.http.put(
      this.safeUrl(`${environment.ACCOUNT_API_URL}/authorization/roles/${name}`),
      {name, newName},
    );
  }

  public updateRolePermissions(name: string, permissions: UserPermission[]) {
    return this.http.put(
      this.safeUrl(`${environment.ACCOUNT_API_URL}/authorization/roles/${name}`),
      {name, permissions},
    );
  }

  public createRole(name: string, permissions: UserPermission[]) {
    return this.http.post(
      `${environment.ACCOUNT_API_URL}/authorization/roles`,
      {name, permissions},
    );
  }

  deleteRole(name: string) {
    return this.http.delete(this.safeUrl(`${environment.ACCOUNT_API_URL}/authorization/roles/${name}`));
  }

  safeUrl(str: string): string {
    return str.replace(' ', '%20');
  }
}
