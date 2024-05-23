import { Component } from '@angular/core';
import { Cliente } from '../cliente';

import { ClienteService } from 'src/app/service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';
import { veterinario } from 'src/app/veterinario/veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-cliente-mostrar-todos',
  templateUrl: './cliente-mostrar-todos.component.html',
  styleUrls: ['./cliente-mostrar-todos.component.css']
})

export class ClienteMostrarTodosComponent {
  listaClientes!: Cliente[];
  clienteAct!: Cliente;
  searchTerm: string = '';

  veterinario!: veterinario;

  toggleText: string = 'Clientes';
  // Constructior es para inyectar dependencias
  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router, private veterinarioService:VeterinarioService) {
    
  }

  // Llamado cuando ya esta cargada la interfaz
  ngOnInit(): void {
    this.veterinarioService.veterinarioHome().subscribe((data) => {
      //this.listaadmin = data;
      //this.admin = this.listaadmin[0];
      this.veterinario = data;
      console.log(this.veterinario);
    });

    this.clienteService.findAll().subscribe((clientes) => this.listaClientes = clientes, (error) => {
    })
  }

  modificarCliente(cliente: Cliente) {
    this.clienteAct=Object.assign({},cliente);
  }
  delete(cliente: Cliente) {
    // Primero eliminamos el cliente
    this.clienteService.delete(cliente.id);
  
    // Actualizamos la lista de clientes
    const index = this.listaClientes.findIndex(m => m.id === cliente.id);
    if (index > -1) {
      this.listaClientes.splice(index, 1);
    }
  
    // Mostramos la alerta después de actualizar la lista
    Swal.fire({
      title: 'CLIENTE ELIMINADO',
      text: 'Se eliminó el cliente de manera exitosa',
      icon: 'success',
      confirmButtonText: '¡Entendido!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Solo redirigimos si el usuario confirma la alerta
        this.router.navigate(['/cliente/all']);
      }
    });
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

  toggleSlide(event: Event) {
    event.stopPropagation(); // Evita que el evento se propague

    // Determinar la URL y el nuevo texto del toggle
    let url: string;
    let newText: string;
    if (this.toggleText === 'Mascotas') {
      url = '/cliente/all';
      newText = 'Clientes';
    } else {
      url = '/mascota/all';
      newText = 'Mascotas';
    }

    // Redirigir a la nueva URL y actualizar el texto del toggle
    this.router.navigateByUrl(url);
    this.toggleText = newText;
  }

  buscarClientes() {
    if (this.searchTerm.trim() !== '') {
      this.listaClientes = this.listaClientes.filter(cliente =>
        cliente.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        cliente.correo.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      // Si el término de búsqueda está vacío, restaura la lista original
      this.clienteService.findAll().subscribe(
        clientes => this.listaClientes = clientes,
        error => console.error(error)
      );
    }
  }
  

}