import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbNotificationService } from 'mdb-angular-ui-kit/notification';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { CharacterResponse } from 'src/app/generated/sro/characters/characters_pb';
import { CharactersService } from 'src/app/generated/sro/characters/characters_pb_service';
import { ACharactersService } from 'src/app/_services/characters.service';
import { KeycloakService } from 'src/app/_services/keycloak.service';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.scss']
})
export class ViewCharacterComponent implements OnInit {
  character: CharacterResponse | null;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected notificationService: MdbNotificationService,
    protected charactersSerivce: ACharactersService,
    protected keycloak: KeycloakService,
  ) { }

  ngOnInit(): void {
    let characterId = Number(this.route.snapshot.paramMap.get('id'));
    if (characterId <= 0) {
      this.navigateBackWithError("invalid id");
    }
    
    this.charactersSerivce.getCharacter(characterId).subscribe({
      next: (character: CharacterResponse) => {
        this.character = character;
      },
      error: (error: Error) => {
        this.navigateBackWithError("unable to find character");
      }
    });
  }

  navigateBackWithError(message: string): void {
    this.router.navigate(['..']).then(() => {
      this.notificationService.open(AlertComponent, {
        data: {
          message,
          color: 'danger',
        },
        stacking: true
      });
    });
  }

  isAdmin(): boolean {
    const roles = this.keycloak.getUserRealmRoles();
    return roles.some(r => ["SUPER ADMIN", "ADMIN"].includes(r.toUpperCase()))
  }
}
