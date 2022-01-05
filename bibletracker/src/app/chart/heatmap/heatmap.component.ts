import { Component, ViewChild } from "@angular/core";

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";
import { BibleChapters } from "src/app/class/bible-chapters";
import { BibleChaptersDataService } from "src/app/service/data/bible-chapters-data.service";
import { ReadingDataService } from "src/app/service/data/reading-data.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors: any;
  tooltip: any; 
  xaxis: any;
};

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  allBibleChapters: BibleChapters[] = [];

  constructor(
    private bibleChaptersService: BibleChaptersDataService, 
    private readingService: ReadingDataService
  ) {
    this.generateChart();
    this.bibleChaptersService.retrieveBibleBooks().subscribe(
      response => {
        this.allBibleChapters = response;
        this.generateChart();
      }
    );
  }

  public generateChart() {
    this.chartOptions = {
      series: [
        {
          name: "1",
          data: this.generateData(11, {
            min: 0,
            max: 90
          })
        },
        {
          name: "2",
          data: this.generateData(11, {
            min: 0,
            max: 90
          })
        },
        {
          name: "3",
          data: this.generateData(11, {
            min: 0,
            max: 90
          })
        },
        {
          name: "4",
          data: this.generateData(11, {
            min: 0,
            max: 90
          })
        },
        {
          name: "5",
          data: this.generateData(11, {
            min: 0,
            max: 90
          })
        },
        {
          name: "6",
          data: this.generateData(11, {
            min: 0,
            max: 90
          })
        }
      ],
      tooltip: {
        y: {
          formatter: (value: any) => { return value + "%" },
          title: {
            formatter: (value: any) => { return "" }
          }
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
        text: "Books of the Bible"
      }, 
      xaxis: {
        tooltip: {
          enabled: false
        }
      }
    };
  }

  public generateData(count: number, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y, 
        description: 1
      });
      i++;
    }
    return series;
  }
}
