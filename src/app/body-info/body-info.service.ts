import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { BodyInfo } from '../models/body-info/body-info';

@Injectable({
  providedIn: 'root',
})
export class BodyInfoService {
  months: number[] = [];
  mockDataUrl = 'assets/mockData/bodyInfoData.json';
  bodyInfoData$: Observable<BodyInfo[]>;
  nothingToShow$: Observable<boolean>;
  chosenDate$: Observable<string>;
  chosenYear$: Observable<string>;

  private bodyInfoDataSubject = new BehaviorSubject<BodyInfo[]>([]);
  private nothingToShoeSubject = new BehaviorSubject<boolean>(false);
  private chosenDateSubject = new BehaviorSubject<string>('');
  private chosenYearSubject = new BehaviorSubject<string>('');

  constructor(
    private httpClient: HttpClient,
    private location: Location,
    private modalCont: ModalController,
    private router: Router
  ) {
    this.bodyInfoData$ = this.bodyInfoDataSubject.asObservable();
    this.nothingToShow$ = this.nothingToShoeSubject.asObservable();
    this.chosenDate$ = this.chosenDateSubject.asObservable();
    this.chosenYear$ = this.chosenYearSubject.asObservable();
  }

  setInitalFilterData()
  {
    const td: Date = new Date();
    this.chosenYearSubject.next(td.getFullYear().toString());
    this.chosenDateSubject.next(this.createMonthsList(td.getMonth()));

    this.getAllData([td.getMonth()]);
  }

  getAllData(months : number[]) {
    

    return this.httpClient.get<BodyInfo[]>(this.mockDataUrl).pipe(
      map((bodyinfo : BodyInfo[]) => {
        const bodyList : BodyInfo[] = [];

        bodyinfo.forEach(element => {
          console.log('element month', new Date(element.messurementDate).getMonth());
          console.log('months list', this.months);

          if(new Date(element.messurementDate).getFullYear().toString() == this.chosenYearSubject.value
          && months.includes(new Date(element.messurementDate).getMonth())
          )
          {
            
            bodyList.push(element);
          }
        });

        
        return bodyList;
        
      }),
    ).subscribe({
      next: (data) => {
        this.bodyInfoDataSubject.next(data);
        if (data.length > 0) {
          this.nothingToShoeSubject.next(false);
        } else {
          this.nothingToShoeSubject.next(true);
        }
        console.log('body info data filtered', data);
      },
      error: (err) => {
        console.log('error' + err);
      },
    });
  
  }

  async openChartDetails() {
    this.router.navigate(['body-info/body-info-charts']);
  }

  yearChanged(year : string){
    this.chosenYearSubject.next(year);
    this.getAllData(this.months);
  }

  loadMonths(monthsForm: FormGroup) {
    this.months = [];
    const chosenMonthsSTring: string[] = [];

    if (monthsForm.value.januaryIsChecked) {
      this.months.push(0);
      chosenMonthsSTring.push(this.createMonthsList(0));
    }
    if (monthsForm.value.februarysChecked) {
      this.months.push(1);
      chosenMonthsSTring.push(this.createMonthsList(1));
    }

    if (monthsForm.value.marchsChecked) {
      this.months.push(2);
      chosenMonthsSTring.push(this.createMonthsList(2));
    }
    if (monthsForm.value.aprilsChecked) {
      this.months.push(3);
      chosenMonthsSTring.push(this.createMonthsList(3));
    }

    if (monthsForm.value.maysChecked) {
      this.months.push(4);
      chosenMonthsSTring.push(this.createMonthsList(4));
    }
    if (monthsForm.value.junsChecked) {
      this.months.push(5);
      chosenMonthsSTring.push(this.createMonthsList(5));
    }

    if (monthsForm.value.julysChecked) {
      this.months.push(6);
      chosenMonthsSTring.push(this.createMonthsList(6));
    }
    if (monthsForm.value.avgustsChecked) {
      this.months.push(7);
      chosenMonthsSTring.push(this.createMonthsList(7));
    }
    if (monthsForm.value.septembersChecked) {
      this.months.push(8);
      chosenMonthsSTring.push(this.createMonthsList(8));
    }

    if (monthsForm.value.octobersChecked) {
      this.months.push(9);
      chosenMonthsSTring.push(this.createMonthsList(9));
    }
    if (monthsForm.value.novembersChecked) {
      this.months.push(10);
      chosenMonthsSTring.push(this.createMonthsList(10));
    }
    if (monthsForm.value.decembersChecked) {
      this.months.push(11);
      chosenMonthsSTring.push(this.createMonthsList(11));
    }

    if (monthsForm.value.chosenYear != '') {
      this.chosenYearSubject.next(monthsForm.value.chosenYear);
    } else if (this.chosenYearSubject.value == '') {
      const td: Date = new Date();
      this.chosenYearSubject.next(td.getFullYear().toString());
    }

    this.chosenDateSubject.next(chosenMonthsSTring.join(', '));

    this.getAllData(this.months);
  }

  createMonthsList(monthNumb: number) : string  {
    

    switch (monthNumb) {
      case 0: {
        return 'Januar'
        
      }
      case 1: {
        return 'Februar';
       
      }
      case 2: {
        return 'Mart';
        
      }
      case 3: {
        return 'April';
        
      }
      case 4: {
        return 'Maj';
        
      }
      case 5: {
        return 'Jun';
        
      }

      case 6: {
        return 'Jul';
       
      }
      case 7: {
        return 'Avgust';
       
      }

      case 8: {
        return 'Septembar';
        
      }
      case 9: {
        return 'Oktobar';
     
      }

      case 10: {
        return 'Novembar';
       
      }
      case 11: {
        return 'Decembar';
      
      }
      default:{
        return '';
        
      }
    }
  }

  navigateBack() {
    this.location.back();
  }
}
