import { Component, EventEmitter, Output } from '@angular/core';
import { mascota } from '../mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent {

  @Output()
  addMascotaEvent = new EventEmitter<mascota>();

  listMascotas!: mascota[]

  sendMascota!: mascota;

  constructor( private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private router: Router,) { }

  formMascota: mascota = {
   
    id: 0,
    nombre: "", 
    raza: "",
    edad: 0,
    peso: 0 ,
    enfermedad: "",
    estado: "Activo",
    foto: "",
  };


  addMascotaForm() {
    this.sendMascota = Object.assign({}, this.formMascota);
  
    this.mascotaService.findAll().subscribe((mascotas: mascota[]) => {
      this.listMascotas = mascotas;
  
      console.log("RECIBIENDO MASCOTA DEL FORMULARIO")
      console.log(this.sendMascota.nombre)
      
      console.log(this.listMascotas.length)
      this.sendMascota.id = this.listMascotas.length + 1;
  
      this.addMascotaEvent.emit(this.sendMascota);
  
      this.mascotaService.agregarMascota(this.sendMascota);

      this.mostrarAlerta();
    });
  }
  
  mostrarAlerta(){
    Swal.fire({
      title: 'MASCOTA REGISTRADA',
      text: 'Mascota registrada exitosamente',
      icon: 'success',
      confirmButtonText: '¡Entendido!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/mascota/all']);
      }
    });

    
  }
}
