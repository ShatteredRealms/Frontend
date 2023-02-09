import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective} from "mdb-angular-ui-kit/table";
import {Router} from "@angular/router";
import {AuthorizationService} from "../../_services/authorization.service";
import {MdbModalService} from "mdb-angular-ui-kit/modal";
import {ModalComponent} from "../modal/modal.component";
import {MdbNotificationService} from "mdb-angular-ui-kit/notification";
import {AlertComponent} from "../alert/alert.component";
import {ChatChannel, getChatChannelBadgeClasses} from "../../models/chat-channel.model";
import {ChatChannelService} from "../../_services/chat-channel.service";

@Component({
  selector: 'app-chat-channels-table',
  templateUrl: './chat-channels-table.component.html',
  styleUrls: ['./chat-channels-table.component.scss']
})
export class ChatChannelsTableComponent implements OnInit {
  @ViewChild('table') table!: MdbTableDirective<ChatChannel>;

  @Input() dataSource: ChatChannel[] | null;
  @Input() loading = true;
  @Input() showActions = false;
  @Input() searchable = false;
  @Input() rowSelectable = true;

  constructor(
    private router: Router,
    private chatChannelService: ChatChannelService,
    private modalService: MdbModalService,
    private notificationService: MdbNotificationService,
  ) {
  }

  ngOnInit(): void {
  }

  search(searchTerm: string): void {
    this.table.search(searchTerm);
  }

  chatChannelClicked(chatChannel: ChatChannel) {
    if (this.rowSelectable) {
      this.router.navigate(['/chat/channels', chatChannel.id])
    }
  }

  chatChannelEditClicked(chatChannel: ChatChannel) {
    this.router.navigate(['/chat/channels', chatChannel.id, 'edit'])
  }

  getChatChannelBadgeClasses(chatChannel: ChatChannel) {
    return getChatChannelBadgeClasses(chatChannel);
  }

  chatChannelDeleteClicked(chatChannel: ChatChannel) {
    this.modalService.open(ModalComponent, {
      data: {
        title: 'Deletion confirmation',
        message: `Are you sure you want to delete the chatChannel '${chatChannel.name}'`,
        submitText: 'Delete',
      }
    }).onClose.subscribe((message) => {
      if (message) {
        this.chatChannelService.deleteChatChannel(chatChannel.id).subscribe({
          next: () => {
            this.notificationService.open(AlertComponent, {
              data: {
                message: 'Successfully deleted chatChannel',
                color: 'info',
              }
            });
            window.location.reload();
          },
          error: err => {
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
