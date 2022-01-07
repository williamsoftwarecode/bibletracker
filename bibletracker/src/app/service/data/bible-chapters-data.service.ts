import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BibleChapters } from 'src/app/class/bible-chapters';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BibleChaptersDataService {

  allBibleChapters: BibleChapters[] = [];
  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  retrieveBibleBooks() {
    if (this.allBibleChapters.length === 0) {
      let obsBibleChapters = this.httpClient.get<BibleChapters[]>(this.baseUrl + "/getBible");
      obsBibleChapters.subscribe(
        response => this.allBibleChapters = response
      );

      return obsBibleChapters;
    }

    return of(this.allBibleChapters);
  }
}
