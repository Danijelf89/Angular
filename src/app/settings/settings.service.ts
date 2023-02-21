import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE_STORAGE_KEY } from '../shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private translate: TranslateService, private actionSheetController : ActionSheetController) { }

  async selectLanguage()
  {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'left-align-buttons',
      buttons:[
        {

          text: this.translate.instant('ENG'),
          icon: 'earth-outline',
          cssClass: 'customCenter',
          handler: ()=>{
            this.translate.use('eng');
            
            localStorage.setItem(LANGUAGE_STORAGE_KEY, this.translate.currentLang);
          }
        },
        {
          cssClass: 'customCenter',
          text: this.translate.instant('SRP'),
          icon: 'earth-outline',
          handler: ()=>{
            this.translate.use('sr-latn');
            localStorage.setItem(LANGUAGE_STORAGE_KEY, this.translate.currentLang);
          }
        }
      ]
    });

    await actionSheet.present();
  }
}
