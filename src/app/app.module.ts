import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SeletonLoaderModule } from './seleton-loader/seleton-loader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
