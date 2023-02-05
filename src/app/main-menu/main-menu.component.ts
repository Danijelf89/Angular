import { Component } from '@angular/core';
import { AppType } from '../enums/app-type';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  appType = AppType;

  chosenApp(appNumber : AppType)
  {

    console.log(appNumber);

    if(appNumber === AppType.PodaciOTelu)
    {
      console.log('App is podaci o telu');
    }
    else if (appNumber === AppType.PodciOPritisku)
    {
      console.log('App is podaci o pritisku');
    }
  }
}
