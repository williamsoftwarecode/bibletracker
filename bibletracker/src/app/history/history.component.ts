import { Component, OnInit } from '@angular/core';
import { ReadingDataService } from '../service/data/reading-data.service';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import { Sort } from '@angular/material/sort';

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
  sortedData: Reading[];

  constructor(
    private hardCodedAuthenticationService: HardCodedAuthenticationService,
    private readingService: ReadingDataService) { }

  ngOnInit(): void {
    let username = this.hardCodedAuthenticationService.getCurrentUser();

    this.readingService.retrieveAllReadings(username).subscribe(
      response => {
        this.readings = response;
        this.sortedData = response;
      }
    );
  }

  sortData(sort: Sort) {
    console.log(sort)

    const data = this.readings.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'number':
          return compare(a.id, b.id, isAsc);
        case 'date':
          return compareDates(a.date, b.date, isAsc);
        case 'book':
          return compare(a.book, b.book, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function compareDates(a: Date, b: Date, isAsc: boolean) {
  if (new Date(a) < new Date(b)) return (isAsc ? 1 : -1);
  if (new Date(a) > new Date(b)) return (isAsc ? -1 : 1);
  return 0;
}