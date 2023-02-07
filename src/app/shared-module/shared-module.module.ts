import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RouterModule
  ],
  exports:[
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class SharedModuleModule { }
