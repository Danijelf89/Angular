import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppType } from '../enums/app-type';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  appType = AppType;
constructor(private router : Router)
{

}
  

  chosenApp(appNumber : AppType)
  {

    this.router.navigate(['body-info'])
  }
}
