import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BodyInfoService {

  constructor() { }

  months : number[] = [];

  loadMonths(monthsForm : FormGroup)
  {
    this.months = [];

    if(monthsForm.value.januaryIsChecked)
    {
      this.months.push(1);
    }
    if(monthsForm.value.februarysChecked)
    {
      this.months.push(2);
    }

    if(monthsForm.value.marchsChecked)
    {
      this.months.push(3);
    }
    if(monthsForm.value.aprilsChecked)
    {
      this.months.push(4);
    }

    if(monthsForm.value.maysChecked)
    {
      this.months.push(5);
    }
    if(monthsForm.value.junsChecked)
    {
      this.months.push(6);
    }

    if(monthsForm.value.julysChecked)
    {
      this.months.push(7);
    }
    if(monthsForm.value.avgustsChecked)
    {
      this.months.push(8);
    }
    if(monthsForm.value.septembersChecked)
    {
      this.months.push(9);
    }

    if(monthsForm.value.octobersChecked)
    {
      this.months.push(10);
    }
    if(monthsForm.value.novembersChecked)
    {
      this.months.push(11);
    }
    if(monthsForm.value.decembersChecked)
    {
      this.months.push(12);
    }

    console.log('meseci:' + this.months)
  }
}
