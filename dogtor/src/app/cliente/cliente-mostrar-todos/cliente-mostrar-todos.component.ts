import { Component } from '@angular/core';
import { Cliente } from '../cliente';

import { ClienteService } from 'src/app/service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-mostrar-todos',
  templateUrl: './cliente-mostrar-todos.component.html',
  styleUrls: ['./cliente-mostrar-todos.component.css']
})

export class ClienteMostrarTodosComponent {
  listaClientes!: Cliente[];
  clienteAct!: Cliente;

  // Constructior es para inyectar dependencias
  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) {
    
  }

  // Llamado cuando ya esta cargada la interfaz
  ngOnInit(): void {
    this.clienteService.findAll().subscribe((clientes) => this.listaClientes = clientes, (error) => {
    })
  }

  modificarCliente(cliente: Cliente) {
    this.clienteAct=Object.assign({},cliente);
  }

  
}
