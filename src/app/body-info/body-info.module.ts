import { NgModule } from '@angular/core';
import { BodyInfoComponent } from './body-info.component';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';
import { UserMenuModule } from '../user-menu/user-menu.module';
import { UserInfoModule } from '../user-info/user-info.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BodyInfoService } from './body-info.service';
import { HttpClientModule } from '@angular/common/http';
import { BodyInfRoutingModule } from './body-info-routing.module';

@NgModule({
  declarations: [BodyInfoComponent],
  imports: [
    BodyInfRoutingModule,
    SharedModuleModule,
    UserMenuModule,
    UserInfoModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [BodyInfoService],
})
export class BodyInfoModule {}
