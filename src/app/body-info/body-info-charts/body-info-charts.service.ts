import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BodyInfo } from 'src/app/models/body-info/body-info';
import { BehaviorSubject, Observable } from 'rxjs';
import { BodyInfoChartsState } from 'src/app/models/body-info-charts-state';
import { ChartTypes } from 'src/app/enums/chart-types';

@Injectable({
  providedIn: 'root',
})
export class BodyInfoChartsService {
  mockDataUrl: string = 'assets/mockData/bodyInfoData.json';
  showKgChart$: Observable<boolean>;
  showBodyFatChart$: Observable<boolean>;
  showBodWaterChart$: Observable<boolean>;
  showingDetails$: Observable<boolean>;
  imgUrlChartKgUrl$: Observable<string>;
  imgUrlChartBodyfatUrl$: Observable<string>;
  imgUrlChartWaterUrl$: Observable<string>;
  bodyInfoChartsState$: Observable<BodyInfoChartsState>;

  private showKgChartSubject = new BehaviorSubject<boolean>(false);
  private showBodyFatChartSubject = new BehaviorSubject<boolean>(false);
  private showBodyWaterChartSubject = new BehaviorSubject<boolean>(false);
  private showingDetailsSubject = new BehaviorSubject<boolean>(true);
  private imgUrlChartKgUrlSubject = new BehaviorSubject<string>('');
  private imgUrlChartBodyFatUrlSubject = new BehaviorSubject<string>('');
  private imgUrlChartWaterUrlSubject = new BehaviorSubject<string>('');
  private bodyInfoChartsStateSubject = new BehaviorSubject<BodyInfoChartsState>(
    new BodyInfoChartsState(12, 12, [12], 0)
  );

  constructor(private location: Location, private httpClient: HttpClient) {
    this.showKgChart$ = this.showKgChartSubject.asObservable();
    this.showBodyFatChart$ = this.showBodyFatChartSubject.asObservable();
    this.showBodWaterChart$ = this.showBodyWaterChartSubject.asObservable();
    this.showingDetails$ = this.showingDetailsSubject.asObservable();
    this.imgUrlChartKgUrl$ = this.imgUrlChartKgUrlSubject.asObservable();
    this.imgUrlChartBodyfatUrl$ =
      this.imgUrlChartBodyFatUrlSubject.asObservable();
    this.imgUrlChartWaterUrl$ = this.imgUrlChartWaterUrlSubject.asObservable();
    this.bodyInfoChartsState$ = this.bodyInfoChartsStateSubject.asObservable();

    this.showKgChartSubject.next(true);
    this.showBodyFatChartSubject.next(true);
    this.showBodyWaterChartSubject.next(true);
  }

  navigateBack() {
    this.location.back();
  }

  getChartData() {
    return this.httpClient.get<BodyInfo[]>(this.mockDataUrl);
  }

  loadInitalData() {
    var dt = new Date();

    this.bodyInfoChartsStateSubject.next({
      ...this.bodyInfoChartsStateSubject.value,
      month: dt.getMonth(),
      year: dt.getFullYear(),
      type: [0],
      selectedTab: 0,
    });
  }

  changeTabs(tabNumber: number) {
    if (tabNumber == 0) {
      this.showingDetailsSubject.next(true);

      this.bodyInfoChartsStateSubject.next({
        ...this.bodyInfoChartsStateSubject.value,
      });
    } else {
      this.showingDetailsSubject.next(false);
    }
  }

  setKgCanvasPictureUrl(kgCanvas: HTMLCanvasElement) {
    if (kgCanvas != null) {
      var dataURL = kgCanvas.toDataURL();
      this.imgUrlChartKgUrlSubject.next(dataURL);
    } else {
      this.imgUrlChartKgUrlSubject.next('');
    }
  }

  setBodyfatCanvasPictureUrl(bodyFatCanvas: HTMLCanvasElement) {
    if (bodyFatCanvas != null) {
      console.log('body fat entered');
      var dataURL = bodyFatCanvas.toDataURL();
      this.imgUrlChartBodyFatUrlSubject.next(dataURL);
      console.log('body fat set', dataURL);
    } else {
      console.log('body fat not set');
      this.imgUrlChartBodyFatUrlSubject.next('');
    }
  }

  setWaterCanvasPictureUrl(waterCanvas: HTMLCanvasElement) {
    if (waterCanvas != null) {
      var dataURL = waterCanvas.toDataURL();
      this.imgUrlChartWaterUrlSubject.next(dataURL);
    } else {
      this.imgUrlChartWaterUrlSubject.next('');
    }
  }

  filterChartsByType(types: string[]) {
    console.log('type', types);
    let listOfTypes: number[] = [];

    if (types.includes(ChartTypes.All.toString())) {
      this.showKgChartSubject.next(true);
      this.showBodyFatChartSubject.next(true);
      this.showBodyWaterChartSubject.next(true);

      listOfTypes.push(0);

      this.bodyInfoChartsStateSubject.next({
        ...this.bodyInfoChartsStateSubject.value,
  
        type: listOfTypes,
      });

      return;
    }

    if (types.includes(ChartTypes.Kg.toString())) {
      this.showKgChartSubject.next(true);
      listOfTypes.push(1);
    } else {
      this.showKgChartSubject.next(false);
    }

    if (types.includes(ChartTypes.BodyFat.toString())) {
      this.showBodyFatChartSubject.next(true);
      listOfTypes.push(2);
    } else {
      this.showBodyFatChartSubject.next(false);
    }

    if (types.includes(ChartTypes.Water.toString())) {
      this.showBodyWaterChartSubject.next(true);
      listOfTypes.push(3);
    } else {
      this.showBodyWaterChartSubject.next(false);
    }

    this.bodyInfoChartsStateSubject.next({
      ...this.bodyInfoChartsStateSubject.value,

      type: listOfTypes,
    });
    console.log(this.showKgChartSubject.value);
  }
}
