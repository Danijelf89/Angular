import { NgModule } from '@angular/core';
import { BodyInfoComponent } from './body-info.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';
import { UserMenuModule } from '../user-menu/user-menu.module';
import { UserInfoModule } from '../user-info/user-info.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BodyInfoService } from './body-info.service';
import { HttpClientModule } from '@angular/common/http';
import { BodyInfoChartComponent } from './body-info-chart/body-info-chart.component';

const routes: Routes = [
  {
      path: '',
      component: BodyInfoComponent,
  }
];

@NgModule({
  declarations: [BodyInfoComponent, BodyInfoChartComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModuleModule,
    UserMenuModule,
    UserInfoModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[BodyInfoService]
})
export class BodyInfoModule { }
