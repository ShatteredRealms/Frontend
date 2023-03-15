import { Component } from '@angular/core';
import { KeycloakService } from 'src/app/_services/keycloak.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    protected keycloak: KeycloakService,
  ) { }

  test(): void {
    const url = "https://sso.shatteredrealmsonline.com/realms/default/protocol/openid-connect/registrations?client_id=sro-web&response_type=code&scope=openid profile&redirect_uri=https://shatteredrealmsonline.com/&kc_locale=en"
  }
}
