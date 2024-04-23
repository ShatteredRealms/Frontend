import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { grpc } from '@improbable-eng/grpc-web';
import { MdbNotificationService } from 'mdb-angular-ui-kit/notification';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { CharacterDetails, CreateCharacterRequest } from 'src/app/generated/sro/character/character_pb';
import { CharacterService } from 'src/app/generated/sro/character/character_pb_service';
import { DimensionTarget } from 'src/app/generated/sro/gamebackend/servermanager_pb';
import { UserTarget } from 'src/app/generated/sro/globals_pb';
import { KeycloakService } from 'src/app/_services/keycloak.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent {
  name: string = '';
  dimension: string = '';
  realm: string = '';
  gender: string = '';
  owner: string = '';

  constructor(
    private notificationService: MdbNotificationService,
    private router: Router,
    protected keycloak: KeycloakService,
  ) { }

  ngOnInit(): void {
  }

  createCharacter() {
    var errs = this.validateCharacter();
    if (errs.length > 0) {
      this.notificationService.open(AlertComponent, {
        data: {
          message: errs.join('\n'),
          color: 'warning',
          fade: true,
        }
      });
      return
    }

    const request = new CreateCharacterRequest();
    const userTarget = new UserTarget();
    userTarget.setUsername(this.owner);

    const dimTarget = new DimensionTarget();
    dimTarget.setName(this.dimension);

    request.setName(this.name);
    request.setDimension(dimTarget);
    request.setRealm(this.realm);
    request.setGender(this.gender);
    request.setOwner(userTarget);
    grpc.invoke(CharacterService.CreateCharacter, {
      host: environment.CHARACTERS_API_BASE_URL,
      request: request,
      metadata: {
        Authorization: `Bearer ${this.keycloak.instance.token}`,
      },
      onMessage: (message: CharacterDetails): void => {
      },
      onEnd: function(code: grpc.Code, message: string, trailers: grpc.Metadata): void {
      }
    });

  }

  validateCharacter(): string[] {
    var errs = [];
    if (this.name.length == 0) {
      errs.push('Name cannot be empty');
    }
    if (this.dimension.length == 0) {
      errs.push('Dimension cannot be empty');
    }
    if (this.realm.length == 0) {
      errs.push('Realm cannot be empty');
    }
    if (this.gender.length == 0) {
      errs.push('Gender cannot be empty');
    }

    return errs;
  }
}
