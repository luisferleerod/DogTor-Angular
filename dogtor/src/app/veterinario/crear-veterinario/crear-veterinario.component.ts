import { Component } from '@angular/core';
import { veterinario } from '../veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-veterinario',
  templateUrl: './crear-veterinario.component.html',
  styleUrls: ['./crear-veterinario.component.css']
})
export class CrearVeterinarioComponent {

  listVeterinarios!: veterinario[]

  sendVeterinario!: veterinario;

  constructor(private veterinarioService: VeterinarioService, private route: ActivatedRoute, private router: Router) { }

  formVeterinario: veterinario = {
   
    id: 0,
    usuario: "",
    nombre: "",
    especialidad: "",
    contrasena: "",
    foto: "",
    numAtenciones: 0,
    estado: ""
  };

  camposLlenos(): boolean {

    return this.formVeterinario.nombre !== '' && 
           this.formVeterinario.foto !== '' && 
           this.formVeterinario.especialidad !== '' && 
           this.formVeterinario.usuario !== '' &&
           this.formVeterinario.contrasena !== '';

  }

  
  validarLink(link: string): boolean {
    const regex: RegExp = /^(http|https):\/\/[^ "]+$/;
    return regex.test(link);
  }

  addVeterinarioForm() {
    if (!this.validarLink(this.formVeterinario.foto)) {
      // Mostrar un mensaje de error si el correo electrónico no es válido
      Swal.fire({
        title: 'Error',
        text: 'Por favor ingrese un enlace válido',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return; // Salir del método si el correo electrónico no es válido
    }


    this.sendVeterinario = Object.assign({}, this.formVeterinario);

    this.veterinarioService.findAll().subscribe((veterinario: veterinario[]) => {
      
      this.listVeterinarios = veterinario;

      this.sendVeterinario.id = this.listVeterinarios.length + 1;

      this.veterinarioService.agregarVeterinario(this.sendVeterinario);

      this.mostrarAlerta();
    })
  }


  mostrarAlerta(){
    Swal.fire({
      title: 'VETERINARIO REGISTRADO',
      text: 'veterinario registrado exitosamente',
      icon: 'success',
      confirmButtonText: '¡Entendido!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/cliente/all']);
      }
    });

    
  }


}
