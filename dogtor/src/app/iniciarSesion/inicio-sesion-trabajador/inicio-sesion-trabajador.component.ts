import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorService } from 'src/app/service/administrador.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { veterinario } from 'src/app/veterinario/veterinario';
import Swal from 'sweetalert2';
import { administrador } from 'src/app/administrador/administrador';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-inicio-sesion-trabajador',
  templateUrl: './inicio-sesion-trabajador.component.html',
  styleUrls: ['./inicio-sesion-trabajador.component.css']
})
export class InicioSesionTrabajadorComponent {

  usuario!:string
  contrasena!:string
  mensajeError!: string;

  formUser: User = {
    username: '',
    password: ''
  }
  
  constructor(    private veterinarioService: VeterinarioService,
    private administradorService: AdministradorService,
    private route: ActivatedRoute,
    private router: Router,){
    
  }


  iniciarSesion() {
    this.administradorService.iniciarSesion(this.formUser).subscribe(
      (response) => {
        localStorage.setItem('token', String(response));
        // Si la respuesta es exitosa, redirige a la página de mostrar cliente
        this.router.navigate(['/admin/dashboard']);
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


    /*
    this.veterinarioService.iniciarSesion(this.formUser).subscribe(
      (response: veterinario) => {
        
        this.veterinarioService.setVeterinario(response);
        if(this.veterinarioService.getVeterinario().estado == "activo"){
          this.router.navigate(['/mascota/all']);
        }
        else{
          Swal.fire({
            title: 'Error',
            text: 'Usuario desactivado',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
        
        
      },
      (error) => {
        
        // Si ocurre un error o la respuesta no es un Veterinario, intenta iniciar sesión como Administrador
        this.administradorService.iniciarSesion(this.fo).subscribe(
          (response: administrador) => {
            localStorage.setItem('token', String(response));
            // Si la respuesta es un Administrador, navega a una ruta específica para Administradores
            this.router.navigate(['/admin/dashboard']);
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
    );*/
  }
}
