import { Component, EventEmitter, Output } from '@angular/core';
import { mascota } from '../mascota';
import { MascotaService } from 'src/app/service/mascota.service';

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

  constructor(private mascotaService: MascotaService) { }

  formMascota: mascota = {
   
    id: 0,
    nombre: "", 
    raza: "",
    edad: 0,
    peso: 0 ,
    enfermedad: "",
    estado: "Activo",
    foto: "",
    cliente: 0
  };


  addMascotaForm() {

    this.sendMascota = Object.assign({}, this.formMascota);

    this.listMascotas=this.mascotaService.findAll();
    console.log(this.listMascotas.length)
    this.sendMascota.id=(this.listMascotas.length+1);

    this.addMascotaEvent.emit(this.sendMascota);

    this.mascotaService.agregarMascota(this.sendMascota);

  }


    
}
