import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjBb_K8pc_2tww1EYFw7Owooo11co06fs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
