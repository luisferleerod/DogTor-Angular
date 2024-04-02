import { Injectable } from '@angular/core';
import { Cliente } from '../cliente/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  listaClientes: Cliente[] = [
    {
      id: 1,
      cedula: '1234',
      nombre: 'Juan',
      correo: 'j@j.com',
      celular: '1234567890'
    },
    {
      id: 2,
      cedula: '5678',
      nombre: 'Pedro',
      correo: 'p@p.com',
      celular: '1234567890'
    },
    {
      id: 3,
      cedula: '9012',
      nombre: 'Luis',
      correo: 'l@l.com',
      celular: '1234567890'
    }, 
    {
      id: 4,
      cedula: '3456',
      nombre: 'Maria',
      correo: 'm@m.com',
      celular: '1234567890'
    },
    {
      id: 5,
      cedula: '7890',
      nombre: 'Carlos',
      correo: 'c@c.com',
      celular: '1234567890'
    }
  ];

  findAll(): Cliente[] {
    return this.listaClientes;
  }

  findById(id: number): Cliente {
    const cliente: Cliente = this.listaClientes.find(cliente => cliente.id === id)!;
    return cliente;
  
  }
}
