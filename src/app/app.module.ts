import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModuleModule } from './shared/shared-module/shared-module.module';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { httpLoaderFactory } from './factories/httpLoaderFactory';
import { loadDefaultLanguage } from './factories/app-initializer-factory';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModuleModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }
    )
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadDefaultLanguage,
      multi: true,
      deps: [TranslateService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
