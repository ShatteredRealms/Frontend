import { Component, OnInit } from '@angular/core';
import {ChatChannelService} from "../../../_services/chat-channel.service";
import {Router} from "@angular/router";
import {MdbNotificationService} from "mdb-angular-ui-kit/notification";
import {AlertComponent} from "../../../_components/alert/alert.component";

@Component({
  selector: 'app-new-chat-channel',
  templateUrl: './new-chat-channel.component.html',
  styleUrls: ['./new-chat-channel.component.scss']
})
export class NewChatChannelComponent implements OnInit {
  name: string = '';
  public: boolean = true;
  loading: boolean = true;

  constructor(
    private chatChannelService: ChatChannelService,
    private notificationService: MdbNotificationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  createChatChannel() {
    if (this.name.length == 0) {
      this.notificationService.open(AlertComponent, {
        data: {
          message: 'Name cannot be empty',
          color: 'warning',
          fade: true,
        }
      });
      return
    }

    this.chatChannelService.createChatChannel(this.name, this.public).subscribe({
      next: () => {
        this.router.navigate(['/admin']).then(() => {
          this.notificationService.open(AlertComponent, {
            data: {
              message: 'Chat channel created!',
              color: 'success',
              fade: true,
            }
          });
        });
      },
      error: (err) => {
        console.log('error', err)
        this.notificationService.open(AlertComponent, {
          data: {
            message: `Error: ${err.error.message}`,
            color: 'danger',
            fade: true,
          }
        });
      }
    });
  }
}
