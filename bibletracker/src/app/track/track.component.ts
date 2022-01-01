import { Component, OnInit } from '@angular/core';
import { BibleChaptersDataService } from '../service/data/bible-chapters-data.service';

export class BibleChapters {
  constructor(
    public book: string, 
    public chapter: number
  ) { }
}

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  bibleChapters: BibleChapters[]; 

  constructor(
    private bibleChaptersService: BibleChaptersDataService
  ) { }

  ngOnInit(): void {
    this.bibleChaptersService.retrieveBibleBooks().subscribe(
      response => {
        this.bibleChapters = response;
      }
    );
  }
}
