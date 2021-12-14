import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Formio, FormioModule, FormioAppConfig } from '@formio/angular';
import { FormioAuthService, FormioAuthConfig } from '@formio/angular/auth';
import { FormioResources } from '@formio/angular/resource';
import { PrismService } from './Prism.service';

import { AppConfig } from './config';
import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { AppRoutingModule } from './app-routing.module';

(Formio as any).icons = 'fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormioModule,
    AppRoutingModule
  ],
  providers: [
    PrismService,
    FormioAuthService,
    FormioResources,
    FormioAuthConfig,
    {provide: FormioAppConfig, useValue: AppConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
