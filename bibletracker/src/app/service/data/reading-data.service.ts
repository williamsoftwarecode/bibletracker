import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChaptersReadForBook } from 'src/app/class/chapters-read-for-book';

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

  retrieveReadingsByBook(username: string, book: string) {
    return this.httpClient.get<Reading[]>(`http://localhost:8080/getChaptersReadByBook/${username}/${book}`)
  }

  retrieveLastReadByUser(username: string) {
    return this.httpClient.get<Reading>(`http://localhost:8080/getLastRead/${username}`);
  }

  getCompletedChaptersByUser(username: string) {
    return this.httpClient.get<number>(`http://localhost:8080/getCompletedChapters/${username}`);
  }

  getCompletedChaptersByBookForUser(username: string) {
    return this.httpClient.get<ChaptersReadForBook[]>(`http://localhost:8080/getCompletedChaptersByBook/${username}`);
  }

  addReadChapter(username: string, book: string, chapter: number) {
    return this.httpClient.post(`http://localhost:8080/addRead/${username}/${book}/${chapter}`, "");
  }

  deleteReadChapter(username: string, book: string, chapter: number) {
    return this.httpClient.delete(`http://localhost:8080/deleteRead/${username}/${book}/${chapter}`);
  }
}
