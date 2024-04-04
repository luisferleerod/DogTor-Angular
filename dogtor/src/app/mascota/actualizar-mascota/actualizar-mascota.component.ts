import { Component, EventEmitter, Input, Output } from '@angular/core';
import { mascota } from '../mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-actualizar-mascota',
  templateUrl: './actualizar-mascota.component.html',
  styleUrls: ['./actualizar-mascota.component.css']
})
export class ActualizarMascotaComponent {

  @Input() 
  formMascota!: mascota;
  constructor() {}
  //constructor(private mascotaService: MascotaService) { }
  updateMascotaEvent = new EventEmitter<mascota>()
  sendMascota!: mascota

  ngOnInit() {

    

  }
  updateMascota(mascota: mascota) {
    this.formMascota=mascota;
  }
}
