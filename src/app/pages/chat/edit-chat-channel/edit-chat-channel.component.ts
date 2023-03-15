import { Component, OnInit } from '@angular/core';
import { ChatChannel } from "../../../models/chat-channel.model";
import { MdbNotificationService } from "mdb-angular-ui-kit/notification";
import { ChatChannelService } from "../../../_services/chat-channel.service";
import { ActivatedRoute } from "@angular/router";
import { AlertComponent } from "../../../_components/alert/alert.component";

@Component({
  selector: 'app-edit-chat-channel',
  templateUrl: './edit-chat-channel.component.html',
  styleUrls: ['./edit-chat-channel.component.scss']
})
export class EditChatChannelComponent implements OnInit {

  chatChannel: ChatChannel | null;
  newName: string = '';

  constructor(
    protected notificationService: MdbNotificationService,
    private chatChannelService: ChatChannelService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.chatChannelService.getChatChannel(Number(this.route.snapshot.paramMap.get('channel'))).subscribe(
      (channel) => {
        this.chatChannel = channel;
        this.newName = channel.name;
      }
    );
  }

  submitNameChange() {
    this.chatChannelService.updateChatChannelName(this.chatChannel!.id, this.newName).subscribe({
      next: () => {
        this.chatChannel!.name = this.newName;
        this.notificationService.open(AlertComponent, {
          data: {
            message: 'Name updated',
            color: 'danger',
          },
          stacking: true,
          autohide: true,
        });
      },
      error: err => {
        this.notificationService.open(AlertComponent, {
          data: {
            message: `Error: ${err.error.message}`,
            color: 'danger',
          },
          stacking: true
        });
      }
    });
  }

  cancelNameChange() {
    this.newName = this.chatChannel!.name;
  }
}
