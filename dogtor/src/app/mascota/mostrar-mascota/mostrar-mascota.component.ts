import { Component, Input } from '@angular/core';
import { mascota } from '../mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tratamiento } from 'src/app/tratamiento/tratamiento';
import { TratamientoService } from 'src/app/service/tratamiento.service';
import { veterinario } from 'src/app/veterinario/veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { DrogaService } from 'src/app/service/droga.service';
import { droga } from 'src/app/droga/droga';

@Component({
  selector: 'app-mostrar-mascota',
  templateUrl: './mostrar-mascota.component.html',
  styleUrls: ['./mostrar-mascota.component.css']
})
export class MostrarMascotaComponent {

  @Input()
  mascota!: mascota;

  tratamientos!: tratamiento[];

  veterinarios!: veterinario[];

  drogas!: droga[];


  constructor(private mascotaService: MascotaService,
    private route: ActivatedRoute, private router: Router,private tratamientoService:TratamientoService, private veterinarioService:VeterinarioService,
  private drogaService: DrogaService) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.mascotaService.findById(id).subscribe((mascota) => this.mascota = mascota);

      
    })

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.tratamientoService.findByMascota(id).subscribe((data) => {
      
        this.tratamientos = data.tratamientos;
        this.drogas = data.drogas;
        this.veterinarios=data.veterinarios;

        for (let i = 0; i < this.tratamientos.length; i++) {
          this.tratamientos[i].droga=this.drogas[i];
          this.tratamientos[i].veterinario=this.veterinarios[i];
      }});
      
    })

    

    
  }
}
