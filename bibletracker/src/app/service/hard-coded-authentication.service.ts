import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataService } from './data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  key = "authenticatedUser";

  constructor(private userService: UserDataService) { }

  authenticate(username: string, password: string): Observable<any> {
    let authentication = this.userService.authenticateLogin(username, password);
    authentication.subscribe(
      response => {
        if (response) {
          sessionStorage.setItem(this.key, username); 
        } 
      }
    );
    return authentication;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.key);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(this.key);
  }

  getCurrentUser() {
    let user = sessionStorage.getItem(this.key); 
    return !(user === null) ? user : "";
  }
}
