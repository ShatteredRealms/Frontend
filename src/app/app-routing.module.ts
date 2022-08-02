import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/public/home/home.component';
import {LoginComponent} from './pages/public/login/login.component';
import {RegisterComponent} from "./pages/public/register/register.component";
import {UsersComponent} from "./pages/public/users/users.component";
import {AdminDashboardComponent} from "./pages/admin/admin-dashboard/admin-dashboard.component";
import {AuthGuard} from "./_helpers/auth.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'users/:user', component: UsersComponent},
  {path: 'admin', component: AdminDashboardComponent, data: {roles: ["SUPER ADMIN", "ADMIN"]}, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
