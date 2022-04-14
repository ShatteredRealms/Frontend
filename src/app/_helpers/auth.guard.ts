import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';
import { Permission } from '../models/permission.model';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      if (route.data['permissions']
        && (!route.data['permissions'].some(
          (permission: Permission) => currentUser.permissions.some(
            (userPerm: Permission) => userPerm === permission
          )
        )
        || route.data['role'] && route.data['role'] != currentUser.role)
      ) {
        this.router.navigate(['/']).then(() =>
          this.alertService.error('ERROR: Access denied!')
        );

        return false;
      }

      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    this.alertService.info('Please login to view this page');
    return false;
  }
}
