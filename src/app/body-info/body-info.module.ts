import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyInfoComponent } from './body-info.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModuleModule } from '../shared-module/shared-module.module';

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
    SharedModuleModule
  ]
})
export class BodyInfoModule { }
