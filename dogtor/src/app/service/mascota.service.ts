import { Injectable } from '@angular/core';
import { mascota } from '../mascota/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor() { }
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
