import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialidadService } from 'src/app/service/especialidad.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { veterinario } from '../veterinario';
import { especialidad } from 'src/app/especialidad/especialidad';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-veterinario',
  templateUrl: './actualizar-veterinario.component.html',
  styleUrls: ['./actualizar-veterinario.component.css']
})
export class ActualizarVeterinarioComponent {


  constructor(private veterinarioService: VeterinarioService, private route: ActivatedRoute, private router: Router, private especialidadService: EspecialidadService) { }

  formVeterinario!:veterinario;

  formEspecialidad!: especialidad

  listaEspecialidades!: especialidad[]

  sendVeterinario!: veterinario


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.veterinarioService.findById(id).subscribe((veterinario: veterinario) => {
        this.formVeterinario = Object.assign({}, veterinario);
        console.log(this.formVeterinario);
      });
      
    });

    
    
  }


  camposLlenos(): boolean {

    return this.formVeterinario.nombre !== '' && 
           this.formVeterinario.foto !== '' && 
           this.formVeterinario.especialidad !== null && 
           this.formVeterinario.usuario !== '' &&
           this.formVeterinario.contrasena !== '' &&
           this.formVeterinario.estado !== '' &&
           this.formVeterinario.especialidad !== null;

  }


  actualizarVeterinario(): void {

    if(!this.validarLink(this.formVeterinario.foto)){
      Swal.fire({
        title: 'Error',
        text: 'Por favor ingrese un enlace  válido',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return; 
    }

    this.sendVeterinario = Object.assign({}, this.formVeterinario);
    this.veterinarioService.actualizarVeterinario(this.sendVeterinario);
    this.mostrarAlerta();


}

  validarLink(link: string): boolean {
    const regex: RegExp = /^(http|https):\/\/[^ "]+$/;
    return regex.test(link);
  }


  mostrarAlerta(){
    Swal.fire({
      title: 'VETERINARIO ACTUALIZADO',
      text: 'veterinario actualizado exitosamente',
      icon: 'success',
      confirmButtonText: '¡Entendido!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/veterinario/all']);
      }
    });
  }
}
