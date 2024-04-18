import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorService } from 'src/app/service/administrador.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { veterinario } from 'src/app/veterinario/veterinario';
import Swal from 'sweetalert2';
import { administrador } from 'src/app/administrador/administrador';



@Component({
  selector: 'app-inicio-sesion-trabajador',
  templateUrl: './inicio-sesion-trabajador.component.html',
  styleUrls: ['./inicio-sesion-trabajador.component.css']
})
export class InicioSesionTrabajadorComponent {

  usuario!:string
  contrasena!:string
  mensajeError!: string;
  
  constructor(    private veterinarioService: VeterinarioService,
    private administradorService: AdministradorService,
    private route: ActivatedRoute,
    private router: Router,){
    
  }


  iniciarSesion() {
    this.veterinarioService.iniciarSesion(this.usuario, this.contrasena).subscribe(
      (response: veterinario) => {
        this.veterinarioService.setVeterinario(response);
        // Si la respuesta es un Veterinario, navega a una ruta específica para Veterinarios
        this.router.navigate(['/mascota/all']);
      },
      (error) => {
        // Si ocurre un error o la respuesta no es un Veterinario, intenta iniciar sesión como Administrador
        this.administradorService.iniciarSesion(this.usuario, this.contrasena).subscribe(
          (response: administrador) => {
            // Si la respuesta es un Administrador, navega a una ruta específica para Administradores
            this.router.navigate(['/landing', response.id]);
          },
          (error) => {
            // Si ocurre un error o la respuesta no es un Administrador, muestra un mensaje de error
            Swal.fire({
              title: 'Error',
              text: 'Credenciales inválidas',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        );
      }
    );
  }
}
