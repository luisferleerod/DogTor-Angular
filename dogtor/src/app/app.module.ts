import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteMostrarTodosComponent } from './cliente/cliente-mostrar-todos/cliente-mostrar-todos.component';
import { MascotaComponent } from './mascota/mascota.component';
import { MascotaMostrarTodasComponent } from './mascota/mascota-mostrar-todas/mascota-mostrar-todas.component';
import { DrogaComponent } from './droga/droga.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';
import { TratamientoComponent } from './tratamiento/tratamiento.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ClienteComponent,
    ClienteMostrarTodosComponent,
    MascotaComponent,
    MascotaMostrarTodasComponent,
    DrogaComponent,
    AdministradorComponent,
    EspecialidadComponent,
    VeterinarioComponent,
    TratamientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
