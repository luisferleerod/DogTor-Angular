import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ClienteMostrarTodosComponent } from './cliente/cliente-mostrar-todos/cliente-mostrar-todos.component'; 
import { InicioSesionPageComponent } from './iniciarSesion/inicio-sesion-page/inicio-sesion-page.component';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { ActualizarClienteComponent } from './cliente/actualizar-cliente/actualizar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { MascotaMostrarTodasComponent } from './mascota/mascota-mostrar-todas/mascota-mostrar-todas.component';
import { MostrarClienteComponent } from './cliente/mostrar-cliente/mostrar-cliente.component';
import { MostrarMascotaComponent } from './mascota/mostrar-mascota/mostrar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { ActualizarMascotaComponent } from './mascota/actualizar-mascota/actualizar-mascota.component';
import { CrearVeterinarioComponent } from './veterinario/crear-veterinario/crear-veterinario.component';
import { InicioSesionTrabajadorComponent } from './iniciarSesion/inicio-sesion-trabajador/inicio-sesion-trabajador.component';
import { DashboardComponent } from './administrador/dashboard/dashboard.component';
import { VeterinarioMostrarTodosComponent } from './veterinario/veterinario-mostrar-todos/veterinario-mostrar-todos.component';
import { MostrarVeterinarioComponent } from './veterinario/mostrar-veterinario/mostrar-veterinario.component';
const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'cliente/all', component: ClienteMostrarTodosComponent },
  { path: 'mascota/actualizar/:id', component: ActualizarMascotaComponent},
  { path: 'mascota/crear', component: CrearMascotaComponent},
  { path: 'mascota/all', component: MascotaMostrarTodasComponent},
  { path: 'mascota/mostrar/:id', component: MostrarMascotaComponent},
  { path: 'iniciarSesion', component: InicioSesionPageComponent },  
  { path: 'iniciarSesionTrabajador', component: InicioSesionTrabajadorComponent},
  { path: 'cliente/actualizar/:id', component: ActualizarClienteComponent},
  { path: 'cliente/crear', component: CrearClienteComponent},
  { path: 'cliente/mostrar/:id', component: MostrarClienteComponent},
  { path: 'veterinario/crear', component: CrearVeterinarioComponent},
  { path: 'veterinario/mostrar/:id', component: MostrarVeterinarioComponent},
  {path: 'veterinario/all', component: VeterinarioMostrarTodosComponent},
  {path: 'admin/dashboard', component: DashboardComponent},
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  { path: '**', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
