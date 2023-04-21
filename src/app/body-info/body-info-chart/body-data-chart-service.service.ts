import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { BehaviorSubject, Observable } from 'rxjs';
import { BodyInfo } from 'src/app/models/body-info/body-info';

@Injectable({
  providedIn: 'root'
})
export class BodyDataChartServiceService {

  mockDataUrl : string = "assets/mockData/bodyInfoData.json";
  dateslist$ : Observable<Date[]>;
  data$ : Observable<number[]>;

  private datesListSubject = new BehaviorSubject<Date[]>([]);
  private dataSubject = new BehaviorSubject<number[]>([]);

  foo:string[] = ['13-1-2023','13-1-2023', '14-1-2023','15-1-2023','13-1-2023','13-1-2023', '14-1-2023','15-1-2023',
   '13-1-2023','13-1-2023', '14-1-2023','15-1-2023',
   '13-1-2023','13-1-2023', '14-1-2023','15-1-2023',
   '13-1-2023','13-1-2023', '14-1-2023','18-1-2023'];
   data:number[] = [85,92, 76, 33, 85,92, 76, 33, 85,92, 76, 33, 85,92, 76, 33, 85,92, 76, 99];

  constructor(private httpClient: HttpClient) { 
    this.dateslist$ = this.datesListSubject.asObservable()
    this.data$ = this.dataSubject.asObservable()
  }


  getChartData()
  {
    return this.httpClient.get<BodyInfo[]>(this.mockDataUrl);
  }

  //getChartData() {
    //return this.httpClient.get<BodyInfo[]>(this.mockDataUrl).subscribe({
    //  next: (data) =>{
    //    this.datesListSubject.next(data.map(row => row.messurementDate));
    //    this.dataSubject.next(data.map(row => row.kg));
        
        
    //  },
    // error: (err) =>{
     //   console.log("error" + err);
     // },
   // })
  //}

}
