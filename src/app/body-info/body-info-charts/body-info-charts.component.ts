import { AfterViewInit, Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { BodyInfo } from 'src/app/models/body-info/body-info';
import { BodyInfoChartsService } from './body-info-charts.service';
import { ChartTypes } from 'src/app/enums/chart-types';
import { BodyInfoChartsState } from 'src/app/models/body-info-charts-state';

@Component({
  selector: 'app-body-info-charts',
  templateUrl: './body-info-charts.component.html',
  styleUrls: ['./body-info-charts.component.css'],
})
export class BodyInfoChartsComponent implements AfterViewInit {
  chartKg: any;
  chartBodyFat: any;
  chartWater: any;

  imgUrlChartKg$ = this.service.imgUrlChartKgUrl$;
  imgUrlChartBodyFat$ = this.service.imgUrlChartBodyfatUrl$;
  imgUrlChartWater$ = this.service.imgUrlChartWaterUrl$;
  bodyInfoChartsState$ = this.service.bodyInfoChartsState$;

  window: Window = window;

  chartKgShow$ = this.service.showKgChart$;
  chartBodyFatShow$ = this.service.showBodyFatChart$;
  chartBodyWaterShow$ = this.service.showBodWaterChart$;
  isShowinfDetails$ = this.service.showingDetails$;

  selectedCharts: string[] = ['0'];

  chartsType = ChartTypes;

  constructor(private service: BodyInfoChartsService) {
    this.bodyInfoChartsState$.subscribe((value: any) => {
      console.log('value imamo', value);
      this.refreshChartData(value);
    });
  }

  ngAfterViewInit() {
    this.service.loadInitalData();
  }

  changeTab(event: Event) {
    if ((<CustomEvent>event).detail.value == 0) {
      this.service.changeTabs(0);

      //this.refreshChartData();
    } else {
      this.service.changeTabs(1);

      this.changeCanvasToPicture();
    }
  }

  changeCanvasToPicture() {
    this.service.setKgCanvasPictureUrl(
      document.getElementById('chartCanvasKg') as HTMLCanvasElement
    );
    this.service.setBodyfatCanvasPictureUrl(
      document.getElementById('chartCanvasBodyFat') as HTMLCanvasElement
    );
    this.service.setWaterCanvasPictureUrl(
      document.getElementById('chartCanvasWater') as HTMLCanvasElement
    );
  }

  refreshChartData(bodyInfoData: BodyInfoChartsState) {
    this.service.getChartData().subscribe({
      next: (data) => {
        this.createChart(data, bodyInfoData);
        this.changeCanvasToPicture();
      },
      error: (err) => {
        console.log('error' + err);
      },
    });
  }

  handleChange(e: any) {
    this.selectedCharts = e.detail.value;

    this.service.filterChartsByType(e.detail.value);
    //this.refreshChartData();
  }

  private createChart(chartdata: any, bodyInfoData: BodyInfoChartsState) {
    console.log('selected Charts', bodyInfoData);

    if (this.chartKg != null) {
      this.chartKg.destroy();

      this.service.setKgCanvasPictureUrl(
        document.getElementById('chartCanvasKg') as HTMLCanvasElement
      );
    }

    if (this.chartBodyFat != null) {
      this.chartBodyFat.destroy();
      this.service.setBodyfatCanvasPictureUrl(
        document.getElementById('chartCanvasBodyFat') as HTMLCanvasElement
      );
    }

    if (this.chartWater != null) {
      this.chartWater.destroy();
      this.service.setWaterCanvasPictureUrl(
        document.getElementById('chartCanvasWater') as HTMLCanvasElement
      );
    }

    bodyInfoData.type.forEach((value) => {
      if (value == ChartTypes.All || value == ChartTypes.Kg) {
        this.chartKg = new Chart('chartCanvasKg', {
          type: 'line', //this denotes tha type of chart

          data: {
            // values on X-Axis
            labels: chartdata.map((row: BodyInfo) => row.messurementDate),
            datasets: [
              {
                label: 'Kg',
                data: chartdata.map((row: BodyInfo) => row.kg),
                backgroundColor: 'red',
              },
            ],
          },
          options: {
            aspectRatio: 2.5,
            animation: false,
          },
        });
      }

      if (value == ChartTypes.All || ChartTypes.BodyFat) {
        this.chartBodyFat = new Chart('chartCanvasBodyFat', {
          type: 'line', //this denotes tha type of chart

          data: {
            // values on X-Axis
            labels: chartdata.map((row: BodyInfo) => row.messurementDate),
            datasets: [
              {
                label: 'Body fat',
                data: chartdata.map((row: BodyInfo) => row.bodyFat),
                backgroundColor: 'orange',
              },
            ],
          },
          options: {
            aspectRatio: 2.5,
            animation: false,
          },
        });
      }

      if (value == ChartTypes.All || value == ChartTypes.Water) {
        this.chartWater = new Chart('chartCanvasWater', {
          type: 'line', //this denotes tha type of chart

          data: {
            // values on X-Axis
            labels: chartdata.map((row: BodyInfo) => row.messurementDate),
            datasets: [
              {
                label: 'Water',
                data: chartdata.map((row: BodyInfo) => row.water),
                backgroundColor: 'blue',
              },
            ],
          },
          options: {
            aspectRatio: 2.5,
            animation: false,
          },
        });
      }
    });
  }

  back() {
    this.service.navigateBack();
  }
}
