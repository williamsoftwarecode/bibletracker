import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class BibleChapters {
  constructor(
    public book: string, 
    public chapter: number
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class BibleChaptersDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveBibleBooks() {
    return this.httpClient.get<BibleChapters[]>("http://localhost:8080/getBible");
  }
}
