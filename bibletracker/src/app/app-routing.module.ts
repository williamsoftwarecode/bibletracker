import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChaptersComponent } from './chapters/chapters.component';
import { ErrorComponent } from './error/error.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProgressComponent } from './progress/progress.component';
import { RouteGuardService } from './service/route-guard.service';
import { SignupComponent } from './signup/signup.component';
import { TrackComponent } from './track/track.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "welcome/:name", component: WelcomeComponent, canActivate:[RouteGuardService]},
  { path: "track", component: TrackComponent, canActivate:[RouteGuardService]},
  { path: "track/:bookName", component: ChaptersComponent, canActivate:[RouteGuardService]},
  { path: "history", component: HistoryComponent, canActivate:[RouteGuardService] },
  { path: "progress", component: ProgressComponent, canActivate:[RouteGuardService] },
  { path: "logout", component: LogoutComponent, canActivate:[RouteGuardService] },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
