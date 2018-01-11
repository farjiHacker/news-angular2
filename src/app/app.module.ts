import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import { AppComponent } from './app.component';
import { TechnologyComponent } from './technology/technology.component';
import { BusinessComponent } from './business/business.component';

export const routes: Routes = [
  { path: 'technology', component: TechnologyComponent },
  { path: 'business', component: BusinessComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
