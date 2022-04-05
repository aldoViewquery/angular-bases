import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { contadorComponent } from './contador/contador/contador.component';*/
import { heroesModule } from './heroes/heroes.module';
import { contadorModule } from './contador/contador/contador.module';
/*
estoy comentando los componentes por que e creado un modulo principal de la
carpeta y solo ese modulo lo estoy llamando en IMPORTS heroesmodule */
/*import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { contadorModule } from './contador/contador/contador.module';
*/
@NgModule({
  declarations: [
    AppComponent,
    //contadorComponent,
  /*  HeroeComponent,
    ListadoComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    heroesModule,
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
