import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../_services/authentication.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  links = [
    {title: 'Home', link: '/'},
    {title: 'Login', link: '/login'},
  ];

  constructor(protected route: ActivatedRoute,
              protected router: Router,
              protected authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  isUserSignedIn(): boolean {
    console.log('user:', this.authService.currentUserValue);
    return this.authService.currentUserValue != undefined;
  }

  signOutUser(): void {
    this.authService.logout();
    this.router.navigate(['/login']).then();
  }
}
