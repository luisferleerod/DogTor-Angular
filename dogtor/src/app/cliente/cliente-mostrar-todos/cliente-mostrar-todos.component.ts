import { Component } from '@angular/core';
import { Cliente } from '../cliente';

import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-mostrar-todos',
  templateUrl: './cliente-mostrar-todos.component.html',
  styleUrls: ['./cliente-mostrar-todos.component.css']
})

export class ClienteMostrarTodosComponent {
  listaClientes!: Cliente[];

  // Constructior es para inyectar dependencias
  constructor(private clienteService: ClienteService) {
    
  }

  // Llamado cuando ya esta cargada la interfaz
  ngOnInit(): void {
    this.clienteService.findAll().subscribe((clientes: Cliente[]) => {
      this.listaClientes = clientes;
    });
    
  }
}
