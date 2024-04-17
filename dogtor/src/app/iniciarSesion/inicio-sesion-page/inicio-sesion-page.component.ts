import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/cliente/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion-page',
  templateUrl: './inicio-sesion-page.component.html',
  styleUrls: ['./inicio-sesion-page.component.css']
})
export class InicioSesionPageComponent {

  formCliente!: string
  sendCliente!: String
  mensajeError!: string;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }



  iniciarSesion() {
    this.clienteService.iniciarSesion(this.formCliente).subscribe(
      (response) => {
        // Si la respuesta es exitosa, redirige a la página de mostrar cliente
        this.router.navigate(['/cliente/mostrar', response.cedula]);
      },
      (error) => {
        Swal.fire({
          title: 'Error',
          text: 'Credenciales inválidas',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  }
  
}
