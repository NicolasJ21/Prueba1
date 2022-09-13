import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlumnosFormularioComponent } from './app/alumnos-formulario/alumnos-formulario.component';
import { SeccionFormularioComponent } from './app/seccion-formulario/seccion-formulario.component';
import { RegistroHistorialComponent } from './app/registro-historial/registro-historial.component';

@NgModule({
  declarations: [
    AppComponent,

    AlumnosFormularioComponent,
    SeccionFormularioComponent,
    RegistroHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
