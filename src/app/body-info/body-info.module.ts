import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyInfoComponent } from './body-info.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';
import { UserMenuModule } from '../user-menu/user-menu.module';
import { UserInfoModule } from '../user-info/user-info.module';

const routes: Routes = [
  {
      path: '',
      component: BodyInfoComponent,
  }
];

@NgModule({
  declarations: [BodyInfoComponent],
  imports: [
    
    RouterModule.forChild(routes),
    SharedModuleModule,
    UserMenuModule,
    UserInfoModule
  ]
})
export class BodyInfoModule { }
