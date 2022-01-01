import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string; 
  password: string;
  invalidMessage = "Invalid Credentials";
  displayInvalidMessage = false;

  constructor(
    private hardcodedAuthenticationService: HardCodedAuthenticationService, 
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.displayInvalidMessage = false; 
      this.router.navigate(["welcome", this.username]);
    } else {
      this.displayInvalidMessage = true;
    }
  }

}
