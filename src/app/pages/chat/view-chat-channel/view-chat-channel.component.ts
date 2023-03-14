import { Component, OnInit } from '@angular/core';
import { ChatChannel, getChatChannelBadgeClasses } from "../../../models/chat-channel.model";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { ChatChannelService } from "../../../_services/chat-channel.service";
import { environment } from "../../../../environments/environment";
import { ChatService } from "../../../generated/chat_pb_service";
import { ChannelIdMessage, ChatMessage } from "../../../generated/chat_pb";
import { grpc } from "@improbable-eng/grpc-web";
import { MdbNotificationRef, MdbNotificationService } from "mdb-angular-ui-kit/notification";
import { AlertComponent } from "../../../_components/alert/alert.component";
import Request = grpc.Request;
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-view-chat-channel',
  templateUrl: './view-chat-channel.component.html',
  styleUrls: ['./view-chat-channel.component.scss']
})
export class ViewChatChannelComponent implements OnInit {

  chatChannel: ChatChannel;
  chatMessages: ChatMessage[] = [
    // {username: "anthony", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida rutrum quisque non tellus orci ac"},
    // {username: "ross", message: "Feugiat nibh sed pulvinar proin gravida hendrerit lectus a."},
    // {username: "ross", message: "Nunc pulvinar sapien et ligula. Sit amet venenatis urna cursus eget nunc scelerisque. "},
    // {username: "anthony", message: "Pellentesque habitant morbi tristique senectus et netus et."},
    // {username: "wil", message: "Laoreet non curabitur gravida arcu ac tortor dignissim. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla."},
    // {username: "terry", message: "Cursus metus aliquam eleifend mi in nulla."},
    // {username: "wil", message: "Mauris in aliquam sem fringilla ut. Aliquet nec ullamcorper sit amet risus nullam"},
  ];
  loadingUsers = true;


  chatMessageStream: Request | null;

  isConnected = false;
  chatMessage = "";

  chatAlert: MdbNotificationRef<AlertComponent>;

  constructor(
    private chatChannelService: ChatChannelService,
    private notificationService: MdbNotificationService,
    private route: ActivatedRoute,
    private keycloak: KeycloakService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.chatChannelService.getChatChannel(Number(this.route.snapshot.paramMap.get('channel'))).subscribe(
      (chatChannel) => {
        this.chatChannel = chatChannel;
        this.connectChat();
      }
    );

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (this.chatMessageStream) {
          this.chatMessageStream.close();
          this.chatMessageStream = null;
        }
      }
    });
  }

  connectChat() {
    const request = new ChannelIdMessage();
    request.setChannelId(this.chatChannel.id);
    this.chatMessageStream = grpc.invoke(ChatService.ConnectChannel, {
      request: request,
      host: environment.CHAT_API_BASE_URL,
      metadata: {
        Authorization: `Bearer ${this.keycloak.getToken()}`,
      },
      onMessage: (message: ChatMessage) => {
        console.log('msg:', message)
        this.chatMessages.push(message);
      },
      onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
        console.log('end:', code, msg, trailers);
        this.isConnected = false;
      },

    });
  }

  getChatChannelClasses(): string {
    if (this.chatChannel)
      return getChatChannelBadgeClasses(this.chatChannel);

    return '';
  }

  sendChatMessage() {
    this.chatChannelService.sendChatMessage(this.chatChannel.id, this.chatMessage).subscribe({
      next: (resp) => {
        console.log('send message resp:', resp);
      },
      error: (err) => {
        console.log('error', err);
        if (this.chatAlert) {
          this.chatAlert.close();
        }

        this.chatAlert = this.notificationService.open(AlertComponent, {
          data: {
            message: 'Error sending message',
            color: 'warning',
            fade: true,
          },
          stacking: true,
          position: "top-center",
        });
      }
    });
    this.chatMessage = "";
  }
}
