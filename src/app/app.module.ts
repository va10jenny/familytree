import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TreeModule } from './tree/tree.module';
import { GedService } from './services/ged.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TreeModule
  ],
  providers: [
    GedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
