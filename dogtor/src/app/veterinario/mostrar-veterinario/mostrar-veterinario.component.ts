import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { veterinario } from '../veterinario';

@Component({
  selector: 'app-mostrar-veterinario',
  templateUrl: './mostrar-veterinario.component.html',
  styleUrls: ['./mostrar-veterinario.component.css']
})
export class MostrarVeterinarioComponent {
  @Input() veterinario!: veterinario;

  constructor(private veterinarioService: VeterinarioService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.veterinarioService.findById(id).subscribe((veterinario) => {
        this.veterinario = veterinario;
        console.log(veterinario);
        // Ahora que hemos recibido el veterinario correctamente, asignamos num_atenciones
        
      });
    });
  }
}
