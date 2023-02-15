import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';
import { MonthChooserComponent } from './month-chooser.component';



@NgModule({
  declarations: [MonthChooserComponent],
  imports: [
    SharedModuleModule
  ],
  exports:[MonthChooserComponent]
})
export class MonthChooserModule { }
