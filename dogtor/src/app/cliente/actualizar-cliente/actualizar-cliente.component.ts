import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent {

  formCliente!: Cliente;
  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) { }

  sendCliente!: Cliente
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = String(params.get('id'));
      this.clienteService.findByCedula(id).subscribe((cliente: Cliente) => {
        this.formCliente = Object.assign({}, cliente);
      });
    });
  }

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

  updateCliente() {

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
    this.clienteService.actualizarCliente(this.sendCliente);
    this.mostrarAlerta();
  }

  mostrarAlerta(){
    Swal.fire({
      title: 'CLIENTE ACTUALIZADO',
      text: 'Cliente actualizado exitosamente',
      icon: 'success',
      confirmButtonText: '¡Entendido!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/cliente/all']);
      }
    });

    
  }
}
