import { Component } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  language$ = this.service.language$;

  constructor(private service : SettingsService)
  {
    this.service.onLoad();
  }

  changeLanguage()
  {
    this.service.selectLanguage();
  }

  save()
  {
    this.service.saveSettings();
  }

  back()
  {
    this.service.navigateBack();
  }
}
