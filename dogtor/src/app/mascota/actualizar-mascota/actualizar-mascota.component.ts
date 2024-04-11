import { Component, EventEmitter, Input, Output } from '@angular/core';
import { mascota } from '../mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

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
      this.mascotaService.findById(id).subscribe((mascota: mascota) => {
        this.formMascota = Object.assign({}, mascota);
      });
      
      
  });
}
  updateMascota() {
    this.sendMascota = Object.assign({}, this.formMascota);
    this.mascotaService.actualizarMascota(this.sendMascota);
    console.log("MANDANDO MASCOTA DESDE ACTUALIZAR MASCOTA COMPONENT"+this.sendMascota)
    console.log(this.sendMascota.id)
    console.log(this.sendMascota.nombre)
    console.log(this.sendMascota.enfermedad)
    console.log(this.sendMascota.estado)
    this.mostrarAlerta();
   
  }

  mostrarAlerta(){
    Swal.fire({
      title: 'MASCOTA ACTUALIZADA',
      text: 'Mascota actualizada exitosamente',
      icon: 'success',
      confirmButtonText: '¡Entendido!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/mascota/all']);
      }
    });

  }
}
