import { Component } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-mostrar-todos',
  templateUrl: './cliente-mostrar-todos.component.html',
  styleUrls: ['./cliente-mostrar-todos.component.css']
})
export class ClienteMostrarTodosComponent {
  listaClientes: Cliente[] = [

    {
      id: 1,
      cedula: '1234567890',
      nombre: 'Juan',
      correo: 'j@j.com',
      celular: '1234567890'
    },
    {
      id: 2,
      cedula: '1234567890',
      nombre: 'Pedro',
      correo: 'p@p.com',
      celular: '1234567890'
    },
    {
      id: 3,
      cedula: '1234567890',
      nombre: 'Luis',
      correo: 'l@l.com',
      celular: '1234567890'
    }, 
    {
      id: 4,
      cedula: '1234567890',
      nombre: 'Maria',
      correo: 'm@m.com',
      celular: '1234567890'
    },
    {
      id: 5,
      cedula: '1234567890',
      nombre: 'Carlos',
      correo: 'c@c.com',
      celular: '1234567890'
    }
  ]
}
