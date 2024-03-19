import { Component } from '@angular/core';
import { especialidad } from './especialidad';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent {
  listaEspecialidad: especialidad[] = [
    { id: 1, nombre: 'Cirugía' },
    { id: 2, nombre: 'Oftalmología' },
    { id: 3, nombre: 'Dermatologia' },
    { id: 4, nombre: 'Odontología' },
  ]
}
