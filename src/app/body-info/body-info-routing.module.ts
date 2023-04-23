import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyInfoComponent } from './body-info.component';

const routes: Routes = [
  {
      path: '',
      component: BodyInfoComponent,
  },
  {
    path: 'body-info-charts',
    loadChildren: () =>
    import('./body-info-charts/body-info-charts.module').then((m) => m.BodyInfoChartsModule),
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyInfRoutingModule { }
