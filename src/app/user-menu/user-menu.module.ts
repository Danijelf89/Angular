import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user-menu.component';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';
import { UserMenuService } from './user-menu.service';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [UserMenuComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
    TranslateModule,
  ],
  exports:[UserMenuComponent],
  providers: [UserMenuService]
})
export class UserMenuModule { }
