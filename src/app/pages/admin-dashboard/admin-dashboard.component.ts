import { Component, OnInit } from '@angular/core';
import { ChatChannel } from "../../models/chat-channel.model";
import { ChatChannelService } from "../../_services/chat-channel.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  loadingUsers = true;
  loadingRoles = true;
  loadingPermissions = true;
  loadingChatChannels = true;

  chatChannels: ChatChannel[] = [];

  constructor(
    private _chatChannelService: ChatChannelService,
  ) {
  }

  ngOnInit(): void {
    this.getAllChatChannels();
  }

  getAllChatChannels() {
    this._chatChannelService.getAllChatChannels().subscribe((resp) => {
      this.loadingChatChannels = false;
      this.chatChannels = resp;
    })
  }
}
