import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';
import { Permission } from '../models/permission.model';

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
    console.log('data:', route.data);
    console.log('user:', currentUser);
    if (currentUser) {
      if (!this.userHasPermission(route.data['permissions'], currentUser.permissions)
        || (route.data['role'] != null && route.data['role'] != currentUser.role)) {

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

  private userHasPermission(requiredPermissions: Permission[] | null, userPermissions: Permission[] | null): boolean {
    if (requiredPermissions == null || requiredPermissions.length == 0) return true;
    if (userPermissions == null || userPermissions.length == 0) return false;

    return requiredPermissions.every((requiredPermission) => {
      return userPermissions.some((userPermission) =>
        userPermission == requiredPermission
      )
    });
  }
}
