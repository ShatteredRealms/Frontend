import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(protected http: HttpClient) { }

  getUser(username: string, forceRefresh: boolean = false): Observable<any> {

    return this.http.get(`${environment.ACCOUNT_API_URL}/users/${username}`).pipe(map( resp => {
      return resp
    }));
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<any>(`${environment.ACCOUNT_API_URL}/users`).pipe(
      map(resp => {
        return resp.users;
      })
    );
  }

  updateUserDetails(username: string, email: string, firstName: string, lastName: string): Observable<any> {
    return this.http.put(`${environment.ACCOUNT_API_URL}/users/${username}`, {
      username, email, firstName, lastName,
    });
  }


  updateUserPassword(username: string, currentPassword: string, newPassword: string): Observable<any> {
    return this.http.put(`${environment.ACCOUNT_API_URL}/users/${username}/password`, {
      currentPassword, newPassword
    });
  }

  banUser(username: string): Observable<any> {
    return this.http.post(`${environment.ACCOUNT_API_URL}/users/${username}/ban`, {});
  }

  unBanUser(username: string): Observable<any> {
    return this.http.post(`${environment.ACCOUNT_API_URL}/users/${username}/unban`, {});
  }
}
