import { NgModule } from '@angular/core';
import { UserInfoComponent } from './user-info.component';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';



@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    SharedModuleModule
  ],
  exports:[UserInfoComponent]
})
export class UserInfoModule { }
