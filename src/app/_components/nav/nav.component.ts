import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { fromEvent } from "rxjs";
import { debounceTime, map, startWith } from "rxjs/operators";
import { KeycloakService } from 'src/app/_services/keycloak.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  links = [
    { title: 'Home', link: '/' },
    { title: 'Login', link: '/login' },
  ];

  isScreenSmall$: any;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected keycloak: KeycloakService
  ) { }

  ngOnInit(): void {
    // Checks if screen size is less than 1024 pixels
    const checkScreenSize = () => document.body.offsetWidth < 992;

    // Create observable from window resize event throttled so only fires every 500ms
    const screenSizeChanged$ = fromEvent(window, 'resize').pipe(debounceTime(200), map(checkScreenSize));

    // Start off with the initial value use the isScreenSmall$ | async in the
    // view to get both the original value and the new value after resize.
    this.isScreenSmall$ = screenSizeChanged$.pipe(startWith(checkScreenSize()))
  }

  signOutUser(): void {
    this.keycloak.logout();
    this.router.navigate(['/']);
  }

  userProfile() {
    this.keycloak.loadUserProfile().then(profile => {
      console.log('profile:', profile)
      this.router.navigate(['/users', profile.username])
    });
  }

  isUserSignedIn(): boolean {
    return !!this.keycloak.instance.authenticated;
  }
}
