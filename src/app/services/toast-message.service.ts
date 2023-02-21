import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(private toastController : ToastController) { }

  async presentToastSucces() {
    const toast = await this.toastController.create({
      message: 'Action succesfulu executed',
      duration: 3000,
      position: 'bottom',
      icon: "checkmark-circle-outline",
      color: 'success'
    });

    await toast.present();
  }

  async presentToastFailed() {
    const toast = await this.toastController.create({
      message: 'Action failed',
      duration: 3000,
      position: 'bottom',
      color:'danger',
      icon: "warning-outline"
    });

    await toast.present();
  }
}
