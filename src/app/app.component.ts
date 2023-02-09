import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {AuthenticationService} from "./_services/authentication.service";
import {MdbNotificationService} from "mdb-angular-ui-kit/notification";
import {AlertComponent} from "./_components/alert/alert.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private notificationService: MdbNotificationService,
  ) {
    setInterval(() => {
      this.logoutExpired()
    }, 15000);

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.logoutExpired(true);
      }
    })
  }

  logoutExpired(shouldRefresh: boolean = false): void {
    if (this.authService.currentUserValue != null) {
      if (this.authService.isExpired()) {
        this.authService.logout();
        this.router.navigate(['/login']).then(() => {
          this.notificationService.open(AlertComponent, {
            data: {
              message: 'You have been logged out due to being inactive',
              color: 'warning',
              fade: 'true',
            },
            stacking: true,
            position: "top-center",
          })
        })
      } else if (this.authService.expiresWithin(600) && shouldRefresh) {
        this.authService.refresh()
      }
    }
  }
}
