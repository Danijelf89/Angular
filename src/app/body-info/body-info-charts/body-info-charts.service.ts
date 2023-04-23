import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BodyInfo } from 'src/app/models/body-info/body-info';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BodyInfoChartsService {
  mockDataUrl: string = 'assets/mockData/bodyInfoData.json';
  showKgChart$: Observable<boolean>;
  showBodyFatChart$: Observable<boolean>;
  showBodWaterChart$: Observable<boolean>;

  private showKgChartSubject = new BehaviorSubject<boolean>(false);
  private showBodyFatChartSubject = new BehaviorSubject<boolean>(false);
  private showBodyWaterChartSubject = new BehaviorSubject<boolean>(false);

  constructor(private location: Location, private httpClient: HttpClient) {
    this.showKgChart$ = this.showKgChartSubject.asObservable();
    this.showBodyFatChart$ = this.showBodyFatChartSubject.asObservable();
    this.showBodWaterChart$ = this.showBodyWaterChartSubject.asObservable();

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

  filterChartsByType(type: any) {
    if (type.includes('All')) {
      this.showKgChartSubject.next(true);
      this.showBodyFatChartSubject.next(true);
      this.showBodyWaterChartSubject.next(true);
      return;
    }

    if (type.includes('Kg')) {
      this.showKgChartSubject.next(true);
    } else {
      this.showKgChartSubject.next(false);
    }

    if (type.includes('Masnoca')) {
      this.showBodyFatChartSubject.next(true);
    } else {
      this.showBodyFatChartSubject.next(false);
    }

    if (type.includes('Voda')) {
      this.showBodyWaterChartSubject.next(true);
    } else {
      this.showBodyWaterChartSubject.next(false);
    }
    console.log(this.showKgChartSubject.value);
  }
}
