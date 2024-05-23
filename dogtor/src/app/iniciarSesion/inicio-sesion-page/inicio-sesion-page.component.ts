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

  formCliente!: string;
  sendCliente!: string;
  mensajeError!: string;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  formUser: User = {
    username: '',
    password: ''
  };

  existe: boolean = false;

  iniciarSesion() {
    this.clienteService.findById(Number(this.formUser.username)).subscribe(
      (response) => {
        if (response != null) {
          this.existe = true;
          // Solo intenta iniciar sesión si el cliente existe
          this.clienteService.iniciarSesion(this.formUser).subscribe(
            (response) => {
              localStorage.setItem('token', String(response));
              // Si la respuesta es exitosa, redirige a la página de mostrar cliente
              this.router.navigate(['/cliente/mostrar']);
            },
            (error) => {
              this.mostrarAlerta("Credenciales inválidas");
            }
          );
        } else {
          this.mostrarAlerta("Credenciales inválidas");
        }
      },
      (error) => {
        this.mostrarAlerta("Credenciales inválidas");
      }
    );
  }

  mostrarAlerta(mensaje: string) {
    Swal.fire({
      title: 'Error',
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'OK'
    });
    return;
  }

}
