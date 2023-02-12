import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { IonicModule } from '@ionic/angular';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';



@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    SharedModuleModule
  ],
  exports:[UserInfoComponent]
})
export class UserInfoModule { }
