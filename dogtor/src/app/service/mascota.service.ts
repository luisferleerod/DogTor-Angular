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
    {
      id: 4,
      nombre: 'Pouyer',
      raza: 'Chihuahua',
      edad: 1,
      peso: 8,
      enfermedad: 'Ninguna',
      estado: 'Disponible',
      cliente: 2
    }
  ];

  findAll(): mascota[] {
    return this.listaMascotas;
  }

  findById(id: number): mascota {
    const mascota_: mascota = this.listaMascotas.find(mascota_ => mascota_.id === id)!;
    return mascota_;
  
  }
}

