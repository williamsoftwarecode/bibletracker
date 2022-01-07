import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { HistoryComponent } from './history/history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { TrackComponent } from './track/track.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ChaptersComponent } from './chapters/chapters.component'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import { MatSortModule } from '@angular/material/sort';
import { ProgressComponent } from './progress/progress.component';
import { RadialbarComponent } from './chart/radialbar/radialbar.component'; 
import { NgApexchartsModule } from "ng-apexcharts";
import { HeatmapComponent } from './chart/heatmap/heatmap.component';
import { SignupComponent } from './signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    LogoutComponent,
    ErrorComponent,
    FooterComponent,
    HistoryComponent,
    WelcomeComponent,
    TrackComponent,
    ChaptersComponent,
    ProgressComponent,
    RadialbarComponent,
    HeatmapComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatButtonToggleModule, 
    MatSortModule,
    NgApexchartsModule, 
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
