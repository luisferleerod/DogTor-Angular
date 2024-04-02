import { Component, EventEmitter, Input, Output } from '@angular/core';
import { mascota } from '../mascota';

@Component({
  selector: 'app-actualizar-mascota',
  templateUrl: './actualizar-mascota.component.html',
  styleUrls: ['./actualizar-mascota.component.css']
})
export class ActualizarMascotaComponent {

  @Input()
  formMascota!: mascota;

  @Output()
  updateMascotaEvent = new EventEmitter<mascota>();

  sendMascota!: mascota;


  
  updateMascota() {

    this.sendMascota = Object.assign({}, this.formMascota);

   

    this.updateMascotaEvent.emit(this.sendMascota);

  }
}
