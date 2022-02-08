import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestionListComponent } from './gestion-list/gestion-list.component';
import { CarteComponent } from './carte/carte.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionListComponent,
    CarteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
