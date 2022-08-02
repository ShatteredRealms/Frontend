import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../_services/authentication.service';
import {AlertService} from '../_services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      if (!currentUser.roles.some(userRole => route.data['role'].some((requiredRoleName: string) => requiredRoleName == userRole.name))) {
        this.router.navigate(['/']).then(() =>
          this.alertService.error('ERROR: Access denied!')
        );

        return false;
      }

      return true;
    }

    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    this.alertService.info('Please login to view this page');
    return false;
  }
}
