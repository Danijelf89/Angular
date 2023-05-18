import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';
import { UserMenuModule } from '../user-menu/user-menu.module';



@NgModule({
    declarations: [WelcomeComponent],
    imports: [
        SharedModuleModule,
        WelcomeRoutingModule,
        UserMenuModule,
        
    ]
})
export class WelcomeModule { }
