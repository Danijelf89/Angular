import { NgModule } from '@angular/core';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';
import { SettingsService } from './settings.service';



@NgModule({
  declarations: [SettingsComponent],
  imports: [
    SharedModuleModule,
    SettingsRoutingModule,
    
  ],
  providers:[SettingsService]
})
export class SettingsModule { }
