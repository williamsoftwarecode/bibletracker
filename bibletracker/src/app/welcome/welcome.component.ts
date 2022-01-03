import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reading, ReadingDataService } from '../service/data/reading-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = "";
  lastReadDate: Date; 
  lastReadBook: string; 
  lastReadChapter: number;

  constructor(
    private route: ActivatedRoute,
    private readingService: ReadingDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params["name"];

    this.readingService.retrieveLastReadByUser(this.name).subscribe(
      response => {
        this.lastReadDate = response.date; 
        this.lastReadBook = response.book; 
        this.lastReadChapter = response.chapter;
      }
    );
  }
}
