import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyInfoChartsComponent } from './body-info-charts.component';

const routes: Routes = [
  {
      path: '',
      component: BodyInfoChartsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyInfoChartsRoutingModule { }
