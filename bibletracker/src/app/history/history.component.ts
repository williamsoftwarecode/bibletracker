import { Component, OnInit } from '@angular/core';

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

  readings = [
    new Reading(1, new Date, "Learn Angular", "Learn Angular", 1)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
