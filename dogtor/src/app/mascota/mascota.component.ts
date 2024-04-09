import { Component } from '@angular/core';
import { MascotaService } from '../service/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { merge, mergeMap } from 'rxjs';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent {

  constructor(private mascotaService: MascotaService, private route: ActivatedRoute, private router: Router) {
     
  }

  ngOnInit(): void {
  
  }
}
