import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from '../_services/keycloak.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    protected keycloak: KeycloakService,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.keycloak.instance.authenticated) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.keycloak.instance.token}`
        }
      })
    }

    return next.handle(request)
  }
}
