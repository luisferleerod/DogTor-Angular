import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ClienteMostrarTodosComponent } from './cliente/cliente-mostrar-todos/cliente-mostrar-todos.component'; 
import { InicioSesionPageComponent } from './iniciarSesion/inicio-sesion-page/inicio-sesion-page.component';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { ActualizarDuenoComponent } from './dueno/actualizar-dueno/actualizar-dueno.component';
import { CrearDuenoComponent } from './dueno/crear-dueno/crear-dueno.component';
import { MascotaMostrarTodasComponent } from './mascota/mascota-mostrar-todas/mascota-mostrar-todas.component';
import { MostrarDuenoComponent } from './dueno/mostrar-dueno/mostrar-dueno.component';
import { MostrarMascotaComponent } from './mascota/mostrar-mascota/mostrar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { ActualizarMascotaComponent } from './mascota/actualizar-mascota/actualizar-mascota.component';
import { CrearVeterinarioComponent } from './veterinario/crear-veterinario/crear-veterinario.component';
const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'dueno/all', component: ClienteMostrarTodosComponent },
  { path: 'mascota/actualizar/:id', component: ActualizarMascotaComponent},
  { path: 'mascota/crear', component: CrearMascotaComponent},
  { path: 'mascota/all', component: MascotaMostrarTodasComponent},
  { path: 'mascota/mostrar/:id', component: MostrarMascotaComponent},
  { path: 'iniciarSesion', component: InicioSesionPageComponent },
  { path: 'dueno/actualizar/:id', component: ActualizarDuenoComponent},
  { path: 'dueno/crear', component: CrearDuenoComponent},
  { path: 'dueno/mostrar/:id', component: MostrarDuenoComponent},
  { path: 'veterinario/crear', component: CrearVeterinarioComponent},
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  { path: '**', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
