import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  authenticateLogin(username: string, password: string) {
    return this.httpClient.get<boolean>(this.baseUrl + `/login/${username}/${password}`);
  }
}
