import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserProfileComponent } from "./pages/user-profile/user-profile.component";
import { AdminDashboardComponent } from "./pages/admin-dashboard/admin-dashboard.component";
import { AuthGuard } from "./_helpers/auth.guard";
import { NewChatChannelComponent } from "./pages/chat/new-chat-channel/new-chat-channel.component";
import { ViewChatChannelComponent } from "./pages/chat/view-chat-channel/view-chat-channel.component";
import { EditChatChannelComponent } from "./pages/chat/edit-chat-channel/edit-chat-channel.component";
import { DefaultComponent } from './layouts/default/default.component';
import { AdminComponent } from './layouts/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'users/:user', component: UserProfileComponent },
    ]
  },
  {
    path: '',
    component: AdminComponent,
    data: { roles: ["super admin", "admin"] },
    canActivate: [AuthGuard],
    children: [
      { path: 'chat/channels/new', component: NewChatChannelComponent },
      { path: 'chat/channels/:channel', component: ViewChatChannelComponent },
      { path: 'chat/channels/:channel/edit', component: EditChatChannelComponent },
      { path: 'admin', component: AdminDashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
