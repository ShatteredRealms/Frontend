import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(protected http: HttpClient) { }

  getUser(id: number): Observable<any> {
    return this.http.get(`${environment.ACCOUNT_API_URL}/users/${id}`).pipe(map( resp => {
      return resp
    }));
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${environment.ACCOUNT_API_URL}/users`).pipe(map( resp => {
      return resp
    }));
  }
}
