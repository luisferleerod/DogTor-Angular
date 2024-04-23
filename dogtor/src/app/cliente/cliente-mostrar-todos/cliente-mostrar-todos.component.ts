import { Component } from '@angular/core';
import { Cliente } from '../cliente';

import { ClienteService } from 'src/app/service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';

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

  delete(cliente: Cliente) {

    this.clienteService.delete(cliente.id) ;
      this.clienteService.findAll().subscribe((clientes) => this.listaClientes = clientes, (error) => {
      })

      const index = this.listaClientes.findIndex(m => m.id === cliente.id);
      this.listaClientes.splice(index, 1);
    
    this.mostrarAlerta();


  }

  mostrarAlerta(){
    Swal.fire({
      title: 'CLIENTE ELIMINDADO',
      text: 'Se eliminó el cliente de manera exitosa',
      icon: 'success',
      confirmButtonText: '¡Entendido!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/cliente/all']);
      }
    });

    

  
  }
}


