import { Component, ViewChild } from "@angular/core";

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ChartComponent,
  ApexTooltip,
  ApexXAxis,
  ApexGrid,
  ApexPlotOptions
} from "ng-apexcharts";

import { BibleChapters } from "src/app/class/bible-chapters";
import { ChaptersReadForBook } from "src/app/class/chapters-read-for-book";
import { BibleChaptersDataService } from "src/app/service/data/bible-chapters-data.service";
import { ReadingDataService } from "src/app/service/data/reading-data.service";
import { HardCodedAuthenticationService } from "src/app/service/hard-coded-authentication.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors: any;
  tooltip: ApexTooltip; 
  xaxis: ApexXAxis;
  grid: ApexGrid;
};

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  currentUser: string; 
  allBibleChapters: BibleChapters[] = [];
  chaptersReadForBooks: ChaptersReadForBook[] = [];

  constructor(
    private hardCodedAuthenticationService: HardCodedAuthenticationService,
    private bibleChaptersService: BibleChaptersDataService, 
    private readingService: ReadingDataService
  ) {
    this.generateChart();
    this.currentUser = this.hardCodedAuthenticationService.getCurrentUser(); 
    this.bibleChaptersService.retrieveBibleBooks().subscribe(
      response => {
        this.allBibleChapters = response;
        this.generateChart();
      }
    );
    this.readingService.getCompletedChaptersByBookForUser(this.currentUser).subscribe(
      response => {
        this.chaptersReadForBooks = response; 
        this.generateChart();
      }
    );
  }

  public generateChart() {
    this.chartOptions = {
      series: [
        {
          name: "6",
          data: this.generateBooksForLine(6)
        },
        {
          name: "5",
          data: this.generateBooksForLine(5)
        },
        {
          name: "4",
          data: this.generateBooksForLine(4)
        },
        {
          name: "3",
          data: this.generateBooksForLine(3)
        },
        {
          name: "2",
          data: this.generateBooksForLine(2)
        },
        {
          name: "1",
          data: this.generateBooksForLine(1)
        }
      ],
      tooltip: {
        custom: function(input: any) {
          const desc = input.ctx.w.config.series[input.seriesIndex].data[
            input.dataPointIndex
          ].description
          const chaptersRead = input.ctx.w.config.series[input.seriesIndex].data[
            input.dataPointIndex
          ].chaptersRead
          const totalChapters = input.ctx.w.config.series[input.seriesIndex].data[
            input.dataPointIndex
          ].totalChapters
          const value = input.series[input.seriesIndex][input.dataPointIndex]
          
          return desc + ': ' + chaptersRead + '/' + totalChapters;
        }
      },
      chart: {
        height: 350,
        type: "heatmap",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#008FFB"],
      title: {
        text: "Books of the Bible (Heatmap)"
      }, 
      xaxis: {
        tooltip: {
          enabled: false
        }
      }, 
      grid: {
        show: true,
        borderColor: 'black',
        strokeDashArray: 0,
        position: 'front',
        xaxis: {
            lines: {
                show: true
            }
        },   
        yaxis: {
            lines: {
                show: true
            }
        },  
        row: {
            colors: undefined,
            opacity: 0.5
        },  
        column: {
            colors: undefined,
            opacity: 0.5
        }
      }
    };
  }

  public generateBooksForLine(line: number) {
    var numberInLine: number = 11;

    if (this.allBibleChapters.length === 0 || 
      this.chaptersReadForBooks.length === 0) {
      return;
    }

    var i = 0;
    var series: any = [];
    while (i < 11) {
      var x = (i + 1).toString();
      
      let bookChapters: BibleChapters = this.allBibleChapters[i + (numberInLine*(line-1))]; 
      var description = bookChapters.book;
      let chaptersReadForBook = this.chaptersReadForBooks.find(book => book.book === description);
      var percentage: number; 

      let chaptersRead: number; 
      let totalChapters: number = bookChapters.chapter;

      if (chaptersReadForBook == undefined) {
        chaptersRead = 0;
        percentage = 0;
      } else {
        chaptersRead = chaptersReadForBook.chaptersRead;
        percentage = chaptersReadForBook.chaptersRead / bookChapters.chapter * 100;
      }

      series.push({
        x: x,
        y: percentage, 
        chaptersRead: chaptersRead,
        totalChapters: totalChapters,
        description: description
      });
      i++;
    }
    return series;
  }
}
