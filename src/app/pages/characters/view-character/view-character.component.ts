import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { MdbNotificationService } from 'mdb-angular-ui-kit/notification';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { ModalSelectComponent } from 'src/app/components/modal-select/modal-select.component';
import { CharacterDetails } from 'src/app/generated/sro/character/character_pb';
import { ChatChannel } from 'src/app/models/chat-channel.model';
import { ACharacterService } from 'src/app/_services/character.service';
import { ChatChannelService } from 'src/app/_services/chat-channel.service';
import { KeycloakService } from 'src/app/_services/keycloak.service';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.scss']
})
export class ViewCharacterComponent implements OnInit {
  character: CharacterDetails | null;

  chatChannels: ChatChannel[] = [];
  loadingChatChannels: boolean = true;

  modifyChannelsModalRef: MdbModalRef<ModalSelectComponent<ChatChannel>>;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected notificationService: MdbNotificationService,
    protected characterSerivce: ACharacterService,
    protected keycloak: KeycloakService,
    protected chatChannelService: ChatChannelService,
    protected modalService: MdbModalService,
  ) { }

  ngOnInit(): void {
    let characterId = Number(this.route.snapshot.paramMap.get('id'));
    if (characterId <= 0) {
      this.navigateBackWithError("invalid id");
    }
    
    this.characterSerivce.getCharacter(characterId).subscribe({
      next: (character: CharacterDetails) => {
        this.character = character;
      },
      error: (error: Error) => {
        this.navigateBackWithError("unable to find character: "+error);
      }
    });

    if (this.isAdmin()) {
      this.getChatChannels(characterId);
    }
  }

  getChatChannels(characterId: number, force: boolean = false) {
    this.chatChannelService.getAllChatChannelsForCharacter(characterId, force).subscribe((resp) => {
      this.loadingChatChannels = false;
      this.chatChannels = resp;
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

  modifyChannels(add: boolean) {
    this.chatChannelService.getAllChatChannels().subscribe((channels) => {
      this.modifyChannelsModalRef = 
        this.modalService.open(ModalSelectComponent<ChatChannel>, {
          data: {
            title: "Assigned chat channels",
            message: `${add ? "Add additional" : "Remove"} assigned chat channels for the character`,
            options: add ? channels : this.chatChannels,
            ignoreOptions: add ? this.chatChannels : [],
            itemViewProperty: "name",
          },
        });
      this.modifyChannelsModalRef.onClose.subscribe((selection: any) => {
        if (selection) {
          console.log('channels:', selection);
          console.log('length:', selection.length);
          if (selection.length > 0) {
            this.chatChannelService.updateCharacterAuthorization(
              this.character!.getId(),
              channels.map(c => c.id),
              add
            ).subscribe({
              next: (resp) => {
                console.log('resp:', resp);
                this.getChatChannels(this.character!.getId(), true);
              }, error: (error) => {
                  console.log('error:', error);
              }
             }); 
          } else {
            console.log('not channels selected');
          }
        } else {
          console.log('no selection');
        }
      });
    })
  }
}
