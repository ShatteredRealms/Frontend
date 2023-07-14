import { Injectable } from '@angular/core';
import { Observable, of, throwError } from "rxjs";
import { ChatChannel } from "../models/chat-channel.model";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { KeycloakService } from './keycloak.service';
import { grpc } from '@improbable-eng/grpc-web';
import { ChatService } from '../generated/sro/chat/chat_pb_service';
import { ChatChannelTarget, ChatMessage, SendChatMessageRequest } from '../generated/sro/chat/chat_pb';

const CHAT_CHANNELS_KEY = 'chat-channels';

@Injectable({
  providedIn: 'root'
})
export class ChatChannelService {

  constructor(
    private http: HttpClient,
    private keycloak: KeycloakService,
  ) {
  }

  public getAllChatChannels(forceRefresh: boolean = true): Observable<ChatChannel[]> {
    if (!forceRefresh) {
      let chatChannelsString = localStorage.getItem(CHAT_CHANNELS_KEY);
      if (chatChannelsString) {
        return of(JSON.parse(chatChannelsString));
      }
    }

    return this.http.get<any>(`${environment.CHAT_API_URL}/channels`)
      .pipe(map(resp => {
        localStorage.setItem(CHAT_CHANNELS_KEY, JSON.stringify(resp.channels));
        return resp.channels;
      }));
  }

  public updateCharacterAuthorization(characterId: number, channels: number[], add: boolean): Observable<string> {
    return this.http.put<any>(
      `${environment.CHAT_API_URL}/channels/characters/id/${characterId}`,
      {
        ids: channels,
        add: add,
      }
    ).pipe(map((resp) => {
      return resp;
    }));
  }

  public getAllChatChannelsForCharacter(id: number, forceRefresh: boolean = true): Observable<ChatChannel[]> {
    if (!forceRefresh) {
      let chatChannelsString = localStorage.getItem(`${CHAT_CHANNELS_KEY}-${id}`);
      if (chatChannelsString) {
        return of(JSON.parse(chatChannelsString));
      }
    }

    return this.http.get<any>(`${environment.CHAT_API_URL}/channels/character/id/${id}`)
      .pipe(map(resp => {
        localStorage.setItem(`${CHAT_CHANNELS_KEY}-${id}`, JSON.stringify(resp.channels));
        return resp.channels;
      }));
  }

  public deleteChatChannel(id: number): Observable<any> {
    return this.http.delete(
      `${environment.CHAT_API_URL}/channels/id/${id}`,
    );
  }

  getChatChannel(id: number): Observable<ChatChannel> {
    return this.http.get<ChatChannel>(
      `${environment.CHAT_API_URL}/channels/id/${id}`,
    );
  }

  updateChatChannelName(id: number, newName: string): Observable<any> {
    return this.http.put<ChatChannel>(
      `${environment.CHAT_API_URL}/channels/id/${id}`,
      { name: newName },
    );
  }

  createChatChannel(name: string, dimension: string): Observable<any> {
    return this.http.post<ChatChannel>(
      `${environment.CHAT_API_URL}/channels`,
      { name, dimension },
    );
  }

  sendChatMessage(
    id: number,
    character: string,
    message: string,
  ): Observable<any> {
    return new Observable((subscriber) => {
      const request = new SendChatMessageRequest();
      request.setChannelId(id);

      const chatMessage = new ChatMessage();
      chatMessage.setMessage(message);
      chatMessage.setCharacterName(character);
      request.setChatMessage(chatMessage);

      grpc.invoke(ChatService.SendChatMessage, {
        host: environment.CHAT_API_BASE_URL,
        metadata: {
          Authorization: `Bearer ${this.keycloak.instance.token}`,
        },
        request: request,
        onEnd: function(code: grpc.Code, message: string, trailers: grpc.Metadata): void {
          console.log('send chat message end:', code, message, trailers);
          if (code != grpc.Code.OK) {
            subscriber.error(message);
          } else {
            subscriber.next(message);
          }

          subscriber.complete();
        },
      });
    })
  }

  connectChat(id: number): Observable<any> {
    return new Observable((subscriber) => {
      const request = new ChatChannelTarget();
      request.setId(id);
      grpc.invoke(ChatService.ConnectChannel, {
        request: request,
        host: environment.CHAT_API_BASE_URL,
        metadata: {
          Authorization: `Bearer ${this.keycloak.instance.token}`,
        },
        onMessage: (message: ChatMessage) => {
          subscriber.next(message);
        },
        onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
          console.log('connect chat end:', code, msg, trailers);
          if (code != grpc.Code.OK) {
            subscriber.error(msg);
          }
          subscriber.complete();
        },

      });
    });
  }
}
