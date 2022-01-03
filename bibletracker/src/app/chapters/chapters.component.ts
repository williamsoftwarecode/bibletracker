import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibleChapters } from '../class/bible-chapters';
import { BibleChaptersDataService } from '../service/data/bible-chapters-data.service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  chapterName = "";
  totalChapters = 0;
  chapterArray: number[] = [];

  bibleChapters: BibleChapters[];

  constructor(
    private route: ActivatedRoute, 
    private bibleChaptersService: BibleChaptersDataService) { }

  ngOnInit(): void {
    this.chapterName = this.route.snapshot.params["chapterName"];
    this.bibleChaptersService.retrieveBibleBooks().subscribe(
      response => {
        this.bibleChapters = response;
        
        let bibleChapter = this.bibleChapters.find(bc => bc.book === this.chapterName); 
        
        if (bibleChapter !== undefined) {
          this.totalChapters = bibleChapter.chapter;
          this.chapterArray = Array(this.totalChapters).fill(1).map((x,i)=>i+1); 
        }
      }
    );
  }
}
