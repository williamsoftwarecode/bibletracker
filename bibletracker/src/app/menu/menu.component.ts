import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private hardCodedAuthenticationService: HardCodedAuthenticationService
  ) { }

  ngOnInit(): void {
  }

  loggedIn(): boolean {
    return this.hardCodedAuthenticationService.isUserLoggedIn();
  }

  getUsername(): string {
    return this.hardCodedAuthenticationService.getCurrentUser();
  }

}
