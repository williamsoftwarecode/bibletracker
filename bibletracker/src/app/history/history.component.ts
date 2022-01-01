import { Component, OnInit } from '@angular/core';
import { ReadingDataService } from '../service/data/reading-data.service';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

export class Reading {
  constructor(
    public id: number, 
    public date: Date, 
    public username: string, 
    public book: string, 
    public chapter: number
  ) { }
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  readings : Reading[];
    // new Reading(1, new Date, "Learn Angular", "Learn Angular", 1)

  constructor(
    private hardCodedAuthenticationService: HardCodedAuthenticationService,
    private readingService: ReadingDataService) { }

  ngOnInit(): void {
    let username = this.hardCodedAuthenticationService.getCurrentUser();

    this.readingService.retrieveAllReadings(username).subscribe(
      response => {
        this.readings = response;
      }
    );
  }

}
