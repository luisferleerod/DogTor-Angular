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
import { InicioSesionPageComponent } from './iniciarSesion/inicio-sesion-page/inicio-sesion-page.component';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { ActualizarDuenoComponent } from './dueno/actualizar-dueno/actualizar-dueno.component';
import { CrearDuenoComponent } from './dueno/crear-dueno/crear-dueno.component';
import { MostrarDuenoComponent } from './dueno/mostrar-dueno/mostrar-dueno.component';
import { MostrarMascotaComponent } from './mascota/mostrar-mascota/mostrar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { ActualizarMascotaComponent } from './mascota/actualizar-mascota/actualizar-mascota.component';
import { CrearVeterinarioComponent } from './veterinario/crear-veterinario/crear-veterinario.component';


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
    TratamientoComponent,
    InicioSesionPageComponent,
    ErrorPageComponent,
    ActualizarDuenoComponent,
    CrearDuenoComponent,
    MostrarDuenoComponent,
    MostrarMascotaComponent,
    CrearMascotaComponent,
    ActualizarMascotaComponent,
    CrearVeterinarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
