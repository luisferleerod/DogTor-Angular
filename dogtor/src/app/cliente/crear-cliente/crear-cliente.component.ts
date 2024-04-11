import { Component, EventEmitter, Output } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {

  @Output()
  addClienteEvent = new EventEmitter<Cliente>();

  listClientes!: Cliente[]

  sendCliente!: Cliente;

  constructor(private clienteService: ClienteService) { }

  formCliente: Cliente = {
   
    id: 0,
    cedula: "",
    nombre: "", 
    correo:"",
    celular: "",
  };

  addClienteForm() {
    this.sendCliente = Object.assign({}, this.formCliente);
  
    this.clienteService.findAll().subscribe((mascotas: Cliente[]) => {
      this.listClientes = mascotas;
  
      console.log("RECIBIENDO MASCOTA DEL FORMULARIO")
      console.log(this.sendCliente.nombre)
      
      console.log(this.listClientes.length)
      this.sendCliente.id = this.listClientes.length + 1;
  
      this.addClienteEvent.emit(this.sendCliente);
  
      this.clienteService.agregarCliente(this.sendCliente);
    });
  }

}
