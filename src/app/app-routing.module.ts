import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserProfileComponent } from "./pages/user-profile/user-profile.component";
import { AdminDashboardComponent } from "./pages/admin-dashboard/admin-dashboard.component";
import { AuthGuard } from "./_helpers/auth.guard";
import { UserEditComponent } from "./pages/user-edit/user-edit.component";
import { ViewRoleComponent } from "./pages/roles/view-role/view-role.component";
import { NewRoleComponent } from "./pages/roles/new-role/new-role.component";
import { EditRoleComponent } from "./pages/roles/edit-role/edit-role.component";
import { NewChatChannelComponent } from "./pages/chat/new-chat-channel/new-chat-channel.component";
import { ViewChatChannelComponent } from "./pages/chat/view-chat-channel/view-chat-channel.component";
import { EditChatChannelComponent } from "./pages/chat/edit-chat-channel/edit-chat-channel.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/:user', component: UserProfileComponent },
  { path: 'users/:user/edit', component: UserEditComponent },
  { path: 'roles/new', component: NewRoleComponent },
  { path: 'roles/:role', component: ViewRoleComponent },
  { path: 'roles/:role/edit', component: EditRoleComponent },
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
