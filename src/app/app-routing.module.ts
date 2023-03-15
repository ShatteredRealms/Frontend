import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserProfileComponent } from "./pages/user-profile/user-profile.component";
import { AdminDashboardComponent } from "./pages/admin-dashboard/admin-dashboard.component";
import { AuthGuard } from "./_helpers/auth.guard";
import { NewChatChannelComponent } from "./pages/chat/new-chat-channel/new-chat-channel.component";
import { ViewChatChannelComponent } from "./pages/chat/view-chat-channel/view-chat-channel.component";
import { EditChatChannelComponent } from "./pages/chat/edit-chat-channel/edit-chat-channel.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/:user', component: UserProfileComponent },
  { path: 'chat/channels/new', component: NewChatChannelComponent },
  { path: 'chat/channels/:channel', component: ViewChatChannelComponent },
  { path: 'chat/channels/:channel/edit', component: EditChatChannelComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    data: { roles: ["SUPER ADMIN", "ADMIN"] },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
