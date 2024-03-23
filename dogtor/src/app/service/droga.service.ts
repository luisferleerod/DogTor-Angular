import { Injectable } from '@angular/core';
import { droga } from '../droga/droga';

@Injectable({
  providedIn: 'root'
})
export class DrogaService {

  constructor() { }
  listaDrogas: droga[] = [

    {
      id: 1,
      nombre: 'Amoxicilina',
      precio_compra: 5,
      precio_venta: 10,
      unidades_disponibles: 100,
      unidades_vendidas: 10
    },
    {
      id: 2,
      nombre: 'Keppra',
      precio_compra: 5,
      precio_venta: 10,
      unidades_disponibles: 100,
      unidades_vendidas: 10
    },
    {
      id: 3,
      nombre: 'Paracetamol',
      precio_compra: 5,
      precio_venta: 10,
      unidades_disponibles: 100,
      unidades_vendidas: 10
    },
    {
      id: 4,
      nombre: 'Ibuprofeno',
      precio_compra: 5,
      precio_venta: 10,
      unidades_disponibles: 100,
      unidades_vendidas: 10
    }
  ]
}
