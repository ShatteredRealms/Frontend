import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { CharacterResponse } from 'src/app/generated/sro/characters/characters_pb';
import { ACharactersService } from 'src/app/_services/characters.service';
import { KeycloakService } from 'src/app/_services/keycloak.service';
import { ChatChannel } from "../../models/chat-channel.model";
import { ChatChannelService } from "../../_services/chat-channel.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  loadingChatChannels = true;
  loadingCharacters = true;
  loadingUsers = true;

  chatChannels: ChatChannel[] = [];
  characters: CharacterResponse[] = [];
  users: KeycloakProfile[] = [];

  constructor(
    private _chatChannelService: ChatChannelService,
    private _charactersService: ACharactersService,
    private _keycloak: KeycloakService,
  ) {
  }

  ngOnInit(): void {
    this.getAllChatChannels();
    this.getAllCharacters();
    this.getAllUsers();
  }

  getAllChatChannels() {
    this._chatChannelService.getAllChatChannels().subscribe((resp) => {
      this.loadingChatChannels = false;
      this.chatChannels = resp;
    });
  }

  getAllCharacters() {
    this._charactersService.getAllCharacters().subscribe((resp) => {
      this.loadingCharacters = false;
      this.characters = resp;
    })
  }

  getAllUsers() {
    this._keycloak.getAllUsers().subscribe({
      next: (resp) => {
        this.loadingUsers = false;
        this.users = resp;
      },
      error: (err) => {
        console.log('get all users: ', err);
      },
    })
  }
}
