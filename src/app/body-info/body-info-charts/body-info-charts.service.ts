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
  showingDetails$: Observable<boolean>;
  imgUrlChartKgUrl$: Observable<string>;
  imgUrlChartBodyfatUrl$: Observable<string>;
  imgUrlChartWaterUrl$: Observable<string>;

  private showKgChartSubject = new BehaviorSubject<boolean>(false);
  private showBodyFatChartSubject = new BehaviorSubject<boolean>(false);
  private showBodyWaterChartSubject = new BehaviorSubject<boolean>(false);
  private showingDetailsSubject = new BehaviorSubject<boolean>(true);
  private imgUrlChartKgUrlSubject = new BehaviorSubject<string>('');
  private imgUrlChartBodyFatUrlSubject = new BehaviorSubject<string>('');
  private imgUrlChartWaterUrlSubject = new BehaviorSubject<string>('');

  constructor(private location: Location, private httpClient: HttpClient) {
    this.showKgChart$ = this.showKgChartSubject.asObservable();
    this.showBodyFatChart$ = this.showBodyFatChartSubject.asObservable();
    this.showBodWaterChart$ = this.showBodyWaterChartSubject.asObservable();
    this.showingDetails$ = this.showingDetailsSubject.asObservable();
    this.imgUrlChartKgUrl$ = this.imgUrlChartKgUrlSubject.asObservable();
    this.imgUrlChartBodyfatUrl$ = this.imgUrlChartBodyFatUrlSubject.asObservable();
    this.imgUrlChartWaterUrl$ = this.imgUrlChartWaterUrlSubject.asObservable();

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

  changeTabs(tabNumber : number)
  {
    if(tabNumber == 0){
      this.showingDetailsSubject.next(true);
    }
    else{
      this.showingDetailsSubject.next(false);
    }
  }

  setKgCanvasPictureUrl(kgCanvas : HTMLCanvasElement)
  {
    if (kgCanvas != null) {
      var dataURL = kgCanvas.toDataURL();
      this.imgUrlChartKgUrlSubject.next(dataURL);
    }
    else{
      this.imgUrlChartKgUrlSubject.next('');
    }
  }

  setBodyfatCanvasPictureUrl(bodyFatCanvas : HTMLCanvasElement)
  {
    if (bodyFatCanvas != null) {
      console.log('body fat entered')
      var dataURL = bodyFatCanvas.toDataURL();
      this.imgUrlChartBodyFatUrlSubject.next(dataURL);
      console.log('body fat set', dataURL)
    }
    else{
      console.log('body fat not set')
      this.imgUrlChartBodyFatUrlSubject.next('');
    }
  }

  setWaterCanvasPictureUrl(waterCanvas : HTMLCanvasElement)
  {
    if (waterCanvas != null) {
      var dataURL = waterCanvas.toDataURL();
      this.imgUrlChartWaterUrlSubject.next(dataURL);
    }
    else{
      this.imgUrlChartWaterUrlSubject.next('');
    }
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
