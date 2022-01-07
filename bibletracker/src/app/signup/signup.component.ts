import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserDataService } from '../service/data/user-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  usernameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);

  username: string; 
  password: string;
  serverMessage: string;

  constructor(
    private userService: UserDataService
    ) { }

  ngOnInit(): void {
  }

  createAccount(): void {
    if (this.username.length !== 0 && this.password.length !== 0) {
      this.userService.createUser(this.username, this.password).subscribe(
        response => {
          this.serverMessage = response;
        }
      );
    }
  }
}
