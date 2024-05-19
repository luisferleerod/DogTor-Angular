import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { ActualizarClienteComponent } from './cliente/actualizar-cliente/actualizar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { MostrarClienteComponent } from './cliente/mostrar-cliente/mostrar-cliente.component';
import { MostrarMascotaComponent } from './mascota/mostrar-mascota/mostrar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { ActualizarMascotaComponent } from './mascota/actualizar-mascota/actualizar-mascota.component';
import { CrearVeterinarioComponent } from './veterinario/crear-veterinario/crear-veterinario.component';
import { FormsModule } from '@angular/forms';
import { InicioSesionTrabajadorComponent } from './iniciarSesion/inicio-sesion-trabajador/inicio-sesion-trabajador.component';
import { DashboardComponent } from './administrador/dashboard/dashboard.component';
import { VeterinarioMostrarTodosComponent } from './veterinario/veterinario-mostrar-todos/veterinario-mostrar-todos.component';
import { MostrarVeterinarioComponent } from './veterinario/mostrar-veterinario/mostrar-veterinario.component';
import { ActualizarVeterinarioComponent } from './veterinario/actualizar-veterinario/actualizar-veterinario.component';
import { CrearTratamientoComponent } from './tratamiento/crear-tratamiento/crear-tratamiento.component';
import { UserComponent } from './user/user.component';
import { AuthInterceptor } from './helpers/auth.interceptor';



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
    ActualizarClienteComponent,
    CrearClienteComponent,
    MostrarClienteComponent,
    MostrarMascotaComponent,
    CrearMascotaComponent,
    ActualizarMascotaComponent,
    CrearVeterinarioComponent,
    ClienteMostrarTodosComponent,
    ActualizarClienteComponent,
    CrearClienteComponent,
    MostrarClienteComponent,
    InicioSesionTrabajadorComponent,
    DashboardComponent,
    VeterinarioMostrarTodosComponent,
    MostrarVeterinarioComponent,
    ActualizarVeterinarioComponent,
    CrearTratamientoComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
