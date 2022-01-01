import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) { }

  authenticateLogin(username: string, password: string) {
    return this.httpClient.get<boolean>(`http://localhost:8080/login/${username}/${password}`);
  }
}
