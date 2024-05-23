import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { veterinario } from '../veterinario';
import { EspecialidadService } from 'src/app/service/especialidad.service';

@Component({
  selector: 'app-veterinario-mostrar-todos',
  templateUrl: './veterinario-mostrar-todos.component.html',
  styleUrls: ['./veterinario-mostrar-todos.component.css']
})
export class VeterinarioMostrarTodosComponent {

  listaVeterinarios!: veterinario[]
  veterinario!: veterinario
  constructor(private veterinarioService: VeterinarioService, private route: ActivatedRoute, private router: Router, private especialidadService: EspecialidadService) { }


  ngOnInit(): void {
    
    
    this.veterinarioService.findAll().subscribe((veterinarios) => this.listaVeterinarios = veterinarios, (error) => {
      
    })
  }

  inactivarVeterinario(veterinario: veterinario) {
    this.veterinarioService.deleteById(veterinario.id);

     const index = this.listaVeterinarios.findIndex(m => m.id === veterinario.id);
     this.listaVeterinarios[index].estado = 'Inactivo';
  }


}
