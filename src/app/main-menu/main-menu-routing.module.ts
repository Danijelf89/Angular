import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu.component';

const routes: Routes = [
  {
      path: '',
      component: MainMenuComponent,
  },
  {
    path: 'body-info',
    loadChildren: () =>
    import('./body-info/body-info.module').then((m) => m.BodyInfoModule),
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainMenuRoutingModule { }
