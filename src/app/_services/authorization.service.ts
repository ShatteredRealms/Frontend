import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Role} from "../models/role.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

const ROLES_STORAGE_KEY = 'roles';
const PERMISSIONS_STORAGE_KEY = 'permissions';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  _roles: Observable<Role[]>;
  _getAllPermissions: Observable<string[]>;

  constructor(private http: HttpClient) {
    this._roles = new Observable<Role[]>(this.getRoleStorage());
    this._getAllPermissions = new Observable<string[]>(this.getPermissionStorage());
  }

  public getAllRoles(): Observable<Role[]> {
    return this.refreshRoles();
  }

  public getAllPermissions(): Observable<string[]> {
    return this.refreshPermissions();
  }

  refreshRoles(): Observable<Role[]> {
    // if (this.getRoleStorage()) return this._roles;

    return this.http.get<any>(`${environment.ACCOUNT_API_URL}/authorization/roles`)
      .pipe(map(resp => {
        this.setRoleStorage(resp.roles);
        return resp.roles;
      }));
  }

  refreshPermissions(): Observable<string[]> {
    // if (this.getPermissionStorage()) return this._getAllPermissions;

    return this.http.get<any>(`${environment.ACCOUNT_API_URL}/authorization/permissions`)
      .pipe(map(resp => {
        this.setPermissionStorage(resp.permissions);
        return resp.permissions;
      }));
  }

  private getRoleStorage() {
    return JSON.parse(<string>localStorage.getItem(ROLES_STORAGE_KEY))
  }

  private setRoleStorage(roles: Role[]) {
    localStorage.setItem(ROLES_STORAGE_KEY, JSON.stringify(roles));
    // this._roles = new Observable<Role[]>(getRoleStorage());
  }

  private getPermissionStorage() {
    return JSON.parse(<string>localStorage.getItem(PERMISSIONS_STORAGE_KEY))
  }

  private setPermissionStorage(permissions: string[]) {
    localStorage.setItem(PERMISSIONS_STORAGE_KEY, JSON.stringify(permissions));
    // this._getAllPermissions = new Observable<string[]>(this.getPermissionStorage());
  }
}
