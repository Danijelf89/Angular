import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainMenuRoutingModule } from './main-menu-routing.module';
import { UserInfoModule } from '../user-info/user-info.module';
import { MainMenuComponent } from './main-menu.component';
import { IonicModule } from '@ionic/angular';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';
import { UserMenuModule } from '../user-menu/user-menu.module';


@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    
    MainMenuRoutingModule,
    UserInfoModule,
    SharedModuleModule,
    UserMenuModule
  ]
})
export class MainMenuModule { }
