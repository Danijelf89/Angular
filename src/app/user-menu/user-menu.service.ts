import { Injectable } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UserMenuService {

  constructor(public actionSheetController : ActionSheetController,
    private navCtrl: NavController,
    public translate: TranslateService) { }

    async openUserMenu()
    {
      const actionSheet = await this.actionSheetController.create({
        buttons:[
          {
            text: this.translate.instant('HOME.SETTINGS'),
            icon: 'settings-outline',
            handler: ()=>{
              this.navigateTo('settings');
            }
          }
        ]
      });

      await actionSheet.present();
    }

    private navigateTo(page: string){
      this.navCtrl.navigateRoot(page);
    }
}
