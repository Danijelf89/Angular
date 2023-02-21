import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastMessageService } from '../services/toast-message.service';
import { LANGUAGE_STORAGE_KEY, LOCALIZATIO_LANGUAGE_CODE_ENG, LOCALIZATIO_LANGUAGE_CODE_SRP, SELECTED_LANGUAGE_ENG, SELECTED_LANGUAGE_SRP } from '../shared/app-constants';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  language$ : Observable<string>;
  private languageSubject = new BehaviorSubject<string>('');
  selectedLanguage : string = '';

  constructor(private translate: TranslateService, private actionSheetController : ActionSheetController, 
    private toastService : ToastMessageService, private location : Location) { 
    this.language$ = this.languageSubject.asObservable()
  }

  onLoad()
  {
    switch(localStorage.getItem(LANGUAGE_STORAGE_KEY)) { 
      case LOCALIZATIO_LANGUAGE_CODE_ENG: { 
        this.languageSubject.next(SELECTED_LANGUAGE_ENG);
         break; 
      } 
      case LOCALIZATIO_LANGUAGE_CODE_SRP: { 
        this.languageSubject.next(SELECTED_LANGUAGE_SRP);
         break; 
      } 
      default:
        {
          this.languageSubject.next(SELECTED_LANGUAGE_ENG);
          this.selectedLanguage = SELECTED_LANGUAGE_ENG;
        }
      
      } 
  }

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
            this.languageSubject.next(SELECTED_LANGUAGE_ENG);
            this.selectedLanguage = SELECTED_LANGUAGE_ENG;
          }
        },
        {
          cssClass: 'customCenter',
          text: this.translate.instant('SRP'),
          icon: 'earth-outline',
          handler: ()=>{
            this.languageSubject.next(SELECTED_LANGUAGE_SRP);
            this.selectedLanguage = SELECTED_LANGUAGE_SRP;
          }
        }
      ]
    });

    await actionSheet.present();
  }

  saveSettings()
  {
    switch(this.selectedLanguage) { 
      case SELECTED_LANGUAGE_ENG: { 
        this.translate.use(LOCALIZATIO_LANGUAGE_CODE_ENG);
         break; 
      } 
      case SELECTED_LANGUAGE_SRP: { 
        this.translate.use(LOCALIZATIO_LANGUAGE_CODE_SRP);
         break; 
      } 
      
      } 

    localStorage.setItem(LANGUAGE_STORAGE_KEY, this.translate.currentLang);
    this.toastService.presentToastSucces();
  }

  navigateBack()
  {
    this.location.back();
  }
}
