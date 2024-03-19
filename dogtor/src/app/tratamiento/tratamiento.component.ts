import { Component } from '@angular/core';
import { tratamiento } from './tratamiento';

@Component({
  selector: 'app-tratamiento',
  templateUrl: './tratamiento.component.html',
  styleUrls: ['./tratamiento.component.css']
})
export class TratamientoComponent {
  listaTratamiento: tratamiento[] = [
    { id: 1, id_droga: 1, id_mascota: 1, id_veterinario: 1, fecha: new Date() },
    { id: 2, id_droga: 2, id_mascota: 2, id_veterinario: 2, fecha: new Date() },
    { id: 3, id_droga: 3, id_mascota: 3, id_veterinario: 3, fecha: new Date() },
  ]
}
