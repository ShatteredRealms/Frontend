import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../_services/authentication.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(protected authService: AuthenticationService) { }

  ngOnInit(): void {
  }


  isUserSignedIn(): boolean {
    return this.authService.currentUserValue != undefined;
  }

  isAdmin(): boolean {
    return this.authService.hasAnyRole(["SUPER ADMIN", "ADMIN"])
  }
}
