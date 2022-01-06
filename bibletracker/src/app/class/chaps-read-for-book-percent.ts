import { BibleChapters } from "./bible-chapters";
import { ChaptersReadForBook } from "./chapters-read-for-book";

export class ChapsReadForBookPercent {
    public book: string; 
    public chaptersRead: number; 
    public totalChapters: number | undefined;
    public percentageComplete: number;

    constructor(
        public crfb: ChaptersReadForBook, 
        private allBibleChapters: BibleChapters[]
    ) {
        this.book = crfb.book; 
        this.chaptersRead = crfb.chaptersRead; 
        
        this.totalChapters = this.allBibleChapters.find(b => b.book === this.book)?.chapter; 
        if (this.totalChapters != undefined) {
            this.percentageComplete = (Math.round(this.chaptersRead / this.totalChapters * 100 * 100) / 100);
        }
    }
}
