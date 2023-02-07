import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    SharedModuleModule,
    WelcomeRoutingModule,
    
  ]
})
export class WelcomeModule { }
