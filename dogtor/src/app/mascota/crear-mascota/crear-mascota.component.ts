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

  formMascota: mascota = {
   
    id: 0,
    nombre: "", 
    raza: "",
    edad: 0,
    peso: 0 ,
    enfermedad: "",
    estado: "",
    foto: "",
    cliente: 0
  };


  addMascotaForm() {
    this.addMascotaEvent.emit(this.formMascota);
    

  }


    
}
