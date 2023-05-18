import { Component } from '@angular/core';
import { AppType } from '../enums/app-type';
import { MainMenuService } from './main-menu.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  appType = AppType;
constructor(private service : MainMenuService)
{

}
  
  chosenApp(appNumber : AppType)
  {
    this.service.openReport(appNumber);
  }
}
