import './rxjs-extensions';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { ContatosModules } from './contatos/contatos.module';
import { MemoryDataService } from './memory-data.service';
import { DialogSerivce } from './dialog.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContatosModules, 
    MaterializeModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(MemoryDataService)
  ],
  providers: [
    DialogSerivce
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
