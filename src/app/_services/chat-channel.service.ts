import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {ChatChannel} from "../models/chat-channel.model";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

const CHAT_CHANNELS_KEY = 'chat-channels';

@Injectable({
  providedIn: 'root'
})
export class ChatChannelService {

  constructor(
    private http: HttpClient
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

  public deleteChatChannel(id: number): Observable<any> {
    return this.http.delete(
      `${environment.CHAT_API_URL}/channels/${id}`,
    );
  }

  getChatChannel(id: number): Observable<ChatChannel> {
    return this.http.get<ChatChannel>(
      `${environment.CHAT_API_URL}/channels/${id}`,
    );
  }

  updateChatChannelName(id: number, newName: string): Observable<any> {
    return this.http.put<ChatChannel>(
      `${environment.CHAT_API_URL}/channels/${id}`,
      {name: newName},
    );
  }

  createChatChannel(name: string, isPublic: boolean): Observable<any> {
    return this.http.post<ChatChannel>(
      `${environment.CHAT_API_URL}/channels`,
      {name, public: isPublic},
    );
  }

  sendChatMessage(id: number, message: string): Observable<any> {
    return this.http.post(
      `${environment.CHAT_API_URL}/message/channel/${id}`,
      {message},
    );
  }
}
