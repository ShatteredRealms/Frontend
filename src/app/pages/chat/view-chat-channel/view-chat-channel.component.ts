import { Component, OnInit } from '@angular/core';
import { ChatChannel } from "../../../models/chat-channel.model";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { ChatChannelService } from "../../../_services/chat-channel.service";
import { grpc } from "@improbable-eng/grpc-web";
import { MdbNotificationRef, MdbNotificationService } from "mdb-angular-ui-kit/notification";
import { AlertComponent } from "../../../components/alert/alert.component";
import Request = grpc.Request;
import { ChatMessage } from 'src/app/generated/sro/chat/chat_pb';
import { ACharacterService } from 'src/app/_services/character.service';
import { CharactersDetails, CharacterDetails } from 'src/app/generated/sro/character/character_pb';

@Component({
  selector: 'app-view-chat-channel',
  templateUrl: './view-chat-channel.component.html',
  styleUrls: ['./view-chat-channel.component.scss']
})
export class ViewChatChannelComponent implements OnInit {

  chatChannel: ChatChannel | null;
  chatMessages: ChatMessage[] = [];
  loadingUsers = true;


  chatMessageStream: Request | null;

  isConnected = false;
  chatMessage: string = "";

  chatAlert: MdbNotificationRef<AlertComponent>;

  characters: CharacterDetails[] = [];
  selectedCharacter: CharacterDetails | undefined;

  constructor(
    private chatChannelService: ChatChannelService,
    private notificationService: MdbNotificationService,
    private route: ActivatedRoute,
    private router: Router,
    private characterService: ACharacterService,
  ) {
  }

  ngOnInit(): void {
    this.chatChannelService.getChatChannel(Number(this.route.snapshot.paramMap.get('channel'))).subscribe(
      (chatChannel) => {
        this.chatChannel = chatChannel;
        this.connectChat();
      }
    );

    this.characterService.getCharacters().subscribe({
      next: (characters: CharactersDetails) => {
        this.characters = characters.getCharactersList();
      },
    })

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
    this.chatChannelService.connectChat(this.chatChannel!.id).subscribe({
      next: (message) => {
        this.chatMessages.push(message);
      },
      error: (error) => {
        this.newChatAlert('Error connecting to chat: '+error, 'warning')
      },
      complete: () => {
        this.isConnected = false;
      }
    })
  }

  sendChatMessage() {
    if (this.selectedCharacter === undefined) {
      this.newChatAlert('Please select a character before sending a message', 'danger');
      return;
    }
    console.log('selectedCharacter:', this.selectedCharacter);
    this.chatChannelService.sendChatMessage(
      this.chatChannel!.id,
      this.selectedCharacter.getName(),
      this.chatMessage,
    ).subscribe({
      error: (err) => {
        this.newChatAlert(`Error sending message: ${err}`, 'warning')
        this.chatMessage = "";
      },
      complete: () => {
        this.chatMessage = "";
      }
    });
  }

  private newChatAlert(message: string, color: string) {
    if (this.chatAlert) {
      this.chatAlert.close();
    }

    this.chatAlert = this.notificationService.open(AlertComponent, {
      data: {
        message: message,
        color: color,
        fade: true,
      },
      stacking: true,
      position: "top-center",
    });
  }
}
