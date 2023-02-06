import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports:[UserInfoComponent]
})
export class UserInfoModule { }
