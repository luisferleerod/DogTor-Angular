import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/cliente/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { User } from 'src/app/user/user';
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

  formUser: User = {
    username: '',
    contrasena: ''
  }



  iniciarSesion() {
    this.clienteService.iniciarSesion(this.formUser).subscribe(
      (response) => {
        localStorage.setItem('token', String(response));
        // Si la respuesta es exitosa, redirige a la página de mostrar cliente
        this.router.navigate(['/cliente/home']);
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
