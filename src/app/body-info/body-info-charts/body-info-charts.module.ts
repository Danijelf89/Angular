import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyInfoChartsRoutingModule } from './body-info-charts-routing.module';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';
import { UserMenuModule } from 'src/app/user-menu/user-menu.module';
import { UserInfoModule } from 'src/app/user-info/user-info.module';
import { BodyInfoChartsComponent } from './body-info-charts.component';
import { BodyInfoChartsService } from './body-info-charts.service';


@NgModule({
  declarations: [BodyInfoChartsComponent],
  imports: [
    CommonModule,
    BodyInfoChartsRoutingModule,
    SharedModuleModule,
    UserMenuModule,
    UserInfoModule
  ],
  providers: [BodyInfoChartsService]
})
export class BodyInfoChartsModule { }
