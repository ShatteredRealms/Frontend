import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(<string>localStorage.getItem('currentUser')));
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  hasAnyRole(roleNames: string[]): boolean {
    if (this.currentUserValue == null) return false;
    return this.currentUserValue.roles.some(userRole => roleNames.some(requiredRole => requiredRole.toUpperCase() == userRole.name.toUpperCase()));
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<any>(`${environment.ACCOUNT_API_URL}/login`, {username, password})
      .pipe(map(resp => {
        resp.createdAt = new Date(resp.createdAt);
        localStorage.setItem('currentUser', JSON.stringify(resp));
        this.currentUserSubject.next(resp);
        return resp;
      }));
  }

  private updateToken(token: any): any {
    let newUser = this.currentUserValue
    if (newUser == null) return;

    newUser.token = token
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    this.currentUserSubject.next(newUser);
    return newUser;
  }

  refresh(): void {
    this.http.post(`${environment.ACCOUNT_API_URL}/refresh`, {}).subscribe((resp: any) => {
      this.updateToken(resp.token);
    });
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  requestRegister(registerInformation: any): Observable<any> {
    return this.http.post(`${environment.ACCOUNT_API_URL}/register`, registerInformation).pipe(map(response => {
      return response;
    }))
  }

  parseToken(token: string): any {
    return JSON.parse(atob(token.split('.')[1]))
  }

  parseCurrentToken(): any {
    if (this.currentUserValue == null) return null
    return this.parseToken(this.currentUserValue.token);
  }

  isExpired(): boolean {
    let currentToken = this.parseCurrentToken();
    if (currentToken == null) return true;

    return new Date(currentToken.exp).getTime() < (new Date().getTime() / 1000)
  }

  expiresWithin(seconds: number): boolean {
    let currentToken = this.parseCurrentToken();
    if (currentToken == null) return true;

    return new Date(currentToken.exp).getTime() < ((new Date().getTime() / 1000) + seconds)
  }
}
