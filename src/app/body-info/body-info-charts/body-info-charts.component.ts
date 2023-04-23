import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { BodyInfo } from 'src/app/models/body-info/body-info';
import { BodyInfoChartsService } from './body-info-charts.service';

@Component({
  selector: 'app-body-info-charts',
  templateUrl: './body-info-charts.component.html',
  styleUrls: ['./body-info-charts.component.css'],
})
export class BodyInfoChartsComponent implements OnInit {
  chartKg: any;
  chartBodyFat: any;
  chartWater: any;

  chartKgShow$ = this.service.showKgChart$;
  chartBodyFatShow$ = this.service.showBodyFatChart$;
  chartBodyWaterShow$ = this.service.showBodWaterChart$;

  selectedCharts: string[] = ['All'];
  constructor(private service: BodyInfoChartsService) {}

  ngOnInit() {
    this.refreshChartData();
  }

  refreshChartData() {
    this.service.getChartData().subscribe({
      next: (data) => {
        this.createChart(data);
      },
      error: (err) => {
        console.log('error' + err);
      },
    });
  }

  handleChange(e: any) {
    this.selectedCharts = e.detail.value;

    this.service.filterChartsByType(e.detail.value);

    this.refreshChartData();
  }

  private createChart(chartdata: any) {
    if (this.chartKg != null) {
      this.chartKg.destroy();
    }

    if (this.chartBodyFat != null) {
      this.chartBodyFat.destroy();
    }

    if (this.chartWater != null) {
      this.chartWater.destroy();
    }

    if (
      this.selectedCharts.includes('All') ||
      this.selectedCharts.includes('Kg')
    ) {
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

    if (
      this.selectedCharts.includes('All') ||
      this.selectedCharts.includes('Masnoca')
    ) {
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

    if (
      this.selectedCharts.includes('All') ||
      this.selectedCharts.includes('Voda')
    ) {
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
  }

  back() {
    this.service.navigateBack();
  }
}
