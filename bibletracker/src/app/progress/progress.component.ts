import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
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
  percentCompletedChapsStr: string;
  percentCompletedChapsNum: number;

  constructor(
    private hardCodedAuthenticationService: HardCodedAuthenticationService,
    private readingService: ReadingDataService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.hardCodedAuthenticationService.getCurrentUser();
    this.readingService.getCompletedChaptersByUser(this.currentUser).subscribe(
      response => {
        this.numberCompletedChapters = response
        this.percentCompletedChapsNum = response / 1189;
        this.percentCompletedChapsStr = (Math.round(response / 1189 * 100 * 100) / 100).toFixed(2);
      }
    ); 
  }

}
