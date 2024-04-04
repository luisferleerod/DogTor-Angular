import { Component, EventEmitter, Input, Output } from '@angular/core';
import { mascota } from '../mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-mascota',
  templateUrl: './actualizar-mascota.component.html',
  styleUrls: ['./actualizar-mascota.component.css']
})
export class ActualizarMascotaComponent {
  //@Input() 
  formMascota!: mascota;
  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }
  //constructor(private mascotaService: MascotaService) { }
  //updateMascotaEvent = new EventEmitter<mascota>()
  
  sendMascota!: mascota

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.formMascota = Object.assign({}, this.mascotaService.findById(id));
      
  });
}
  updateMascota() {
    this.sendMascota = Object.assign({}, this.formMascota);
    this.mascotaService.actualizarMascota(this.sendMascota);
    this.router.navigate(['/mascota/all']);
  }
}
