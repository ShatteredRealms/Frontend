import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbNotificationService } from 'mdb-angular-ui-kit/notification';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { CharacterDetails } from 'src/app/generated/sro/character/character_pb';
import { ACharacterService } from 'src/app/_services/character.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.scss']
})
export class EditCharacterComponent implements OnInit {
  character: CharacterDetails | null;

  newName: string;
  newOwnerId: string;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected notificationService: MdbNotificationService,
    protected characterSerivce: ACharacterService,
  ) { }

  ngOnInit(): void {
    let characterId = Number(this.route.snapshot.paramMap.get('id'));
    if (characterId <= 0) {
      this.navigateBackWithError("invalid id");
    }
    
    this.characterSerivce.getCharacter(characterId).subscribe({
      next: (character: CharacterDetails) => {
        this.character = character;
        this.newOwnerId = this.character!.getOwner();
        this.newName = this.character!.getName();
      },
      error: (error: Error) => {
        this.navigateBackWithError("unable to find character: "+error);
      }
    });

  }

  cancelChanges(): void {
    this.navigateBackWithError();
  }

  updateCharacter(): void {
    if (this.character == null) return;
    console.log('ownerId', this.newOwnerId);
    this.characterSerivce.updateCharacter(
      this.character.getId(),
      this.character.getName() === this.newName ? "" : this.newName,
      this.character.getOwner() === this.newOwnerId ? "" : this.newOwnerId,
    ).subscribe({
        next: () => {
          this.notificationService.open(AlertComponent, {
            data: {
              message: "Character updated!",
              color: 'primary',
            },
            stacking: true
          });
        },
        error: (message) => {
          this.notificationService.open(AlertComponent, {
            data: {
              message,
              color: 'danger',
            },
            stacking: true
          });
        }
      });
  }

  navigateBackWithError(message: string | null = null): void {
    this.router.navigate(['..']).then(() => {
      if (message != null) {
        this.notificationService.open(AlertComponent, {
          data: {
            message,
            color: 'danger',
          },
          stacking: true
        });
      }
    });
  }


}
