import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChaptersReadForBook } from 'src/app/class/chapters-read-for-book';
import { environment } from 'src/environments/environment';

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

  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  retrieveAllReadings(username: string) {
    return this.httpClient.get<Reading[]>(this.baseUrl + `/getAllRead/${username}`);
  }

  retrieveReadingsByBook(username: string, book: string) {
    return this.httpClient.get<Reading[]>(this.baseUrl + `/getChaptersReadByBook/${username}/${book}`)
  }

  retrieveLastReadByUser(username: string) {
    return this.httpClient.get<Reading>(this.baseUrl + `/getLastRead/${username}`);
  }

  getCompletedChaptersByUser(username: string) {
    return this.httpClient.get<number>(this.baseUrl + `/getCompletedChapters/${username}`);
  }

  getCompletedChaptersByBookForUser(username: string) {
    return this.httpClient.get<ChaptersReadForBook[]>(this.baseUrl + `/getCompletedChaptersByBook/${username}`);
  }

  addReadChapter(username: string, book: string, chapter: number) {
    return this.httpClient.post(this.baseUrl + `/addRead/${username}/${book}/${chapter}`, "");
  }

  deleteReadChapter(username: string, book: string, chapter: number) {
    return this.httpClient.delete(this.baseUrl + `/deleteRead/${username}/${book}/${chapter}`);
  }
}
