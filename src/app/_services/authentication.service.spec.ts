import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {Role} from "../models/role.model";
import {environment} from "../../environments/environment";

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let http: HttpClient;
  const user: User = {
    email: "",
    first_name: "",
    last_name: "",
    permissions: [],
    role: Role.USER,
    token: "",
    username: "",
    id: 1
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
    service = TestBed.inject(AuthenticationService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should allow logout', () => {
    const user = 'asdf';
    localStorage.setItem('currentUser', user);
    expect(localStorage.getItem('currentUser')).toEqual(user);

    service.logout();
    expect(localStorage.getItem('currentUser')).toBeNull();
  });

  it('should allow login', () => {
    const username = 'asdf';
    const password = 'jkl';
    const spy = spyOn(http, 'post').and.returnValue(new Observable((subscriber) => {
      subscriber.next(user);
      subscriber.complete();
    }));

    service.login(username,password).subscribe((returnedUser) => {
      expect(user).toEqual(returnedUser);
      expect(localStorage.getItem('currentUser')).toEqual(JSON.stringify(user));
      expect(service.currentUserValue).toEqual(user);
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledOnceWith(`${environment.ACCOUNT_API_URL}/login`, {username, password});
  });

  it('should allow registration', () => {
    const resp = 'resp';
    const spy = spyOn(http, 'post').and.returnValue(new Observable((subscriber) => {
      subscriber.next(resp);
      subscriber.complete();
    }));

    service.requestRegister(user).subscribe((returnedResp) => {
      expect(returnedResp).toEqual(resp);
      expect(spy).toHaveBeenCalledOnceWith(`${environment.ACCOUNT_API_URL}/register`, user);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
