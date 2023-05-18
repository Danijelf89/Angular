import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppType } from '../enums/app-type';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  constructor(private router : Router) { }

  openReport(appNumber : AppType)
  {
    if(appNumber === AppType.PodaciOTelu)
    {
      this.router.navigate(['body-info'])
    }
    else{
      //this.router.navigate(['body-info'])
    }
  }
}
