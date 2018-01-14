import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import { AppComponent } from './app.component';
import { TechnologyComponent } from './technology/technology.component';
import { BusinessComponent } from './business/business.component';
import { HomeComponent } from './home/home.component';
import { ApproutingModule }  from './approuting.module';


@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    BusinessComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ApproutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
