import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyInfoComponent } from './body-info.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
      path: '',
      component: BodyInfoComponent,
  }
];

@NgModule({
  declarations: [BodyInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
  ]
})
export class BodyInfoModule { }
