import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainMenuRoutingModule } from './main-menu-routing.module';
import { UserInfoModule } from '../user-info/user-info.module';
import { MainMenuComponent } from './main-menu.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    MainMenuRoutingModule,
    UserInfoModule,
    IonicModule.forRoot()
  ]
})
export class MainMenuModule { }
