import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorService } from 'src/app/service/administrador.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { veterinario } from 'src/app/veterinario/veterinario';
import Swal from 'sweetalert2';
import { administrador } from 'src/app/administrador/administrador';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/service/user.service';

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
  
  veterinario!:veterinario

  rol:number=0
  
  constructor(    private veterinarioService: VeterinarioService,
    private administradorService: AdministradorService,
    private route: ActivatedRoute,
    private router: Router,
  private userService:UserService) {
    
  }



  iniciarSesion() {
    this.userService.encontrarRol(this.formUser.username).subscribe(
      (response) => {
        this.rol = response;
        console.log("RRRRROOOOLLLLL: " + this.rol)
        if (this.rol == 1) {
          this.administradorService.iniciarSesion(this.formUser).subscribe(
            (response) => {
            
              localStorage.setItem('token', String(response));
              // Si la respuesta es exitosa, redirige a la página de mostrar cliente
              this.router.navigate(['/admin/dashboard']);
            },
            (error) => {
              this.mostrarAlerta("Credenciales inválidas");
            });
        }
        else if (this.rol == 2) {
          this.veterinarioService.iniciarSesion(this.formUser).subscribe(
          
            (response) => {
              localStorage.setItem('token', String(response));
              this.veterinarioService.veterinarioHome().subscribe((data) => {
                //this.listaadmin = data;
                //this.admin = this.listaadmin[0];
                this.veterinario = data;
                console.log(this.veterinario);

                if(this.veterinario.estado == "Activo"){
                  this.veterinarioService.setVeterinario(this.veterinario);
                  this.router.navigate(['/mascota/all']);
                }
                else if(this.veterinario.estado == "Inactivo"){
                  this.mostrarAlerta("Usario desactivado");
                }
              });
              // Si la respuesta es exitosa, redirige a la página de mostrar cliente
              
            },(error) => {
              this.mostrarAlerta("Credenciales inválidas");
            });
        } else if (this.rol == 0) {
          this.mostrarAlerta("Credenciales inválidas");
        } else {
          this.mostrarAlerta("Usuario no encontrado");
        }
      }
   )

    /*
    this.administradorService.iniciarSesion(this.formUser).subscribe(
      (response) => {
      
        localStorage.setItem('token', String(response));
        // Si la respuesta es exitosa, redirige a la página de mostrar cliente
        this.router.navigate(['/admin/dashboard']);
      },
      (error) => {
        
        // Si ocurre un error o la respuesta no es un Administrador, muestra un mensaje de error
        this.veterinarioService.iniciarSesion(this.formUser).subscribe(
          
          (response) => {
            localStorage.setItem('token', String(response));
            // Si la respuesta es exitosa, redirige a la página de mostrar cliente
            this.router.navigate(['/mascota/all']);
          },
          (error) => {
            Swal.fire({
              title: 'Error',
              text: 'Credenciales inválidas',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        )
        
      }
    );
  }*/
  }

  mostrarAlerta(mensaje: string) {
    Swal.fire({
      title: 'Error',
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
}
