import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  chapterName = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.chapterName = this.route.snapshot.params["chapterName"];
  }


}
