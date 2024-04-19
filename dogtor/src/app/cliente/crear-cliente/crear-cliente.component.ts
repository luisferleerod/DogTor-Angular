import { Component, EventEmitter, Output } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {

  // @Output()
  // addClienteEvent = new EventEmitter<Cliente>();

  listClientes!: Cliente[]

  sendCliente!: Cliente;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) { }

  formCliente: Cliente = {
   
    id: 0,
    cedula: "",
    nombre: "", 
    correo:"",
    celular: 0,
  };

  camposLlenos(): boolean {

    return this.formCliente.nombre !== '' && 
           this.formCliente.cedula !== '' && 
           this.formCliente.correo !== '' && 
           this.formCliente.celular !== 0;
  }

   validarCorreo(correo: string): boolean {
    const regex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
}
  

  addClienteForm() {

  
    if (!this.validarCorreo(this.formCliente.correo)) {
      // Mostrar un mensaje de error si el correo electrónico no es válido
      Swal.fire({
        title: 'Error',
        text: 'Por favor ingrese un correo electrónico válido',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return; // Salir del método si el correo electrónico no es válido
    }

    this.sendCliente = Object.assign({}, this.formCliente);
  
    this.clienteService.findAll().subscribe((mascotas: Cliente[]) => {
      this.listClientes = mascotas;
  
     
      this.sendCliente.id = this.listClientes.length + 1;
  
      // this.addClienteEvent.emit(this.sendCliente);
  
      this.clienteService.agregarCliente(this.sendCliente);

      this.mostrarAlerta();
    });
  }

  mostrarAlerta(){
    Swal.fire({
      title: 'CLIENTE REGISTRADO',
      text: 'Cliente registrado exitosamente',
      icon: 'success',
      confirmButtonText: '¡Entendido!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/cliente/all']);
      }
    });

    
  }

}
