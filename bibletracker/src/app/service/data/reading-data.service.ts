import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Reading {
  constructor(
    public id: number, 
    public date: Date, 
    public username: string, 
    public book: string, 
    public chapter: number
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class ReadingDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveAllReadings(username: string) {
    return this.httpClient.get<Reading[]>(`http://localhost:8080/getAllRead/${username}`);
  }
}
