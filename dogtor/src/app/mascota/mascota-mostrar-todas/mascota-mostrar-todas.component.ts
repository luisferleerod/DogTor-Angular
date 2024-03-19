import { Component } from '@angular/core';
import { mascota } from '../mascota';

@Component({
  selector: 'app-mascota-mostrar-todas',
  templateUrl: './mascota-mostrar-todas.component.html',
  styleUrls: ['./mascota-mostrar-todas.component.css']
})
export class MascotaMostrarTodasComponent {
  listaMascotas: mascota[] = [

    {
      id: 1,
      nombre: 'Toby',
      raza: 'Chihuahua',
      edad: 5,
      peso: 10,
      enfermedad: 'Ninguna',
      estado: 'Disponible',
      cliente: 1
    },
    {
      id: 2,
      nombre: 'Dash',
      raza: 'Bulldog',
      edad: 5,
      peso: 5,
      enfermedad: 'Ninguna',
      estado: 'Disponible',
      cliente: 1
    },
    {
      id: 3,
      nombre: 'Pepe',
      raza: 'Golden',
      edad: 2,
      peso: 15,
      enfermedad: 'Ninguna',
      estado: 'Disponible',
      cliente: 1
    },
  ]
}
