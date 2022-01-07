import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibleChapters } from '../class/bible-chapters';
import { BibleChaptersDataService } from '../service/data/bible-chapters-data.service';
import { ReadingDataService } from '../service/data/reading-data.service';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  bookName = "";
  currentUser = "";
  totalChapters = 0;
  bibleChapters: BibleChapters[];
  allChapters: number[] = [];
  readChapters: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private bibleChaptersService: BibleChaptersDataService,
    private readingService: ReadingDataService,
    private hardCodedAuthenticationService: HardCodedAuthenticationService) { }

  ngOnInit(): void {
    this.bookName = this.route.snapshot.params["bookName"];
    this.currentUser = this.hardCodedAuthenticationService.getCurrentUser();

    this.readingService.retrieveReadingsByBook(this.currentUser, this.bookName).subscribe(
      response => {
        let readResponse = response;
        readResponse.forEach(bc => this.readChapters.push(bc.chapter));
      }
    );

    this.bibleChaptersService.retrieveBibleBooks().subscribe(
      response => {
        this.bibleChapters = response;

        let bibleChapter = this.bibleChapters.find(bc => bc.book === this.bookName);

        if (bibleChapter !== undefined) {
          this.totalChapters = bibleChapter.chapter;
          this.allChapters = Array(this.totalChapters).fill(1).map((x,i)=>i+1);
        }
      }
    );
  }

  onChange($event: { value: any; }) {
    let chapter = $event.value;

    // Read => Not Read
    if (this.readChapters.indexOf(chapter) != -1) {
      var index = this.readChapters.indexOf(chapter);
      if (index !== -1) {
        this.readChapters.splice(index, 1);
      }

      this.readingService.deleteReadChapter(this.currentUser, this.bookName, chapter).subscribe();
    } else {
      this.readChapters.push(chapter);
      this.readingService.addReadChapter(this.currentUser, this.bookName, chapter).subscribe();
    }
  }

  isRead(chapter: number): boolean {
    if (this.readChapters.indexOf(chapter) != -1) {
      return true;
    }
    return false;
  }
}
