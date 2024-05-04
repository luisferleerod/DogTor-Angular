import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrogaService } from 'src/app/service/droga.service';
import { MascotaService } from 'src/app/service/mascota.service';
import { TratamientoService } from 'src/app/service/tratamiento.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { tratamiento } from '../tratamiento';
import { mascota } from 'src/app/mascota/mascota';
import { droga } from 'src/app/droga/droga';
import { veterinario } from 'src/app/veterinario/veterinario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-tratamiento',
  templateUrl: './crear-tratamiento.component.html',
  styleUrls: ['./crear-tratamiento.component.css']
})
export class CrearTratamientoComponent {

  formTratamiento!:tratamiento
  mascota!:mascota
  drogas!: droga[]
  drogaSelect!: String

  drogaAux!: droga

  veterinario!: veterinario
  sendTratamiento!:tratamiento
  tratamientos!:tratamiento[]
  fecha!: Date
  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private router: Router,
    private veterinarioService: VeterinarioService,
    private drogaService: DrogaService,
    private tratamientoService:TratamientoService
  ) {
  }


  ngOnInit(): void {
    this.veterinario = this.veterinarioService.getVeterinario();

    this.drogaService.findAll().subscribe((drogas: droga[]) => {
      this.drogas = drogas;
    })

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.mascotaService.findById(id).subscribe((mascota: mascota) => {
        this.mascota = Object.assign({}, mascota);
    })
  })


}


camposLlenos(): boolean {

  return this.formTratamiento.droga!==null &&
   this.formTratamiento.fecha!==null;

}

mostrarAlerta(){
  Swal.fire({
    title: 'TRATAMIENTO CREADO',
    text: 'Tratamiento creado exitosamente',
    icon: 'success',
    confirmButtonText: '¡Entendido!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.router.navigate(['/mascota/all']);
    }
  });

}

addTratamientoForm() {
  console.log("PROBANDO")
  console.log(this.drogaSelect)
  

  for(let i=0; i<this.drogas.length; i++){
    console.log(this.drogas[i])
    if(this.drogas[i].nombre===this.drogaSelect)
      {
        this.drogaAux=Object.assign({}, this.drogas[i])
        console.log(this.drogaAux)
        i=this.drogas.length

      }
  }
  if(this.drogaAux.unidadesDisponibles>0){

  this.sendTratamiento = Object.assign({}, this.formTratamiento);
  this.sendTratamiento.fecha=this.fecha
  this.sendTratamiento.mascota=this.mascota;
  this.sendTratamiento.veterinario=this.veterinario;
  this.sendTratamiento.droga=this.drogaAux;
  console.log(this.sendTratamiento)
    
  this.tratamientoService.findAll().subscribe((tratamientos: tratamiento[]) => {
    this.tratamientos = tratamientos;

    this.sendTratamiento.id=this.tratamientos.length+1;
    
    this.tratamientoService.addTratamiento(this.sendTratamiento);
    
    this.mostrarAlerta();

  })
}else{
  Swal.fire({
    title: 'ERROR',
    text: 'No hay unidades disponibles',
    icon: 'error',
    confirmButtonText: '¡Entendido!'
  })
}
}
}

