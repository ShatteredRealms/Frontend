import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Role} from "../models/role.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const ROLES_STORAGE_KEY = 'roles';
const PERMISSIONS_STORAGE_KEY = 'permissions';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private _roles: Observable<Role[]>;
  private _permissions: Observable<string[]>;

  constructor(private http: HttpClient) {
    this._roles = new Observable<Role[]>(JSON.parse(<string>localStorage.getItem(ROLES_STORAGE_KEY)));
    this._permissions = new Observable<string[]>(JSON.parse(<string>localStorage.getItem(PERMISSIONS_STORAGE_KEY)));
  }

  public get roles(): Observable<Role[]> {
    if (this._roles == null) this.refreshRoles();

    return this._roles;
  }

  public get permission(): Observable<string[]> {
    if (this._roles == null) this.refreshPermissions();

    return this._permissions;
  }

  refreshRoles(): Observable<Role[]> {
    this._roles = this.http.get<Role[]>(`${environment.ACCOUNT_API_URL}/authorization/roles`);
    return this._roles;
  }

  refreshPermissions(): Observable<string[]> {
    this._permissions = this.http.get<string[]>(`${environment.ACCOUNT_API_URL}/authorization/permissions`);
    return this._permissions;
  }
}
