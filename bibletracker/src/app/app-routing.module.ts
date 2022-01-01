import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "welcome/:name", component: WelcomeComponent, canActivate:[RouteGuardService]},
  // { path: "todos", component: ListTodosComponent, canActivate:[RouteGuardService]},
  { path: "history", component: HistoryComponent, canActivate:[RouteGuardService] },
  { path: "logout", component: LogoutComponent, canActivate:[RouteGuardService] },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }