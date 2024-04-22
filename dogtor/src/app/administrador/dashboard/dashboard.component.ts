import { Component } from '@angular/core';
import { administrador } from '../administrador';
import { AdministradorService } from 'src/app/service/administrador.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  listaadmin!: administrador[]
  admin!: administrador


  constructor(private administradorService: AdministradorService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.administradorService.getAdmin().subscribe((admin) => {
      this.listaadmin = admin;
      this.admin = this.listaadmin[0];
    })
  }
}
