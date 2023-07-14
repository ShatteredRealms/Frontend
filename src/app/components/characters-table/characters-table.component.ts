import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MdbTableDirective } from "mdb-angular-ui-kit/table";
import { Router } from "@angular/router";
import { MdbModalService } from "mdb-angular-ui-kit/modal";
import { ModalComponent } from "../modal/modal.component";
import { MdbNotificationService } from "mdb-angular-ui-kit/notification";
import { AlertComponent } from "../alert/alert.component";
import { CharacterDetails } from 'src/app/generated/sro/character/character_pb';
import { ACharacterService } from 'src/app/_services/character.service';

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.scss']
})
export class CharactersTableComponent implements OnInit {
  @ViewChild('table') table!: MdbTableDirective<CharacterDetails>;

  @Input() dataSource: CharacterDetails[] | null;
  @Input() loading = true;
  @Input() showActions = false;
  @Input() searchable = false;
  @Input() rowSelectable = true;

  constructor(
    private router: Router,
    private characterService: ACharacterService,
    private modalService: MdbModalService,
    private notificationService: MdbNotificationService,
  ) {
  }

  ngOnInit(): void {
  }

  search(searchTerm: string): void {
    this.table.search(searchTerm);
  }

  characterClicked(character: CharacterDetails) {
    if (this.rowSelectable) {
      this.router.navigate(['/characters/id', character.getId()])
    }
  }

  characterEditClicked(character: CharacterDetails) {
    this.router.navigate(['/characters/id', character.getId(), 'edit'])
  }

  characterDeleteClicked(character: CharacterDetails) {
    this.modalService.open(ModalComponent, {
      data: {
        title: 'Deletion confirmation',
        message: `Are you sure you want to delete the chat channel '${character.getName()}'`,
        submitText: 'Delete',
      }
    }).onClose.subscribe((message) => {
      if (message) {
        this.characterService.deleteCharacter(character.getId()).subscribe({
          next: () => {
            this.notificationService.open(AlertComponent, {
              data: {
                message: 'Successfully deleted character',
                color: 'info',
              }
            });
            window.location.reload();
          },
          error: (err: any) => {
            this.notificationService.open(AlertComponent, {
              data: {
                message: `Error: ${err.error.message}`,
                color: 'danger',
              }
            });
          }
        });
      }
    });
  }
}
