import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { BodyInfo } from '../models/body-info/body-info';

@Injectable({
  providedIn: 'root',
})
export class BodyInfoService {
  months: number[] = [];
  mockDataUrl: string = 'assets/mockData/bodyInfoData.json';
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

  getAllData() {
    let td: Date = new Date();
    this.chosenYearSubject.next(td.getFullYear().toString());
    this.chosenDateSubject.next(this.createMonthsList(td.getMonth()));

    return this.httpClient.get<BodyInfo[]>(this.mockDataUrl).subscribe({
      next: (data) => {
        this.bodyInfoDataSubject.next(data);
        if (data.length > 0) {
          this.nothingToShoeSubject.next(false);
        } else {
          this.nothingToShoeSubject.next(true);
        }
        console.log('data:' + data);
      },
      error: (err) => {
        console.log('error' + err);
      },
    });
  }

  async openChartDetails() {
    this.router.navigate(['body-info/body-info-charts']);
  }

  loadMonths(monthsForm: FormGroup) {
    this.months = [];
    let chosenMonthsSTring: string[] = [];

    if (monthsForm.value.januaryIsChecked) {
      this.months.push(1);
      chosenMonthsSTring.push(this.createMonthsList(1));
    }
    if (monthsForm.value.februarysChecked) {
      this.months.push(2);
      chosenMonthsSTring.push(this.createMonthsList(2));
    }

    if (monthsForm.value.marchsChecked) {
      chosenMonthsSTring.push(this.createMonthsList(3));
    }
    if (monthsForm.value.aprilsChecked) {
      this.months.push(4);
      chosenMonthsSTring.push(this.createMonthsList(4));
    }

    if (monthsForm.value.maysChecked) {
      this.months.push(5);
      chosenMonthsSTring.push(this.createMonthsList(5));
    }
    if (monthsForm.value.junsChecked) {
      this.months.push(6);
      chosenMonthsSTring.push(this.createMonthsList(6));
    }

    if (monthsForm.value.julysChecked) {
      this.months.push(7);
      chosenMonthsSTring.push(this.createMonthsList(7));
    }
    if (monthsForm.value.avgustsChecked) {
      this.months.push(8);
      chosenMonthsSTring.push(this.createMonthsList(8));
    }
    if (monthsForm.value.septembersChecked) {
      this.months.push(9);
      chosenMonthsSTring.push(this.createMonthsList(9));
    }

    if (monthsForm.value.octobersChecked) {
      this.months.push(10);
      chosenMonthsSTring.push(this.createMonthsList(10));
    }
    if (monthsForm.value.novembersChecked) {
      this.months.push(11);
      chosenMonthsSTring.push(this.createMonthsList(11));
    }
    if (monthsForm.value.decembersChecked) {
      this.months.push(12);
      chosenMonthsSTring.push(this.createMonthsList(12));
    }

    if (monthsForm.value.chosenYear != '') {
      this.chosenYearSubject.next(monthsForm.value.chosenYear);
    } else if (this.chosenYearSubject.value == '') {
      let td: Date = new Date();
      this.chosenYearSubject.next(td.getFullYear().toString());
    }

    this.chosenDateSubject.next(chosenMonthsSTring.join(', '));
  }

  createMonthsList(monthNumb: number) : string  {
    

    switch (monthNumb) {
      case 1: {
        return 'Januar'
        
      }
      case 2: {
        return 'Februar';
       
      }
      case 3: {
        return 'Mart';
        
      }
      case 4: {
        return 'April';
        
      }
      case 5: {
        return 'Maj';
        
      }
      case 6: {
        return 'Jun';
        
      }

      case 7: {
        return 'Jul';
       
      }
      case 8: {
        return 'Avgust';
       
      }

      case 9: {
        return 'Septembar';
        
      }
      case 10: {
        return 'Oktobar';
     
      }

      case 11: {
        return 'Novembar';
       
      }
      case 12: {
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
