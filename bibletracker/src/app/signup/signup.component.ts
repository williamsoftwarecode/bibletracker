import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../service/data/user-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string; 
  password: string;
  serverMessage: string;

  constructor(
    private userService: UserDataService
    ) { }

  ngOnInit(): void {
  }

  createAccount(): void {
    this.userService.createUser(this.username, this.password).subscribe(
      response => {
        this.serverMessage = response;
      }
    );
  }
}
