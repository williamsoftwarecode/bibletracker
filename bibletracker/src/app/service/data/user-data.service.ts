import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  createUser(username: string, password: string): Observable<string> {
    return this.httpClient.post<string>(this.baseUrl + "/createUser", {username: username, password: password});
  }

  authenticateLogin(username: string, password: string): Observable<boolean> {
    return this.httpClient.post<boolean>(this.baseUrl + "/login", {username: username, password: password});
  }
}
