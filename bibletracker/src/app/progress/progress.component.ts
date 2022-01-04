import { Component, OnInit } from '@angular/core';
import { ChaptersReadForBook } from '../class/chapters-read-for-book';
import { ReadingDataService } from '../service/data/reading-data.service';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  currentUser: string = "";
  numberCompletedChapters: number = 0;
  percentCompletedChapsStr: string = "0";
  percentCompletedChapsNum: number = 0;

  chaptersReadForBooks: ChaptersReadForBook[];

  constructor(
    private hardCodedAuthenticationService: HardCodedAuthenticationService,
    private readingService: ReadingDataService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.hardCodedAuthenticationService.getCurrentUser();
    this.readingService.getCompletedChaptersByUser(this.currentUser).subscribe(
      response => {
        this.numberCompletedChapters = response
        this.percentCompletedChapsNum = (Math.round(response / 1189 * 100 * 100) / 100);
        this.percentCompletedChapsStr = this.percentCompletedChapsNum.toFixed(2);
      }
    ); 
    this.readingService.getCompletedChaptersByBookForUser(this.currentUser).subscribe(
      response => {
        this.chaptersReadForBooks = response;
      }
    );
  }

}
