import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainMenuRoutingModule } from './main-menu-routing.module';
import { UserInfoModule } from '../user-info/user-info.module';
import { MainMenuComponent } from './main-menu.component';
import { IonicModule } from '@ionic/angular';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    
    MainMenuRoutingModule,
    UserInfoModule,
    SharedModuleModule
  ]
})
export class MainMenuModule { }
