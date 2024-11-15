import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { TemperatureConversionPipe } from './pipes/temperature-conversion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureConversionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
