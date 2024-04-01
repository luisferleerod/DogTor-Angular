import { Injectable } from '@angular/core';
import { especialidad } from '../especialidad/especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor() { }
  listaEspecialidad: especialidad[] = [
    { id: 1, nombre: 'Cirugía' },
    { id: 2, nombre: 'Oftalmología' },
    { id: 3, nombre: 'Dermatologia' },
    { id: 4, nombre: 'Odontología' },
  ]
}
