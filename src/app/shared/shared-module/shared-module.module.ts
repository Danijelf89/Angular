import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PrintingComponent } from '../printing/printing.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [PrintingComponent, FooterComponent],
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
    TranslateModule,
    PrintingComponent,
    FooterComponent
  ]
})
export class SharedModuleModule { }
