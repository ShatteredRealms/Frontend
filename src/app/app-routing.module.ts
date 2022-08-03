import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from "./pages/register/register.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";
import {AdminDashboardComponent} from "./pages/admin-dashboard/admin-dashboard.component";
import {AuthGuard} from "./_helpers/auth.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'users/:user', component: UserProfileComponent},
  {path: 'admin', component: AdminDashboardComponent, data: {roles: ["SUPER ADMIN", "ADMIN"]}, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
