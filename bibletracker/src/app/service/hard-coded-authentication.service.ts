import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  key = "authenticatedUser";

  constructor() { }

  authenticate(username: string, password: string) {
    if (username === "Angular" && password === "test") {
      sessionStorage.setItem(this.key, username); 
      return true; 
    } else {
      return false;
    }
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
