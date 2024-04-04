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
      estado: 'Activo',
      foto: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      cliente: 1
    },
    {
      id: 2,
      nombre: 'Dash',
      raza: 'Bulldog',
      edad: 5,
      peso: 5,
      enfermedad: 'Ninguna',
      estado: 'Activo',
      foto: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      cliente: 1
    },
    {
      id: 3,
      nombre: 'Pepe',
      raza: 'Golden',
      edad: 2,
      peso: 15,
      enfermedad: 'Ninguna',
      estado: 'Activo',
      foto: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      cliente: 1
    },
    {
      id: 4,
      nombre: 'Parau',
      raza: 'Golden',
      edad: 2,
      peso: 15,
      enfermedad: 'Ninguna',
      estado: 'Activo',
      foto: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      cliente: 1
    },
    {
      id: 5,
      nombre: 'Paradais',
      raza: 'Border Collie',
      edad: 6,
      peso: 19,
      enfermedad: 'Poyoditis',
      estado: 'Activo',
      foto: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      cliente: 1
    },
    {
      id: 6,
      nombre: 'Luis',
      raza: 'Rottwiller',
      edad: 1,
      peso: 6,
      enfermedad: 'Cancer',
      estado: 'Inactivo',
      foto: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      cliente: 1
    }
  ];

  findAll(): mascota[] {
    console.log("Buscando  mascotas")
    console.log(this.listaMascotas.length)
    console.log(this.listaMascotas)
    return this.listaMascotas;
  }

  findById(id: number): mascota {
    const mascota_: mascota = this.listaMascotas.find(mascota_ => mascota_.id === id)!;
    return mascota_;
  
  }

  agregarMascota(mascota: mascota) {
    console.log("Agregando mascota en la bd")
    
    this.listaMascotas.push(mascota);
    console.log(this.listaMascotas.length)

  }

  actualizarMascota(mascota: mascota) {

    const index = this.listaMascotas.findIndex(m => m.id === mascota.id);
    this.listaMascotas[index] = Object.assign({}, mascota);
    
  }
}


