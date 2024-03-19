import { Component } from '@angular/core';
import { veterinario } from './veterinario';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent {
 listaVeterinario: veterinario[] = [
   { id: 1, usuario: 'veterinario1', nombre: 'veterinario1', especialidad: 'especialidad1', contrasena: 'contrasena1', foto: 'fotoveterinario1', num_atenciones: 1, estado: 'estado1'},
   { id: 2, usuario: 'veterinario2', nombre: 'veterinario2', especialidad: 'especialidad2', contrasena: 'contrasena2', foto: 'fotoveterinario2', num_atenciones: 2, estado: 'estado2'},
   { id: 3, usuario: 'veterinario3', nombre: 'veterinario3', especialidad: 'especialidad3', contrasena: 'contrasena3', foto: 'fotoveterinario3', num_atenciones: 3, estado: 'estado3'},
 ]
}
