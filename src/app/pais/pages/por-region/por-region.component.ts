import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = "";
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  activarRegion(region: string){
    if (this.regionActiva === region) {
      return;
    }
    this.regionActiva = region;
    this.paisService.buscarRegion(region).subscribe(resp => {
      this.paises = resp;
    });
  }

  getRegionActivaCSS(region: string){
    return `btn ${region === this.regionActiva ? 'btn-primary' : 'btn-outline-primary'}`;
  }

}
