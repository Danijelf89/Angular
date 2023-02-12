import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RouterModule,
    TranslateModule
  ],
  exports:[
    CommonModule,
    IonicModule,
    RouterModule,
    TranslateModule
  ]
})
export class SharedModuleModule { }
